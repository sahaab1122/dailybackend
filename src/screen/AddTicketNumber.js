
import React from "react";
import '../styles/adminlte.min.css'
import '../styles/dataTables.bootstrap4.min.css'
import '../styles/responsive.bootstrap4.min.css'
import '../styles/index.css'
// import ResponsiveDrawer from './ResponsiveDrawer'
// import { Alert } from '@material-ui/lab';
// import { connect } from "react-redux";
// import { set_loading } from "../Store/actions/globalActions";
import firebase from "firebase"
// import api from "../services/api";
// import { _getCategories } from "../Store/middlewares/appMiddleware";
// import { Loading } from '../components/Icons'
import { ProgressBar } from 'react-bootstrap'
import SideNavigation from '../components/SideNavigation'
import api from "../api/api";
import path from "../api/path";
import { connect } from "react-redux";
import { _getTickets, _getTicketsWinner } from "../store/middlewares/appMiddleware";

class AddTicketNumber extends React.Component {
    constructor() {
        super();

        this.state = {
            number: "", winner: []

        }
    }
    Search = async (e) => {
        e.preventDefault()
        // if (this.state.number === this.props.ticketswinner) {
        //     return alert('winnner')
        // }
        let res = await this.props._getTicketsWinner(this.state.number)
        if (res) {
            this.setState({ winner: res })
        }


    }



    getuser = async (e) => {
        e.preventDefault()
        // this.props.setLoading(true)
        let res = await this.props._getTicketsWinner({

        })



    }
    Winner = async () => {
        let req = {
            ticket: this.state.number, 
            user: this.state.winner [0].user._id
        }

        
            let response = await api(path.winner, "POST", req)
            // alert(response.message)
            console.log(response.message)
            alert(response.message)
         



    }
    render() {

        console.log(this.props.ticketswinner)
        // console.log(this.props.categories)



        return (
            <div className="flexible-content">
                <SideNavigation />
                <main id="content" className="p-5">
                    <div className="dashboard">
                        {/* <ResponsiveDrawer /> */}
                        <section class="content-admin" style={{ paddingTop: 100, position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                                <ProgressBar now={this.state.progress} style={{ opacity: this.state.progress, height: 5 }} />
                            </div>

                            {
                                this.state.message &&
                                <div style={{ position: 'absolute', top: 0 }}>
                                    {/* <Alert onClose={() => this.setState({ message: false })}>{this.state.message}</Alert> */}
                                </div>
                            }
                            <div class="container-fluid">
                                <form onSubmit={this.Search} >
                                    <div class="row">
                                        <div class="col-md-12">
                                            <input type="hidden" name="_token" value="hrxeTL0t5hnBVb8Q3Q4vTc42CXU88qyd320Luzkv"></input>

                                            <div class="form-group col-md-6">
                                                <label>Add Six Numbers</label>
                                                <input type="number" name="number" onChange={(e) => this.setState({ number: e.target.value })} placeholder="1 2 3 4 5 6" required class="form-control"  ></input>


                                            </div>

                                            <button type="submit" class="btn btn-success">search</button>
                                            <button class="btn btn-danger"  onClick={this.Winner} >winner</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="example1" class="table table-bordered table-hover dataTable no-footer dtr-inline" role="grid" aria-describedby="example1_info">
                                        <thead>
                                            <tr role="row">
                                                <th className='center' rowspan="1" colspan="1"  >No.</th>
                                                <th className='center' rowspan="1" colspan="1"  >Ticket no</th>
                                                <th className='center' rowspan="1" colspan="1"  >Name</th>
                                                <th className='center' rowspan="1" colspan="1"  >phone</th>
                                                <th className='center' rowspan="1" colspan="1"  >email</th>
                                                {/* <th className='center' rowspan="1" colspan="1"  >First Name</th>
                                                        <th className='center' rowspan="1" colspan="1"  >Last Name</th> */}
                                                <th className='center' rowspan="1" colspan="1"  >user Id</th>
                                                <th className='center' rowspan="1" colspan="1"  >Date</th>
                                                {/* <th className='center' rowspan="1" colspan="1"  >Date</th> */}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.winner.map((ticket, index) =>
                                                    <tr role="row" class="odd">
                                                        <td className='center' class="sorting_1">{index + 1}</td>
                                                        {/* <td className='center' style={{ textAlign: 'center' }}><img style={{ width: 100 }} src={tickets.avatar} alt='noIamge' /></td> */}

                                                        <td className='center'>{ticket.ticket}</td>
                                                        <td className='center'>{ticket.user.name}</td>
                                                        <td className='center'>{ticket.user.phone}</td>
                                                        <td className='center'>{ticket.user.email}</td>
                                                        <td className='center'>{ticket._id}</td>
                                                        <td className='center'>{ticket.ticketDate}</td>
 
                                                    </tr>
                                                )
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        )

    }
}

const mapState = state => {
    return {
        ticketswinner: state.appReducer.ticketswinner,

    }
}
const mapDispatch = dispatch => {
    return {
        _getTicketsWinner: (num) => dispatch(_getTicketsWinner(num))

    }
}

export default connect(mapState, mapDispatch)(AddTicketNumber)