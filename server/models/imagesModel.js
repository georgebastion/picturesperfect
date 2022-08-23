import mongoose from "mongoose";

const imagesSchema = mongoose.Schema({
    category:String,
    selectedFile:String
});

const ImagesModel= mongoose.model('ImagesModel', imagesSchema);

export default ImagesModel;