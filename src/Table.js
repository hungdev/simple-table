import React, { useState } from 'react'
import { getSortIcon, dataFormatter } from './utils'
import useTable from './TableController'

export default function Table(props) {
  const { config: { fields, primaryKey }, data } = props;
  const formatData = dataFormatter(data, fields)
  const { sortCriteria, tableData, onSort } = useTable({ data: formatData })

  const onHandleSort = (currentField) => () => currentField?.isSortable && onSort(currentField)

  return (
    <div>
      <div>Monthly Budget</div>
      <table className="fn-table">
        <thead>
          <tr>
            {fields?.map(field => {
              return (
                <th onClick={onHandleSort(field)} key={field.key}>
                  {field.title}
                  <span className='arrow-icon'>
                    {field?.isSortable && sortCriteria?.field === field.key && getSortIcon(sortCriteria.isAsc)}
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {tableData?.map(row => {
            return (
              <tr key={row[primaryKey]}>
                {fields?.map((field, index) => {
                  const key = `${index}-${tableData[field]}`;
                  return field?.formatter
                    ? <td key={key}>{field.formatter(row)}</td>
                    : <td key={key}>{row[field.key]}</td>;
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
