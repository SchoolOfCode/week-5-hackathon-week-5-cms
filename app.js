// Import the required modules
import express from "express";
import morgan from "morgan";

// import authorRouter from "./routes/authors.js";
// import bookRouter from "./routes/books.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Use sub-routers
// app.use("/authors", authorRouter);
// app.use("/books", bookRouter);

export default app;
