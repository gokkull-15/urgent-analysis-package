#!/usr/bin/env node

const { displayGuidelines, analyzeWords } = require('./index');

const args = process.argv.slice(2);

switch (args[0]) {
  case 'guidelines':
    displayGuidelines();
    break;
  case 'analyze':
    const text = args.slice(1).join(' ');
    if (!text) {
      console.log("❌ Please provide text to analyze.");
      break;
    }
    analyzeWords(text);
    break;
  default:
    console.log("🔧 Commands:");
    console.log(" - guidelines        Show do's and don'ts");
    console.log(" - analyze <text>    Analyze word severity");
}
