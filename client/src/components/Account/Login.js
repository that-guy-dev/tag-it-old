import React, { PropTypes, Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { browserHistory } from 'react-router';

class Login extends Component {

  render() {

    const onSuccess = (response) => {      
      sessionStorage.token = response;
      browserHistory.push('/');      
    }

    const onFailure = (response) => {
      console.log(response);      
    }
    
    return (
      <div>
        <GoogleLogin                    
          clientId={'293030943336-m2mp3febsegct62ervri924enc7f05v7.apps.googleusercontent.com'}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          approvalPrompt="force"
          responseType="id_token"
          isSignedIn
        />
      </div>
    );
  }
}

export default Login;