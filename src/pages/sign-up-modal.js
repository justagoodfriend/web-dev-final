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
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//rename this later
import * as userService from "../ApiClient/services/users";

export default function SignUpModal() {
  const profile = useSelector((state) => state.profile);
  const profilesDB = useSelector((state) => state.profilesDB);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const testregister = async (newProfile) => {
    await userService.register(newProfile);
    // need to then proceed to build either new buyer or seller. 

    navigate("/profile/"+profile._id);
  };
/** 
  const setUserProfile = (newProfile) => {
    dispatch({
      type: "SIGN_IN",
      profile: newProfile,
    });
    setIsOpen(false);
  };*/

  const onClose = () => {
    setIsOpen(false);
    console.log("Ping!");
  };

  console.log(profile.username);
  const [isOpen, setIsOpen] = useState(profile.username === "");
  const [userInputs, setUserInput] = useState({
    username: "",
    password: "",
    email:"",
    transactions: [],
    items: []
  });

  const setAccountType = (input) => {
    const copy = userInputs;
    if (input === 'buyer') {
      delete copy.items;
      setUserInput({...copy, reviews: [], wishlist:[]});
    } else {
      delete copy.wishlist;
      delete copy.reviews;
      setUserInput({...copy, items: []});
    }
  }

  return (
    <>
      {console.log("Current user: " + profile.username)}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                id="user-email-register"
                value={userInputs.email}
                onChange={(e) =>
                  setUserInput({ ...userInputs, email: e.target.value })
                }
              />
              {/** 
              <FormLabel>Handle</FormLabel>
              <Input 
                type="string" 
                id="user-handle-register" 
                value={userInputs.handle} 
                onChange={(e)=>
                  setUserInput({...userInputs, handle:e.target.value})
                }
              />
              */}
              <FormLabel>User Name</FormLabel>
              <Input
                type="input"
                id="user-name-register"
                value={userInputs.username}
                onChange={(e) =>
                  setUserInput({ ...userInputs, username: e.target.value })
                }
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="user-password-register"
                value={userInputs.password}
                onChange={(e) =>
                  setUserInput({ ...userInputs, password: e.target.value })
                }
              />
              <RadioGroup onChange={setAccountType} value={userInputs.reviews ? 'buyer' : 'seller'}>
                <Stack direction='row'>
                  <Radio value='buyer'>Buying</Radio>
                  <Radio value='seller'>Selling</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => {
                console.log("Press!");
                //createNewProfile(userInputs);
                testregister(userInputs);
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {!isOpen && <Navigate to="/" />}
    </>
  );
/**
  const createNewProfile = (newProfile) => {
    for (const item in profilesDB) {
      if (
        item.username == newProfile.username ||
        item.email == newProfile.email
      )
        return;
    }
    // stub: check if we have any profiles with same email or username.
    dispatch({
      type: "CREATE_PROFILE",
      profile: newProfile,
    });

    setUserProfile(newProfile);
  };
 */
}
