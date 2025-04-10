function raiseComplaint({ type, description, user }) {
  if (!type || !description || !user) {
    throw new Error("Type, description, and user are required.");
  }

  return {
    message: "📢 Complaint Raised",
    complaint: {
      type,
      description,
      raisedBy: user,
    }
  };
}

export { raiseComplaint };
