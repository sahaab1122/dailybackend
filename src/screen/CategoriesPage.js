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
import { _deleteCategories, _getPrizes } from "../store/middlewares/appMiddleware";
import api from "../api/api";
import path from "../api/path";

class CategoriesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      categoryID: "",
      description: "",
      price: "",
      image: ""
      // deleteID: '',
      // showModal: false,
      // orderdata:[]

    }
  } async componentDidMount() {
    let res = await this.props._getPrizes()
  }
  getcategorie = async (e) => {
    e.preventDefault()
    // this.props.setLoading(true)
    let res = await this.props._getPrizes({

    })
    if (res.success === true) {
      // window.location ="App"

      // if (this.props.admin) {
      //     this.props.admin()
      // }
      // else {
      //     window.history.back()

      // }
    }
  }
    // this.props.setLoading(false)

    deletecat = async (_id) => {
      // alert(path.deleteitem+_id)
      console.log("delting categories")
      api(path.deletecat + '/' + _id, "DELETE").then(res => {
        console.log(res)
        alert("Categories Delete")
      })
    }
  
  // async componentDidMount(){
  //     console.log(this.props);

  //     let res = await api.getCategory();
  //     console.log(res.result);
  //     this.setState({orderdata:res.result})
  // }


  // deleteHandler = async () => {
  //     console.log(this.state.deleteID)
  //     this.setState({ showModal: false })
  //     let res = await api.deleteCategory( this.state.deleteID)
  //     if (res) {
  //         window.location.reload();

  //     }
  // }

  deleteItem = async (_id) => {
    // alert(path.deleteitem+_id)
    console.log("delting item")
    api(path.deleteitem + '/' + _id, "DELETE").then(res => {
      console.log(res)
      alert("ITem delete")
    })

    // alert(_id)
  }

  render() {
    console.log(this.props.prizes)
    // alert(this.props.items)
    return (
      <div className="flexible-content" >
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
                      <div class="row">
                        <div class="col-sm-12 col-md-6">
                          <div class="dataTables_length" id="example1_length">
                            <label>Show <select name="example1_length" aria-controls="example1" class="custom-select custom-select-sm form-control form-control-sm">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                              entries
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <div id="example1_filter" class="dataTables_filter">
                            <label>Search:
                              <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1"></input>
                            </label>
                          </div>
                        </div>


                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <table id="example1" class="table table-bordered table-hover dataTable no-footer dtr-inline" role="grid" aria-describedby="example1_info">
                            <thead>
                              <tr role="row">
                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sr.#: activate to sort column ascending">
                                  Sr.#
                                </th>
                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Bottle Image: activate to sort column ascending">
                                  Winners name
                                </th>
                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Bottle Image: activate to sort column ascending">
                                  prize
                                </th>
                               



                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="edit: activate to sort column ascending">
                                  Draw no
                                </th>

                              </tr>
                            </thead>
                             

                                     
                                    {/* <td>
                                      <button onClick={() => this.deletecat()}>
                                        delete
                                      </button>
                                    </td> */}


                               
                          </table>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-5">
                          {/* <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 6 of {this.props.categories.length} entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="example1_previous"><a href="https://clinkdelivery.com/admin/categories#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="https://clinkdelivery.com/admin/categories#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="example1_next"><a href="https://clinkdelivery.com/admin/categories#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div>
            </section>
            {/* {
              this.state.showModal &&
              <ConfirmModal onCancelClick={() => this.setState({ showModal: true })}
                onDoClick={this.deleteHandler} />
            } */}

          </div>
        </main>
      </div>
    )

  }
}


const mapState = state => {
  return {
    logged: state.authReducer.logged,
    // user: state.authReducer.user,
    prizes: state.appReducer.prizes,

  }
}
const mapDispatch = dispatch => {
  return {
    // _login: (param) => dispatch(_login(param)),
    // setLoading: (bol) => dispatch(_setLoading(bol)),
    _getPrizes: () => dispatch(_getPrizes()),
    _deleteCategories: () => dispatch(_deleteCategories())


  }
}
export default connect(mapState, mapDispatch)(CategoriesPage)