const wordBank = {
    low: ['stupid', 'idiot', 'useless', 'fight', 'gang war', 'water problem'],
    medium: ['annoying', 'bad', 'poor', 'robbery', 'theft', 'accident'],
    critical: ['danger', 'attack', 'kill', 'murder', 'gun shot', 'emergency'],
  };
  
  function analyzeWords(inputText) {
    const foundWords = {
      low: [],
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
  