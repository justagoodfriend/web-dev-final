import * as dao from "./users-dao.js";
const userController = (app) => {
  //literally copy paste from login slides :))
  const register = async (req, res) => {
    console.log("this was called");
    const username = req.body.username;
    const email = req.body.email;
    /**const password = req.body.password;*/
    let user = await dao.findUserByUserName(username);
    if (!user) user = await dao.findUserByEmail(email);

    if (user) {
      res.sendStatus(409);
      return;
    }
    //create an overall new user, but this id has to correlate to a new buyer: depending on what you sent in
    //package the username and password into a new json and then send that along with getting the newid of that field
    const newUser = await dao.createUser(req.body);
    //in here also post to create a new Buyer/ Seller depending on the type that you selected
    req.session["currentUser"] = newUser;
    res.json(newUser);
  };

  const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await dao.findUserByCredentials(username, password);
    if (user) {
      req.session["currentUser"] = user;
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  };

  const findProfileById = async (req, res) => {
    console.log(req.params.uid);
    console.log("Reached backend Controller : " + req.params.uid);
    const user = await dao.findUserById(req.params.uid);
    if (user) {
      return res.json(user);
    } else res.sendStatus(404);
  };

  const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(404);
      return;
    }
    res.json(currentUser);
  };

  const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  //think that's how it works:
  const update = async (req, res) => {
    const user = await dao.updateUser(req.body);
    res.json(user);
  };

  const updateLikes = async (req, res) => {
    console.log("routing to update likes?");
    const currentUser = req.session["currentUser"];
    const itemId = req.params.iid;
    const user = dao.updateLikes(currentUser, itemId);
    res.json(user);
  };

  app.post("/api/users/register", register);
  app.post("/api/users/login", login);
  // are we sure this shouldn't be "Get"?
  app.post("/api/users/profile", profile);
  app.post("/api/users/logout", logout);
  app.put("/api/users", update);
  app.get("/api/users/profile/:uid", findProfileById);
  app.put("/api/users/profile/likes/:iid", updateLikes);
};

export default userController;
