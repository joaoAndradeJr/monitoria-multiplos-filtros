import { ReactNode } from 'react';

export type TableProvider = {
  characters: CharacterType[];
  columns: string[];
  filterList: FilterType[];
  addFilter: (filter: FilterType) => void;
  removeFilter: (filter: FilterType) => void;
  // removeAllFilters: () => void;
};

export type TableProviderProps = {
  children: ReactNode;
}

export type FilterType = {
  info: string;
  value: string;
};

export type CharacterType = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: {
    'name': string;
    'url': string;
  };
  location: {
    'name': string;
    'url': string;
  };
  episode: string[];
};

export type DataTypeContext = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: string;
  location: string;
};
