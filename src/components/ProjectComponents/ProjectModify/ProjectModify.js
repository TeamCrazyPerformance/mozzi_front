import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

import './ProjectModify.css';


const ProjectModify = ({ project, handleNameValue, handleContentValue, handleIsPublicValue, handleSubmit, deleteProject, }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  return (
    <div className="project-modify-component">
      <div className="project-modify-component__delete-button-wrapper">
        <Button variant="contained" color="secondary" onClick={() => setOpenDeleteDialog(true)}>
          삭제
        </Button>
      </div>

      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText>
            정말 삭제하시게요..?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={() => {
              deleteProject();
              setOpenDeleteDialog(false);
            }}
          >
            삭제
          </Button>
          <Button color="default" onClick={() => setOpenDeleteDialog(false)}>
            취소
          </Button>
        </DialogActions>
      </Dialog>

      <form className="project-modify-component__form">
        <TextField
          id="outlined-name"
          label="Project title"
          margin="normal"
          variant="outlined"
          onChange={handleNameValue}
          // value={project.name}
        />

        <TextField
          id="outlined-multiline-static"
          label="Content"
          margin="normal"
          variant="outlined"
          multiline="true"
          rows="4"
          onChange={handleContentValue}
          // value={project.content}
        />
  
        <TextField
          id="outlined-name"
          label="Development stack"
          margin="normal"
          variant="outlined"
          multiline="true"
          rows="1"
          onChange={handleContentValue}
          // value=""
        />

        <div className="project-modify-component__form__checkbox-wrapper">
          <Checkbox
            checked={project.isPublic}
            onChange={handleIsPublicValue}
            // value="checkedB"
            color="primary"
          />
          공개
        </div>

        <div className="project-modify-component__form__member-list-wrapper">
          <List>
            {project.members.map(member => (
              <ListItem>
                <ListItemText
                  primary={member}
                />
              </ListItem>
            ))}
          </List>
          <Button
            className="project-modify-component__form__member-list-wrapper__member-add-button"
            variant="contained"
            color="primary"
          >
            +
          </Button>
        </div>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          완료
        </Button>
      </form>
    </div>
  );
};

ProjectModify.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    members: PropTypes.array.isRequired,
    isPublic: PropTypes.bool.isRequired,
  }).isRequired,
  handleNameValue: PropTypes.func.isRequired,
  handleContentValue: PropTypes.func.isRequired,
  handleIsPublicValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

export default ProjectModify;
