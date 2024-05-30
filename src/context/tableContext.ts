import { createContext } from 'react';
import { TableProvider } from '../types';

const TableContext = createContext({} as TableProvider);

export default TableContext;
