const stuModel= require("../models/studentModels");

const stuDataSave=async(req, res)=>{
  const {rollno, name, city, fees}= req.body; 
  const stuData= await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
  })
  res.status(200).json(stuData);
}

const stuDisplay=async(req, res)=>{
        const myData=await stuModel.find();
        res.status(200).json(myData);
}

const stuSearch=async(req, res)=>{
     const rno= req.body.rollno;
     const myans= await stuModel.find({rollno:rno}) ;
    res.status(200).json(myans);
}

const updateDisplay=async(req, res)=>{
  
    const mydata= await stuModel.find();
    res.status(200).json(mydata);

}

const updateDataDelete=async(req, res)=>{
  const myid=req.body.myid;  
  const myres= await stuModel.findByIdAndDelete(myid);
  res.status(200).json(myres);
}

const editDisplay=async(req, res)=>{
  const id=req.body.id;
  
  const myData= await stuModel.findById(id);
   
  res.status(200).json(myData);

}

const editDataSave=async(req, res)=>{
  const data=req.body;
  const myans= await stuModel.findByIdAndUpdate(data._id, data);
  
  res.status(200).json(myans)
}

module.exports={
    stuDataSave,
    stuDisplay,
    stuSearch,
    updateDisplay,
    updateDataDelete,
    editDisplay,
    editDataSave
}