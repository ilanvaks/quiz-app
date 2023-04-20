import { Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"

export default function Footer () {

  const currentYear = new Date().getFullYear()
  const githubLink = "https://github.com/ilanvaks/quiz-app"

  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p><small>&copy; {currentYear}</small>
            <br/>
            <a href="{githubLink}" target="_blank" rel="noreferrer">Code in Github</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}