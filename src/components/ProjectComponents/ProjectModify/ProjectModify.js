import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";


const ProjectModify = ({project, handleNameValue, handleSummaryValue, handleIsPublicValue}) => {
  return(
    <div className="project-modify-component">
      <form className="project-modify-component__form">
        <TextField
          id="outlined-name"
          label="Project Name"
          margin="normal"
          variant="outlined"
          onChange={handleNameValue}
          value={project.name}
        />
        
        <TextField
          id="outlined-multiline-static"
          label="Project Summary"
          margin="normal"
          variant="outlined"
          multiline="true"
          rows = "4"
          onChange={handleSummaryValue}
          value={project.content}
        />
        
        <div className="project-modify-component__form__checkbox-wrapper">
          <Checkbox
            checked={project.isPublic}
            onChange={handleIsPublicValue}
            value="checkedB"
            color="primary"
          />
          공개
        </div>
        
        <div className="project-modify-component__form__member-list-wrapper">
          <List>
            {project.members.map((member)=>
              <ListItem>
                <ListItemText
                  primary={member}
                />
              </ListItem>
            )}
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
        >
          완료
        </Button>
      
      
      </form>
    </div>
  )
}

ProjectModify.propTypes = {
  project : PropTypes.shape({
    name : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    members : PropTypes.array.isRequired,
    isPublic : PropTypes.bool.isRequired
  }),
  handleNameValue : PropTypes.func.isRequired,
  handleSummaryValue : PropTypes.func.isRequired,
};

export default ProjectModify;