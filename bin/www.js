import app from "../app.js";

// Retrieve the port number from environment variables
const PORT = process.env.PORT;

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});