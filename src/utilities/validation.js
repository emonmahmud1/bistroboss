export const validationForm = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Please enter a valid email address.",
    },
    password: {
      required: true,
      minLength: 6, 
      errorMessage: "Password must be at least 8 characters long.",
    },
  };