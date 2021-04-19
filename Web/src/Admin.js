import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';


class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            header: ["S.no", "Category", "Product Name", "Price", "Description", "Action"],
            tData: [],
            i: 0,
        }
    }

    componentDidMount() {
        this.addProduct();
      }

    
    addProduct() {
        var data = {
            "category": $('#categry').val(),
            "product_name": $('#name').val(),
            "product_price": $('#price').val(),
            "description": $('#descrip').val()
        }
        // axios.post("",data).then( res => {

        // })
        // var rawdata = [$('#categry').val(), $('#name').val(), $('#price').val(), $('#descrip').val()];
        // this.state.tData.push(rawdata);

        var data_typ = JSON.stringify([data]);
        data_typ = JSON.parse(data_typ);
        data_typ.forEach((element, index) => {
            var rawdata = {};
            rawdata["S.no"] = ((this.state.i) + 1).toString();
            rawdata["Category"] = element.category;
            rawdata["Product Name"] = element.product_name;
            rawdata["Price"] = element.product_price;
            rawdata["Description"] = element.description;
            // rawdata.Action = <div className="actionTab">
            //     <i className="fas fa-edit mr-3 cursor-pointer" title="Edit" onClick={() => this.addNewBranch(element.dropdown_id, localStorage.UserId, element.type, element.key_value_en, element.key_value_ma)}></i>
            //     <i className="fas fa-trash mr-3 cursor-pointer" id="deleted" title="Delete" onClick={() => this.DeleteConfirm(element.dropdown_id, localStorage.UserId)}></i>
            // </div>
            this.state.tData.push(rawdata);
            this.setState({
                tData: rawdata
              });
        })



    }

    render() {
        
        return (
            <div className="fluid-container h-100">
                <div className="login-bg d-flex justify-content-center">
                    <div className="container">

                        <div className="m-4 ">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1>Admin</h1>
                                </div>
                                <div className="col-lg-6 text-right pt-2 pb-2">
                                    <Link to="/login"><button className=" btn btn-primary p-2 w-25 " > logout </button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card p-2 mt-4 mb-4" >
                            <div className="row">
                                <div className="d-flex col-md-6 mt-2 mb-2">
                                    <div className="col-md-8">

                                        <label className="w-50">Category</label>
                                        <input className="custom-input w-50" id="categry" name="telno" placeholder="Category" type="text"   ></input> <br />
                                        <label className="w-50">Product Name</label>
                                        <input className="custom-input w-50" id="name" name="rkpid" placeholder="Name" type="text"   ></input> <br />


                                    </div>
                                </div>

                                <div className="d-flex col-md-6 mt-2 mb-2">
                                    <div className="col-md-8">

                                        <label className="w-50">Product Price</label>
                                        <input className="custom-input w-50" id="price" name="i/c_no" placeholder="Price" type="text"   ></input> <br />
                                        <label className="w-50">Description</label>
                                        <input className="custom-input w-50" id="descrip" name="telno" placeholder="Description" type="text"   ></input> <br />

                                        <div className="text-right pt-2 pb-2">
                                            <button className="btn btn-primary p-2 w-50" onClick={() => this.addProduct()}> Add Product </button>
                                        </div>

                                    </div>
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
                                {/* <tbody>
                                    <tr className="d-flex">
                                        {
                                            this.state.tData.length != 0 ?
                                                this.state.tData.map((trData) => (
                                                    <td className="col border">{trData.Category}</td>


                                                    // <th  className="col border" >{trData}</th>
                                                )) :
                                                <td>No Product Found</td>
                                        }
                                    </tr>
                                </tbody> */}


                                <tbody>
                                    {
                                        this.state.tData.length > 0 ?
                                        this.state.tData.map((trData, index) => (
                                                <tr key={index} >
                                                    <td>{index + 1}</td>
                                                    <td>{trData.Category}</td>
                                                    <td>{trData.product_name}</td>
                                                    <td>{trData.product_price}</td>
                                                    <td>{trData.description}</td>  
                                                </tr>
                                            ))
                                            : <tr> <td>No Product Found</td></tr>

                                    }
                                </tbody>
                            </table>                          

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Admin