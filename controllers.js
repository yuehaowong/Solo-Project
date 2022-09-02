// this file is where all your middleware lives
// LOGIC FOR returning a proper message
const Info = require('./model');

//const daysLeft = req.body.daysLeft;
//  const daysStudy = req.body.daysStudy
//  const studyHours = req.body.studyHours
//  const budget = req.body.budget
const InfoController = {};

InfoController.createInfo = (req, res, next) => {
    //console.log(req.body)
    const {daysLeft, daysStudy, studyHours, budget} = req.body
   
  Info.create({ daysLeft, daysStudy, studyHours, budget })
    .then((createdInfo) => {
      res.locals.createdInfo = createdInfo;
      //console.log("Info created!!!!!!!")
      return next();
    }) 
   .catch ((err) => {
    return next({
      log: 'Error in info controller',
      status: 400,
      message: {err: err}
    });
  })
}


InfoController.renderLogic = (req, res, next) => {
  
  const daysLeft = req.body.daysLeft
  const daysStudy = req.body.daysStudy
  const studyHours = req.body.studyHours
  const budget = req.body.budget
//console.log(daysLeft, daysStudy, studyHours,budget)
//codesmith, General assembly, Odin Proj, Flatiron school, Hack Reactor, Freecodecamp.org
  let bootcamp;
  if (daysLeft < 10 && daysStudy <= 1 && studyHours <= 1 && budget < 10 ) bootcamp = 'FreeCodeCamp'
  if (daysLeft < 30 && daysStudy >= 2 && studyHours <= 2 && budget < 10 ) bootcamp = 'Odin Project'
  if (daysLeft < 40 && daysStudy >= 3 && studyHours >= 3 && budget <= 1000) bootcamp = 'General Assembly'
  if (daysLeft < 50 && daysStudy >= 5 && studyHours >= 3 && budget <= 19950) bootcamp = 'Flatiron School'
  if (daysLeft < 60 && daysStudy >= 6 && studyHours >= 3  && budget <= 19950 ) bootcamp = 'Hack Reactor'
  if (daysLeft >= 90 && daysStudy <= 7 && studyHours <= 8 && budget <= 19950 ) bootcamp = 'Codesmith'
  
  res.locals.bootcamp = bootcamp
    return next();
  // add logic
  // then send back to server to then send back to client
}
module.exports = InfoController;
