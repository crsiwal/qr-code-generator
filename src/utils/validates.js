export const validatePhoneNumber = number => {
  const phoneRegex = /^\+?[0-9]{1,4}?[-.\s]?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4,6})$/;
  return phoneRegex.test(number);
};

export const validateEmail = email => {
  // Regular expression to match a valid email address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regex
  return emailRegex.test(email);
};

export const validateURL = link => {
  try {
    new URL(link);
    return true;
  } catch (_) {
    return false;
  }
};

export const validateLatitude = latitude => {
  return latitude >= -90 && latitude <= 90;
};

export const validateLongitude = longitude => {
  return longitude >= -180 && longitude <= 180;
};

export const validateAltitude = altitude => {
  // Change this condition if you want to set an upper limit
  return altitude >= 0;
};
