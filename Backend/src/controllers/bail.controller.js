import { Bail } from "../models/bail.models.js";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const addBail = asyncHandler(async (res,req)=>{
    const {accused}= req.body;

    if(!accused){
        throw new ApiError(400," all field are required")
    }

    const bail = await Bail.create({accused});

    if(!bail){
        throw new ApiError(500,"something went wrong")
    }

    return res.status(200).json(new ApiResponse(200,bail,"successfully created bail "))
})

// const deleteBail = 

// const updateBail = 

const getBail = asyncHandler(async (req,res)=>{
    const {bailId} = req.body;

    if(!bailId){
        throw new ApiError(400,"id is required")
    }

    const bail = await Bail.findById(bailId)

    if(!bail){
        throw new ApiError(404,"not found or incorrect id")
    }

    return res.status(200).json(new ApiResponse(200,bail,"successfully feched bail info"))
})


export {getbail}