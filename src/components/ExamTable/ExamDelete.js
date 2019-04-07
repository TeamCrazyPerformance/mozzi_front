import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';

const ExamDelete = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Tooltip title="Delete">
                <IconButton aria-label="Delete" onClick={() => setOpen(true)}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                ria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>삭제</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        정말로 삭제?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={() => setOpen(false)}>
                        Yes
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ExamDelete;