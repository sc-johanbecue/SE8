'use client';

// import React, { useEffect } from 'react';
// import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSitecoreContext, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Language {
  name: string;
  language: string; // e.g., 'en-GB'
}

interface Fields {
  languages?: Language[];
  Language: ImageField;
}

type LanguageProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LanguageDefaultComponent = (props: LanguageProps): JSX.Element => (
  <div className={`component Language ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Language</span>
    </div>
  </div>
);

/**
 * Language Switcher component for switching between different languages
 *
 * Sitecore XM Cloud Configuration:
 * - Template: "LanguageSwitcher"
 * - Fields:
 *   - languages: Multilist field (stores language options with code, name, and optional flag)
 *     - Each item in the list should have:
 *       - code: Single-Line Text field (language code, e.g., "en-GB")
 *       - name: Single-Line Text field (display name, e.g., "English")
 *       - flag: Image field (optional flag icon)
 *   - currentLanguage: Single-Line Text field (stores the current language code)
 *
 * Note: For actual language switching in Sitecore, you'll need to implement
 * the language switching logic using Sitecore's language API.
 */
export const Default = (props: LanguageProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const availableLanguages = [
    { code: 'en-GB', name: 'English' },
    { code: 'de-DE', name: 'Deutsch' },
    { code: 'fr-FR', name: 'Français' },
    { code: 'it-IT', name: 'Italiano' },
  ];

  const currentLanguage = availableLanguages.find((x) => x.code === sitecoreContext.language);

  // const [selected, setSelected] = useState(currentLanguage);

  // useEffect(() => {
  //   setSelected(currentLanguage);
  // }, [currentLanguage]);

  // const handleLanguageChange = (language: Language) => {
  //   setSelected(language);
  // };

  if (props.fields) {
    return (
      <Dropdown className="language-switcher">
        <Dropdown.Toggle variant="link" id="language-dropdown" className="text-decoration-none">
          {currentLanguage?.name}
          {/* {currentLanguage}  */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* {availableLanguages.map((language: Language) => (
            <Dropdown.Item
              key={language.language}
              active={language.language === selected}
              onClick={() => handleLanguageChange(language.language)}
            >
              {language.name}
            </Dropdown.Item>
          ))} */}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  return <LanguageDefaultComponent {...props} />;
};
