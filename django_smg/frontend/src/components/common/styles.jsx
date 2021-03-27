/**
 * This is a mirror of the classes from ../App.css towards a future
 * total migration to styled components.
 */
import React from "react";
import styled, { css } from "styled-components";

/**
 * Use this file as global entrypoint into styled-components
 */
export * from "styled-components";
export default styled;

/**
 * Below are "global" css classes which are either directly used or extended
 * throughout the project.
 */

const Input = styled.input`
  &[type="checkbox"] {
    width: 30px;
    height: 30px;
  }
`;

export const Checkbox = ({ children, ...rest }) => (
  <Input type="checkbox" {...rest}>
    {children}
  </Input>
);

export const Div = styled.div`
  text-align: center;
`;

export const H1 = styled.h1`
  padding-bottom: 1.5rem;
  font-size: 80px;
  font-weight: 30px;
`;

export const H2 = styled.h2`
  display: inline-block;
  background-color: "#88ff00";
  font-weight: 400;
  padding: 30px;
  border-radius: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  ${(props) =>
    props.inline &&
    css`
      display: inline;
    `}
`;

export const P = styled.p`
  text-align: center;
  padding: 0 20px 0 20px;
  ${(props) =>
    props.confirm &&
    css`
      color: green;
    `}
  ${(props) =>
    // dark red w/ good contrast against white
    props.warn &&
    css`
      color: #e41000;
    `}
  ${(props) =>
    props.justify &&
    css`
      text-align: justify;
    `}
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `}
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `}
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : "#f7943e")};

  ${(props) =>
    props.blanketClose &&
    css`
      position: absolute;
      bottom: 1px;
      right: 1px;
      background-color: lightcoral;
      margin: 0;
    `}

  :hover {
    background-color: white;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  text-align: center;
  display: inline-block;
  max-width: 50rem;
  padding: 30px;
  /* min-width: 35rem; */
  background: white;
  box-shadow: 0px 3px 8px rgb(100, 100, 100);
  border-radius: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.5rem;
    margin: 1rem;
    padding: 0.7rem;
  }
`;

export const Blanket = styled(Description)`
  position: fixed;
  height: 600px;
  width: 1000px;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -402px;
  background-color: #d9e6e8;
  border-radius: 20px;
  overflow-x: hidden;
  opacity: 95%;
  z-index: 100;
  @media (max-width: 830px) {
    height: 500px;
    width: 400px;
    margin-top: -250px;
    margin-left: -200px;
    border-radius: 20px 20px 20px 20px;
  }
`;