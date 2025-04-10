#!/usr/bin/env node

import { displayGuidelines, analyzeWords } from './index.js';

const args = process.argv.slice(2);

switch (args[0]) {
  case 'guidelines': {
    const result = displayGuidelines();
    console.log("✅ DO's:");
    result.dos.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });

    console.log("\n🚫 DON'Ts:");
    result.donts.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
    break;
  }

  case 'analyze': {
    const text = args.slice(1).join(' ');
    if (!text) {
      console.log("❌ Please provide text to analyze.");
      break;
    }
    const result = analyzeWords(text);
    console.log(result.message);
    for (let level in result.analysis) {
      const words = result.analysis[level];
      console.log(`🔸 ${level.toUpperCase()}: ${words.length ? words.join(', ') : 'None'}`);
    }
    break;
  }

  default:
    console.log("🔧 Commands:");
    console.log(" - guidelines        Show do's and don'ts");
    console.log(" - analyze <text>    Analyze word severity");
    break;
}
