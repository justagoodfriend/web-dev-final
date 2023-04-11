
const profile = {
    username:'',
    email:'',
    password:'',
}
 
 const profileReducer = (state=profile, action) => {
   switch (action.type) {
     case "SIGN_IN":
        console.log("Made it here!")
        return action.profile;
     default:
       return state;
   }
 
 };

export default profileReducer;