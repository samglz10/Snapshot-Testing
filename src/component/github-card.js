import React from "react"
import Card from "react-bootstrap/Card"



export default function GitHubCard() {
  return (
      <div className= "card">
        <Card style={{ width: "18rem"}}>
        <Card.Img className= 'card-img-top'variant="top" src={'https://avatars.githubusercontent.com/u/66382423?v=4'} />
        <Card.Body>
            <Card.Title >Samuel Gonzalez</Card.Title>
            <Card.Text>
            I am a Novice Full Stack Software Developer learning how to use React and Bootstrap.
            </Card.Text>
            <a href="#" class="btn btn-link" onClick={'https://github.com/samglz10?tab=projects&type=new'}> 
                Please click here for my Github Profile 
            </a>
        </Card.Body>
        </Card>
      </div>
  );
}

