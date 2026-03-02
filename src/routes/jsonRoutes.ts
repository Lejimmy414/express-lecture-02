  import { Router } from 'express'

  const router = Router()

  router.get('/', (req, res) => {
    res.json({ message: 'Hello, Node.js' })
  })

  router.post('/', (req, res) => {
    res.json({ message: req.body })
  })

  export default router