export const checkValidate = (name, email , password) => {
    const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    const isEmailValid  =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   if(!isNameValid) return "Name is not Valid"; 
   if(!isEmailValid) return "Email Id is not valid";
   if(!isPasswordValid) return "Password is not valid";

   return null;
};

