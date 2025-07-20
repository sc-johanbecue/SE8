import React from 'react';
import { Link as JssLink, Text, LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

type ResultsFieldLink = {
  field: {
    link: LinkField;
  };
};

interface Fields {
  data: {
    datasource: {
      children: {
        results: ResultsFieldLink[];
      };
      field: {
        title: TextField;
      };
    };
  };
}

type CTALinkListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type CTALinkListItemProps = {
  key: string;
  index: number;
  total: number;
  field: LinkField;
};

const CTALinkListItem = (props: CTALinkListItemProps) => {
  let className = `item${props.index}`;
  className += (props.index + 1) % 2 == 0 ? ' even' : ' odd';
  if (props.index == 0) {
    className += ' first';
  }
  if (props.index + 1 == props.total) {
    className += ' last';
  }
  return (
    <li className={className}>
      <div className="field-link">
        <JssLink field={props.field} />
      </div>
    </li>
  );
};

export const Default = (props: CTALinkListProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    const list = datasource.children.results
      .filter((element: ResultsFieldLink) => element?.field?.link)
      .map((element: ResultsFieldLink, key: number) => (
        <CTALinkListItem
          index={key}
          key={`${key}${element.field.link}`}
          total={datasource.children.results.length}
          field={element.field.link}
        />
      ));

    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          <Text tag="h3" field={datasource?.field?.title} />
          <ul className="listCta">{list}</ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles} id={id ? id : undefined}>
      <div className="component-content">
        <h3>Link List</h3>
      </div>
    </div>
  );
};
/* 
<ul class="listCta">
  <li class="listCta__item listCta__item--bgGrey">
    <a href="/en/client-services/energy-and-infrastructure" class="listCta__link">
      {' '}
      <span class="icon-globe listCta__img"></span>
      <span class="listCta__subtitle listCta__subtitle--topBottom listCta__subtitle--font20">
        Find out about our Energy &amp; Infrastructure practice
      </span>
      <span class="icon-link-arrow-right listCta__linkArrow"></span>
    </a>{' '}
  </li>
</ul>; */
