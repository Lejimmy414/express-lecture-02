import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({})
})

router.post('/', (req, res) => {
    res.status(201).json({})
})

router.get('/:uid', (req, res) => {
    res.status(200).json({})
})

router.put('/:uid', (req, res) => {
    res.status(200).json({})
})

router.patch('/:uid', (req, res) => {
    res.status(200).json({})
})

router.delete('/:uid', (req, res) => {
    res.status(204).send()
})

export default router