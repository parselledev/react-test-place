import { css } from '@emotion/css';
import { Table } from 'ui/index';

const makeStyles = () => ({
  dashboard: css`
    display: grid;
    justify-content: center;
    gap: 10px;
    padding: 30px;
  `,
});

const Dashboard = () => {
  const classes = makeStyles();

  return (
    <div className={classes.dashboard}>
      <Table />
    </div>
  );
};

export { Dashboard };
