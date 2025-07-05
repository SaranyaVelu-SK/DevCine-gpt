const validate = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const nameRegex = /^[0-9A-Za-z]{4,16}$/;

  // Run tests
  const isValidEmail = emailRegex.test(email);
  if(!isValidEmail) return "Email is not valid";
  const isValidPassword = passwordRegex.test(password);
  if(!isValidPassword) return "Password is not valid";

  
};
export default validate