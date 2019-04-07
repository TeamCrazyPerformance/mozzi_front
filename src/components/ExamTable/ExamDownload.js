import React from 'react';
import GetApp from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const ExamDownload = (props) => {
    const {classes} = props;

    return (
        <Tooltip title="Download">
            <IconButton aria-label="Download">
                <GetApp/>
            </IconButton>
        </Tooltip>
    );
}

export default ExamDownload;