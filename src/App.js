import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from'./components/layout/Footer';
import Products from './components/Pages/Products';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import SellerUpload from './components/Pages/SellerUpload';
import SignIn from './components/auth/SignIn'; 
import Chat from './components/chat/App'
import Location from './components/Pages/Location'
import Comment from './components/comment/commentBox'
import SignUpSeller from './components/auth/SignUpSeller';
import SignUpBuyer from './components/auth/SignUpBuyer';
import Home from './components/Pages/HomePage';
import Nomatch from './Nomatch';
import Profile from './components/Pages/Profile'
import EditProfile from './components/Pages/EditProfile'
import MapBuyer from './components/Pages/MapBuyerRedirect'
import setMarket from './components/Pages/SetMarketRedirect';
function App() {
  return (
    <div className="App">  
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Navbar/>
        <Switch>
        <Route exact path={process.env.PUBLIC_URL+'/'}component={Home}/>
        <Route path={process.env.PUBLIC_URL+'/products'}component={Products} />
        <Route path={process.env.PUBLIC_URL+'/contactus'}component={ContactUs}/>
          <Route path={process.env.PUBLIC_URL+'/aboutus'}component={AboutUs}/> 
          <Route path={process.env.PUBLIC_URL+'/signin'}component={SignIn}/> 
          <Route path={process.env.PUBLIC_URL+'/setmarket'}component={setMarket}/> 
          <Route path={process.env.PUBLIC_URL+'/chat/:id'} component={Chat}/>
          <Route path={process.env.PUBLIC_URL+'/comment/:id' }component={Comment}/>
          <Route path={process.env.PUBLIC_URL+'/signupBuyer'}component={SignUpBuyer}/> 
          <Route path={process.env.PUBLIC_URL+'/signupSeller'}component={SignUpSeller}/>
          <Route path={process.env.PUBLIC_URL+'/addproducts'}component={SellerUpload}/> 
          <Route path={process.env.PUBLIC_URL+'/mapBuyer'}component={MapBuyer}/>
          <Route path={process.env.PUBLIC_URL+'/profile'}component={Profile}/>
          <Route path={process.env.PUBLIC_URL+'/editprofile'}component={EditProfile}/>
          <Route exact path={process.env.PUBLIC_URL+'*' }component={Nomatch} />
        </Switch>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
