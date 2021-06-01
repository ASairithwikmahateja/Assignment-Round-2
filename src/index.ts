import express, { Application} from 'express';
import indexRoutes from './routes';
 const app: Application = express();

import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));     
 
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Routes
app.use(indexRoutes);

app.get('/', (req, res)=> {
    res.send("Hello world");
});


app.listen(3000);
console.log('Server on port', 3000);