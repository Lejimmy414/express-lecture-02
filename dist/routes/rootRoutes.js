import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello, Node.js');
});
router.post('/', (req, res) => {
    res.type('text/plain');
    res.send(req.body);
});
export default router;
//# sourceMappingURL=rootRoutes.js.map