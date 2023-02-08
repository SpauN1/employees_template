import { Component } from 'react';

import './app-filter.scss';

class AppFilter extends Component {
  render() {
    const buttonsData = [
      { name: 'all', label: 'Все сотрудники' },
      { name: 'rise', label: 'На повышение' },
      { name: 'moreThan1000', label: 'З/П больше 1000$' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light';
      return (
        <button
          className={`btn ${clazz}`}
          type="button"
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

export default AppFilter;
