import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import AdCorner from '../Home/adComponent';
import ReactPlayer from 'react-player';
import { Container, Row, Col, CardImg } from 'reactstrap';

const video = (props) => {
  return (
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col md="9">
          <div>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
              </CardBody>
              <div>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=rnwlWn603g4'
                  className='react-player'
                  width='100%'
                  height='100%'
                />
              </div>
              {/*<img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
            </Card>
          </div>
        </Col>
        <Col md="3">
          <AdCorner />
          <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
        </Col>
      </Row>
    </Container>
  );
};

export default video;
