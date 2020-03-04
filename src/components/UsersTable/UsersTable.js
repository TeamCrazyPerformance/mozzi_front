import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "User Name"
  },
  {
    id: "nickname",
    numeric: true,
    disablePadding: false,
    label: "User Nickname"
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "User Email"
  },
  {
    id: "stdNumber",
    numeric: true,
    disablePadding: false,
    label: "User Student Number"
  },
  {
    id: "birthday",
    numeric: true,
    disablePadding: false,
    label: "User Birthday"
  }
];

const EnhancedTableHead = () => (
  <TableHead>
    <TableRow role="checkbox">
      {rows.map(row => (
        <TableCell key={row.id} align="center">
          {row.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const UsersTableStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  tableClassName: {
    minWidth: 400
  },
  tableWrapperClassName: {
    overflowX: "auto"
  },
  tableRowClassName: {
    cursor: "pointer"
  }
}));

const userPageRedirect = userId => {
  const currentUrl = window.location.href;
  const redirectUrl = currentUrl.split("/")[0];
  window.location.href = `${redirectUrl}/user/${userId}`;
};

const UsersTable = props => {
  const { data, page, count, total, handlePageChange } = props;
  const {
    rootClassName,
    tableClassName,
    tableWrapperClassName,
    tableRowClassName
  } = UsersTableStyles();
  const emptyRows = count - data.length;

  return (
    <Paper className={rootClassName}>
      <div className={tableWrapperClassName}>
        <Table className={tableClassName} aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={count} />
          <TableBody>
            {data.map(user => (
              <TableRow
                hover
                key={user.stdNumber}
                className={tableRowClassName}
                onClick={() => userPageRedirect(user.id)}
              >
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.nickname}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.stdNumber}</TableCell>
                <TableCell align="center">{user.birthday}</TableCell>
              </TableRow>
            ))}
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
        count={total}
        rowsPerPage={count}
        page={page}
        onChangePage={handlePageChange}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
      />
    </Paper>
  );
};

UsersTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      stdNumber: PropTypes.string.isRequired,
      phoneNum: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default UsersTable;
