import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import icon from '../images/icon.png'
import great from '../images/smile.png'
import bad from '../images/sad.png'
import ok from '../images/ok.png'
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC31FDHB0vOdWby_GzG0TMFcF7xA74zqP4",
  authDomain: "freud-205314.firebaseapp.com",
  databaseURL: "https://freud-205314.firebaseio.com",
  projectId: "freud-205314",
  storageBucket: "freud-205314.appspot.com",
  messagingSenderId: "707378438876"
};

firebase.initializeApp(config);

const DashWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Lato;
  color: #FFF;
`;

const DashHeader = Header.extend`
  justify-content: center;
`;

const IconImage = styled.img`
  height: 50px;
  margin-right: 15px;
`;

const HeaderBigText = styled.h1`
`;

const Showcase = styled.div`
  display: flex;
`;

const Date = styled.div`
  display: flex;
  background-color: #4A293F;
  padding: 10px 30px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
`;

const DateText = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;

const Bold = styled.span`
  font-weight: 900;
`
const Cards = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  align-items:flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 225px;
  height: 300px;
`;

const CardGreat = Card.extend`
  background: linear-gradient(#92F4C3, #59E48F);
`

const CardSad = Card.extend`
  background: linear-gradient(#FECED4, #FCA0AA);
`

const CardOk = Card.extend`
  background: linear-gradient(#FCECBC, #F7CF7A);
`

const CardImg = styled.img`
  width: 100px;
`;

const CardDate = styled.p`
  font-weight: 900;
`;


class Dash extends Component {

  constructor() {
    super();

    this.state = {};
  }

  returnScore() {
    let total = 0;
    this.state.processedEntities.forEach(element => {
      total += element.score;
    })
    total = total / this.state.processedEntities.length;
    return total
  }

  returnCard() {
    const score = this.returnScore();

    if (score === 0.0) {
      return (
        <CardOk>
          <CardImg src={ok} />
        </CardOk>
      )
    }
    else if (score < 0) {
      return (
        <CardSad>
          <CardImg src={bad} />
        </CardSad>
      )
    }
    else {
      return (
        <CardGreat>
          <CardImg src={great} />
        </CardGreat>
      )
    }
  }

  componentDidMount() {
    firebase.database().ref('16479977194/2018/4/26/entries/0').on('value', (snapshot) => {
        let data = snapshot.val();
        this.setState(data)
      })
    };

  render () {

    return (
      <DashWrapper>
        <DashHeader>
          <IconImage src={icon} />
          <HeaderBigText>DASHBOARD</HeaderBigText>
        </DashHeader>
        <Showcase>
          <Date>
            <DateText> <Bold>May</Bold> 2018 </DateText>
          </Date>
          <Cards>
            <CardSad>
              <CardImg src={bad} />
              <CardDate>1</CardDate>
            </CardSad>
          </Cards>
        </Showcase>

      </DashWrapper>
    )
  }
}

export default Dash
