import React, { useState, JSX } from 'react';
import { Link, LinkField, TextField, useSitecore } from '@sitecore-content-sdk/nextjs';
import { ChevronDown, ChevronRight } from 'lucide-react';

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

const getLinkField = (props: NavigationProps): LinkField => ({
  value: {
    href: props.fields.Href,
    title: getLinkTitle(props),
    querystring: props.fields.Querystring,
  },
});

export const Default = (props: NavigationProps): JSX.Element => {
  const { page } = useSitecore();
  const styles =
    props.params != null
      ? `${props.params.GridParameters ?? ''} ${props.params.Styles ?? ''}`.trimEnd()
      : '';
  const id = props.params != null ? props.params.RenderingIdentifier : null;

  if (!Object.values(props.fields).length) {
    return (
      <div className={`component navigation-mobile ${styles}`} id={id ? id : undefined}>
        <div className="component-content">[Navigation Mobile]</div>
      </div>
    );
  }

  const list = Object.values(props.fields)
    .filter((element) => element)
    .map((element: Fields, key: number) => (
      <NavigationList
        key={`${key}${element.Id}`}
        fields={element}
        handleClick={() => {}}
        relativeLevel={1}
      />
    ));

  return (
    <div className={`component navigation-mobile ${styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <nav className="bg-white">
          <ul className="flex flex-col">{list}</ul>
        </nav>
      </div>
    </div>
  );
};

const NavigationList = (props: NavigationProps) => {
  const { page } = useSitecore();
  const [expanded, setExpanded] = useState(false);
  const classNameList = `${props.fields.Styles.concat('rel-level' + props.relativeLevel).join(
    ' '
  )}`;

  let children: JSX.Element[] = [];
  if (props.fields.Children && props.fields.Children.length) {
    children = props.fields.Children.map((element: Fields, index: number) => (
      <NavigationList
        key={`${index}${element.Id}`}
        fields={element}
        handleClick={props.handleClick}
        relativeLevel={props.relativeLevel + 1}
      />
    ));
  }

  const getNavigationText = (props: NavigationProps): string => {
    if (props.fields.NavigationTitle?.value) {
      return props.fields.NavigationTitle.value.toString();
    } else if (props.fields.Title?.value) {
      return props.fields.Title.value.toString();
    } else {
      return props.fields.DisplayName;
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    if (children.length > 0) {
      e.preventDefault();
      setExpanded(!expanded);
    }
  };

  // Level 1: Top-level items with accordion
  if (props.relativeLevel === 1) {
    return (
      <li className={`${classNameList} border-b border-gray-200`} key={props.fields.Id}>
        <div className="flex items-center justify-between">
          <Link
            className="flex-1 py-4 px-4 font-medium text-gray-900 hover:text-[#E2231A] transition-colors"
            field={getLinkField(props)}
            editable={page.mode.isEditing}
          >
            {getNavigationText(props)}
          </Link>
          {children.length > 0 && (
            <button
              onClick={handleToggle}
              className="p-4 text-gray-500 hover:text-[#E2231A] transition-colors"
              aria-label={expanded ? 'Collapse menu' : 'Expand menu'}
            >
              {expanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
        {children.length > 0 && expanded && <ul className="bg-gray-50 pb-2">{children}</ul>}
      </li>
    );
  }

  // Level 2: Section headers
  if (props.relativeLevel === 2) {
    return (
      <li className={`${classNameList}`} key={props.fields.Id}>
        <div className="px-4 pt-4 pb-2">
          <Link
            className="block text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[#E2231A] transition-colors"
            field={getLinkField(props)}
            editable={page.mode.isEditing}
            onClick={props.handleClick}
          >
            {getNavigationText(props)}
          </Link>
        </div>
        {children.length > 0 && <ul className="space-y-1">{children}</ul>}
      </li>
    );
  }

  // Level 3: Sub-items
  return (
    <li className={`${classNameList}`} key={props.fields.Id}>
      <Link
        className="block px-4 pl-8 py-2 hover:bg-white transition-colors"
        field={getLinkField(props)}
        editable={page.mode.isEditing}
        onClick={props.handleClick}
      >
        <div className="font-medium text-gray-900 hover:text-[#E2231A] transition-colors text-sm">
          {getNavigationText(props)}
        </div>
        {props.fields.Title?.value && props.fields.NavigationTitle?.value && (
          <div className="text-xs text-gray-500 mt-0.5">{props.fields.Title.value.toString()}</div>
        )}
      </Link>
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

export default Default;
