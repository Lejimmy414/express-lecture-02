import { Router, json} from "express";
import fs from 'fs'
import path from 'path'
import * as orders from '../orderController.js'

const router = Router()

router.get('/', orders.list)

router.post('/', json(), orders.post)

router.get('/:uid', orders.get)

router.put('/:uid', json(), orders.put)

router.patch('/:uid', json(), orders.patch)

router.delete('/:uid', json(), orders.remove)

export default router