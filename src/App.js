
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lending from "./pages/Lending";
import Renting from "./pages/Renting";
import Form from "./pages/Form/Form";
import Footer from './components/Footer/Footer'
import Search from './pages/Search'
import SearchbyCatagory from "./pages/SearchbyCatagory";
import ListNewitem from "./pages/ListNewitem";
import SONYPXW from "./pages/SONYPXW";
import Termsofuse from "./pages/Termsofuse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";
import Withdraw from "./pages/Withdraw";    
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import MyItems from './pages/MyItems'
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Passwordreset from "./pages/Passwordreset";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Lend" element={<Lending />} />
        <Route exact path="/Rent" element={<Renting />} />
        {/* <Route exact path="/Form" element={<Form />} /> */}
        <Route path='/search' element={<Search/>}/>
        <Route path='/SearchbyCatagory' element={<SearchbyCatagory/>}/>
        <Route path='/ListNewitem' element={<ListNewitem/>} />
        <Route path='/SONYPXW' element={<SONYPXW/>} />
        <Route path='/Termsofuse' element={<Termsofuse/>} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
        <Route path='/FAQs' element={<FAQs/>} /> 
        <Route path='/Withdraw' element={<Withdraw/>} /> 
        <Route path='/Checkout' element={<Checkout/>} /> 
        <Route path='/Profile' element={<Profile/>} /> 
        <Route path='/Signup' element={<Signup/>} /> 
        <Route path='/MyItems' element={<MyItems/>} /> 
        <Route path='/Login' element={<Login/>} /> 
        <Route path='/Forgetpassword' element={<Forgetpassword/>} /> 
        <Route path='/Passwordreset' element={<Passwordreset/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
