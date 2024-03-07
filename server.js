const express = require("express");
const dbConnect = require("./database/index");
const { PORT } = require("./config/index");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);

dbConnect();

app.use("/storage", express.static("storage"));
app.use(errorHandler);

app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));
