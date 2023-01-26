import { config } from 'dotenv';
import express from 'express';

config();

const app = express();

app.get('/', (req, res, next) => {
    res.send('This is Test');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Oogway test is listening on port ${PORT}`);
});