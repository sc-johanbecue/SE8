import React from 'react';
import {
  TextField,
  Text,
  ImageField,
  Image as JssImage,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface News {
  fields: {
    Image: ImageField;
    Title: TextField;
    ShortText: RichTextField;
    Text: RichTextField;
  };
}

interface Fields {
  Heading: TextField;
  NewsList: News[];
  HighlightedNews: News;
}

type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const HeaderDefaultComponent = (props: HeaderProps): JSX.Element => (
  <div className={`component Header ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Header</span>
    </div>
  </div>
);

export const Default = (props: HeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const newsList = props.fields.NewsList || [];
  const highlightedNews = props.fields.HighlightedNews || null;

  if (props.fields) {
    return (
      <>
        <div key={id ? id : undefined} id={id ? id : undefined} className="row current-news">
          <div className="columns small-12">
            <h3>
              <Text field={props.fields.Heading} />
            </h3>
            <hr />
          </div>
          <div className="columns small-12 medium-6">
            <div className="highlighted-item">
              {highlightedNews ? (
                <>
                  <h3>
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsTitelLink"
                      href="https://www.gdanimalhealth.com/News/2025/06/Out-now-Update-magazine-May2025"
                    >
                      <Text field={props.fields.HighlightedNews.fields.Title} />
                    </a>
                  </h3>
                  <div>
                    <div id="phcolumn_0_phcontent_4_thumbnailDiv" className="thumbnail">
                      <JssImage field={props.fields.HighlightedNews.fields.Image} />
                    </div>

                    <RichText field={props.fields.HighlightedNews.fields.ShortText} />
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsDetailLink"
                      className="readMore"
                      href="https://www.gdanimalhealth.com/News/2025/06/Out-now-Update-magazine-May2025"
                    >
                      Read more
                    </a>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="columns small-12 medium-6">
            <ul className="list newsItemList list-table">
              {newsList.map((news, index) => (
                <li id={`ItemLi_${index}`} key={index}>
                  <h4>
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsRepeater_NieuwsDetailLink_0"
                      href="https://www.gdanimalhealth.com/News/2025/05/Royal-GD-and-LeeO-announce-collaboration"
                    >
                      <Text field={news.fields.Title}></Text>
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
  }
  return <HeaderDefaultComponent {...props} />;
};
