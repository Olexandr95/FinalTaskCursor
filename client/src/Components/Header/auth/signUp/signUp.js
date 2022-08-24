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
  DivFlexEnd,
  PrimaryText,
} from "../styledComponents/styledComponents";

export const SignUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const signUpLink = useNavigate();

  const defaultInput = "2px solid grey";
  const succsesInput = "2px solid green";
  const errorInput = "2px solid red";

  const emailValidation =
    /^([A-Za-z0-9_\-\.]{3,})+\@([A-Za-z0-9_\-\.]{2,})+\.([A-Za-z]{2,4})$/;
  const passwordValidation =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

  const firstNameHandler = (e) => {
    if (!e.target.value) {
      e.target.style.border = defaultInput;
    } else if (e.target.value.length <= 2) {
      e.target.style.border = errorInput;
    } else {
      e.target.style.border = succsesInput;
      setFirstName(e.target.value);
    }
  };

  const lastNameHandler = (e) => {
    if (!e.target.value) {
      e.target.style.border = defaultInput;
    } else if (e.target.value.length <= 2) {
      e.target.style.border = errorInput;
    } else {
      e.target.style.border = succsesInput;
      setLastName(e.target.value);
    }
  };

  const emailHandler = (e) => {
    if (!e.target.value.length) {
      e.target.style.border = defaultInput;
      return;
    } else if (emailValidation.test(String(e.target.value).toLowerCase())) {
      setEmail(e.target.value);
      e.target.style.border = succsesInput;
    } else {
      e.target.style.border = errorInput;
    }
  };

  const passwordHandler = (e) => {
    if (!e.target.value.length) {
      e.target.style.border = defaultInput;
      return;
    } else if (passwordValidation.test(String(e.target.value))) {
      setPassword(e.target.value);
      e.target.style.border = succsesInput;
    } else {
      e.target.style.border = errorInput;
    }
  };

  const submitHendler = () => {
    if (
      firstName !== null &&
      lastName !== null &&
      email !== null &&
      password !== null
    ) {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      localStorage.setItem("user", JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem("user")));
      signUpLink("/signin", { replace: true });
    } else {
      alert(`
            Будь-ласка, перевірте введені дані :
            Ім'я та прізвище від 3ох символів.
            Email – повинен містити: мінімум 3 символи, собачку, мінімум 2 символи, крапку та мінімум 2 символи
            Пароль – мінімум 8 символів, містить велику і маленьку літеру (лат.)
            `);
    }
  };

  return (
    <>
      <Header />
      <BodyDiv>
        <IconDiv>
          <IconPosition>
            <Icon src={require("../Icons/padlock.png")}></Icon>
          </IconPosition>
          <IconText>Sign Up</IconText>
        </IconDiv>
        <Form>
          <FormDiv>
            <DivSpaceBetween>
              <Input placeholder="First Name *" onChange={firstNameHandler} />
              <Input placeholder="Last Name *" onChange={lastNameHandler} />
            </DivSpaceBetween>
            <Input
              placeholder="Email Address *"
              onChange={emailHandler}
            ></Input>
            <Input placeholder="Password *" onChange={passwordHandler}></Input>
            <CheckBoxDiv>
              <InputCheckBox type="checkbox" />
              <SecondaryText>
                I want to recive inspiration, marketing promotions and updates
                via email
              </SecondaryText>
            </CheckBoxDiv>
            <Button onClick={submitHendler}>Sign Up</Button>
            <DivFlexEnd>
              <StyledLink to="/">Already have an account? Sign in</StyledLink>
            </DivFlexEnd>
            <PrimaryText>Copyright © Your Website 2022.</PrimaryText>
          </FormDiv>
        </Form>
      </BodyDiv>
    </>
  );
};
