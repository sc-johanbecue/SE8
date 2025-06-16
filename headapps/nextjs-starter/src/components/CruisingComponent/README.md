# CruisingComponent Implementation Guide

This document outlines the steps taken to create and implement the CruisingComponent following Sitecore's component creation guidelines.

## Overview

The CruisingComponent is a dynamic cruise listing component that displays cruise cards in a 3x3 grid layout, featuring search, filtering, and detailed view capabilities.

## Implementation Steps

### 1. Component Structure Setup
- Created component directory: `src/components/CruisingComponent`
- Created main component file: `CruisingComponent.tsx`
- Defined component interface extending ComponentProps:
```typescript
interface CruisingComponentProps extends ComponentProps {
  fields: {
    title: TextField;
    description: RichTextField;
    cruisesUrl: TextField;
  };
}
```

### 2. Component Definition in Sitecore

#### 2.1 Create a Component Template
1. Navigate to `/sitecore/templates/Project/dlink/Components`
2. Create a new template named `CruisingComponent`
3. Define the following fields:
   - `title` (Single-Line Text)
   - `description` (Rich Text)
   - `cruisesUrl` (Single-Line Text)

#### 2.2 Rendering Creation Process
1. **Create a Rendering Item**
   - Navigate to `/sitecore/layout/Renderings/Project/dlink/Components`
   - Create a new rendering item named `CruisingComponent`
   - Set the following properties:
     - Component Name: `CruisingComponent`
     - Datasource Template: Select the CruisingComponent template
     - Datasource Location: `/sitecore/content/dlink/Components/CruisingComponent`
     - Datasource Query: Configure if needed for specific data requirements

2. **Create a Rendering File**
   - Create a new file: `src/rendering/src/components/CruisingComponent/index.tsx`
   - Implement the component using the defined interface
   - Export the component as default

3. **Register the Component**
   - Add the component to `sitecore/manifest/sitecore-import.json`:
   ```json
   {
     "name": "CruisingComponent",
     "displayName": "Cruising Component",
     "fields": [
       {
         "name": "title",
         "type": "Single-Line Text",
         "displayName": "Title"
       },
       {
         "name": "description",
         "type": "Rich Text",
         "displayName": "Description"
       },
       {
         "name": "cruisesUrl",
         "type": "Single-Line Text",
         "displayName": "Cruises URL"
       }
     ]
   }
   ```

4. **Update Component Builder**
   - Add mapping in `sitecore/manifest/generate-component-builder.ts`
   - Ensure proper field mapping between Sitecore and React component

### 3. Component Implementation

#### 3.1 TypeScript Interfaces
```typescript
interface CruiseItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  destination: string;
  imageUrl: string;
}
```

#### 3.2 Component Features
- Data fetching with fallback to local data
- Search functionality
- Category filtering
- Detailed view for selected cruise
- Responsive 3x3 grid layout

#### 3.3 Styling
- CSS-in-JS using styled-jsx
- Responsive grid layout
- Hover effects and transitions
- Card and detail view styles

### 4. Component Testing

#### 4.1 Local Testing
- Test component rendering
- Verify data fetching
- Test search and filter functionality
- Validate responsive layout
- Check fallback behavior

#### 4.2 Sitecore Testing
- Verify component in Experience Editor
- Test component placement
- Validate field mapping
- Check component rendering in different contexts

## Usage

To use the CruisingComponent in your Sitecore pages:

1. Add the component to a page in Experience Editor
2. Configure the component fields:
   - Set the title
   - Add description content
   - Provide the cruises data URL

The component will automatically:
- Fetch and display cruise data
- Provide search and filtering capabilities
- Show detailed views on click

## Styling

The component uses a 3x3 grid layout with the following key styles:
- Full-width container
- Equal-width columns
- Responsive image handling
- Hover effects on cards
- Detailed view modal

## Dependencies
- @sitecore-jss/sitecore-jss-nextjs
- React
- Next.js

## Notes
- The component includes fallback data for development
- Implements error handling for data fetching
- Uses TypeScript for type safety
- Follows Sitecore JSS best practices

## References
- [Sitecore Component Creation Guide](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components)
- [Sitecore JSS Documentation](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss-.html)

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/sc-johanbecue/SE8.git
cd SE8\\src\\headapps\\nextjs-starter
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with the following content:
```
SITECORE_EDGE_CONTEXT_ID=31NHfLuL3d2WqkNWVVGSZ
SITECORE_SITE_NAME=us
JSS_EDITING_SECRET=78Jj4Bj3936UnEDgLldsm
```

4. Start the development server:
```bash
npm run start:connected
``` 