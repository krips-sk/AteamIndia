import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mail: "",
            pwd: "",
            id: 0
        }
    }
    signup() {
        var data ={            
                "email":$('#mail').val(),
                "name":$('#username').val(),
                "password":$('#password').val()                
        }        
        
        if( ($('#username').val()!="" ) && ($('#mail').val()!="" ) && ($('#crm_password').val()==$('#password').val())  ){
            axios.post("http://localhost:5000/api/Users?access_token=nfpWB4hI5hD2EawBE4ic3gwnyGZLkA3443w7Ys8ZgEEpJRpm0P3HD9PEHSjcbJ88", data).then( res=>{
                if(res) {
                    alert("Registration Success");
                }
                else {
                    alert("Registration Failed")
                }
            }).catch(error => console.log( error));
        }
    }


    render() {
        return (
            <div className="fluid-container h-100">
                <div className="login-bg d-flex align-items-center justify-content-center">
                    <div className="logindiv">
                        <div className="card ">
                            <div className="card-body">
                                <div className="container">
                                    <h2 className="text-center">Sign Up</h2>
                                    <form id="loginform">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <input className="form-control" id="username" required placeholder="Full Name" type="text" ></input>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>E-Mail</label>
                                                    <input className="form-control" id="mail" required placeholder="Full Name" type="text" ></input>
                                                </div>
                                            </div>

                                            <div className="col-md-12 ">
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input className="form-control " id="password" required id="examplePassword" placeholder="********" type="password" ></input>
                                                </div>
                                            </div>

                                            <div className="col-md-12 ">
                                                <div className="form-group">
                                                    <label>Confrim Password</label>
                                                    <input className="form-control " id="crm_password" required id="examplePassword" placeholder="********" type="password" ></input>
                                                </div>
                                            </div>

                                            <div className="col-md-12 pr-md-1">
                                                <label style={{ color: 'red' }} >Message</label>
                                            </div>


                                        </div>
                                        <div className="mr-auto width-fit mr-2 mb-2">

                                            <button className="btn btn-primary button" type="submit" onClick={() => this.signup()} >
                                                Sign Up
                          </button>

                                        </div>

                                        <Link to="/login">
                                            <span className="signup cursor-pointer"> Click here to Login</span>
                                        </Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        )
    }
}
export default Signup
