import React from 'react';
import { TableRow, TableCell} from '@material-ui/core';

import ExamDialog from './ExamDialog';
import Exam from '../../containers/Exam/Exam';

const ExamTableCell = (props) => {
    const {data, classes} = props;

    return (
        <TableRow>
            <TableCell align = "center">
                {data.examId}
            </TableCell>
            <TableCell align = "center">
                {data.major}
            </TableCell>
            <TableCell align = "center">
                {data.grade}
            </TableCell>
            <TableCell align = "center">
                {data.semester}
            </TableCell>
            <TableCell align = "center">
                {data.term}
            </TableCell>
            <TableCell align = "center">
                {data.subject}
            </TableCell>
            <TableCell align = "center">
                {data.professor}
            </TableCell>
            <TableCell align = "center">
                <ExamDialog data={data}></ExamDialog>
            </TableCell>
        </TableRow>
    );
}

export default ExamTableCell;