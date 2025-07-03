const validate = (email, password, fName) => {
 

  // REGEX patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const nameRegex = /^[0-9A-Za-z]{4,16}$/;

  // Run tests
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
  const isValidName = fName === undefined ? true : nameRegex.test(fName);

  // Debug logs
  console.log("🧪 Email:", email, "| Valid:", isValidEmail);
  console.log("🧪 Password:", password, "| Valid:", isValidPassword);
  console.log("🧪 fName:", fName, "| Valid:", isValidName);

  return {
    email: isValidEmail ? null : "Email is not valid",
    password: isValidPassword ? null : "Password is not valid",
    fName: fName === undefined ? null : isValidName ? null : "Enter a valid name",
  };
};
export default validate