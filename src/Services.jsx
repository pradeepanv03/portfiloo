// import React from 'react'

// export default function Services() {
//   return (
//     <div>Services</div>
//   )
// }
import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

const PortfolioSection = () => {
      const { color } = useContext(ColorContext);
  
  const wrapperStyle = {
    backgroundColor: '#f7f7f7',
    color: '#ccc',
    padding: '3rem 1rem',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const headingStyle = {
    color: color,
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '2rem',
    textAlign: 'center',
  };

  const orangeText = {
    color: '#898e8fff',
  };

  const subtextStyle = {
    marginBottom: '2rem',
    color: '#ccc',
    textAlign: 'center',
  };

  const projectContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    marginBottom: '3rem',
  };

  const cardStyle = {
    flex: '1 1 100%',
    maxWidth: '340px',
    background: '#ffffff',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s ease',
  };

  const projectTitleStyle = {
    color: 'black',
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
  };

  const projectTextStyle = {
    fontSize: '0.95rem',
    marginBottom: '1rem',
    color: '#ccc',
  };

  const githubBtnStyle = {
    display: 'inline-block',
    backgroundColor: color,
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
  };

  const gridContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    margin: '1.5rem 0 3rem',
  };

  const gridItemStyle = {
    backgroundColor: '#022d36',
    padding: '1rem 2rem',
    borderRadius: '8px',
    color: '#cfcfcf',
    fontWeight: 600,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    flex: '1 1 40%',
    maxWidth: '160px',
    textAlign: 'center',
    fontSize: '0.95rem',
  };

  const projects = [
    {
      title: 'Pondy Property',
      description:
        'A real estate web application focused on showcasing and managing property sales in Pondicherry, built using React.js. The platform enables users to explore properties for sale, filter listings, and connect with property owners or agents.',
          link: 'https://ppcpondy.com/',
},{
      title: 'Rent Pondy',
      description:
        'A full-featured rental property web application built with React.js, designed to let users browse, search, and manage property listings. The platform includes dynamic filtering, map integration, user login with OTP, and an admin dashboard for property management',
          link: 'https://rentpondy.com/',
},
    {
      title: 'Food-cart',
      description:
        'Personal Chat Room or Workspace to share resources and hangout with friends built with React.js, Material-UI, and Firebase. Includes real-time messaging, image sharing, and reactions on messages.',
      github: 'https://github.com/pradeepanv03/food-cart',
    },
    {
      title: 'API Integration',
      description:
        'Covers axios GET, POST, PUT, PATCH, DELETE operations with real-time state management and form inputs connected to a backend API.',
      github: 'https://github.com/pradeepanv03/Api-form-integration',
    },
    {
      title: 'Add to Cart',
      description:
        'Implements cart context with localStorage persistence, product list UI, and dynamic item addition/removal across components.',
      github: 'https://github.com/pradeepanv03/Add-to-cart',
    },
     {
      title: 'Mynthra',
      description:
        'The layout adjusts seamlessly across different devices (desktops, tablets, and mobiles) using CSS Grid or Flexbox. Media Queries: CSS media queries are used to apply different styles based on screen size. JavaScript is used to handle the “Add to Cart” functionality. When a user clicks the “Add to Cart” button, the product is added to the cart, and the cart icon updates to reflect the number of items.',
      github: 'https://github.com/pradeepanv03/',
    }, {
      title: 'Amazon prime video clone',
      description:
        'Amazon Prime Video uses fluid grids that adjust the layout based on the screen size. This ensures that content is displayed appropriately whether you’re on a mobile phone, tablet, or desktop. Flexible Images and Media: Images and videos on Prime Video resize automatically to fit the screen without losing quality or aspect ratio.',
      github: 'https://github.com/pradeepanv03/Amazon',
    }, {
      title: 'Netflix clone',
      description:
        'Utilize Bootstrap to speed up the development process and ensure responsiveness. Bootstrap’s grid system is particularly useful. Cross-Browser Testing: Ensure the website works well across different browsers. Performance Optimization: Optimize images, minify CSS and JavaScript, and use lazy loading for better performance',
      github: 'https://github.com/pradeepanv03/Netflix-clone-ui-design',
    },
  ];

  const skills = ['HTML5', 'JavaScript', 'CSS3', 'Node.js', 'React', 'Bootstrap', 'MySQL', 'React-Bootstrap', 'Git', 'Sass'];
  const tools = ['Windows', 'VS Code', 'Postman'];

  return (
    <div style={wrapperStyle}>
      <h2 style={headingStyle}>
        My Recent <span style={orangeText}>Works</span>
      </h2>
      <p style={subtextStyle}>Here are a few projects I've worked on recently.</p>

      {/* <div style={projectContainerStyle}>
        {projects.map((project, idx) => (
          <div key={idx} style={cardStyle}>
            <h3 style={projectTitleStyle}>{project.title}</h3>
            <p style={projectTextStyle}>{project.description}</p>
            <a href={project.github} style={githubBtnStyle} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ marginRight: '8px' }}></i>GitHub
            </a>
          </div>
        ))}
      </div> */}
      <div style={projectContainerStyle}>
  {projects.map((project, idx) => (
    <div key={idx} style={cardStyle}>
      <h3 style={projectTitleStyle}>{project.title}</h3>
      <p style={projectTextStyle}>{project.description}</p>

      {project.github ? (
        <a
          href={project.github}
          style={githubBtnStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={{ marginRight: '8px' }}></i>GitHub
        </a>
      ) : project.link ? (
        <div style={{ marginTop: '1rem' }}>
          <strong style={{ color: '#fff' }}>Live Link: </strong>
          <a
            href={project.link}
            style={{
              color: color,
              textDecoration: 'underline',
              wordBreak: 'break-all',
              fontSize: '0.9rem',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link}
          </a>
        </div>
      ) : null}
    </div>
  ))}
</div>

    </div>
  );
};

export default PortfolioSection;
