function raiseComplaint({ type, description, user }) {
    if (!type || !description || !user) {
      throw new Error("Type, description, and user are required.");
    }
  
    console.log("📢 Complaint Raised:");
    console.log(`Type: ${type}`);
    console.log(`Description: ${description}`);
    console.log(`Raised by: ${user}`);
  }
  
  module.exports = { raiseComplaint };
  