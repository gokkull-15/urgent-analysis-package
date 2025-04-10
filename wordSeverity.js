const wordBank = {
    harsh: ['stupid', 'idiot', 'useless'],
    medium: ['annoying', 'bad', 'poor'],
    critical: ['danger', 'attack', 'kill'],
  };
  
  function analyzeWords(inputText) {
    const foundWords = {
      harsh: [],
      medium: [],
      critical: [],
    };
  
    const words = inputText.toLowerCase().split(/\s+/);
  
    for (let word of words) {
      for (let category in wordBank) {
        if (wordBank[category].includes(word)) {
          foundWords[category].push(word);
        }
      }
    }
  
    console.log("🧠 Word Severity Analysis:");
    for (let level in foundWords) {
      console.log(`🔸 ${level.toUpperCase()}: ${foundWords[level].join(', ') || 'None'}`);
    }
  }
  
  module.exports = { analyzeWords };
  