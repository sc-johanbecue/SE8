import type { JSX } from 'react';
import {
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export default function Dashboard(props: ComponentProps): JSX.Element {
  const id = props.rendering.uid;

  const phLeftDashboardContainer = `lenovoLeftDashboardContainer-${props.params.DynamicPlaceholderId}`;
  const phRightDashboardContainer = `lenovoRightDashboardContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div key={id} className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Placeholder name={phLeftDashboardContainer} rendering={props.rendering} />
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          <Placeholder name={phRightDashboardContainer} rendering={props.rendering} />
        </div>
      </div>
    </div>
  );
}

export const Default = Dashboard;
