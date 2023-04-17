const profiles = [
    {
        username:"template_username",
        password:"password123",
        email:"blank@fakeemail.com"
    }
]
 
 const profilesDBReducer = (state=profiles, action) => {
 
   switch (action.type) {
     case "REMOVE_PROFILE":
      const copy = state.filter((item) => { return item != action.username });
        return copy;

      case "CREATE_PROFILE":
        // need to validate before we get here.
        console.log("Added!");
        return [...state, action.profile];
        
      default:
        return state;
   }

  
 
 };

export default profilesDBReducer;