/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Context,
  getWidgetData,
  SearchWidgetItem,
  WidgetRequestData,
} from '@sitecore-cloudsdk/search/browser';
import React, { JSX } from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

const context = new Context({ locale: { language: 'en', country: 'us' } });

// Create a widget request with the entity "product" and widget ID "rfkid_7":
const searchWidget = new SearchWidgetItem('product', 'rfkid_7', {
  query: {
    keyphrase: 'shoes',
  },
  content: { attributes: ['name', 'price', 'brand', 'image_url'] },
  limit: 10,
});

// Call the getWidgetData function with the widget request and the context to retrieve the data:

type CopyrightProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

import { useEffect, useState } from 'react';

export const Default = (props: CopyrightProps): JSX.Element => {
  const id = props.rendering.uid + '-searchWidget';
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWidgetData(new WidgetRequestData([searchWidget]), context);
      setApiData(data);
      console.log('Search Widget Data:', data);
    };
    fetchData();
  }, []);

  return (
    <div className={`component ${props.params.styles}`} id={id || undefined}>
      <h1>Search Widget</h1>
      {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </div>
  );
};
