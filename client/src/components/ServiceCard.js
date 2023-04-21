import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  padding: 2rem;
`;

const Card = ({ children, className }) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

export default Card;
