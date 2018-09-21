import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const CardSimple = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="https://www.procurious.com/blog-content/2016/04/Small-Business.jpg" alt="Zuma" />
        <CardImgOverlay style={{color:'black'}}>
          <CardText>Black Owned businesses </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default CardSimple;