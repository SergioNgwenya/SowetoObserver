import React, { Component } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import { connect } from 'react-redux';


class TopHead extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
      items : [
        {
          src: 'https://s.inyourpocket.com/gallery/179169.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'https://www.thenation.com/wp-content/uploads/2017/11/Donald-Trump-big-mouth-img.jpg?scale=896&amp;compress=80    ',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'http://www.diskifans.com/wp-content/uploads/2014/09/Kaizer-Chiefs1.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ]
     };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentWilMount(){
    //this.setState({items: [...this.props.articles] })
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, items } = this.state;
    const {articles} = this.props;
    console.log('KG',items);
    if(articles){
    const slides = articles.map((article) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={article.src}
        >
          <img src={article.picture} alt={article.title} style={{height: 350, width: 800}} />
          <CarouselCaption captionHeader={article.title} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
    }
    else{
      return <div>loading</div>
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(TopHead);
// import React, { Component } from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css"; 
// // import "slick-carousel/slick/slick-theme.css";


// class SimpleSlider extends Component {
//   render() {
//     // var settings = {
//     //   dots: true,
//     //   infinite: true,
//     //   slidesToShow: 3,
//     //   slidesToScroll: 1,
//     //   autoplay: true,
//     //   autoplaySpeed: 2000,
//     //   pauseOnHover: true
//     // };
//     return (
//       <div>
//         {/* <h2>Pause On Hover</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider> */}
//       </div>
//     );
//   }
// }


// export default SimpleSlider;




