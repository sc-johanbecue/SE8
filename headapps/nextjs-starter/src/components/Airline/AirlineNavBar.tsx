import React from 'react'; //{ useState }
import {
  Image as JssImage,
  ImageField,
  TextField,
  Text,
  Placeholder,
  ComponentParams,
  ComponentRendering,
  useSitecoreContext,
  LinkField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Logo: ImageField;
}

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

type AirlineNavBarProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
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

const NavigationList = (props: NavigationProps) => {
  const { sitecoreContext } = useSitecoreContext();

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

  return (
    <li className="nav-item" key={props.fields.Id} tabIndex={0}>
      <Link
        className="nav-link active"
        field={getLinkField(props)}
        editable={sitecoreContext.pageEditing}
        onClick={props.handleClick}
      >
        {getNavigationText(props)}
      </Link>
      {children.length > 0 ? <ul className="dropdown-menu">{children}</ul> : null}
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

const AirlineNavBarDefaultComponent = (props: AirlineNavBarProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineNavBarProps): JSX.Element => {
  const phKeyNavigation = `navigation-${props.params.DynamicPlaceholderId}`;
  const phKeyMobileNavigation = `mobileNavigation-${props.params.DynamicPlaceholderId}`;

  // const { sitecoreContext } = useSitecoreContext();
  // const [isOpenMenu, openMenu] = useState(false);

  // const handleToggleMenu = (event?: React.MouseEvent<HTMLElement>, flag?: boolean): void => {
  //   if (event && sitecoreContext?.pageEditing) {
  //     event.preventDefault();
  //   }

  //   if (flag !== undefined) {
  //     return openMenu(flag);
  //   }

  //   openMenu(!isOpenMenu);
  // };

  // const list = Object.values(props.fields)
  //   .filter((element) => element)
  //   .map((element: Fields, key: number) => (
  //     <NavigationList
  //       key={`${key}${element.Id}`}
  //       fields={element}
  //       handleClick={(event: React.MouseEvent<HTMLElement>) => handleToggleMenu(event, false)}
  //       relativeLevel={1}
  //     />
  //   ));

  if (props.fields) {
    return (
      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="row">
                <div className="col-lg-6">
                  <div className="logo">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/">
                      <JssImage field={props.fields.Logo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="/">
                <JssImage field={props.fields.Logo}></JssImage>
              </a>
              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <Placeholder name={phKeyNavigation} rendering={props.rendering} />
                {/* <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="#!" className="search-box">
                      <i className="bi bi-search"></i>
                    </a>
                  </div>
                  <div className="option-item">
                    <a className="btn  btn_navber" href="#">
                      Become Expert
                    </a>
                  </div>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                &#9776;
              </button>
              <div
                className="offcanvas offcanvas-end"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                style={{ visibility: 'hidden' }}
                aria-hidden="true"
              >
                <div
                  className="offcanvas-header-two"
                  style={{ backgroundColor: 'rgb(253, 238, 237)' }}
                >
                  <div className="offcanvas-logo">
                    <JssImage field={props.fields.Logo}></JssImage>
                  </div>
                  <div className="offcanvas_off">
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="offcanvas-body">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                      <div>
                        <Placeholder name={phKeyMobileNavigation} rendering={props.rendering} />
                        {/* <ul className="navbar-nav">{list}</ul> */}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AirlineNavBarDefaultComponent {...props} />;
};
