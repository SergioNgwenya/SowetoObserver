import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import { Link} from 'react-router-dom';


 class About extends React.Component {
  render() {
    return (
      <div >
        <Container style={{textAlign: 'center'}}>
         
            <h2>- About -</h2>
            
            <br/>
            <h4>Background</h4>
            <p><i>Mauris aliquet risus id bibendum congue. Vestibulum ac molestie velit, at sodales dolor. Praesent id dolor et ante congue gravida nec quis massa. Fusce tempus, risus nec euismod tristique, massa dui feugiat nunc, in faucibus enim tellus id quam. Curabitur lacinia nibh eget fermentum euismod. In at nisi consectetur, scelerisque orci sed, mattis ex. Morbi eget laoreet felis. Mauris aliquet risus id bibendum congue. Vestibulum ac molestie velit, at sodales dolor. </i></p>
            <br/>
            <h4>Aim</h4>
            <p><i>Nulla facilisi. Donec pellentesque velit tellus, ac gravida ex fermentum eget. Pellentesque condimentum dui et sapien viverra suscipit. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra erat nec quam malesuada dictum. Vestibulum id risus eleifend, vehicula nisl et, porttitor justo. Mauris aliquet risus id bibendum congue. Vestibulum ac molestie velit, at sodales dolor. </i> </p>
            <h4>Mission and Vision</h4>
            <p><i>Nulla facilisi. Donec pellentesque velit tellus, ac gravida ex fermentum eget. Pellentesque condimentum dui et sapien viverra suscipit. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra erat nec quam malesuada dictum. Vestibulum id risus eleifend, vehicula nisl et, porttitor justo. Mauris aliquet risus id bibendum congue. Vestibulum ac molestie velit, at sodales dolor. </i> </p>
         
      </Container>
      </div>
    );
  }
}
export default About;