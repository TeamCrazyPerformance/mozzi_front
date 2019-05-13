import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';

const ProjectTable = ({ projects, page, limit, total, handleChangePage, handleChangeRowsPerPage }) => {
  const emptyRows = limit - projects.length;
  return (
    <Table>
      <TableBody>
        {projects.map(project => (
          <TableRow id={project.projectId}>
            <Link to={`project/${project.projectId}`}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.author}</TableCell>
              <TableCell>{project.date}</TableCell>
            </Link>
          </TableRow>
        ))}

        {emptyRows > 0 && (
          // fill empty rows
          <TableRow style={{ height: 48 * emptyRows }}>
            <TableCell colSpan={3} />
          </TableRow>
        )}
      </TableBody>

      <TableFooter>
        <TableRow id="tableFooter">
          <Link to="project/create">
            <Button variant="contained" color="primary">
            생성
            </Button>
          </Link>
          <TablePagination
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10]}
            count={total}
            SelectProps={{
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};


ProjectTable.propTypes = {
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  projects: PropTypes.array.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default ProjectTable;
