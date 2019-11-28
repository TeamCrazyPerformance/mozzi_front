import React from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const ProjectJoinRequest = ({ joinRequestUsers }) => {
  let count = 0;
  return (
    <Table>
      <TableBody>
        {joinRequestUsers.map(user => (
          <TableRow>
            <TableCell>{++count}</TableCell>
            <TableCell>
              {user.userName}({user.stdNumber})
            </TableCell>
            <TableCell>
              <Button variant="contained" color="primary">
                승인
              </Button>
              <Button variant="contained" color="secondary">
                거절
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

ProjectJoinRequest.propTypes = {
  joinRequestUsers: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    stdNumber: PropTypes.number.isRequired
  })
};

export default ProjectJoinRequest;
