require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const { connectDB } = require("./utils/DB");
const errorMiddleware = require('./middlewares/error-middleware');
const port =  process.env.PORT || 8000;
// const corsOptions = {
//   origin: '*',
//   method:"POST GET PUT PATCH DELETE HEAD",
//   credentials: true
// }


// middleware 
// app.use(cors(corsOptions));

app.use(express.json());

// Mount the Router : To use the router in your main express app, you can "mount" it at a specific URL prefix
// app.use("/api/auth", authRoute);
// app.use("/api/form", contactRoute);
// app.use("/api/data", serviceRoute);
// app.use("/api/admin", adminRoute);
// app.use(errorMiddleware)

// connectDB().then(() => {
//   app.listen(port, () => {
//     console.log("Active port 8000");
//   });
// });
app.listen(port, () => {
  console.log("Active port 8000");
});
