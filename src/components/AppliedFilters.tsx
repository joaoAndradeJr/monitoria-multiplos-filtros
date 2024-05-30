import { useContext } from 'react';
import TableContext from '../context/tableContext';

function AppliedFilters() {
  const { filterList, removeFilter } = useContext(TableContext);

  return (
    filterList.length > 0 ? (
      <div>
        <h3>Filtros aplicados</h3>
        { filterList.map((filter) => (
          <div key={ filter.info }>
            <span>{`${filter.info}: ${filter.value}`}</span>
            {' '}
            <button
              type="button"
              onClick={ () => removeFilter(filter) }
            >
              X
            </button>
          </div>
        )) }
      </div>
    ) : (
      <div>
        <h3>Nenhum filtro aplicado</h3>
      </div>
    )
  );
}

export default AppliedFilters;
