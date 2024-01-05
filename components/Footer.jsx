import { Container, Row, Col } from "react-bootstrap";

import React from 'react'

function Footer() {
  const currentYear = 34
  return (
    <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>
                NotesMart &copy; {currentYear}
              </p>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
