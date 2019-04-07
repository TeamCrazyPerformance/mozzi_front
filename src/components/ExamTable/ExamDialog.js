import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';

import ExamDownload from './ExamDownload';
import ExamRevise from './ExamRevise';
import ExamDelte from './ExamDelete';
import ExamDialogContent from './ExamDialogContent';

const ExamDialog = (props) => {
    const {data, classes} = props;

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
                View
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {data.year + '_' + data.term + '_' + data.subject + '_' + data.professor}
                </DialogTitle>
                <DialogContent>
                    <ExamDialogContent data={data}></ExamDialogContent>
                </DialogContent>
                <DialogActions>
                    <ExamDownload></ExamDownload>
                    <ExamRevise></ExamRevise>
                    <ExamDelte></ExamDelte>
                    <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ExamDialog;