import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const ExamDialogContent = (props) => {
    const {data, classes} = props;

    return (
        <List>
            <ListItem>
                <ListItemText>
                    examId
                </ListItemText>
                <ListItemText>
                    {data.examId}
                </ListItemText>
                <ListItemText>
                    major
                </ListItemText>
                <ListItemText>
                    {data.major}
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    grade
                </ListItemText>
                <ListItemText>
                    {data.grade}
                </ListItemText>
                <ListItemText>
                    semester
                </ListItemText>
                <ListItemText>
                    {data.semester}
                </ListItemText>
                <ListItemText>
                    term
                </ListItemText>
                <ListItemText>
                    {data.term}
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    subject
                </ListItemText>
                <ListItemText>
                    {data.subject}
                </ListItemText>
                <ListItemText>
                    professor
                </ListItemText>
                <ListItemText>
                    {data.professor}
                </ListItemText>
            </ListItem>
        </List>
    );
}

export default ExamDialogContent;