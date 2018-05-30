import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(3000, () => {
    console.log('Express has been started');
});

export default app; 