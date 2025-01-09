// Import the required modules
import express from "express";
import morgan from "morgan";

import memberRouter from "./routes/members.js";
import bookRouter from "./routes/books.js";
import loanRouter from "./routes/loans.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Use sub-routers
app.use("/members", memberRouter);
app.use("/books", bookRouter);
app.use("/loans", loanRouter);

export default app;
