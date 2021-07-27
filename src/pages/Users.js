import React, { Component } from 'react';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter } from 'react-router-dom';
import { UsersContext } from '../components/context';

class Users extends Component {
  static contextType = UsersContext;
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    if (!this.context.users.length) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => {
          this.setState({ userData: result });
          this.context.users.push(...result);
        })
        .catch(error => console.error(error));
    }
  }

  getRowId = event => {
    let rowId = event.currentTarget.dataset.id;
    this.props.history.push(rowId ? `/user/edit/${rowId}` : `/user/createuser`);
  };

  render() {
    return (
      <UsersContext.Provider
        value={{
          users: this.state.userData
        }}
      >
        <div style={{ height: 400, width: '100%' }}>
          <Typography variant="h3">Users</Typography>
          <Grid container>
            <Grid item sm />
            <Grid item>
              <Button
                style={{ margin: '10px 0px' }}
                variant="contained"
                color="secondary"
                onClick={event => this.getRowId(event)}
              >
                Create User
              </Button>
            </Grid>
          </Grid>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody>
                {this.context.users.length
                  ? this.context.users.map(item => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          {item.id}
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.website}</TableCell>
                        <TableCell
                          data-id={item.id}
                          onClick={event => this.getRowId(event)}
                        >
                          <EditIcon style={{ cursor: 'pointer' }} />
                        </TableCell>
                      </TableRow>
                    ))
                  : this.state.userData.map(item => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          {item.id}
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.website}</TableCell>
                        <TableCell
                          data-id={item.id}
                          onClick={event => this.getRowId(event)}
                        >
                          <EditIcon style={{ cursor: 'pointer' }} />
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </UsersContext.Provider>
    );
  }
}

export default withRouter(Users);
