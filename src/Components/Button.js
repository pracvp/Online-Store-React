import styled from 'styled-components';

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 20px;
  background: transparent;
  border: 5px solid var(--lightBlue);
  color: ${props => props.cart ?  "var(--mainYellow)":"var(--lightBlue)"};
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px 10px 5px 0px;
  transition: all 0.5s ease-in-out;
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  &:hover {
    background: ${props => props.cart ?  "var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }`;
export default ButtonContainer;
