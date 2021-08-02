import React from 'react';
import logo from "../assets/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { logout } from '../store/actions/authActions';
import { connect } from 'react-redux';

const TopNavigation = (props) => {

    const logout=()=>{
        window.history.go(-(window.history.length-1))
        props.logout()
    }

    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#" className="logo-wrapper waves-effect">
                <img alt="Grocery Cart" className="img-fluid" src={logo} />
            </a>
            <MDBListGroup className="list-group-flush">
                <a href="/PrizeImages" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-shopping-basket" className="mr-3" />
                        Prize images
                    </MDBListGroupItem>
                </a>
                <a href="/AddPrizes" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Add Prize Images
                    </MDBListGroupItem>
                </a>

                <a href="/Winner" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-bars" className="mr-3" />
                       Winners
                    </MDBListGroupItem>
                </a>
                <a href="/AddTicketNumber" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Add Ticket number
                    </MDBListGroupItem>
                </a>
                {/* <a href="/order" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-shopping-cart" className="mr-3" />
                        Order
                    </MDBListGroupItem>
                </a> */}
                <a href="/user" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Users
                    </MDBListGroupItem>
                </a>

                <div onClick={logout} className="row justify-content-center mt-5 mr-3">
                    <MDBBtn className="Btn">Log out</MDBBtn>
                </div>
            </MDBListGroup>
        </div>
        
    );
}

const mapState=()=>{
    
}
const mapDispatch=(dispatch)=>{
    return {
        logout:()=>dispatch(logout())
    }

}

export default connect(mapState,mapDispatch) (TopNavigation);