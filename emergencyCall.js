function makeEmergencyCall(service = 'police') {
    const services = {
      police: '100',
      ambulance: '108',
      fire: '101',
    };
  
    const number = services[service.toLowerCase()];
    if (!number) {
      console.log("🚫 Invalid emergency service");
      return;
    }
  
    console.log(`📞 Calling ${service.toUpperCase()} at ${number}...`);
  }
  
  module.exports = { makeEmergencyCall };
  