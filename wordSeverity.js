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

  return {
    message: "🧠 Word Severity Analysis",
    analysis: {
      low: foundWords.low,
      medium: foundWords.medium,
      critical: foundWords.critical,
    }
  };
}

export { analyzeWords };
