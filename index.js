const { fileFIR } = require('./fir');
const { raiseComplaint } = require('./complaint');
const { makeEmergencyCall } = require('./emergencyCall');
const { analyzeWords } = require('./wordSeverity');
const { displayGuidelines } = require('./guidelines');

module.exports = {
  fileFIR,
  raiseComplaint,
  makeEmergencyCall,
  analyzeWords,
  displayGuidelines,
};
