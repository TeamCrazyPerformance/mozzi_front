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
    id: "projectName",
    numeric: false,
    disablePadding: true,
    label: "Project Name"
  },
  {
    id: "projectLeader",
    numeric: true,
    disablePadding: false,
    label: "Project Leader"
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

const ProjectsTableStyles = makeStyles(theme => ({
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

const ProjectsTable = props => {
  const {
    data,
    page,
    count,
    rowsPerPage,
    handlePageChange,
    moveToProjectPage
  } = props;
  const {
    rootClassName,
    tableClassName,
    tableWrapperClassName,
    tableRowClassName
  } = ProjectsTableStyles();
  const emptyRows = rowsPerPage - data.length;

  return (
    <Paper className={rootClassName}>
      <div className={tableWrapperClassName}>
        <Table className={tableClassName} aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={rowsPerPage} />
          <TableBody>
            {data.map(project => (
              <TableRow
                hover
                key={project.projectId}
                className={tableRowClassName}
                onClick={() => moveToProjectPage(project.projectId)}
              >
                <TableCell align="center">{project.projectName}</TableCell>
                <TableCell align="center">{project.projectLeader}</TableCell>
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
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handlePageChange}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
      />
    </Paper>
  );
};

ProjectsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      projectId: PropTypes.string.isRequired,
      projectName: PropTypes.string.isRequired,
      projectLeader: PropTypes.string.isRequired
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  moveToProjectPage: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default ProjectsTable;
