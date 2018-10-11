import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { connect } from 'react-redux';

const SingleCard = (props) => {
  const { articles } = props;
  console.log('jnjuihnuih', articles);
  return (

    <div>
    
        {articles ?
          articles.map((art, ind) => {
            return (
              <div>
              <Card>
              <CardImg width="100%" height="143px" src={art.picture} alt="Local soccer" />
                <CardImgOverlay>
                    <CardTitle>{art.title}</CardTitle>
                </CardImgOverlay>
                  
                </Card>
              </div>
            )
          })
          : <div>loading</div>
        }
    
    </div>
  );
};
function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(SingleCard);