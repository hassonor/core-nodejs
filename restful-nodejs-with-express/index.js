import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.connect.Promise = global.Promise;
mongoose.connect('mongodb://localhost:/CRMdb',{
  useNewUrlParser: true});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
