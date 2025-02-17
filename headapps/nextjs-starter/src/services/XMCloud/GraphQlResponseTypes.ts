export interface Item {
  template: {
    name: string;
    id: string;
  };
  name: string;
  id: string;
  url: {
    path: string;
    url: string;
  };
  path: string;
  fields: {
    name: string;
    jsonValue: {
      value: string;
    };
  }[];
  children: {
    results: Item[];
  };
}

export interface RoleItem {
  fields: {
    Name: {
      value: string;
    };
  };
}
