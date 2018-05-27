import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from './Header'
import logo from '../images/logo.png'
import icon from '../images/icon.png'


const HomePageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LogIn = styled.button`
  font-weight: 700;
  background-color: #AFADAD;
  color: #FFF;
  border-radius: 6px 6px;
  font-family: Lato;
  border: none;
  padding: 15px 25px;
  margin-right: 20px;
  font-size: 12px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #4BCF7F;
  }

`;

const Icon = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const HeaderBigText = styled.h1`
`;

const IconImage = styled.img`
  height: 50px;
  margin-right: 15px;
`;

const Showcase = styled.div`
  display: flex;
  width: 100%;
  font-family: PT Serif;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  `;

const LeftContent = styled.div`
  width: 58vh;
`;

const RightContent = styled.div`
  margin-left: 75px;
`

const ContentBigText = styled.h1`
  color: #F9F9F9;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 0;
`;

const ContentSmallText = styled.h1`
  color: #E4D9E0;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  opacity: 0.75;
`;

const SignUp = LogIn.extend`
  background-color: #4BCF7F;
  padding: 15px 35px;
  margin-top: 5px;
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#FEB3BE, #FC7C8A);
  width: 325px;
  height: 400px;
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  margin: auto;
`;

class HomePage extends Component {
  render () {
    return (
      <HomePageWrapper>
        <Header>
          <Icon>
            <IconImage src={icon}/>
            <HeaderBigText>FREUD</HeaderBigText>
          </Icon>
          <Link to="/dashboard">
            <LogIn>LOG IN</LogIn>
          </Link>
        </Header>
        <Showcase>
          <LeftContent>
            <ContentBigText>
              A therapist to call you each night — at <i>no cost</i>.
            </ContentBigText>
            <ContentSmallText>
              Freud will call you each night, ask a series of questions, and formulate recommendations to improve your wellbeing.
            </ContentSmallText>
            <SignUp>SIGN UP</SignUp>
          </LeftContent>
          <RightContent>
            <Placeholder>
              <Image src={logo} alt={"logo"} />
            </Placeholder>
          </RightContent>
        </Showcase>
      </HomePageWrapper>
    )
  }
}

export default HomePage
