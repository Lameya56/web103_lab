import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import giftData from '../data/gifts.js';
import GiftsController from '../controllers/gifts.js';

// const _filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);
const router = express.Router();
// router.get('/', (req, res) => {
//     res.status(200).json(giftData)
// })
router.get('/', GiftsController.getGifts);
// router.get('/:giftId', (req, res) => {
//     res.status(200).sendFile(path.resolve(_dirname, '../public/gift.html'))
// })
router.get('/:giftId', GiftsController.getGiftById)
export default router;
