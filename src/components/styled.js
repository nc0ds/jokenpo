import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  max-width: ${props => props.maxwidth ? `${props.maxwidth};` : '95%;'};
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #222;
  border-radius: 0.5rem;
  padding: 1rem;

  ${props => props.center ? (`
    margin-left: auto;
    margin-right: auto;
  `) : null}
`

const Row = styled.div`
  width: 95%;
  max-width: ${props => props.maxwidth ? `${props.maxwidth};` : '95%;'};
  display: flex;
  justify-content: ${props => props.centerContent ? 'center;' : 'space-between;'};
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${props => props.center ? (`
    margin-left: auto;
    margin-right: auto;
  `) : null}
`

const Column = styled.div`
  width: 95%;
  max-width: ${props => props.maxwidth ? `${props.maxwidth};` : '95%;'};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.centerContent ? 'center;' : 'space-between;'};
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${props => props.center ? (`
    margin-left: auto;
    margin-right: auto;
  `) : null}
`

const Title = styled.h1`
  font-family: Arial;
  font-weight: 300;
  font-size: 2.5rem;
  width: fit-content;
  margin: 0 auto;
`

const Paragraph = styled.p`
  font-family: Helvetica;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  ${props => props.fit ? 'width: fit-content;' : null}
  ${props => props.color ? `color: ${props.color};` : null}
`

const Button = styled.input.attrs(props => ({
  type: 'button',
  value: props.value
}))`
  border: 1px solid #222;
  border-radius: 0.5rem;
  padding: 1.3rem;
  font-size: 1.1rem;
  background-color: transparent;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #222;
    color: #FFF;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Container, Row, Title, Column, Paragraph, Button, Center }
