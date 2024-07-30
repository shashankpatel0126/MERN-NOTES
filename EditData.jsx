import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditData=()=>{
    const {id}= useParams();
    const [mydata, setMydata]=useState({});

const loadData=()=>{
    let api="http://localhost:8000/students/editdisplay";
    axios.post(api, {id:id}).then((res)=>{
       setMydata(res.data);
    })
  }

  useEffect(()=>{
    loadData();
  }, [])

  const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}));
    console.log(mydata);
  }

  const handleSubmit=()=>{
   let api="http://localhost:8000/students/editsave";
   axios.post(api, mydata).then((res)=>{
    console.log(res);
   })
  }

    return(
        <>
         <h1> Edit Data</h1>
          Enter Rollno <input name="rollno" type="text" value={mydata.rollno} onChange={handleInput} />
          <br/>
          Enter Name <input name="name" type="text" value={mydata.name}  onChange={handleInput} />
          <br/>
          Enter city <input name="city" type="text" value={mydata.city}  onChange={handleInput} />
          <br/>
          Enter Fees <input name="fees" type="text" value={mydata.fees}  onChange={handleInput} />
          <br/>
          <button onClick={handleSubmit}> Update</button>
        </>
    )
}

export default EditData;