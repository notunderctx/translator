import express, { Request, Response } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from 'cors';
import router from "./router/route";

const app = express();
app.use(cors({
  credentials: true,
}));
app.use("/", router);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const sv = http.createServer(app);

sv.listen(8380, () => {
  console.log(`Running on port 8380`);
});
