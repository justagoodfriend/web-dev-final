import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userController from "./controllers/users/usersController.js";
import reviewsController from "./controllers/reviews/reviewsController.js";
import itemController from "./controllers/item/itemController.js";
import favoritesController from "./controllers/favorites/favorites-controller.js";
dotenv.config({ path: "../.env" });
const db_string = process.env.CONNECTION_STRING;
mongoose.connect(db_string);
const PORT = 8080;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
userController(app);
reviewsController(app);
itemController(app);
favoritesController(app);

app.listen(PORT, () =>
  console.log(`Local Server is listening on port ${PORT}`)
);
