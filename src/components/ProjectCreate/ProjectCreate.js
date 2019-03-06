import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const ProjectCreate = ({isPublic, handleNameValue, handleSummaryValue, handleIsPublicValue}) => {
	return(
		<div className="project-create-component">
			<form>
				<TextField
					id="outlined-name"
					label="Project Name"
					margin="normal"
					variant="outlined"
					onChange={handleNameValue}
				/>
				
				<TextField
					id="outlined-multiline-static"
					label="Project Summary"
					margin="normal"
					variant="outlined"
					multiline="true"
					rows = "4"
					onChange={handleSummaryValue}
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
}

ProjectCreate.propTypes = {
	handleNameValue : PropTypes.func.isRequired,
	handleSummaryValue : PropTypes.func.isRequired
};

export default ProjectCreate;