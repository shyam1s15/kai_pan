import React, { Component } from "react";
//gamename,gametype,player participate,total player,place,start date,end date,entry fees,win price
import ReactBootstrap, { Form, Col, Button, Row } from "react-bootstrap";

class AddTournament extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game_name: "",
      game_type: "",
      player_participant: "",
      total_player: "",
      place: "",
      start_date: "",
      end_date: "",
      entry_fees: "",
      win_price: "",
    };
  }

  handleChangeGame_name = async event => {
    const game_name = event.target.value
        this.setState({ game_name })
  }
  handleChangeGame_type = async event => {
    const game_type = event.target.value
        this.setState({ game_type })
  }
  handleChangePlayerParticipant = async event => {
    const player_participant = event.target.value
        this.setState({ player_participant })
  }
  handleChangeTotalPlayer = async event => {
    const total_player = event.target.value
        this.setState({ total_player })
  }
  handleChangePlace = async event => {
    const place = event.target.value
        this.setState({ place })
  }
  handleStartDate = async event => {}
  handleEndDate = async event => {}
  handleEntryFees = async event => {}
  handleWinPrice = async event => {}
}

function Addtournament() {
  return (
    <form
      onSubmit={console.log("shyam baba")}
      method="get"
      action="/tournamentlist"
    >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Game Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="GameName" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Game Type
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="GameType" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Player participate
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="Player participate" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Total Player
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="TotalPlayer" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Place
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Place" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Start Date
        </Form.Label>
        <Col sm="10">
          <Form.Control type="date" placeholder="StartDate" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          End Date
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="EndDate" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Entry Fees
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="EntryFees" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Win Price
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="WinPrice" />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Addtournament;
