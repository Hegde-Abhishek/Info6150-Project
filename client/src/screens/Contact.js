import React, { useState } from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import Success from "../components/Success"
import "./Contact.css"

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you would typically send the form data to a server using an API
    // In this example, we'll just set submitSuccess to true to show a success message
    setSubmitSuccess(true);
  };

  return (
    // <div className="container">
<div className="container mt-5 cont">
      <div className="contactus">
      <h1>Contact Us</h1>
      {submitSuccess ? (
          <p role="alert">Thank you for contacting us!</p>
        ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} required />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} required />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={handleMessageChange} required />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>)}
      </div>
      <hr/>
      <h1>FAQ's</h1>
      <Accordion defaultActiveKey="0" className="mt-5">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          How do I make a reservation?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>Visit the Paradise Resort's website or call us directly to make a reservation or inquire about availability
You can also choose to mail us or drop in a query through the form available on the website</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="0" className="mt-5">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          What are the refund and cancellation policies?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>Refunds will be processed as per the resort rules and cancellation policy.
There will be full refund if a user cancels the reservation before 10 day of check in.
All cancellations made need to be intimated to The Paradise Resort, in order to initiate the process of refund.
The processing time for refunds may vary depending on the mode of payment, bank etc.
The refund shall be processed after deducting the service fee which is independent of the convenience fee as mentioned above.
The refund will be credited to the same account from which the payment was made.</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="0" className="mt-5">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          What are your hours of operation?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>We operate 24x7.
                    You can reachout without with your queries and our team will respond to you as soon as possible.</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="0" className="mt-5">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          What are the modes of payment??
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>There is only one mode of payment,which through card to book the rooms.
Other amenities can be accessed by paying through cash,card or online payments at the front office</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    // </div>
    
  );
}

export default ContactPage;
