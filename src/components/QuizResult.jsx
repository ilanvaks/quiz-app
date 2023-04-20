import { Row, Col, Container, Button } from "react-bootstrap"

export default function QuizResult ({score, quizLength, handleReset}) {

  return (
    <section>
      <Container className="quiz-result">
        <Row>
          <Col>
            <h2>Quiz Result</h2>
            <p>You scored {score} out 3.</p>
            <Button onClick= {handleReset}>Reset</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}