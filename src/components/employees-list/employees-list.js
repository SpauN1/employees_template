import { Component } from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.scss';

class EmployeesList extends Component {
  render() {
    const { data, onDelete, onToggleProp, changeSalary } = this.props;
    const elements = data.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <EmployeesListItem
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) =>
            onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
          }
          changeSalary={changeSalary}
        />
      );
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}
export default EmployeesList;
