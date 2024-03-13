import express from "express";
import bodyParser from 'body-parser'; //allows us to take in the incoming POST request body

const app = express();
const PORT = 5000 //the port where the server is going to run

app.use(bodyParser.json()); //json will be used in the application
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT} `)); // make our app listen for incoming requests

app.get('/', (req, res) => { //req: request and res: response
    console.log('[GET ROUTE]')
    res.send('HELLO FROM HOMEPAGE')
}) // two parameters, the first one is to specify the path, the second is a callback function where you define what happens when the get is called