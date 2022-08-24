import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import {
  BodyDiv,
  IconDiv,
  Icon,
  IconPosition,
  SecondaryText,
  IconText,
  Form,
  FormDiv,
  Input,
  InputCheckBox,
  CheckBoxDiv,
  Button,
  DivSpaceBetween,
  StyledLink,
  PrimaryText,
} from "../styledComponents/styledComponents";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const rememberData = JSON.parse(localStorage.getItem("user"));
  const mainPage = useNavigate();

  const hendlerSignIn = () => {
    if (password === rememberData.password && email === rememberData.email) {
      if (rememberMe) {
        alert("Welcome you alredy autorise");
        mainPage("/", { replace: true });
      } else {
        alert("Welcome");
      }
    } else {
      alert("User not found");
    }
  };

  const resetData = () => {
    localStorage.clear();
  };
  if (rememberData) {
    useEffect(() => {
      setEmail(rememberData.email);
      setPassword(rememberData.password);
    }, []);
  }
  return (
    <>
      <Header />
      <BodyDiv>
        <IconDiv>
          <IconPosition>
            <Icon src={require("../Icons/padlock.png")}></Icon>
          </IconPosition>
          <IconText>Sign in</IconText>
        </IconDiv>
        <Form>
          <FormDiv>
            <Input
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <CheckBoxDiv>
              <InputCheckBox
                type="checkbox"
                onChange={() => setRememberMe(!rememberMe)}
                checked={rememberMe}
              />
              <SecondaryText>Remeber me</SecondaryText>
            </CheckBoxDiv>
            <Button onClick={hendlerSignIn}>Sign in</Button>
            <DivSpaceBetween>
              <StyledLink to="/" onClick={resetData}>
                Forgot password?
              </StyledLink>
              <StyledLink to="/signup">
                Don't have an account? Sign Up
              </StyledLink>
            </DivSpaceBetween>
            <PrimaryText>Copyright © Your Website 2022.</PrimaryText>
          </FormDiv>
        </Form>
      </BodyDiv>
    </>
  );
};
