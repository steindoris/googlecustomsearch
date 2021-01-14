import React from 'react'
import { Card } from 'react-bootstrap'

const Result = ({ item }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Link style={{display: "table-cell"}}  href={item.image.contextLink} target="_blank" rel = "noopener noreferrer">
        <Card.Img src={item.image.thumbnailLink} variant="top" style={{height: "100%"}} />
      </Card.Link>
      <Card.Body>
        <Card.Link style={{display: "table-cell"}}  href={item.image.contextLink} target="_blank" rel = "noopener noreferrer">
          <Card.Title as="div">
            <strong>{item.title}</strong>
          </Card.Title>
        </Card.Link>
        <Card.Link href={item.displayLink} target="_blank" rel = "noopener noreferrer">
            <Card.Text>{item.displayLink}</Card.Text>
        </Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Result