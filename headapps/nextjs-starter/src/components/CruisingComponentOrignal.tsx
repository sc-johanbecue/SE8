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
  ship: string;
  operator: string;
  startsOn: string;
  officialLink: string;
}

interface ApiCruiseItem {
  name: string;
  ship: string;
  operator: string;
  region: string[];
  starts_on: string;
  price: string;
  official_link: string;
}

interface CruisingComponentOriginalProps extends ComponentProps {
  fields: {
    title: TextField;
    description: RichTextField;
    cruisesUrl: TextField;
  };
}

const CruisingComponentOriginal = (props: CruisingComponentOriginalProps): JSX.Element => {
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

  // New search filters
  const [regionFilter, setRegionFilter] = useState<string>('');
  const [shipFilter, setShipFilter] = useState<string>('');
  const [operatorFilter, setOperatorFilter] = useState<string>('');
  const [startsAfterFilter, setStartsAfterFilter] = useState<string>('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const fetchCruises = async () => {
      try {
        // Get the external URL from Sitecore fields
        const externalUrl = fields.cruisesUrl.value?.toString() || '';
        console.log('External URL from Sitecore:', externalUrl);
        if (!externalUrl) {
          console.error('Cruises URL is empty or undefined');
          throw new Error('Cruises URL is not defined');
        }

        // Use local API route to avoid CORS issues
        const baseUrl = '/api/cruises';
        console.log('Base URL:', baseUrl);

        // Build URL with search parameters
        const url = new URL(baseUrl, window.location.origin);
        url.searchParams.set('url', externalUrl); // Pass the external URL as parameter
        if (regionFilter) url.searchParams.set('region', regionFilter);
        if (shipFilter) url.searchParams.set('ship', shipFilter);
        if (operatorFilter) url.searchParams.set('operator', operatorFilter);
        if (startsAfterFilter) url.searchParams.set('starts_after', startsAfterFilter);

        console.log('Attempting to fetch from URL:', url.toString());

        try {
          console.log('Attempting remote fetch...');
          const response = await fetch(url.toString(), {
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
          const localData = [
            {
              name: 'The Islands of Cape Verde Cruise',
              ship: 'Harmony V',
              operator: 'Variety Cruises',
              region: ['Africa'],
              starts_on: '2026-03-11T14:00:00.000Z',
              price: '2352.30',
              official_link: 'https://www.seafarercruises.com/cruises/mega-yacht/capeverde/',
            },
            {
              name: 'Antiquity to Byzantium Cruise',
              ship: 'Galileo',
              operator: 'Variety Cruises',
              region: ['Mediterranean'],
              starts_on: '2026-03-20T15:00:00.000Z',
              price: '2190.00',
              official_link: 'https://www.seafarercruises.co.uk/cruises/mega-yacht/byzantium/',
            },
            {
              name: 'City Explorer: Budapest, Bratislava and Vienna 2026',
              ship: 'Spirit of the Danube',
              operator: 'Saga Cruises',
              region: ['Danube'],
              starts_on: '2026-03-16T00:00:00.000Z',
              price: '0.00',
              official_link: '',
            },
          ];
          validateAndSetCruises(localData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching cruises');
      } finally {
        setIsLoading(false);
      }
    };

    const validateAndSetCruises = (data: unknown) => {
      // Validate that data is an array
      if (!Array.isArray(data)) {
        console.error('Invalid data structure:', data);
        throw new Error('Invalid data format: expected an array of cruises');
      }

      // Transform API data to our component's format
      const transformedCruises: CruiseItem[] = data.map((cruise: ApiCruiseItem, index: number) => {
        console.log('Processing cruise:', cruise.name);
        console.log('Regions:', cruise.region);
        // Determine category based on region
        const category = cruise.region && cruise.region.length > 0 ? cruise.region[0] : 'Other';
        // Format start date
        const startDate = new Date(cruise.starts_on);
        const formattedDate = startDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return {
          id: `${cruise.ship}-${index}`, // Generate unique ID
          name: cruise.name,
          description: `${cruise.ship} operated by ${cruise.operator}`,
          category: category,
          price: parseFloat(cruise.price) || 0,
          duration: '7 days', // Default duration since not provided in API
          destination: cruise.region.join(', '),
          imageUrl: `https://placehold.co/600x400?text=${encodeURIComponent(cruise.ship)}`,
          ship: cruise.ship,
          operator: cruise.operator,
          startsOn: formattedDate,
          officialLink: cruise.official_link,
        };
      });

      // Deduplicate by name and ship
      const uniqueCruises = transformedCruises.filter(
        (cruise, index, self) =>
          index === self.findIndex((c) => c.name === cruise.name && c.ship === cruise.ship)
      );

      console.log('All transformed cruises:', uniqueCruises);
      console.log('Categories found:', [...new Set(uniqueCruises.map((c) => c.category))]);

      if (uniqueCruises.length === 0) {
        console.error('No cruises found in data');
        throw new Error('No cruise data found');
      }

      console.log('Transformed cruises count:', uniqueCruises.length);
      setCruises(uniqueCruises);
    };

    fetchCruises();
  }, [fields.cruisesUrl.value, regionFilter, shipFilter, operatorFilter, startsAfterFilter]);

  // Get unique categories from cruises
  const categories = useMemo(() => {
    const uniqueCategories = new Set(cruises.map((cruise) => cruise.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, [cruises]);

  // Get unique regions for filter dropdown
  const regions = useMemo(() => {
    const uniqueRegions = new Set<string>();
    cruises.forEach((cruise) => {
      if (cruise.destination) {
        cruise.destination.split(', ').forEach((region) => uniqueRegions.add(region));
      }
    });
    return Array.from(uniqueRegions).sort();
  }, [cruises]);

  // Get unique ships for filter dropdown
  const ships = useMemo(() => {
    const uniqueShips = new Set(cruises.map((cruise) => cruise.ship));
    return Array.from(uniqueShips).sort();
  }, [cruises]);

  // Get unique operators for filter dropdown
  const operators = useMemo(() => {
    const uniqueOperators = new Set(cruises.map((cruise) => cruise.operator));
    return Array.from(uniqueOperators).sort();
  }, [cruises]);

  // Filter cruises based on search term and category
  const filteredCruises = useMemo(() => {
    return cruises.filter((cruise) => {
      const matchesSearch =
        cruise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.ship.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.operator.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || cruise.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [cruises, searchTerm, selectedCategory]);

  // Pagination calculations
  const totalCount = filteredCruises.length;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCruises = filteredCruises.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, regionFilter, shipFilter, operatorFilter, startsAfterFilter]);

  // Get selected cruise details
  const selectedCruise = useMemo(() => {
    if (!selectedCruiseId) return null;
    return cruises.find((cruise) => cruise.id === selectedCruiseId);
  }, [cruises, selectedCruiseId]);

  const handleSearch = () => {
    // Trigger a new fetch with the current filters
    setIsLoading(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

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
        <div className="search-row">
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
        <div className="advanced-filters">
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Regions</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          <select
            value={shipFilter}
            onChange={(e) => setShipFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Ships</option>
            {ships.map((ship) => (
              <option key={ship} value={ship}>
                {ship}
              </option>
            ))}
          </select>
          <select
            value={operatorFilter}
            onChange={(e) => setOperatorFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Operators</option>
            {operators.map((operator) => (
              <option key={operator} value={operator}>
                {operator}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={startsAfterFilter}
            onChange={(e) => setStartsAfterFilter(e.target.value)}
            className="date-input"
            placeholder="Starts after"
          />
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>
      </div>

      {selectedCruise ? (
        <div className="cruise-detail">
          <button onClick={() => setSelectedCruiseId(null)} className="back-button">
            ← Back to List
          </button>
          <div className="cruise-detail-content styled-card">
            {/* Promo Banner and Image Grid */}
            <div className="promo-image-grid">
              <div className="main-image">
                <img src={selectedCruise.imageUrl} alt={selectedCruise.name} />
              </div>
              <div className="side-images">
                <img src={selectedCruise.imageUrl} alt="Side 1" />
                <img src={selectedCruise.imageUrl} alt="Side 2" />
              </div>
              <div className="promo-banner">
                <div>EXCLUSIVE PROMOTION</div>
                <div className="promo-price">55 NIGHTS FROM AN INCREDIBLE</div>
                <div className="promo-price-large">£{selectedCruise.price}pp</div>
                <div>SAVE UP TO 41% PER COUPLE!</div>
                <div className="promo-date">OFFER EXTENDED ENDS - 25.06.2025</div>
              </div>
            </div>
            {/* Highlight Bar */}
            <div className="highlight-bar">SAVE UP TO 41% PER COUPLE</div>
            {/* Title */}
            <h3 className="cruise-title">{selectedCruise.name}</h3>
            {/* Details Row */}
            <div className="cruise-details-row">
              <span>🛳️ {selectedCruise.ship}</span>
              <span>📅 {selectedCruise.startsOn}</span>
              <span>🚢 {selectedCruise.operator}</span>
            </div>
            {/* Price and CTA */}
            <div className="cruise-price-row">
              <div>
                <span className="from-label">from</span>
                <span className="price-large">£{selectedCruise.price}</span>
                <span className="pp-label">pp</span>
              </div>
              {selectedCruise.officialLink ? (
                <a
                  href={selectedCruise.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="discover-btn"
                >
                  Discover more
                </a>
              ) : (
                <button className="discover-btn">Discover more</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="results-header">
            <div className="results-count">
              Showing {startIndex + 1}-{Math.min(endIndex, totalCount)} of {totalCount} cruises
            </div>
            <div className="items-per-page">
              <label htmlFor="itemsPerPage">Items per page:</label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                className="items-per-page-select"
              >
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
                <option value={18}>18</option>
              </select>
            </div>
          </div>

          <div className="cruise-grid">
            {paginatedCruises.map((cruise) => (
              <div
                key={cruise.id}
                className="cruise-card"
                onClick={() => setSelectedCruiseId(cruise.id)}
              >
                <img src={cruise.imageUrl} alt={cruise.name} />
                <h3>{cruise.name}</h3>
                <p className="cruise-ship">{cruise.ship}</p>
                <p className="cruise-operator">{cruise.operator}</p>
                <p className="cruise-destination">{cruise.destination}</p>
                <p className="cruise-date">{cruise.startsOn}</p>
                <p className="cruise-price">From £{cruise.price}</p>
                <span className="cruise-category">{cruise.category}</span>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              <div className="page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          )}
        </>
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
          margin-bottom: 2rem;
        }

        .search-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .advanced-filters {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .search-input,
        .category-select,
        .filter-select,
        .date-input {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }

        .search-input {
          flex: 1;
        }

        .search-btn {
          background: #0066cc;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-size: 1rem;
        }

        .search-btn:hover {
          background: #0052a3;
        }

        .cruise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
        }

        .cruise-card h3 {
          margin: 1rem 0 0.5rem;
          font-size: 1.1rem;
        }

        .cruise-ship,
        .cruise-operator,
        .cruise-destination,
        .cruise-date {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: #666;
        }

        .cruise-price {
          font-weight: bold;
          color: #b3002d;
          margin: 0.5rem 0;
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

        .styled-card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 0;
          overflow: hidden;
        }
        .promo-image-grid {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          position: relative;
        }
        .main-image img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .side-images {
          display: flex;
          gap: 2px;
        }
        .side-images img {
          width: 50%;
          height: 60px;
          object-fit: cover;
        }
        .promo-banner {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #b3002d;
          color: #fff;
          padding: 8px;
          border-radius: 4px;
          text-align: right;
          font-size: 0.9rem;
        }
        .promo-price-large {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .highlight-bar {
          background: #00897b;
          color: #fff;
          text-align: center;
          padding: 8px 0;
          font-weight: bold;
          font-size: 1rem;
        }
        .cruise-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 1rem 0 0.5rem 0;
        }
        .cruise-details-row {
          display: flex;
          gap: 1rem;
          font-size: 0.95rem;
          color: #333;
          margin-bottom: 1rem;
        }
        .cruise-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eee;
          padding-top: 1rem;
          margin-top: 1rem;
        }
        .price-large {
          font-size: 2rem;
          font-weight: bold;
          color: #b3002d;
          margin: 0 0.25rem;
        }
        .from-label,
        .pp-label {
          font-size: 1rem;
          color: #333;
        }
        .discover-btn {
          background: #111;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }
        .discover-btn:hover {
          background: #333;
        }
        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .results-count {
          font-size: 0.9rem;
          color: #666;
        }
        .items-per-page {
          display: flex;
          align-items: center;
        }
        .items-per-page label {
          margin-right: 0.5rem;
        }
        .items-per-page select {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }
        .pagination-btn {
          background: none;
          border: none;
          color: #0066cc;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        .pagination-btn:hover {
          background: #0052a3;
        }
        .page-numbers {
          display: flex;
          gap: 0.5rem;
        }
        .page-btn {
          background: none;
          border: none;
          color: #0066cc;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        .page-btn.active {
          background: #0066cc;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default CruisingComponentOriginal;
