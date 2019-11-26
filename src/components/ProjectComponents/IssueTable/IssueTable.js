import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const IssueTable = ({ projectIssues, projectId }) => (
  <Table>
    <TableBody>
      {projectIssues.map((issue) => (
        <TableRow id={issue.id}>
          <Link to={`./${issue.id}`}>
            <TableCell>{issue.title}</TableCell>
            <TableCell>{issue.authorName}</TableCell>
            <TableCell>{issue.date}</TableCell>
          </Link>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow id="tableFooter">
        <Link to={`project/${projectId}/issueCreate`} />
      </TableRow>
    </TableFooter>
  </Table>
);

IssueTable.propTypes = {
  projectIssues: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default IssueTable;
