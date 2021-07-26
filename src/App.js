import React, { Component } from 'react';
// import Routes from '../src/components/Routes';
// import TopNavigation from './components/topNavigation';
import SideNavigation from './components/SideNavigation';
// import Footer from './components/Footer';
import './index.css';
// import ProductsPage from "./screen/ProductsPage";
// import CategoriesPage from "./screen/CategoriesPage";
// import OrdersPage from "./screen/OrdersPage";
// import UsersPage from "./screen/UsersPage";
class App extends Component {

  render() {
    return (
      <div className="flexible-content">
        {/* <TopNavigation />  */}
        {/* <DashboardPage/> */}
        <SideNavigation />

        <main id="content" className="p-5">
          {/* <ProductsPage /> */}
        </main>
        {/*           
          <div id="content" className="p-5">
          <CategoriesPage/>
          </div>
          <div id="content" className="p-5">
          <OrdersPage/>
          </div>
          <div id="content" className="p-5">
          <UsersPage/>
          </div>
           */}

        {/* <Footer /> */}

      </div>
    );
  }
}

export default App;
