import express from 'express'
import { registerUser } from './src/controllers/user.controller.js'

const app = express();
app.use(express.json());

// Define a route for user registration
app.post('/register', registerUser);

// Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
