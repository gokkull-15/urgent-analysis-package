function fileFIR(details) {
  const requiredFields = ['name', 'incident', 'location', 'timestamp'];

  for (let field of requiredFields) {
    if (!details[field]) {
      throw new Error(`Missing field: ${field}`);
    }
  }

  return {
    message: "✅ FIR Filed Successfully!",
    details: {
      name: details.name,
      location: details.location,
      timestamp: details.timestamp,
      incident: details.incident,
    }
  };
}

export { fileFIR };
