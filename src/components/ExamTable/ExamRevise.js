    
import React from 'react';
import Build from '@material-ui/icons/Build';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const ExamRevise = (props) => {
    return (
        <Tooltip title="Revise">
            <IconButton aria-label="Revise">
                <Build/>
            </IconButton>
        </Tooltip>
    );
}

export default ExamRevise;