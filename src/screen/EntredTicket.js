import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, } from 'mdbreact';
import SideNavigation from '../components/SideNavigation'
import { connect } from 'react-redux';
import api from '../api/api'
import { _getTickets, _getUsers } from '../store/middlewares/appMiddleware';

class EntredTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        ticket: ' ',
    

    }
}
async componentDidMount(){
   let res = await this.props._getTickets()
//    console.log(this.props._getTickets)
}
getuser = async (e) => {
  e.preventDefault()
  // this.props.setLoading(true)
  let res = await this.props._getTickets({
    
      } )
     
  
  // this.props.setLoading(false)
}
  // state = {
     
  //   orderdata:[],
  
  // }
// async componentDidMount(){
//     console.log(this.props);

//     let customer = await api.getUsers()
//     console.log(customer);
//     this.setState({orderdata:customer.result})
// }

  render(){
    console.log(this.props.tickets)
    // alert(this.props.users)
  return(
    <div className = "flexible-content" >
        <SideNavigation />
        <main id="content" className="p-5">
        <div className="dashboard" style={{ paddingTop: 100 }}>
                {/* <ResponsiveDrawer /> */}
                <section class="content-admin">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <tfooter>
                                </tfooter>
                                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div class="row"><div class="col-sm-12 col-md-6">
                                        {/* <div class="dataTables_length" id="example1_length">
                                            <label>Show
                                                <select class="custom-select custom-select-sm form-control form-control-sm">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                                     entries
                                            </label>
                                        </div> */}
                                    </div>
                                        {/* <div class="col-sm-12 col-md-6">
                                            <div id="example1_filter" class="dataTables_filter">
                                                <label>Search:
                                                                 <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1"></input>
                                                </label>
                                            </div>
                                        </div> */}
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
                                                        {/* <th className='center' rowspan="1" colspan="1"  >Date</th> */}
                                                        <th className='center' rowspan="1" colspan="1"  >user Id</th>
                                                        {/* <th className='center' rowspan="1" colspan="1"  >Date</th> */}
                                                       
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.props.tickets.map((tickets, index) =>
                                                            <tr role="row" class="odd">
                                                                <td className='center' class="sorting_1">{index + 1}</td>
                                                                {/* <td className='center' style={{ textAlign: 'center' }}><img style={{ width: 100 }} src={tickets.avatar} alt='noIamge' /></td> */}
                                                                 
                                                                <td className='center'>{tickets.ticket}</td>
                                                                <td className='center'>{tickets.user.name}</td>
                                                                <td className='center'>{tickets.user.phone}</td>
                                                                <td className='center'>{tickets.user.email}</td>
                                                                {/* <td className='center'>{tickets.ticketDate}</td> */}
                                                            
                                                                <td className='center'>{tickets._id}</td>
                                                               
                                                                {/* <td className='center'>{u.creationDate.slice(0, 15)}</td> */}
                                                               </tr>
                                                        )   
                                                    }
                                                </tbody>
                                                
                                            </table>
                                        </div>
                                    </div>
                                    <div class="row">
                                        {/* <div class="col-sm-12 col-md-5">
                                            <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">
                                                Showing 1 to 10 of {this.props.users.length} entries
                                            </div>
                                        </div> */}
                                        <div class="col-sm-12 col-md-7">
                                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id="example1_previous">
                                                        <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li class="paginate_button page-item active">
                                                        <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">
                                                            1
                                                    </a>
                                                    </li>
                                                    <li class="paginate_button page-item ">
                                                        <a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">
                                                            2
                                                            </a>
                                                    </li>
                                                    <li class="paginate_button page-item next" id="example1_next">
                                                        <a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" class="page-link">
                                                            Next</a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        
    </main>
    </div>  
  
  )
}
}



// export default UsersPage;
const mapState = state => {
  return {
    logged: state.authReducer.logged,
    // user: state.authReducer.user,
    tickets: state.appReducer.tickets,

  }
}
const mapDispatch = dispatch => {
  return {
    // _login: (param) => dispatch(_login(param)),
    // setLoading: (bol) => dispatch(_setLoading(bol)),
    _getTickets: () => dispatch(_getTickets())


  }
}
export default connect(mapState, mapDispatch)(EntredTicket)


