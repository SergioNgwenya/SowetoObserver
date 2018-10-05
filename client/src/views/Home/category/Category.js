import React from 'react';
import { Row, Col, Container, Jumbotron, CardBody, CardSubtitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import AdComp from '../Home/adComponent';
import { Card, CardText, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import CategoryCard from '../../../components/Cards/CategoryCard'
import Headlines from '../../../components/Headline/Headlines';
import CardSimple from '../../../components/Cards/CardSimple';

class Category extends React.Component {
    render() {
        return (
            <Container className='Container'>
                <Row>
                    <Col md="9">


                        <Jumbotron>
                            <h3 className="lead" style={{ textAlign: 'center', fontWeight: 'bold' }}>{(this.props.match.params.category).toUpperCase()}</h3>
                        </Jumbotron>

                        <Row>
                            <Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px"   src="http://i.dailymail.co.uk/i/pix/2017/05/09/18/09FE6489000005DC-4489210-image-a-16_1494350556940.jpg" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{fontWeight: 'bold', }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae </CardText>
                                    </Card>
                                </div>
                            </Col>
                            <Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px"  src="http://1.bp.blogspot.com/-bWmp6Ar3zks/VfrEAGyTT6I/AAAAAAAAVs4/TRmT-OAxLRs/s1600/rwc15%2Bsa%2Bvs%2Bjapan%2Bintro.jpg" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ fontWeight: 'bold' }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col><Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px" src="https://tse3.mm.bing.net/th?id=OIP.erdQk4koLSu3mGVQImyEAwHaKE&amp;pid=Api" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ fontWeight: 'bold' }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px"   src="http://i.dailymail.co.uk/i/pix/2017/05/09/18/09FE6489000005DC-4489210-image-a-16_1494350556940.jpg" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ fontWeight: 'bold'}}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col>
                            <Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px"  src="http://1.bp.blogspot.com/-bWmp6Ar3zks/VfrEAGyTT6I/AAAAAAAAVs4/TRmT-OAxLRs/s1600/rwc15%2Bsa%2Bvs%2Bjapan%2Bintro.jpg" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ color: 'black', fontWeight: 'bold', opacity: '0.7' }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col><Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px" src="https://tse3.mm.bing.net/th?id=OIP.erdQk4koLSu3mGVQImyEAwHaKE&amp;pid=Api" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ color: 'black', fontWeight: 'bold', opacity: '0.7' }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col>
                        </Row><Row>
                            <Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px"   src="http://i.dailymail.co.uk/i/pix/2017/05/09/18/09FE6489000005DC-4489210-image-a-16_1494350556940.jpg" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ color: 'black', fontWeight: 'bold', opacity: '0.7' }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col>
                            <Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px"  src="http://1.bp.blogspot.com/-bWmp6Ar3zks/VfrEAGyTT6I/AAAAAAAAVs4/TRmT-OAxLRs/s1600/rwc15%2Bsa%2Bvs%2Bjapan%2Bintro.jpg" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ color: 'black', fontWeight: 'bold' }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col><Col md='4'>
                                <div>
                                    <Card>
                                        <Card inverse>
                                            <CardImg width="100%" height="150px" src="https://tse3.mm.bing.net/th?id=OIP.erdQk4koLSu3mGVQImyEAwHaKE&amp;pid=Api" alt="business" />
                                            <CardImgOverlay >
                                                <CardText style={{ color: 'black', fontWeight: 'bold', opacity: '0.7' }}>Black Owned businesses </CardText>
                                            </CardImgOverlay>
                                        </Card>
                                        <CardText style={{padding: '10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <AdComp />
                        <Col md={3} sm={12} xs={12}>
                            <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
                        </Col>
                        <AdComp />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Category;








