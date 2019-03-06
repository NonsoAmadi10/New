import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoute';


const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use('/api/v1/epicmail', userRoutes);

app.get('/api', (req, res) => {
  res.json({
    message: 'welcome to the api',
  });
});


app.listen(3000, console.log('App is running'));

export default app;
