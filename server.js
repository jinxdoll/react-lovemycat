const express = require("express");
// const mongoose = require("mongoose");
const ApiRouter = require("./routes/api");
const path = require("path");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test");

// mongoose.connection.on("error", (err) =>
//   console.log("error in connection: ", err)
// );

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("api", ApiRouter);

// need to render the website here where it says "website"
app.use("*", ((req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html" ))
})
);

app.listen(PORT, (error) =>
  error 
  ? console.log(" error is:", error)
  : `server is listening on ${PORT}`
);
 