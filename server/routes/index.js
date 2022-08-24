import express from 'express';
import { getImages, getStudio, getWedding, createImages, updatePost, deleteImage, getBrand } from '../controlers/images.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//Branding
router.get('/brand', getBrand)
//Outdoors
router.get('/', getImages);
//Studio
router.get('/studio', getStudio);
//wedding
router.get('/wedding', getWedding)


router.post('/', auth, createImages);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deleteImage)

export default router; 