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
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Exam name"
  },
  {
    id: "major",
    numeric: true,
    disablePadding: false,
    label: "Major"
  },
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "year"
  },
  {
    id: "professor",
    numeric: true,
    disablePadding: false,
    label: "Professor"
  },
  {
    id: "authorId",
    numeric: true,
    disablePadding: false,
    label: "Author id"
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
  },
  tableRowClassName: {
    cursor: "pointer"
  }
}));

const ExamsTable = props => {
  const {
    data,
    page,
    count,
    rowsPerPage,
    moveToEaxmPage,
    handlePageChange
  } = props;
  const {
    rootClassName,
    tableClassName,
    tableWrapperClassName,
    tableRowClassName
  } = ExamsTableStyles();
  const emptyRows = rowsPerPage - data.length;

  return (
    <Paper className={rootClassName}>
      <div className={tableWrapperClassName}>
        <Table className={tableClassName} aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={rowsPerPage} />
          <TableBody>
            {data.map(exam => (
              <TableRow
                hover
                key={exam.examId}
                className={tableRowClassName}
                onClick={() => moveToEaxmPage(exam.examId)}
              >
                <TableCell align="center">{exam.name}</TableCell>
                <TableCell align="center">{exam.major}</TableCell>
                <TableCell align="center">{exam.year}</TableCell>
                <TableCell align="center">{exam.professor}</TableCell>
                <TableCell align="center">{exam.authorId}</TableCell>
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
        count={count}
        rowsPerPage={rowsPerPage}
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
      examId: PropTypes.string.isRequired,
      authorId: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
      semester: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      professor: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  moveToEaxmPage: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default ExamsTable;
