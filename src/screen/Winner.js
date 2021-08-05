import React from "react";

import '../styles/adminlte.min.css'
import '../styles/dataTables.bootstrap4.min.css'
import '../styles/responsive.bootstrap4.min.css'
import '../styles/index.css'
// import ResponsiveDrawer from './ResponsiveDrawer'
// import { connect } from "react-redux";
// import ConfirmModal from '../components/ConfirmModal'
// import { _getPrizes } from '../Store/middlewares/appMiddleware'
// import api from "../services/api";
import SideNavigation from '../components/SideNavigation'
import { connect } from "react-redux";
import { _deleteCategories, _getPrizes, _getWinner } from "../store/middlewares/appMiddleware";
import api from "../api/api";
import path from "../api/path";

class Winner extends React.Component {

  constructor( ) {
    super();
    this.state = {
      name: '',
      email: ' ',
      phone: '',

  }
}
async componentDidMount(){
 let res = await this.props._getWinner()
}
getwinner = async (e) => {
e.preventDefault()
// this.props.setLoading(true)
let res = await this.props._getWinner({
   
    } )

 
}

  // deleteItem = async (_id) => {
  //   // alert(path.deleteitem+_id)
  //   console.log("delting item")
  //   api(path.deleteitem + '/' + _id, "DELETE").then(res => {
  //     console.log(res)
  //     alert("ITem delete")
  //   })

  //   // alert(_id)
  // }

  render() {
    // console.log(this.props.winner)
    // alert(this.props.items)
    return (
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
                                                      {/* <th className='center' rowspan="1" colspan="1"  >Image</th> */}
                                                      <th className='center' rowspan="1" colspan="1"  >user id</th>
                                                     <th className='center' rowspan="1" colspan="1"  >Ticket no</th>
                                                      {/* <th className='center' rowspan="1" colspan="1"  >Email</th> */}
                                                      {/* <th className='center' rowspan="1" colspan="1"  >City</th> */}
                                                      {/* <th className='center' rowspan="1" colspan="1"  >phone</th> */}
                                                      {/* <th className='center' rowspan="1" colspan="1"  >Age</th> */}
                                                      {/* <th className='center' rowspan="1" colspan="1"  >Date</th> */}
                                                      {/* <th className='center' rowspan="1" colspan="1"  >Date</th> */}
                                                     
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  {
                                                      this.props.winner.map((winner, index) =>
                                                          <tr role="row" class="odd">
                                                              <td className='center' class="sorting_1">{index + 1}</td>
                                                              {/* <td className='center' style={{ textAlign: 'center' }}><img style={{ width: 100 }} src={users.avatar} alt='noIamge' /></td> */}
                                                              <td className='center'>{winner._id}</td>
                                                              <td className='center'>{winner.ticket}</td>
                                                              {/* <td className='center'>{winner.phone}</td> */}
                                                              {/* <td className='center'>{winner.name}</td> */}
                                                              {/* <td className='center'>{winner.firstName}</td>
                                                              <td className='center'>{winner.lastName}</td> */}
                                                             
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

const mapState = state => {
  return {
    winner: state.appReducer.winner,

  }
}
const mapDispatch = dispatch => {
  return {
    _getWinner: () => dispatch(_getWinner())


  }
}
export default connect(mapState, mapDispatch)(Winner)