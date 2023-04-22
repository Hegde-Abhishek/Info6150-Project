import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: contents;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: -70px;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <div>&copy; The Paradise Resort 2023. All Rights Reserved.</div>
        <ContactInfo>
          <Icon><FaPhone /></Icon>
          <div>1-857-123-4567</div>
          <Icon><FaEnvelope /></Icon>
          <div>theparadise@gmail.com</div>
          <Icon><FaMapMarkerAlt /></Icon>
          <div>123 Main St, Boston, USA</div>
        </ContactInfo>
      </Content>
    </Container>
  );
};

export default Footer;
