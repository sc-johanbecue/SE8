import React, { JSX, useState } from 'react';
import {
  Link,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Id: string;
  DisplayName: string;
  Title: TextField;
  NavigationTitle: TextField;
  Href: string;
  Querystring: string;
  Children: Array<Fields>;
  Styles: string[];
}

type NavigationProps = {
  params?: { [key: string]: string };
  fields: Fields;
  handleClick: (event?: React.MouseEvent<HTMLElement>) => void;
  relativeLevel: number;
};

const getNavigationText = function (props: NavigationProps): JSX.Element | string {
  let text;

  if (props.fields.NavigationTitle) {
    text = <Text field={props.fields.NavigationTitle} />;
  } else if (props.fields.Title) {
    text = <Text field={props.fields.Title} />;
  } else {
    text = props.fields.DisplayName;
  }

  return text;
};

const getLinkField = (props: NavigationProps): LinkField => ({
  value: {
    href: props.fields.Href,
    title: getLinkTitle(props),
    querystring: props.fields.Querystring,
  },
});

export const Default = (props: NavigationProps): JSX.Element => {
  const [isOpenMenu, openMenu] = useState(false);
  const { sitecoreContext } = useSitecoreContext();

  if (!Object.values(props.fields).length) {
    return <>[Navigation]</>;
  }

  const handleToggleMenu = (event?: React.MouseEvent<HTMLElement>, flag?: boolean): void => {
    if (event && sitecoreContext?.pageEditing) {
      event.preventDefault();
    }

    if (flag !== undefined) {
      return openMenu(flag);
    }

    openMenu(!isOpenMenu);
  };

  const list = Object.values(props.fields)
    .filter((element) => element)
    .map((element: Fields, key: number) => (
      <NavigationList
        key={`${key}${element.Id}`}
        fields={element}
        handleClick={(event: React.MouseEvent<HTMLElement>) => handleToggleMenu(event, false)}
        relativeLevel={0}
      />
    ));

  return <ul className="nav__list nav__list--level-0">{list}</ul>;
  // return <ul className="navbar-nav">{list}</ul>;
};

const NavigationList = (props: NavigationProps) => {
  const { sitecoreContext } = useSitecoreContext();

  let children: JSX.Element[] = [];
  if (props.fields.Children && props.fields.Children.length) {
    children = props.fields.Children.map((element: Fields, index: number) => (
      <NavigationList
        key={`${index}${element.Id}`}
        fields={element}
        handleClick={props.handleClick}
        relativeLevel={props.relativeLevel}
      />
    ));
  }

  return (
    <li className="nav__list-item nav__list-item--level-0" key={props.fields.Id}>
      <Link
        className={`nav__link nav__link--level-${props.relativeLevel}`}
        field={getLinkField(props)}
        editable={sitecoreContext.pageEditing}
        onClick={props.handleClick}
      >
        {/* <span className="nav__text-label">{getNavigationText(props)}</span> */}
        {getNavigationText(props)}
      </Link>
      {children.length > 0 ? (
        <>
          <button className="nav__toggler">
            <svg width="12" height="6" className="nav__chevron" aria-hidden="true">
              <use xlinkHref="#icon--chevron"></use>
            </svg>
          </button>
          <ul className="dropdown-menu">{children}</ul>
        </>
      ) : null}
    </li>
  );
};

const getLinkTitle = (props: NavigationProps): string | undefined => {
  let title;
  if (props.fields.NavigationTitle?.value) {
    title = props.fields.NavigationTitle.value.toString();
  } else if (props.fields.Title?.value) {
    title = props.fields.Title.value.toString();
  } else {
    title = props.fields.DisplayName;
  }

  return title;
};
