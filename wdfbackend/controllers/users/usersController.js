import userModel from "./users-model.js";
import * as dao from "./users-dao.js";
const userController = (app) => {
  //literally copy paste from login slides :))
  const register = async (req, res) => {
    console.log("this was called");
    const username = req.body.username;
    const password = req.body.password;
    const user = await dao.findUserByUserName(username);
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

  const update = async (req, res) => {};

  app.post("/api/users/register", register);
  app.post("/api/users/login", login);
  app.post("/api/users/profile", profile);
  app.post("/api/users/logout", logout);
  app.put("/api/users", update);
};

export default userController;
