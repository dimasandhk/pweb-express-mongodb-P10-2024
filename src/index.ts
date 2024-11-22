import express from "express";
import routes from "./routes";
import "./db-connection";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (_, res) => {
  const currentTime = new Date().toLocaleString();
  res.status(200).send({
    status: "success",
    message: "pong",
    date: currentTime,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
