import { Router } from 'express';
import Test from '../../models/Test';

const router = Router();

router.get('/', async (req, res, next) => {
  // const docs = await Test.find({});
  // console.log(docs);
  console.log('hola');
  // res.send(JSON.stringify(docs));
});

export default router;
