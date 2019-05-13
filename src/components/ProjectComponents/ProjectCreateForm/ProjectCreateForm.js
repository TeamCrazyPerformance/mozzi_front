import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const ProjectCreateForm = ({handleSubmit, handleNameValue, handleContentValue, handleIsPublicValue, isPublic}) => {
	return(
		<div className="project-create-component">
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined-name"
					label="Project Name"
					margin="normal"
					variant="outlined"
					onChange={handleNameValue}
				/>
				
				<TextField
					id="outlined-multiline-static"
					label="Project Content"
					margin="normal"
					variant="outlined"
					multiline="true"
					rows = "4"
					onChange={handleContentValue}
				/>
				
				<div className="project-create-component__checkbox-wrapper">
					<Checkbox
						checked={isPublic}
						onChange={handleIsPublicValue}
						value="checkedB"
						color="primary"
					/>
					공개
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
};

ProjectCreateForm.propTypes = {
	handleNameValue : PropTypes.func.isRequired,
	handleContentValue : PropTypes.func.isRequired,
	handleIsPublicValue : PropTypes.func.isRequired
};

export default ProjectCreateForm;