import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const ExamTableCell = (props) => {
    const {data, classes} = props;

    return (
        <TableRow>
            <TableCell>
                {data.examId}
            </TableCell>
        </TableRow>
    );
}

export default ExamTableCell;