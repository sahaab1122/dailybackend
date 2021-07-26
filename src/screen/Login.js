// import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../components/Logo/logos.png";
import { _login } from "../store/middlewares/authMiddleware";
import "./login.css";
import React from 'react';
import Loading from '../components/Loading'
import App from "../App";



class Login extends React.Component {

    state = {
        email: 'sahaabsabir6@gmail.com',
        password: '1234',
        checkbox: '',
        loading: true,
    }




    login = async (e) => {
        e.preventDefault()
        // this.props.setLoading(true)
        let res = await this.props._login({
            email: this.state.email.trim(),
            password: this.state.password.trim()
        })
        if (res.success === true) {
            // window.location ="/App"

            // if (this.props.admin) {
            //     this.props.admin()
            // }
            // else {
            //     window.history.back()

            // }
        }
        // this.props.setLoading(false)
    }

    render() {
        return (
            <div style={{display:"flex" ,alignItems:"center",  justifyContent:"center",height:"100%",width:"100%"}}>

                <form onSubmit={this.login}style={{height:'100%'}} >
                    <div class="form-group">
                        <label for="Email">Email address</label>
                        <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="email" class="form-control form-control-sm" id="Email" aria-describedby="emailHelp" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        {/* <a href="#" style={{ float: "right", fontSize: "12px" }}>Forgot password?</a> */}
                        <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="password" class="form-control form-control-sm" id="password" required />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#960200' }} class="btn btn-primary btn-block">{this.props.Loading ? <Loading color="#fffa" /> : "Login"}</button>

                   
                </form>
            </div>
        )
    }

}



const mapState = state => {
    return {
        logged: state.authReducer.logged,
        // loading: state.globalReducer.loading,
    }
}
const mapDispatch = dispatch => {
    return {
        _login: (param) => dispatch(_login(param)),
        // setLoading: (bol) => dispatch(set_loading(bol)),
    }
}

export default connect(mapState, mapDispatch)(Login)