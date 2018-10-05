import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Headlines extends React.Component {
  render() {
    return (
      <ListGroup flush>
        <ListGroupItem tag="a" href="#"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus uis autem vel eum iure reprehenderit qui </ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros qui in ea voluptate velit esse quam nihil molestiae </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Headlines;