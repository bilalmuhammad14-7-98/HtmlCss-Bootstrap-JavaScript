import express from "express";
import routes from "./routes/index.mjs";
import db from "./config/db.mjs";

const app = express();

// app.use("/products", (req, res) => {
//   // step1 db say data lai ayega
//   res.send({
//     message: "products fetched successfully",
//     data: [{ title: "welcome" }],
//   });
// });

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});

db.connection.once("open", () => {
  console.log("DB connected successfully!");
});

app.use(express.json());

app.use("/", routes);
