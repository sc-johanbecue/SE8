/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  GetStaticComponentProps,
  TextField,
  Text,
  useComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';
import Image from 'next/image';
import { getAccessToken } from '../../lib/geberit-getAccessToken';
import { useI18n } from 'next-localization';

interface Fields {
  Title: TextField;
}
interface ImageVariant {
  size: string;
  url: string;
  mediaType: string;
}

interface ProductImage {
  id: string;
  type: string;
  variants: ImageVariant[];
}

interface CADDrawing {
  id: string;
  url: string;
  type: string;
}

interface Article {
  id: string;
  description: string;
  eanCode: string;
  sortOrder: number;
  cadDrawings?: CADDrawing[];
}

interface TechnicalAttribute {
  id: string;
  name: string;
  tableHeader?: string;
  unitOfMeasure?: string;
  values: { value: string }[];
}

interface AccessoryRef {
  id: string;
  href: string;
}

interface ProductData {
  productData: {
    id: string;
    name: string;
    brand: string;
    line: string;
    type: string;
    images: ProductImage[];
    articles: Article[];
    technicalAttributes: TechnicalAttribute[];
    accessories: AccessoryRef[];
  };
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const getStaticProps: GetStaticComponentProps = async (rendering) => {
  const token = await getAccessToken();
  const defaultProductId = 'PRO_170102';
  const defaultLocale = 'en-GB';
  const defaultBrand = 'GEBERIT';
  const defaultMeasurementGroup = 'SECONDARY';
  //const productId = rendering?.params?.ProductId || defaultProductId;
  const locale = rendering?.params?.Locale || defaultLocale;
  const brand = rendering?.params?.Brand || defaultBrand;
  const measurementGroup = rendering?.params?.MeasurementGroup || defaultMeasurementGroup;

  const productId = resolveProductId(rendering) || defaultProductId;

  // const productId =
  //   rendering?.params?.ProductId ||
  //   route?.name || // fallback: use item name if wildcards used
  //   defaultProductId;

  console.log('Fetching product data for ID:', productId);
  console.log('Auth Token:', token);
  console.log('Api Key', process.env.GEBERIT_API_KEY);

  try {
    const res = await fetch(
      `https://api.stg.mbp.geberit.com/product-data/v3/products/${productId}?locale=${locale}&brand=${brand}&measurementGroup=${measurementGroup}`,
      {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.GEBERIT_API_KEY!,
          Authorization: `Bearer ${token}`,
          'User-Agent': 'PostmanRuntime/7.37.3',
          Accept: '*/*',
          Connection: 'keep-alive',
        },
      }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.statusText}`);
    }

    console.log('Response status:', res.status);
    const productData: ProductData = await res.json();
    console.log('Fetched product data:', productData);
    return { productData: productData };
  } catch (error) {
    console.error('Failed to fetch product data:', error);
    return { productData: null };
  }
};

export interface ProductRenderingParams {
  ProductId?: string;
}

export const resolveProductId = (rendering: {
  route?: { name?: string };
  params?: ProductRenderingParams;
}): string => {
  const defaultProductId = 'PRO_170102';
  const routeName = rendering.route?.name;
  let cleanProductId = (routeName ?? '').split(/[#]/)[0];
  cleanProductId = (cleanProductId ?? '').split(/[?]/)[0];

  return rendering.params?.ProductId || cleanProductId.toUpperCase() || defaultProductId;
};

export const Default = (props: FooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const staticProps = useComponentProps<ProductData>(props.rendering.uid);
  const { t } = useI18n();

  const images = staticProps?.productData.images || [];
  const articles = [...(staticProps?.productData.articles || [])].sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
  const techAttributes = staticProps?.productData.technicalAttributes || [];
  const accessories = staticProps?.productData.accessories || [];

  console.log('Product Data:', staticProps);

  const groupedImages = images.reduce((acc: any, img: any) => {
    acc[img.type] = acc[img.type] || [];
    acc[img.type].push(img);
    return acc;
  }, {});

  return (
    <div
      className={`component product-component ${props.params.styles}`}
      key={id ? id : undefined}
      id={id ? id : undefined}
    >
      <h2>
        <Text field={props.fields.Title} />
      </h2>

      <h3>{staticProps?.productData.name}</h3>
      <p>
        <strong>{t('Brand') || 'Brand'}:</strong> {staticProps?.productData.brand}
        <br />
        <strong>{t('Line') || 'Line'}</strong> {staticProps?.productData.line}
        <br />
        <strong>{t('Type') || 'Type'}:</strong> {staticProps?.productData.type}
      </p>

      <div className="row" style={{ display: 'flex' }}>
        {Object.entries(groupedImages).map(([type, imgs]: [string, any[]]) => (
          <div key={type} style={{ marginBottom: '1rem' }} className="col-sm-12 col-md-6 col-lg-4">
            <h4 style={{ width: '100%', textAlign: 'center' }}>{type}</h4>
            <div style={{ width: '100%', textAlign: 'center', gap: '1rem' }}>
              {imgs.map((img) => {
                const variant = img.variants.find((v: any) => v.size === 'M');
                return variant ? (
                  <Image
                    key={img.id}
                    src={variant.url}
                    alt={img.type}
                    width={200}
                    height={150}
                    style={{ objectFit: 'contain', backgroundColor: '#f9f9f9' }}
                  />
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>

      {props.params.ShowArticles
        ? articles.length > 0 && (
            <div>
              <h4>{t('Articles')}</h4>
              <ul>
                {articles.map((article) => (
                  <li key={article.id}>
                    <strong>{article.id}</strong>: {article.description} (EAN: {article.eanCode})
                    {Array.isArray(article.cadDrawings) && article.cadDrawings.length > 0 && (
                      <ul>
                        {article.cadDrawings?.map((cad: any) => (
                          <li key={cad.id}>
                            <a href={cad.url} target="_blank" rel="noopener noreferrer">
                              {cad.type}: {cad.id}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )
        : null}

      {props.params.ShowTechnicalAttributes
        ? techAttributes.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h4>{t('Technical Attributes') || 'Technical Attributes'}</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ccc' }}>{t('Name') || 'Name'}</th>
                    <th style={{ borderBottom: '1px solid #ccc' }}>{t('Value') || 'Value'}</th>
                  </tr>
                </thead>
                <tbody>
                  {techAttributes.map((attr: any) => (
                    <tr key={attr.id}>
                      <td style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                        {attr.name}
                      </td>
                      <td style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                        {attr.values.map((v: any) => v.value).join(', ')}
                        {attr.unitOfMeasure ? ` ${attr.unitOfMeasure}` : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        : null}

      {props.params.ShowTechnicalAttributes
        ? accessories.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h4>{t('Accessories') || 'Accessories'}</h4>
              <ul>
                {accessories.map((a: any) => (
                  <li key={a.id}>
                    <a href={a.href} target="_blank" rel="noopener noreferrer">
                      {a.id}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        : null}
    </div>
  );

  return <FooterDefaultComponent {...props} />;
};
