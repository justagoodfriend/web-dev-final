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
    Input
  } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function SignInModal() {

  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const setProfile = (newProfile) => {
    dispatch({
      type: 'SIGN_IN',
      profile: newProfile
    });
  };

  const onClose = ()=> {
    setIsOpen(false);
    console.log("Ping!");
  }

  const [isOpen, setIsOpen] = useState(profile.username=='');

  const [userInputs, setUserInput] = useState({email:'',password:''});
  
  useEffect(() => {
    <Navigate to="/"/>
  },[profile]
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type='email' id="user-sign-in-email" value={userInputs.email} onChange={(e) => { setUserInput({ ...userInputs, email: e.target.value }) }} />
              <FormLabel>Password</FormLabel>
              <Input type='password' id="user-sign-in-password" value={userInputs.password} onChange={(e) => { setUserInput({ ...userInputs, password: e.target.value }) }} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => { 
             }}>
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {!isOpen && <Navigate to="/"/>}
    </>
  )
}
