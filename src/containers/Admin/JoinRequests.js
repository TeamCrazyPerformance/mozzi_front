// import React from 'react';

// const JoinRequests = () => {
//   return(
//     <div>
//       JoinRequests
//     </div>
//   );
// };

// export default JoinRequests;

import React, {useState} from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
// import { lighten } from '@material-ui/core/styles/colorManipulator';

import Fab from '@material-ui/core/Fab';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';

// let counter = 0;
// function createData(name, calories, fat, carbs, protein) {
//   counter += 1;
//   return { id: counter, name, calories, fat, carbs, protein };
// }

// function desc(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function stableSort(array, cmp) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = cmp(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// }

// function getSorting(order, orderBy) {
//   return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
// }

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Student Name' },
  { id: 'studenNumber', numeric: true, disablePadding: false, label: 'Student Number' },
];

const EnhancedTableHead = props => {
  // const {
  //   onSelectAllClick,
  //   order,
  //   orderBy,
  //   numSelected,
  //   rowCount
  // } = this.props;

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell> */}
        {rows.map(
          row => (
            <TableCell
              key={row.id}
              align={row.numeric ? 'right' : 'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              // sortDirection={orderBy === row.id ? order : false}
            >
              <Tooltip
                title="Sort"
                placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  // active={orderBy === row.id}
                  // direction={order}
                  // onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ),
          this,
        )}

        <TableCell padding="checkbox">
          {/* Join Approve Section */}
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.string.isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const toolbarStyles = theme => ({
//   root: {
//     paddingRight: theme.spacing.unit,
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   spacer: {
//     flex: '1 1 100%',
//   },
//   actions: {
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// });









// const EnhancedTableToolbar = props => {
//   const {
//     numSelected,
//     // classes
//   } = props;

//   return (
//     <Toolbar
//       // className={classNames(classes.root, {
//       //   [classes.highlight]: numSelected > 0,
//       // })}
//     >
//       <div
//         // className={classes.title}
//       >
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="h6" id="tableTitle">
//             Nutrition
//           </Typography>
//         )}
//       </div>
//       <div
//         // className={classes.spacer}
//       />
//       <div
//         // className={classes.actions}
//       >
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </div>
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
// };

// EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//   },
//   table: {
//     minWidth: 1020,
//   },
//   tableWrapper: {
//     overflowX: 'auto',
//   },
// });

const EnhancedTable = () => {
  const [data, setData] = useState([
    {name: 'Kang', stdNumber: '16101340'},
    {name: 'Ji', stdNumber: '16101340'},
    {name: 'Hoon', stdNumber: '16101340'},
    {name: 'zzang', stdNumber: '16101340'},
    {name: 'Lee', stdNumber: '16101340'},
    {name: 'Song', stdNumber: '16101340'},
    {name: 'Yeol', stdNumber: '16101340'},
    {name: 'zzangzzang', stdNumber: '16101340'},
    {name: 'man', stdNumber: '16101340'},
    {name: 'gkgkgkgk', stdNumber: '16101340'},
  ]);

  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);
  const [total, setTotal] = useState(0);

  // handleRequestSort = (event, property) => {
  //   const orderBy = property;
  //   let order = 'desc';

  //   if (this.state.orderBy === property && this.state.order === 'desc') {
  //     order = 'asc';
  //   }

  //   this.setState({ order, orderBy });
  // };

  // handleSelectAllClick = event => {
  //   if (event.target.checked) {
  //     this.setState(state => ({ selected: state.data.map(n => n.id) }));
  //     return;
  //   }
  //   this.setState({ selected: [] });
  // };

  // handleClick = (event, id) => {
  //   const { selected } = this.state;
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }

  //   this.setState({ selected: newSelected });
  // };

  // const handleChangePage = (event, page) => {
  //   this.setState({ page: page });
  // };

  // const handleChangeRowsPerPage = event => {
  //   this.setState({ rowsPerPage: event.target.value });
  // };

  // const isSelected = id => this.state.selected.indexOf(id) !== -1;

  const handleChangePage = (event, page) => setPage(page);

  // render() {
  // const { classes } = this.props;
  // const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const emptyRows = count - Math.min(count, data.length - page * count);

  return (
    <Paper
      // className={classes.root}
    >
      {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
      <div
        // className={classes.tableWrapper}
      >
        <Table
          // className={classes.table}
          aria-labelledby="tableTitle"
        >
          <EnhancedTableHead
            // numSelected={selected.length}
            // order={order}
            // orderBy={orderBy}
            // onSelectAllClick={this.handleSelectAllClick}
            // onRequestSort={this.handleRequestSort}
            // rowCount={data.length}
            rowCount={count}
          />
          <TableBody>
            {/* {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
              {data.map((student, index) => {
                // const isSelected = this.isSelected(n.id);
                return (
                  <TableRow
                    hover
                    // onClick={event => this.handleClick(event, n.id)}
                    role="checkbox"
                    // aria-checked={isSelected}
                    tabIndex={-1}
                    key={index}
                    // selected={isSelected}
                  >
                    {/* <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell> */}
                    <TableCell component="th" scope="row" padding="none">
                      {student.name}
                    </TableCell>
                    <TableCell align="right">{student.stdNumber}</TableCell>
                    <TableCell padding="checkbox">
                      <Fab size="small" color="primary" aria-label="Approve">
                        <Done />
                      </Fab>
                      <Fab size="small" color="secondary" aria-label="Add">
                        <Close />
                      </Fab>
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.length}
        // rowsPerPage={rowsPerPage}
        rowsPerPage={count}
        page={page}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        // onChangePage={this.handleChangePage}
        // onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    </Paper>
  );
  // }
}

// EnhancedTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(EnhancedTable);
export default EnhancedTable;