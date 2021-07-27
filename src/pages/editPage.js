import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@material-ui/core';
import { UsersContext } from '../components/context';
import { withRouter } from 'react-router';

class editPage extends React.Component {
  static contextType = UsersContext;

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      // fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      //     .then(response => response.json())
      //     .then(result => this.setState({ userData: result }, () => {
      //         console.log(this.state.userData)
      //     }))
      //     .catch(err => console.log(err))

      let tempData = this.context.users.filter(
        (item, index) => item.id == this.props.match.params.id
      );
      this.setState({ userData: tempData[0] });
    }
  }

  handleSubmit = (event, values) => {
    event.preventDefault();
    if (this.props.location.pathname.includes('edit')) {
      for (let i = 0; i < this.context.users.length; i++) {
        if (this.context.users[i].id === values.userid) {
          this.context.users[i].name = values.name;
          this.context.users[i].username = values.username;
          this.context.users[i].email = values.email;
          this.context.users[i].website = values.website;
          this.context.users[i].phone = values.phone;
        }
      }
    }

    if (this.props.location.pathname.includes('createuser')) {
      this.context.users.push({
        id: this.context.users.length + 1,
        name: values.name,
        username: values.username,
        email: values.email,
        website: values.website,
        phone: values.phone
      });
    }

    // localStorage.setItem('userData', JSON.stringify(values))
    this.props.history.replace('/users');
  };
  render() {
    return (
      <UsersContext.Provider
        value={{
          users: this.context.users
        }}
      >
        <div>
          <Formik
            enableReinitialize={true}
            initialValues={{
              userid: this.state.userData.id,
              name: this.state.userData.name,
              email: this.state.userData.email,
              phone: this.state.userData.phone,
              website: this.state.userData.website,
              username: this.state.userData.username
            }}
            validate={values => {
              const errors = {};

              if (!values.userid) {
                errors.userid = 'UserId is required';
              }

              if (!values.name) {
                errors.name = 'Name is required';
              }

              if (!values.email) {
                errors.email = 'Email is required';
              }

              return errors;
            }}
          >
            {({ values }) => {
              return (
                <Form onSubmit={event => this.handleSubmit(event, values)}>
                  <div className="formInput">
                    <label>UserId: </label>
                    <br />
                    <Field
                      disabled={
                        this.props.location.pathname.includes('edit')
                          ? false
                          : true
                      }
                      type="text"
                      name="userid"
                      value={values.userid}
                    />
                    <ErrorMessage
                      name="userid"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="formInput">
                    <label>Name: </label>
                    <br />
                    <Field type="text" name="name" value={values.name} />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="formInput">
                    <label>Email: </label>
                    <br />
                    <Field type="text" name="email" value={values.email} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="formInput">
                    <label>username: </label>
                    <br />
                    <Field
                      type="text"
                      name="username"
                      value={values.username}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="formInput">
                    <label>Phone: </label>
                    <br />
                    <Field type="text" name="phone" value={values.phone} />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="formInput">
                    <label>Website: </label>
                    <br />
                    <Field type="text" name="website" value={values.website} />
                    <ErrorMessage
                      name="website"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="formInput">
                    <Button variant="contained" type="submit" color="primary">
                      {this.props.location.pathname.includes('edit')
                        ? 'Update User'
                        : 'Create User'}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </UsersContext.Provider>
    );
  }
}

export default withRouter(editPage);
