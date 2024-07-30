import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import delimg  from "../images/delete.png";
import  edimg from "../images/edit.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import   {useNavigate} from "react-router-dom"

const Update=()=>{

    const [mydata, setMydata]=useState([]);
  
    const navigate= useNavigate();
  
    const loadData=()=>{
        let api="http://localhost:8000/students/updatedisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData()
    }, []);
   const myDel=(myid)=>{
    let api="http://localhost:8000/students/updatedatadelete";
    axios.post(api, {myid:myid}).then((res)=>{    
      toast.error("Record Deleting !");
        loadData();
    })
   }
   
   const myEdit=(myid)=>{
    navigate(`/editdata/${myid}`)
   }


    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.rollno}</td>
                <td> {key.name}</td>
                <td> {key.city}</td>
                <td> {key.fees}</td>
                <td> 
                <a href="#" onClick={()=>{myDel(key._id)}}>
                 <img src={delimg}  width="30" height="30" />
                </a>

                <a href="#"  onClick={()=>{myEdit(key._id)}}>
                <img src={edimg}  width="30" height="30" />
                </a>
                   
                </td>
              </tr>
            </>
        )
    })
    return(
        <>
         <h1> Update</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#Roll number</th>
          <th>Student Name</th>
          <th>City</th>
          <th>Total Fees</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {ans}
        </tbody>
        </Table>   
        <ToastContainer />    
        </>
    )
}
export default Update;