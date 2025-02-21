export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,128}$/;

export const passwordRegexMessage =
  "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number and a special caractere.";
