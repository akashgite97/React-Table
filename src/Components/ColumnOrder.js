import React, { useMemo } from 'react';
import { Columns, GROUPED_COLUMNS } from './Columns';
import MOCK_DATA from './MOCK_DATA';
import { useTable, useColumnOrder } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ColumnOrder() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useColumnOrder
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    setColumnOrder,
  } = tableInstance;

  const changeOrder = () => {
    setColumnOrder([
      'id',
      'first_name',
      'last_name',
      'eamil',
      'date_of_birth',
      'age',
    ]);
  };

  return (
    <>
      <button onClick={changeOrder}>Change Column Order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => {
            return (
              <tr {...footerGroup.getFooterGroupProps}>
                {footerGroup.headers.map((column) => {
                  return (
                    <td {...column.getFooterProps}>
                      {column.render('Footer')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </>
  );
}
