const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 //schema here
const infoSchema = new Schema({
  daysLeft: { type: Number, required: true },
  daysStudy: { type: Number, required: true },
  studyHours: { type: Number, required: true },
  budget: { type: Number, required: true }
});
 // export models here
 module.exports = mongoose.model('info', infoSchema)