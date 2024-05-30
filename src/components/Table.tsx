import { useContext } from 'react';
import TableContext from '../context/tableContext';
import { CharacterType, FilterType } from '../types';


function Table() {
  const { characters, filterList } = useContext(TableContext);

  const applyFilters = () => (
    characters.filter((character: CharacterType) => (
      filterList.every(({ info, value }: FilterType) => 
        character[info].toLowerCase()
          .includes(value.toLowerCase()))
    ))
  );

  // função corrigida com tipagem
  // const applyFilters = () => (
  //   characters.filter((character: CharacterType) => (
  //     filterList.every(({ info, value }: FilterType) => {
  //       const charValue = character[info as keyof CharacterType];
  //       if (typeof charValue === 'string') {
  //         return charValue.toLowerCase().includes(value.toLowerCase());
  //       }
  //       return false;
  //     })
  //   ))
  // );

  return (
    <div>
      <h3>Personagens</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Specie</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          { applyFilters().map((character) => (
            <tr
              key={ character.id }
            >
              <td>
                <img src={ character.image } alt={ character.name } />
              </td>
              <td>{character.name}</td>
              <td>{character.species}</td>
              <td>{character.status}</td>
              <td>{character.origin.name}</td>
               <td>{character.location.name}</td> 
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
