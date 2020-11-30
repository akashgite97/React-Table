import { ColumnFilter } from './ColumnFilter';

export const Columns = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
    Filter: ColumnFilter,
  },

  {
    Header: 'Last Name',
    Footer: 'Last NAme',
    accessor: 'last_name',
    Filter: ColumnFilter,
  },

  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    Filter: ColumnFilter,
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
    Filter: ColumnFilter,
  },

  {
    Header: 'Age',
    Footer: 'Age',
    accessor: 'age',
    Filter: ColumnFilter,
  },
];

//For Header Groups
export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },

  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
      },

      {
        Header: 'Last Name',
        Footer: 'Last NAme',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'info',
    columns: [
      {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
      },

      {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
      },
    ],
  },
];
