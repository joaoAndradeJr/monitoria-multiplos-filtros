import { useContext, useState } from 'react';
import TableContext from '../context/tableContext';

function Filter() {
  const { columns, addFilter } = useContext(TableContext);
  const [formData, setFormData] = useState({
    info: columns[0],
    value: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFilter(formData);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="info">
          <select
            name="info"
            id="info"
            value={ formData.info }
            onChange={ handleChange }
          >
            { columns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
        </label>

        <label htmlFor="value">
          <input
            type="text"
            name="value"
            id="value"
            value={ formData.value }
            onChange={ handleChange }
          />
        </label>

        <button
          disabled={ columns.length === 0 }
        >
          Filter
        </button>
        <button
          type="button"
          disabled={ columns.length > 4 }
          onClick={ () => {} }
        >
          Remove All
        </button>
      </form>
    </div>
  );
}

export default Filter;
