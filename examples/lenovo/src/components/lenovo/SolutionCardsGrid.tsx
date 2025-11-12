import type { JSX } from 'react';
import {
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentParams;
};

const defaultSolutions = [
  {
    title: 'Digital Workplace',
    description:
      'Modern workplace solutions for hybrid work environments with cutting-edge devices and collaboration tools',
    badge: 'Popular',
    link: '/solutions/digital-workplace',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🖥️',
  },
  {
    title: 'Hybrid Cloud / Data Center',
    description:
      'Flexible infrastructure solutions for scalable, secure, and efficient data center operations',
    badge: 'Featured',
    link: '/solutions/hybrid-cloud',
    gradient: 'from-purple-500 to-pink-500',
    icon: '☁️',
  },
  {
    title: 'Edge / AI Solutions',
    description:
      'Cutting-edge AI and edge computing capabilities to drive innovation and intelligent insights',
    badge: 'Trending',
    link: '/solutions/edge-ai',
    gradient: 'from-orange-500 to-red-500',
    icon: '🤖',
  },
  {
    title: 'Infrastructure Solutions',
    description:
      'Enterprise-grade servers, storage, and networking infrastructure for mission-critical workloads',
    badge: 'Enterprise',
    link: '/solutions/infrastructure',
    gradient: 'from-green-500 to-emerald-500',
    icon: '🔧',
  },
  {
    title: 'Smart Collaboration',
    description:
      'Transform your meeting spaces with intelligent collaboration and conferencing solutions',
    badge: 'New',
    link: '/solutions/collaboration',
    gradient: 'from-indigo-500 to-blue-500',
    icon: '💬',
  },
  {
    title: '5G Solutions',
    description: 'Next-generation connectivity solutions for enhanced performance and reliability',
    badge: '5G',
    link: '/solutions/5g',
    gradient: 'from-pink-500 to-rose-500',
    icon: '📡',
  },
];

export default function SolutionCardsGrid(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'solution-cards-grid';
  const phSolutionCards = `lenovoSolutionCards-${props?.params?.DynamicPlaceholderId || 'default'}`;

  return (
    <div key={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {props?.rendering ? (
        <Placeholder name={phSolutionCards} rendering={props.rendering} />
      ) : (
        defaultSolutions.map((solution, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all hover:scale-105">
            <div
              className={`aspect-video bg-gradient-to-br ${solution.gradient} relative overflow-hidden flex items-center justify-center`}
            >
              <span className="text-6xl opacity-30">{solution.icon}</span>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <span className="text-xs bg-[#E2231A] text-white px-2 py-1 rounded">
                  {solution.badge}
                </span>
              </div>
              <CardDescription>{solution.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full group-hover:bg-[#E2231A] group-hover:text-white group-hover:border-[#E2231A] bg-transparent transition-colors"
                asChild
              >
                <Link href={solution.link}>
                  View solution <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

export const Default = SolutionCardsGrid;
