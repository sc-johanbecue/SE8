import React, { useState, JSX } from 'react';
import { Link, LinkField, TextField, useSitecore } from '@sitecore-content-sdk/nextjs';

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
  const [isOpenMenu, openMenu] = useState(false);
  const { page } = useSitecore();
  const styles =
    props.params != null
      ? `${props.params.GridParameters ?? ''} ${props.params.Styles ?? ''}`.trimEnd()
      : '';
  const id = props.params != null ? props.params.RenderingIdentifier : null;

  if (!Object.values(props.fields).length) {
    return (
      <div className={`component navigation ${styles}`} id={id ? id : undefined}>
        <div className="component-content">[Navigation]</div>
      </div>
    );
  }

  const handleToggleMenu = (event?: React.MouseEvent<HTMLElement>, flag?: boolean): void => {
    if (event && page.mode.isEditing) {
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
        relativeLevel={1}
      />
    ));

  return (
    <div className={`component navigation ${styles}`} id={id ? id : undefined}>
      <label className="menu-mobile-navigate-wrapper">
        <input
          type="checkbox"
          className="menu-mobile-navigate hidden"
          checked={isOpenMenu}
          onChange={() => handleToggleMenu()}
        />
        <div className="menu-humburger hidden" />
        {/* </CHANGE> */}
        <div className="component-content">
          <nav>
            <ul className="clearfix flex gap-6">{list}</ul>
          </nav>
        </div>
      </label>
    </div>
  );
};

const NavigationList = (props: NavigationProps) => {
  const { page } = useSitecore();
  const [active, setActive] = useState(false);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  // </CHANGE>
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

  const handleMouseEnter = () => {
    if (children.length > 0 && props.relativeLevel === 1) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      // </CHANGE>
      setActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (children.length > 0 && props.relativeLevel === 1) {
      closeTimeoutRef.current = setTimeout(() => {
        setActive(false);
      }, 150);
      // </CHANGE>
    }
  };

  const handleSubmenuMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    // </CHANGE>
    setActive(true);
  };

  const handleSubmenuMouseLeave = () => {
    setActive(false);
  };

  if (props.relativeLevel === 1) {
    return (
      <li
        className={`${classNameList} ${active ? 'active' : ''} relative`}
        key={props.fields.Id}
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navigation-title">
          <Link
            className="hover:text-[#E2231A] transition-colors cursor-pointer font-medium"
            field={getLinkField(props)}
            editable={page.mode.isEditing}
          >
            {getNavigationText(props)}
          </Link>
        </div>
        {children.length > 0 && active && (
          <div
            className="absolute left-0 top-full mt-3 pt-1 bg-white border border-gray-200 rounded-lg shadow-2xl p-8 z-50 min-w-[800px]"
            // </CHANGE>
            onMouseEnter={handleSubmenuMouseEnter}
            onMouseLeave={handleSubmenuMouseLeave}
          >
            <div className="grid grid-cols-4 gap-8">{children}</div>
          </div>
        )}
      </li>
    );
  }

  if (props.relativeLevel === 2) {
    return (
      <div key={props.fields.Id} className="space-y-4">
        <Link
          className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 hover:text-[#E2231A] transition-colors cursor-pointer"
          field={getLinkField(props)}
          editable={page.mode.isEditing}
          onClick={props.handleClick}
        >
          {getNavigationText(props)}
        </Link>
        {children.length > 0 && <ul className="space-y-1 pl-3">{children}</ul>}
      </div>
    );
  }

  return (
    <li className={`${classNameList} group`} key={props.fields.Id} tabIndex={0}>
      <Link
        className="block hover:bg-gray-50 rounded-md p-1.5 pl-3 transition-colors"
        field={getLinkField(props)}
        editable={page.mode.isEditing}
        onClick={props.handleClick}
      >
        <div className="font-medium text-gray-900 group-hover:text-[#E2231A] transition-colors">
          {getNavigationText(props)}
        </div>
        {props.fields.Title?.value && props.fields.NavigationTitle?.value && (
          <div className="text-sm text-gray-500 mt-0.5">{props.fields.Title.value.toString()}</div>
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
