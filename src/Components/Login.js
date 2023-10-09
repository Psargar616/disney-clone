import React from "react";
import styled from "styled-components";


const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="logo1" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premire access to Raya and The Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/06/23, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="logo2"></CTALogoTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  /* margin-top: 0; */
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.5s;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 20px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  line-height: 1.7;
  letter-spacing: 1.5px;
  margin: 0 0 24px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
