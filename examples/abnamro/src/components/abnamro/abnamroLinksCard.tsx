import React, { JSX } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  TextField,
  LinkField,
  ImageField,
  Text,
  Link as JssLink,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

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
      title: {
        jsonValue: TextField;
      };
      icon: {
        jsonValue: ImageField;
      };
    };
  };
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

type LinkListItemProps = {
  key: string;
  index: number;
  total: number;
  field: LinkField;
};

const LinkListItem = (props: LinkListItemProps) => {
  let className = `item${props.index}`;
  className += (props.index + 1) % 2 == 0 ? ' even' : ' odd';
  if (props.index == 0) {
    className += ' first';
  }
  if (props.index + 1 == props.total) {
    className += ' last';
  }
  return (
    <li className={className} key={props.key}>
      <div className="field-link">
        <JssLink
          field={props.field}
          className="flex items-center gap-2 text-[#00857d] hover:text-[#006d66] group"
        >
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          {/* <ArrowRight className="w-4 h-4 flex-shrink-0" /> */}
          <span className="md:text-sm lg:text-base underline group-hover:no-underline">
            {props.field.value.text}
          </span>
        </JssLink>
      </div>
    </li>
  );
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const datasource = props.fields?.data?.datasource;

  const list = datasource.children.results
    .filter((element: ResultsFieldLink) => element?.field?.link)
    .map((element: ResultsFieldLink, key: number) => (
      <LinkListItem
        index={key}
        key={`${key}${element.field.link}`}
        total={datasource.children.results.length}
        field={element.field.link}
      />
    ));

  return (
    <div key={id} className="bg-white p-8 rounded-lg shadow-sm">
      <div className="mb-6">
        <JssImage field={datasource?.icon.jsonValue} alt="" className="w-16 h-16 mb-4" />
        <Text
          tag="h2"
          field={datasource?.title.jsonValue}
          className="text-2xl md:text-xl lg:text-2xl font-semibold text-gray-900"
        />
      </div>
      <ul className="space-y-3">{list}</ul>
    </div>
  );
};
