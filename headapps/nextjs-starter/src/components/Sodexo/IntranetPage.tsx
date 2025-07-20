import React from 'react';
import {
  TextField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}

type SodexoProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const SodexoDefaultComponent = (props: SodexoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SodexoProps): JSX.Element => {
  let phKeyMenuProfile;
  let phKeyPromotedContent;
  let phKeyHrAccessKnowledgeCenter;
  if (props.params?.DynamicPlaceholderId == undefined) {
    phKeyMenuProfile = `menuProfile`;
    phKeyPromotedContent = `promotedContent`;
    phKeyHrAccessKnowledgeCenter = `hrAccessKnowledgeCenter`;
  } else {
    phKeyMenuProfile = `menuProfile-${props.params.DynamicPlaceholderId}`;
    phKeyPromotedContent = `promotedContent-${props.params.DynamicPlaceholderId}`;
    phKeyHrAccessKnowledgeCenter = `hrAccessKnowledgeCenter-${props.params.DynamicPlaceholderId}`;
  }

  if (props.fields) {
    return (
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #3a2a6d 0%, #4a3a8d 100%)',
            color: 'white',
            width: '100%',
            position: 'relative',
          }}
        >
          <Placeholder name={phKeyMenuProfile} rendering={props.rendering} />
        </div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
          }}
        >
          <Placeholder name={phKeyPromotedContent} rendering={props.rendering} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              marginTop: '20px',
              flexWrap: 'wrap',
            }}
          >
            <Placeholder name={phKeyHrAccessKnowledgeCenter} rendering={props.rendering} />
          </div>
        </div>

        <footer
          style={{
            background: 'linear-gradient(90deg, #3a2a6d 0%, #4a3a8d 100%)',
            color: 'white',
            padding: '20px',
            marginTop: '40px',
            height: '60px',
          }}
        ></footer>
      </div>
    );
  }
  return <SodexoDefaultComponent {...props} />;
};
