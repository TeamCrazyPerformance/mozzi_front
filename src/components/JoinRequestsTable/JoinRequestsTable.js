import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Student Name"
  },
  {
    id: "studenNumber",
    numeric: true,
    disablePadding: false,
    label: "Student Number"
  },
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID"
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
      <TableCell align="center">Approve/Reject</TableCell>
    </TableRow>
  </TableHead>
);

const JoinRequestTableStyles = makeStyles(theme => ({
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
  buttonPaddingClassName: {
    marginRight: 10
  }
}));

const JoinRequestTable = props => {
  const {
    data,
    page,
    count,
    total,
    handlePageChange,
    joinRequestReview
  } = props;
  const {
    rootClassName,
    tableClassName,
    tableWrapperClassName,
    buttonPaddingClassName
  } = JoinRequestTableStyles();
  const emptyRows = count - data.length;

  return (
    <Paper className={rootClassName}>
      <div className={tableWrapperClassName}>
        <Table className={tableClassName} aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={count} />
          <TableBody>
            {data.map(student => (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={student.stdNumber}
              >
                <TableCell align="center">{student.name}</TableCell>
                <TableCell align="center">{student.studentNumber}</TableCell>
                <TableCell align="center">{student.id}</TableCell>
                <TableCell align="center">
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="Approve"
                    className={buttonPaddingClassName}
                    onClick={() =>
                      joinRequestReview({
                        userId: student.userId,
                        currentPage: page,
                        joinRequestType: "approve"
                      })
                    }
                  >
                    <Done />
                  </Fab>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="Reject"
                    onClick={() =>
                      joinRequestReview({
                        userId: student.userId,
                        currentPage: page,
                        joinRequestType: "reject"
                      })
                    }
                  >
                    <Close />
                  </Fab>
                </TableCell>
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

JoinRequestTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      stdNumber: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  joinRequestReview: PropTypes.func.isRequired
};

export default JoinRequestTable;
