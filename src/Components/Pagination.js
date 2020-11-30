import React, { useMemo } from 'react';
import { Columns, GROUPED_COLUMNS } from './Columns';
import MOCK_DATA from './MOCK_DATA';
import { useTable, usePagination } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Pagination() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    prepareRow,
    setPageSize,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  return (
    <>
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
          {page.map((row) => {
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
      </table>
      <div className='offset-md-5 my-2   btn-group'>
        <span className='mr-2'>
          {/*GO TO LAST PAGE  BY ENTERRING INPUT VALUE*/}
          <span>
            | Go to page: {''}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: '50px' }}
            />
          </span>
          {/*DISPLAY PAGE NUMBER */}
          Page:{''}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        {/*SHOW NUMBER OF DATA PER PAGE TO DISPLAY */}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15, 20, 25, 30].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>

        {/*GO TO PREVIOUS PAGE */}
        <button
          className='btn btn-sm btn-primary '
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {/*GO TO FIRST PAGE */}
          {'<<'}
        </button>
        <button
          className='btn btn-sm btn-primary '
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>

        {/*GO TO NEXT PAGE */}
        <button
          className='btn btn-sm btn-primary'
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>

        {/*GO TO LAST PAGE */}
        <button
          className='btn btn-sm btn-primary '
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
      </div>
    </>
  );
}
