import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as userService from "../ApiClient/services/users.js";
import { loginThunk } from "../ApiClient/thunks/authThunks.js";

export default function SignInModal() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setProfile = (newProfile) => {
    dispatch({
      type: "SIGN_IN",
      profile: newProfile,
    });
  };

  const onClose = () => {
    setIsOpen(false);
    console.log("Ping!");
  };

  const [isOpen, setIsOpen] = useState(profile.username == "");

  const [userInputs, setUserInput] = useState({ username: "", password: "" });
  const login = async () => {
    try {
      //await userService.login(userInputs);
      await dispatch(loginThunk(userInputs));
      //reload the page idk it doesn't immediately update:
      navigate("/");
    } catch (e) {
      //fix up the error Messages
      //TODO:idk why but this does not create the alert when they fail to login
      alert(e);
    }
  };

  useEffect(() => {
    <Navigate to="/home" />;
  }, [profile]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input
                type="email"
                id="user-sign-in-email"
                value={userInputs.email}
                onChange={(e) => {
                  setUserInput({ ...userInputs, username: e.target.value });
                }}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="user-sign-in-password"
                value={userInputs.password}
                onChange={(e) => {
                  setUserInput({ ...userInputs, password: e.target.value });
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="ghost" onClick={() => login()}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {!isOpen && <Navigate to="/" />}
    </>
  );
}
