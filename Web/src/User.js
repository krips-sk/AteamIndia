import React from 'react';
import { Link } from "react-router-dom";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Category: "",
            Sub_category: "",
            header: ["No", "Product", "Category", "favorites", "Price"],
            tData: ["1", "Shirt", "Clothings", "yes", "599"],
        }
    }

    render() {
        return (
            <div className="fluid-container h-100">
                <div className="login-bg d-flex justify-content-center">
                    <div className="container">

                        <div className="m-4 ">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1>User</h1>
                                </div>
                                <div className="col-lg-6 text-right pt-2 pb-2">
                                    <Link to="/login">
                                        <button className="btn btn-primary p-2 w-25" > logout </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card p-2 mt-4 mb-4" >

                            <table >
                                <thead>
                                    <tr className="d-flex">
                                        {
                                            this.state.header.map(item => (
                                                <th className="col border" >{item}</th>
                                            ))

                                        }

                                    </tr>
                                </thead>



                                <tbody>
                                    <tr className="d-flex">
                                        {this.state.tData.length > 0 ?
                                            this.state.tData.map(item => (
                                                <td className="col border" >{item}</td>
                                            ))
                                            : <tr> <td>No Product Found</td></tr>

                                        }

                                    </tr>

                                </tbody>
                            </table>

                        </div>




                    </div>
                </div>
            </div>
        )
    }
}

export default User