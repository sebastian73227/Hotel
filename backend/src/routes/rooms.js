import { Router } from 'express';
import {
    getRooms, 
    getRoomCount,
    getRoom,
    saveRoom,
    deleteRoom,
    updateRoom,
    clearRoom
} from '../controllers/rooms'

const router = Router()

router.get('/rooms', getRooms)

router.get('/rooms/count', getRoomCount)

router.get('/rooms/:room', getRoom)

router.post('/rooms', saveRoom)

router.delete('/rooms/:room', deleteRoom)

router.put('/rooms/:room', updateRoom)

router.put('/rooms/clear/:room', clearRoom)

export default router;