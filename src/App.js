import { useState } from 'react'
import { Container, Row, Title, Column, Paragraph, Button, Center } from './components/styled'
import './App.css';

function App() {
  const [playerChoice, setPlayerChoice] = useState('-')
  const [comChoice, setComChoice] = useState('-')
  const [playerPoints, setPlayerPoints] = useState(0)
  const [comPoints, setComPoints] = useState(0)

  const computer = () => {
    const number = Math.floor((Math.random() * 3) + 1)
    if(number === 1) {
      setComChoice('Pedra')
    } else if(number === 2) {
      setComChoice('Papel')
    } else {
      setComChoice('Tesoura')
    }
    return number
  }

  const play = num => {
    const com = computer()
    if(num === 1) {
      if(com === 2) {
        setComPoints(comPoints + 1)
      }

      if(com === 3) {
        setPlayerPoints(playerPoints + 1)
      }
    }
    
    if(num === 2) {
      if(com === 3) {
        setComPoints(comPoints + 1)
      }

      if(com === 1) {
        setPlayerPoints(playerPoints + 1)
      }
    }
    
    if(num === 3) {
      if(com === 1) {
        setComPoints(comPoints + 1)
      }

      if(com === 2) {
        setPlayerPoints(playerPoints + 1)
      }
    }
  }

  return (
    <Container maxwidth='750px' center>
      <Title>Jokenpô</Title>
      <Column center centerContent>
        <Paragraph>Placar:</Paragraph>
        <Paragraph>{playerPoints} X {comPoints}</Paragraph>
      </Column>
      <Row center centerContent>
        <Column centerContent>
          <Paragraph fit>Você</Paragraph>
          <Paragraph fit>{playerChoice}</Paragraph>
        </Column>
        <Center>
          <Paragraph fit>X</Paragraph>
        </Center>
        <Column centerContent>
          <Paragraph fit>COM</Paragraph>
          <Paragraph fit>{comChoice}</Paragraph>
        </Column>
      </Row>
      <Row maxwidth='500px' center>
        <Button value='Pedra' onClick={() => {
          setPlayerChoice('Pedra')
          play(1)
        }} />
        <Button value='Papel' onClick={() => {
          setPlayerChoice('Papel')
          play(2)
        }} />
        <Button value='Tesoura' onClick={() => {
          setPlayerChoice('Tesoura')
          play(3)
        }} />
      </Row>
    </Container>
  );
}

export default App;
