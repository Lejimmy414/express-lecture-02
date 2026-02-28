import express from 'express';
import rootRoutes from './routes/rootRoutes.js';
import jsonRoutes from './routes/rootRoutes.js';
const app = express();
const port = 3000;
// Application level middleware
app.use(express.text());
app.use(express.json());
// Mounting routes
app.use('/', rootRoutes);
app.use('/json', jsonRoutes);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.use(express.json());
//# sourceMappingURL=server.js.map