const express = require('express');
const app = express();
const PORT = 3001

const mongoose = require('mongoose');

//parse request coming from frontend
app.use(express.json());
//connect to mongoose:

mongoose.connect("mongodb+srv://yuehao:test123@cluster1.tw6vzis.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to DB")
  })



app.get("/test", (req, res) => {
  return res.status(200).json({ message: "Just checking if my server actually works!" });
})


app.post("/", (req, res) => {
  const daysLeft = req.body.daysLeft;
  const daysStudy = req.body.daysStudy
  const studyHours = req.body.studyHours
  const budget = req.body.budget
})

//catch all route handler will need to require sendFile ....
//app.use('*', (req, res) => {
//  return res.status(404).sendFile
//})



//global error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});




app.listen(PORT, (req, res) => {
  console.log("Yippie, express is on port 3001")
})