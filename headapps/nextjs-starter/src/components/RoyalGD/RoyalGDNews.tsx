import React from 'react';

interface News {
  fields: {
    Image: {
      value: {
        src: string;
        alt?: string;
      };
    };
    Title: {
      value: string;
    };
    ShortText: {
      value: string; // usually HTML
    };
    Text: {
      value: string;
    };
  };
}

interface Fields {
  Heading: {
    value: string;
  };
  NewsList: News[];
  HighlightedNews: News;
}

type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const newsList = props.fields.NewsList || [];
  const highlightedNews = props.fields.HighlightedNews || null;

  return (
    <>
      <div key={id} id={id} className="row current-news">
        <div className="columns small-12">
          <h3>{props.fields.Heading?.value}</h3>
          <hr />
        </div>

        {/* Highlighted news */}
        <div className="columns small-12 medium-6">
          <div className="highlighted-item">
            {highlightedNews && (
              <>
                <h3>
                  <a
                    id="phcolumn_0_phcontent_4_NieuwsTitelLink"
                    href="https://www.gdanimalhealth.com/News/2025/06/Out-now-Update-magazine-May2025"
                  >
                    {highlightedNews.fields.Title?.value}
                  </a>
                </h3>
                <div>
                  <div id="phcolumn_0_phcontent_4_thumbnailDiv" className="thumbnail">
                    <img
                      src={highlightedNews.fields.Image?.value?.src}
                      alt={highlightedNews.fields.Image?.value?.alt || ''}
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: highlightedNews.fields.ShortText?.value || '',
                    }}
                  />
                  <a
                    id="phcolumn_0_phcontent_4_NieuwsDetailLink"
                    className="readMore"
                    href="https://www.gdanimalhealth.com/News/2025/06/Out-now-Update-magazine-May2025"
                  >
                    Read more
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        {/* News list */}
        <div className="columns small-12 medium-6">
          <ul className="list newsItemList list-table">
            {newsList.map((news, index) => (
              <li id={`ItemLi_${index}`} key={index}>
                <h4>
                  <a
                    id={`phcolumn_0_phcontent_4_NieuwsRepeater_NieuwsDetailLink_${index}`}
                    href="https://www.gdanimalhealth.com/News/2025/05/Royal-GD-and-LeeO-announce-collaboration"
                  >
                    {news.fields.Title?.value}
                  </a>
                </h4>
                <span className="categorie" style={{ fontWeight: 'bold' }}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="columns small-12 text-right">
          <p>
            <a
              id="phcolumn_0_phcontent_5_Link"
              className="button button-link large"
              href="https://www.gdanimalhealth.com/News"
            >
              All news
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
