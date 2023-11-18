import Emp from "../model/employeeModel.js"



const createEmployee=async(req,res)=>{
    const{
        ename,email,emobile
    }=req.body;

    if(!ename|| !email||!emobile){
        res.status(404).json({message:"Not allowed"});
    }
    else{
        try{
            const response=Emp.create({ename,email,emobile});
            if(response)
            res.status(201).json({message:"Record Created"});
            else 
            res.status(201).json({message:"Record not created"});
        }
        catch(err)
        {
            res.json(err.message)
        }
    }

}


const getEmployees=async(req,res)=>{
    try{
        const e=await Emp.find();
        if(e.length!=0)
        res.status(200).json(e);
        else
        res.status(404).json({MessageChanne:"No Such Records found"});
    }catch(error){
        res.json(error.message);
    }
}

const getEmployee=async(req,res)=>{
    try{
        const e=await Emp.findById(req.params.id);
        if(e)
        res.status(200).json(e);
        else
        res.status(404).json({Message:"No Records found"});
    }catch(error){
        res.json(error.message);
    }
}

const deleteEmployee=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndRemove(req.params.id);
        if(e)
        res.status(200).json({MessageChanne:"Records Deleted"});
        else
        res.status(404).json({MessageChanne:"No Records found"});
    }catch(error){
        res.json(error.message);
    }
}

const updateEmployee=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(e) res.status(200).json({MessageChanne:"Record Updated Successfully"});
        else res.status(404).json({MessageChanne:"Unable to update successfully"});
    }catch(error){
        res.status(404).json(error.message);
    }
}

export {createEmployee,getEmployees,getEmployee,deleteEmployee,updateEmployee};