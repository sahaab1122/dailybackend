
import React from "react";
import '../styles/adminlte.min.css'
import '../styles/dataTables.bootstrap4.min.css'
import '../styles/responsive.bootstrap4.min.css'
import '../styles/index.css'
// import ResponsiveDrawer from './ResponsiveDrawer'
// import { Alert } from '@material-ui/lab';
import { connect } from "react-redux";
// import { set_loading } from "../Store/actions/globalActions";
import firebase from "firebase"
// import api from "../services/api";
// import { _getCategories } from "../Store/middlewares/appMiddleware";
// import { Loading } from '../components/Icons'
import { Dropdown, ProgressBar } from 'react-bootstrap'
import SideNavigation from '../components/SideNavigation'
import api from "../api/api";
import path from "../api/path";
import {   _getPrizes } from "../store/middlewares/appMiddleware";

class Addproduct extends React.Component {
    constructor() {
        super();

        this.state = {
            // categoryName: "",
            // categoryNameArabic: "",
            // categoryDescription: "",
            // categoryDescriptionArabic: "",
            // categoryImage: "",
            // message: '',
            // firebaseLink: '',
            // progress: 0, edit: false,
           
            image: "",
             
        }
    }

    componentDidMount() {
        this.props._getPrizes()
    }
    uploadImage = async (e) => {
        e.preventDefault()
        let file = this.state.image
        let folderName = 'prizes'
        let fileName = this.state.name + '_' + new Date().toISOString()
        var ref = firebase.storage().ref().child(folderName + "/" + fileName);
        ref.put(file).then(() => {
            firebase.storage().ref().child(folderName + "/" + fileName).getDownloadURL()
                .then((URL) => {
                    this.setState({ image: URL }, () => {
                        this.addProduct()


                    })

                    

                })
        })

    }
    addProduct = async (e) => {
        
        let param = {
            
            image: this.state.image,
        }
        let response = await api(path.prizesadd, "POST", param)
        // alert(response.message)
        console.log(response.message)
        alert("Prize added")
    }

    pickImage = (e) => {
        e.preventDefault()
        if (e.target.files)
            this.setState({ image: e.target.files[0] })
    }

    // getSubCategory = (name) => {
    //     return this.props.categories.find(item => item.name === name).subcategories

    // }

    render() {
// console.log(this.state.image)

        // console.log(this.state.subcategories)



        return (
            <div className="flexible-content">
                <SideNavigation />
                <main id="content" className="p-5">
                    <div className="dashboard">
                        {/* <ResponsiveDrawer /> */}
                        <section class="content-admin" style={{ paddingTop: 100, position: 'relative' }}>
                           
                            <div class="container-fluid">
                                <form onSubmit={this.uploadImage} >
                                  
                                           
                                            <div class="form-group">
                                                <label htmlFor="file-loader">Select Image</label>
                                                <input type="file" onChange={this.pickImage} />
                                            </div>
 

                                            <button type="submit" class="btn btn-success">save</button>
                                     
                                   
                                </form>
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
        // loading: state.globalReducer.loading,
        prizes: state.appReducer.prizes,
    }
}
const mapDispatch = dispatch => {
    return {
        // setLoading: bol => dispatch(set_loading(bol)),
        _getPrizes: () => dispatch(_getPrizes())
    }
}

export default connect(mapState, mapDispatch)(Addproduct)