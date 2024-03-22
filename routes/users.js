import express from "express"; // imports the express framework
import {getAll, getById} from '../controllers/users.js';

const router = express.Router();// creates a fresh router instance stored in the variable router

const path = '/users'

router.get(path, getAll);
router.get(`${path}/:userId`, getById);

export default router;


/*(req, res) => { // sets up a route that responds to HTTP GET requests
  // callback function. It gets executed when a request is made to get route
  res.send(users); //send a response back to the client. JSON format
}**/