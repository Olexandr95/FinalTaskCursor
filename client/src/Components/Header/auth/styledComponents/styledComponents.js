import styled from "styled-components";
import { Link } from "react-router-dom";

export const PrimaryText = styled.p`
  color: grey;
  text-align: center;
  margin-top: 20px;
`;

export const SecondaryText = styled.p`
  color: grey;
  text-align: start;
`;

export const BodyDiv = styled.div`
  background-color: rgb(32,32,32);
  height: auto;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px; ;
`;

export const IconPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: pink;
  margin-bottom: 10px;
`;

export const Icon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

export const IconText = styled.p`
  color: #fff;
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormDiv = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 3px;
  color: grey;
  font-size: 16px;
  &::placeholder {
    padding: 5px;
  }
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  justify-content: baseline;
  margin-bottom: 30px;
`;

export const InputCheckBox = styled.input`
  display: flex;
  margin-right: 15px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: Roboto;
  margin-bottom: 20px;
  &:hover {
    color: #fff;
  }
`;

export const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  color: rgb(20, 110, 120);
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

export const DivFlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;
