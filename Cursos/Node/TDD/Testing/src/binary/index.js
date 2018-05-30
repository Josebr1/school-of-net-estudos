import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    const { number } = req.body;

    console.log(req.body);

    return res.status(200)
    .json({
        // number: Number(number).toString(2)
        number: (number >>> 0).toString(2)
    });
});

export default router;