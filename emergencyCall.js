function makeEmergencyCall(service = 'police') {
  const services = {
    police: '100',
    ambulance: '108',
    fire: '101',
  };

  const number = services[service.toLowerCase()];
  if (!number) {
    return {
      success: false,
      message: "🚫 Invalid emergency service",
    };
  }

  return {
    success: true,
    message: `📞 Calling ${service.toUpperCase()} at ${number}...`,
    service: service.toLowerCase(),
    number,
  };
}

export { makeEmergencyCall };
