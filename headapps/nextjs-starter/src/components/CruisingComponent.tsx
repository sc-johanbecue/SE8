import { useState, useMemo, useEffect } from 'react';
import { RichText, RichTextField, Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

interface CruiseItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  destination: string;
  imageUrl: string;
}

interface ApiCruiseItem {
  vendor_id: string;
  name: string;
  description: string;
  cruise_type: string[];
  cruise_only_price: string;
  cruise_nights: number;
  starts_at: string;
  ends_at: string;
  ship_title: string;
  operator_title: string;
  official_link: string;
}

interface ApiResponse {
  cruises: ApiCruiseItem[];
}

interface CruisingComponentProps extends ComponentProps {
  fields: {
    title: TextField;
    description: RichTextField;
    cruisesUrl: TextField;
  };
}

const CruisingComponent = (props: CruisingComponentProps): JSX.Element => {
  const { fields } = props;
  console.log('Component Props:', props);
  console.log('Fields:', fields);
  console.log('Cruises URL:', fields.cruisesUrl?.value);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCruiseId, setSelectedCruiseId] = useState<string | null>(null);
  const [cruises, setCruises] = useState<CruiseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCruises = async () => {
      try {
        const url = fields.cruisesUrl.value?.toString() || '';
        console.log('Attempting to fetch from URL:', url);
        if (!url) {
          console.error('Cruises URL is empty or undefined');
          throw new Error('Cruises URL is not defined');
        }

        // For development, try local data if remote fetch fails
        try {
          console.log('Attempting remote fetch...');
          const response = await fetch(url, {
            credentials: 'include', // This will include cookies in the request
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
          console.log('Fetch response status:', response.status);
          if (!response.ok) {
            console.error('Fetch failed with status:', response.status);
            throw new Error(
              `Failed to fetch cruises data: ${response.status} ${response.statusText}`
            );
          }
          const data = await response.json();
          console.log('Raw fetched data:', JSON.stringify(data, null, 2));
          console.log('Data type:', typeof data);
          console.log('Is array?', Array.isArray(data));
          if (Array.isArray(data)) {
            console.log('First item structure:', Object.keys(data[0]));
          }
          validateAndSetCruises(data);
        } catch (fetchError) {
          console.warn('Remote fetch failed, using local data for development:', fetchError);
          // Fallback to local data in development
          const localData = {
            cruises: [
              {
                vendor_id: 'CARIB1',
                name: 'Caribbean Paradise',
                description: '7-day cruise through the Caribbean islands',
                cruise_type: ['Ocean', 'Caribbean'],
                cruise_only_price: '999.00',
                cruise_nights: 7,
                starts_at: 'Miami',
                ends_at: 'Caribbean Islands',
                ship_title: 'Caribbean Explorer',
                operator_title: 'Caribbean Cruises',
                official_link: 'https://example.com/caribbean-cruise',
              },
              {
                vendor_id: 'MED1',
                name: 'Mediterranean Explorer',
                description: '10-day cruise through the Mediterranean',
                cruise_type: ['Ocean', 'Mediterranean'],
                cruise_only_price: '1499.00',
                cruise_nights: 10,
                starts_at: 'Barcelona',
                ends_at: 'Mediterranean Sea',
                ship_title: 'Mediterranean Star',
                operator_title: 'Mediterranean Cruises',
                official_link: 'https://example.com/mediterranean-cruise',
              },
            ],
          };
          validateAndSetCruises(localData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching cruises');
      } finally {
        setIsLoading(false);
      }
    };

    const validateAndSetCruises = (data: unknown) => {
      // Validate that data has the expected structure
      if (typeof data !== 'object' || data === null || !('cruises' in data)) {
        console.error('Invalid data structure:', data);
        throw new Error('Invalid data format: expected an object with cruises array');
      }
      const apiData = data as ApiResponse;
      // Transform API data to our component's format
      const transformedCruises: CruiseItem[] = apiData.cruises.map((cruise) => ({
        id: cruise.vendor_id,
        name: cruise.name,
        description: cruise.description,
        category: cruise.cruise_type[0] || 'Ocean', // Use first cruise type or default to Ocean
        price: parseFloat(cruise.cruise_only_price) || 0,
        duration: `${cruise.cruise_nights} days`,
        destination: `${cruise.starts_at} to ${cruise.ends_at}`,
        imageUrl: `https://placehold.co/600x400?text=${encodeURIComponent(cruise.ship_title)}`, // Placeholder image with ship name
      }));

      if (transformedCruises.length === 0) {
        console.error('No cruises found in data');
        throw new Error('No cruise data found');
      }

      console.log('Transformed cruises count:', transformedCruises.length);
      setCruises(transformedCruises);
    };

    fetchCruises();
  }, [fields.cruisesUrl.value]);

  // Get unique categories from cruises
  const categories = useMemo(() => {
    const uniqueCategories = new Set(cruises.map((cruise) => cruise.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, [cruises]);

  // Filter cruises based on search term and category
  const filteredCruises = useMemo(() => {
    return cruises.filter((cruise) => {
      const matchesSearch =
        cruise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.destination.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || cruise.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [cruises, searchTerm, selectedCategory]);

  // Get selected cruise details
  const selectedCruise = useMemo(() => {
    if (!selectedCruiseId) return null;
    return cruises.find((cruise) => cruise.id === selectedCruiseId);
  }, [cruises, selectedCruiseId]);

  if (isLoading) {
    return <div className="cruising-component">Loading cruises...</div>;
  }

  if (error) {
    return <div className="cruising-component">Error: {error}</div>;
  }

  return (
    <div className="cruising-component">
      <div className="cruising-header">
        <h2>
          <Text field={fields.title} />
        </h2>
        <RichText field={fields.description} />
      </div>

      <div className="cruising-filters">
        <input
          type="text"
          placeholder="Search cruises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {selectedCruise ? (
        <div className="cruise-detail">
          <button onClick={() => setSelectedCruiseId(null)} className="back-button">
            ← Back to List
          </button>
          <div className="cruise-detail-content">
            <img src={selectedCruise.imageUrl} alt={selectedCruise.name} />
            <h3>{selectedCruise.name}</h3>
            <p>{selectedCruise.description}</p>
            <div className="cruise-info">
              <p>
                <strong>Destination:</strong> {selectedCruise.destination}
              </p>
              <p>
                <strong>Duration:</strong> {selectedCruise.duration}
              </p>
              <p>
                <strong>Price:</strong> ${selectedCruise.price}
              </p>
              <p>
                <strong>Category:</strong> {selectedCruise.category}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="cruise-grid">
          {filteredCruises.map((cruise) => (
            <div
              key={cruise.id}
              className="cruise-card"
              onClick={() => setSelectedCruiseId(cruise.id)}
            >
              <img src={cruise.imageUrl} alt={cruise.name} />
              <h3>{cruise.name}</h3>
              <p className="cruise-destination">{cruise.destination}</p>
              <p className="cruise-duration">{cruise.duration}</p>
              <p className="cruise-price">From ${cruise.price}</p>
              <span className="cruise-category">{cruise.category}</span>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .cruising-component {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cruising-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .cruising-filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-input,
        .category-select {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }

        .search-input {
          flex: 1;
        }

        .cruise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
        }

        .cruise-card {
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .cruise-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .cruise-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 4px;
        }

        .cruise-card h3 {
          margin: 1rem 0 0.5rem;
        }

        .cruise-detail {
          max-width: 800px;
          margin: 0 auto;
        }

        .back-button {
          background: none;
          border: none;
          color: #0066cc;
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 1rem;
          padding: 0;
        }

        .cruise-detail-content {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .cruise-detail-content img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .cruise-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .cruise-category {
          display: inline-block;
          background: #f0f0f0;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default CruisingComponent;
