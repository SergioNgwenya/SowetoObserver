import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

class Headlines extends React.Component {
  render() {
    const {articles} = this.props;
    return (
      <ListGroup flush className="headlines" style={{height: 400,overflowY:'scroll'}}>
      {articles?
        articles.map((art, ind)=>{
          return(
                    <ListGroupItem tag="a" href="#">{art.title} </ListGroupItem>
          )
        })
        :<div>loading</div>
      }
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(Headlines);
