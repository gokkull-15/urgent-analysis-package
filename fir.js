function fileFIR(details) {
    const requiredFields = ['name', 'incident', 'location', 'timestamp'];
  
    for (let field of requiredFields) {
      if (!details[field]) {
        throw new Error(`Missing field: ${field}`);
      }
    }
  
    console.log("✅ FIR Filed Successfully!");
    console.log("Details:");
    console.log(`👤 Name: ${details.name}`);
    console.log(`📍 Location: ${details.location}`);
    console.log(`🕒 Time: ${details.timestamp}`);
    console.log(`📝 Incident: ${details.incident}`);
  }
  
  module.exports = { fileFIR };
  