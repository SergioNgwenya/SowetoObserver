import React from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import AdComp from '../Home/adComponent';
import { Card, CardText, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import CardSimple from '../../../components/CardSimple'

class Category extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">


                        <Jumbotron>
                            <h3 className="lead" style={{textAlign: 'center'}}>{(this.props.match.params.category).toUpperCase()}</h3>
                        </Jumbotron>
                        <Row>
                            <Col md={6}>
                                <ListGroup flush>
                                    <ListGroupItem className="lead" disabled tag="a" href="#">Headlines</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                            </Col>

                            <Col md={6}>
                            <CardSimple/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <AdComp />
                        <AdComp />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Category;








