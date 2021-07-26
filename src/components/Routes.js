import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsPage from '../screen/ProductsPage';
import CategoriesPage from '../screen/CategoriesPage';
import OrdersPage from '../screen/OrdersPage';
import UsersPage from '../screen/UsersPage';
import Login from '../screen/Login';
import App from '../App';
import { connect } from 'react-redux';
import path from '../api/path';
import AddCategory from '../screen/AddCategory';
import Addproduct from '../screen/Addproduct';
import UpdateProduct from '../screen/UpdateProduct';



class Routes extends React.Component {
  render() {

    return (
      <React.Fragment>

        {
          !this.props.logged ?
            <Route exact path="/" component={Login} />
            :
            <>
              <Route exact path="/" component={App} />
              <Route path='/products' component={ProductsPage} /> 
              <Route path='/catogaries' component={CategoriesPage} />
              <Route path='/order' component={OrdersPage} />
              <Route path='/user' component={UsersPage} />
              <Route path='/UpdateProduct' component={UpdateProduct} />
              <Route path='/AddCategory' component={AddCategory} />
              <Route path='/Addproduct' component={Addproduct} />
            </>
        }

      </React.Fragment>
    );
  }
}

// const mapState = state => {
//   return {
//     // logged: state.authReducer.logged,
//     // token: state.authReducer.token,
//     // user: state.authReducer.user,
//     // city: state.authReducer.city,
//     // logged: state.authReducer.logged,
//     // type: state.authReducer.user.type,
//     // lang: state.globalReducer.lang,
//   }
// }
// const mapDispatch = dispatch => {
//   return {
//     // setCity: () => dispatch({ type: SET_CITY, }),
//     // _getItems: () => dispatch(_getItems()),
//     // _getCategories: () => dispatch(_getCategories()),
//     // _getFeatured: () => dispatch(_getFeatured()),
//     // _getFavourite: (token, uid) => dispatch(_getFavourite(token, uid)),
//     // _getCoupon: (token) => dispatch(_getCoupon(token))
//   }
// }
// export default ;
const mapState = state => {
  return {
    logged: state.authReducer.logged,
  }
}

export default connect(mapState, null)(Routes)