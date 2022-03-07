import { DataGridPro, LicenseInfo } from '@mui/x-data-grid-pro';
import { css } from '@emotion/css';
import './license';
// import { fetchedData, columns } from './data';

// LicenseInfo.setLicenseKey(
//   '69e8ad96049e66693bbf18e6a135dbceT1JERVI6NDU2NTQ4OTQ4NCxFWFBJUlk9MTY3ODI3ODgwODU4MyxLRVlWRVJTSU9OPTE='
// );

const makeStyles = () => ({
  tableWrapper: css`
    width: 800px;
    height: 300px;
  `,
});

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const Table = () => {
  const classes = makeStyles();
  // const data = fetchedData.map((item) => [...Object.values(item)]);

  return (
    <div className={classes.tableWrapper}>
      <DataGridPro rows={rows} columns={columns} />
    </div>
  );
};

export { Table };
