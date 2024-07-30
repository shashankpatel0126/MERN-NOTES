import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Insert from "./Components/Insert";
import Display from "./Components/Display";
import Search from "./Components/Search";
import Update from "./Components/Update";
import Contact from "./Components/Contact";
import EditData from "./Components/EditData";
import Login from "./Components/Login";
const App=()=>{
  return(
    <>
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>} />
              <Route path="about" element={<About/>} />
              <Route path="insert" element={<Insert/>} />
              <Route path="display" element={<Display/>} />
              <Route path="search" element={<Search/>} />
              <Route path="update" element={<Update/>} />
              <Route path="contact" element={<Contact/>}/>  
              <Route path="editdata/:id" element={<EditData/>} />         
              <Route path="login" element={<Login/>} />      
              <Route path="" element={<EditData/>} />      
             </Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;