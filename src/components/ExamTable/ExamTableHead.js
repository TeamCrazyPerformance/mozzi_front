import React from 'react';


import { withStyles } from '@material-ui/core/styles';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

const rows = [
    { id: 'examId', numeric: true, disablePadding: true, label: 'examId' },
    { id: 'major', numeric: false, disablePadding: true, label: 'major' },
    { id: 'grade', numeric: false, disablePadding: true, label: 'grade' },
    { id: 'semester', numeric: false, disablePadding: true, label: 'semester' },
    { id: 'term', numeric: false, disablePadding: true, label: 'term' },
    { id: 'subject', numeric: false, disablePadding: true, label: 'subject' },
    { id: 'professor', numeric: false, disablePadding: true, label: 'professor' },
]

const styles = theme => ({
    cell: {
        backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    },
})

const ExamTableHead = props => {
    const {classes} = props;
    return (
        <TableHead>
            <TableRow>
                {rows.map(row => (
                    <TableCell 
                        className={classes.cell}
                        key={row.id}
                        align="center"    
                    >
                        {row.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default withStyles(styles)(ExamTableHead);