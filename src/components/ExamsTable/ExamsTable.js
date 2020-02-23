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

const examsTableRows = [
  {
    id: "examName",
    numeric: false,
    disablePadding: true,
    label: "Exam Name"
  },
  {
    id: "Professor",
    numeric: true,
    disablePadding: false,
    label: "Professor"
  }
];

const EnhancedTableHead = () => (
  <TableHead>
    <TableRow role="checkbox">
      {examsTableRows.map(row => (
        <TableCell key={row.id} align="center">
          {row.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const ExamsTableStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  tableClassName: {
    minWidth: 400
  },
  tableWrapperClassName: {
    overflowX: "auto"
  }
}));

const examTableRow = exam => (
  <TableRow hover key={exam.examId} onClick={() => {}}>
    <TableCell align="center">{exam.examName}</TableCell>
    <TableCell align="center">{exam.professor}</TableCell>
  </TableRow>
);

const ExamsTable = props => {
  const { data, page, count, total, handlePageChange } = props;
  const {
    rootClassName,
    tableClassName,
    tableWrapperClassName
  } = ExamsTableStyles();
  const emptyRows = count - data.length;

  return (
    <Paper className={rootClassName}>
      <div className={tableWrapperClassName}>
        <Table className={tableClassName} aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={count} />
          <TableBody>
            {data.map(exam => examTableRow(exam))}
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

ExamsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      examId: PropTypes.number.isRequired,
      authorId: PropTypes.number.isRequired,
      year: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      garde: PropTypes.number.isRequired,
      semeter: PropTypes.number.isRequired,
      term: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      professor: PropTypes.string.isRequired
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default ExamsTable;
