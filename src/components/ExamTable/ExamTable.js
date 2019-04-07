import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import { Paper, TableBody } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ExamTableHead from './ExamTableHead';
import ExamTableCell from './ExamTableCell';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
});


const ExamTable = props => {
    const {data, page, count, total, classes} = props;
    return (
      <Paper>
        <ExamTableHead/>
        <TableBody>
          {/* <ExamTableCell
            data={data}
          /> */}
          하이하이
        </TableBody>
      </Paper>
    );
}

ExamTable.prototype = {
  data: PropTypes.arrayOf(PropTypes.shape({
    examId: PropTypes.number.isRequired,
    examlink: PropTypes.string.isRequired,
    author: PropTypes.number.isRequired,
    userlink: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    semester: PropTypes.number.isRequired,
    term: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    professor: PropTypes.string.isRequired,
  })),
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(ExamTable);