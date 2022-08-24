import mongoose from "mongoose";
import ImagesModel from "../models/imagesModel.js";

export const getStudio = async (req, res) =>{
    try {
        const allImages = await ImagesModel.find({category:'studio'});

        res.status(200).json(allImages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const getBrand = async (req, res) =>{
    try {
        const allImages = await ImagesModel.find({category:'branding'});
        res.status(200).json(allImages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const getWedding = async (req, res) =>{
    try {
        const allImages = await ImagesModel.find({category:'wedding'});

        res.status(200).json(allImages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getImages = async (req, res) =>{
    try {
        const allImages = await ImagesModel.find({category:'outdoors'});

        res.status(200).json(allImages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const createImages = async (req, res) =>{
    const newData = req.body;
    const newPost = new ImagesModel(newData);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        console.log('nikama tume-succeed')
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updatePost = async (req, res) =>{

    const {id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json('Not a Valid id');

    const updatedPost = await ImagesModel.findByIdAndUpdate(_id, {...post, _id}, {new:true});
    console.log(updatePost)
    res.status(200).json(updatePost);

}


export const deleteImage = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json('Not a Valid id');

    await ImagesModel.findByIdAndRemove(id);

    res.send({message:'post deleted successfully'});

}