import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import ProductsPage from '../screen/PrizeImages';
import Winner from '../screen/Winner';
// import OrdersPage from '../screen/OrdersPage';
import UsersPage from '../screen/UsersPage';
import Login from '../screen/Login';
import App from '../App';
import { connect } from 'react-redux';
// import path from '../api/path';
import AddTicketNumber from '../screen/AddTicketNumber';
import AddPrizes from '../screen/AddPrizes';
import PrizeImages from '../screen/PrizeImages';
import EntredTicket from '../screen/EntredTicket';
// import UpdateProduct from '../screen/UpdateProduct';



class Routes extends React.Component {
  render() {

    return (
      <React.Fragment>
        <Switch>

          {
            !this.props.logged ?
              <Route exact path="/" component={Login} />
              :
              <>

                <Route exact path="/" component={App} />
                <Route path='/PrizeImages' component={PrizeImages} />
                <Route path='/winner' component={Winner} />
                <Route path='/EntredTicket' component={EntredTicket} />
                <Route path='/user' component={UsersPage} />
                {/* <Route path='/UpdateProduct' component={UpdateProduct} /> */}
                <Route path='/AddTicketNumber' component={AddTicketNumber} />
                <Route path='/AddPrizes' component={AddPrizes} />
              </>
          }
        </Switch>
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