import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination'

const ProjectTable = ({projects, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage})=>{
  
  const emptyRows = rowsPerPage-projects.slice(page*rowsPerPage, (page+1)*rowsPerPage).length;
  
  return(
    <Table>
      
      <TableBody>
        {projects.slice(page*rowsPerPage, (page+1)*rowsPerPage).map(project =>(
            <TableRow id={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.author}</TableCell>
              <TableCell>{project.date}</TableCell>
            </TableRow>
          )
        )}
        {emptyRows > 0 && (
          <TableRow style={{ height: 48 * emptyRows }}>
            <TableCell colSpan={3} />
          </TableRow>
        )}
      </TableBody>
      
      <TableFooter>
        <TableRow id='tablePaginationRow'>
          <TablePagination
            page={page}
            rowsPerPage={rowsPerPage}
            count={projects.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    
    </Table>
  )
}




ProjectTable.propTypes = {
  page : PropTypes.number.isRequired,
  rowsPerPage : PropTypes.number.isRequired,
  projects : PropTypes.array.isRequired,
  handleChangePage : PropTypes.func.isRequired,
  handleChangeRowsPerPage : PropTypes.func.isRequired
};

export default ProjectTable;