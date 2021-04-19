import React from 'react';
import './index.css';
import axios from 'axios';
import * as $ from 'jquery';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pwd: "",
      message:false
    }
  }
  doLogin() {
    var data= {
      "email":$('#exampleEmail').val(),
      "password":$('#examplePassword').val()
    }

    var urlencoded = new URLSearchParams();
        urlencoded.append("email", $('#exampleEmail').val() );
        urlencoded.append("password", $('#examplePassword').val() );

    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
  };

  fetch("http://localhost:5000/api/Users/login?access_token=nfpWB4hI5hD2EawBE4ic3gwnyGZLkA3443w7Ys8ZgEEpJRpm0P3HD9PEHSjcbJ88", requestOptions)
      .then(response => response.text() )
      .then(result => {
          console.log(result);
          this.setState({message: true });
        
      })
      .catch(error => console.log('error', error));


    // axios.post("http://localhost:5000/api/Users/login?access_token=nfpWB4hI5hD2EawBE4ic3gwnyGZLkA3443w7Ys8ZgEEpJRpm0P3HD9PEHSjcbJ88" , data).then( response => response.json() )
    // .then(result=>{
    //   console.log(result);
    // }) 
    
    
    // .catch(error => {
    //   console.log(error);
    //   throw error;
    // });
  }

  editUser = (id) => {
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + this.props.AccessToken);

    var requestOptions = {
        method: 'POST',
        
        redirect: 'follow'
    };

    // fetch("http://localhost:5000/api/Users/login" + id, requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result);
           
           
          
    //     })
    //     .catch(error => console.log('error', error));
}
 

  render() {
    if(this.state.message == false) {
    var template = <div className="fluid-container h-100">
      <div className="login-bg d-flex align-items-center justify-content-center">
        <div className="logindiv">
          <div className="card ">
            <div className="card-body">
              <div className="container">
                <h2 className="text-center">Login</h2>
                <form id="loginform">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Username</label>
                        <input className="form-control"  id="exampleEmail" required placeholder="myemail@email.com" type="text" ></input>
                      </div>
                    </div>

                    <div className="col-md-12 ">
                      <div className="form-group">
                        <label>Password</label>
                        <input className="form-control "  required id="examplePassword" placeholder="********" type="password" ></input>
                      </div>
                    </div>

                    <div className="col-md-12 pr-md-1">
                      <label style={{ color: 'red' }} >Message</label>
                    </div>


                  </div>
                  <div className="mr-auto width-fit mr-2 mb-2">
                    
                      <button className="btn btn-primary button" onClick={() => this.doLogin()} >
                        Submit
                    </button>
                    
                  </div>
                  
                    <Link to="/signup">
                      <span className="signup cursor-pointer">Sign Up</span>
                    </Link>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>




    return template
    }
    else {
        <div>
          <h1> login output </h1>
        </div>
    }
  }
}

export default Login

// ReactDOM.render(
//   <React.StrictMode>
//     <Login />,
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );


