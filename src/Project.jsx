import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import './project.css'
export default function Project() {
  return (
    <Container fluid className="project-section" id='project'>
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#b9aba1" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Food-cart"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/pradeepanv03/food-cart"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Api integration"
              description="Fetching Data: When your component mounts, use axios.get to fetch data and store it in the component’s state.
Adding Data: Provide a form to collect user input and use axios.post to send this data to the server.
Updating Data: Allow users to edit existing data and use axios.put or axios.patch to send the updated data to the server.
Deleting Data: Provide a way to delete items and use axios.delete to remove the data from the server."
              ghLink="https://github.com/pradeepanv03/Api-form-integration"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Add to cart"
              description="Cart Context: Manages the cart state and persists it in local storage.
ProductList Component: Displays products and allows adding them to the cart.
Cart Component: Displays the items in the cart and allows removing them.
This setup ensures that the cart data is saved in the browser’s local storage, so it persists even after a page refresh."

              ghLink="https://github.com/pradeepanv03/Add-to-cart"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Mynthra"
              description="he layout adjusts seamlessly across different devices (desktops, tablets, and mobiles) using CSS Grid or Flexbox.
Media Queries: CSS media queries are used to apply different styles based on screen size.  JavaScript is used to handle the “Add to Cart” functionality. When a user clicks the “Add to Cart” button, the product is added to the cart, and the cart icon updates to reflect the number of items."
              ghLink="https://github.com/pradeepanv03/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Amazon prime video clone"
              description="Amazon Prime Video uses fluid grids that adjust the layout based on the screen size. This ensures that content is displayed appropriately whether you’re on a mobile phone, tablet, or desktop.
Flexible Images and Media: Images and videos on Prime Video resize automatically to fit the screen without losing quality or aspect ratio."
              ghLink="https://github.com/pradeepanv03/Amazon"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Netflix clone"
              description="Utilize Bootstrap to speed up the development process and ensure responsiveness. Bootstrap’s grid system is particularly useful. Cross-Browser Testing: Ensure the website works well across different browsers.
Performance Optimization: Optimize images, minify CSS and JavaScript, and use lazy loading for better performance"
              ghLink="https://github.com/pradeepanv03/Netflix-clone-ui-design"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>)
}
