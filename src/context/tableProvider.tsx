import { useEffect, useState } from 'react';
import { CharacterType, FilterType, TableProviderProps } from '../types';
import TableContext from './tableContext';

const infos = ['name', 'species', 'status', 'origin', 'location'];

export default function TableProvider({ children }: TableProviderProps) {
  const [characters, setCharacters] = useState([]);
  const [columns, setColumns] = useState(infos);
  const [filterList, setFilterList] = useState<FilterType[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then(({ results }) => {
        const formatedCharacters = results.map((character: CharacterType) => ({
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin,
          location: character.location,
        }))
        setCharacters(formatedCharacters)
      })
      .catch((error) => console.error(error.message));
  }, []);

  const addFilter = (filter: FilterType) => {
    setFilterList((prev) => [...prev, filter]);
  };

  const removeFilter = (filter: FilterType) => {
    setFilterList(filterList.filter((e) => e.info !== filter.info))
  };

  const value = {
    characters,
    columns,
    addFilter,
    filterList,
    removeFilter,
  };

  return (
    <TableContext.Provider value={ value }>
      { children }
    </TableContext.Provider>
  );
}
