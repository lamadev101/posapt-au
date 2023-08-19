export const validateNumber = (
  rule,
  value,
  callback
) => {
  // Use a regular expression to check if the value is a valid number
  const numberRegex = /^[0-9]+$/;

  if (!numberRegex.test(value)) {
    callback("Please enter a valid Number");
  } else {
    callback(); // No error, so call the callback with no arguments
  }
};