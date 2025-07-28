import React, { useContext, useState } from "react";
// import "./contacts.css";
import { IoMdMailUnread } from "react-icons/io";
import { FcCallback } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
// import contact from "../../assets/images/contact.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { LightSpeed, Rotate } from "react-reveal";
import { MdEmail, MdPhone } from "react-icons/md";
import { ColorContext } from './ColorContext';

export default function Contacts() {
      const { color } = useContext(ColorContext);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitting(true);
      // Handle form submission via Web3Forms or other services
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "25b0e372-5a87-4202-bcce-6f15540024ab",
          ...formData,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        })
        .catch(() => {
          alert("An error occurred. Please try again.");
          setIsSubmitting(false);
        });
    }
  };

  return (
    // <div className="contact" id="contact">
    //   <div className="card card0 border-0 pt-5 pb-3">
    //     <div className="row m-2">
    //       <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
    //         <div className="card1">
    //           <LightSpeed>
    //             <div className="row border-line">
    //               <h5 className="text-center" style={{ marginLeft: "5px" }}>
    //                 <IoMdMailUnread
    //                   size={30}
    //                   style={{ marginRight: "5px" }}
    //                   color="rgb(212, 57, 57)"
    //                 />
    //                 <span className="designs ms-1" style={{ color: "purple" }}>
    //                   Email_Id:
    //                 </span>
    //                 <span style={{ marginLeft: "18px", fontWeight: "bold" }}>
    //                   hsavitha1999@gmail.com
    //                 </span>
    //               </h5>
    //               <h5 className="head" style={{ marginLeft: "90px" }}>
    //                 <FcCallback size={30} />
    //                 <span className="designs" style={{ color: "purple" }}>
    //                   Phone.No:
    //                 </span>
    //                 <span style={{ marginLeft: "13px", fontWeight: "bold" }}>
    //                   8498445464
    //                 </span>
    //               </h5>
    //             </div>
    //           </LightSpeed>
    //         </div>
    //       </div>
    //       {/* Right Section */}
    //       <Rotate>
    //         <div className="col-lg-6 col-md-6">
    //           <div className="card2 d-flex card border-0 px-3 py-4">
    //             <div className="row">
    //               <div className="row text-center mb-3">
    //                 <h6>
    //                   Contact With
    //                   <a
    //                     href="https://www.linkedin.com/in/savitha-h-393600315"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <BsLinkedin color="blue" size={30} className="ms-2" />
    //                   </a>
    //                   <a
    //                     href="https://github.com/Savitha1999"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <BsGithub color="black" size={30} className="ms-2" />
    //                   </a>
    //                 </h6>
    //               </div>

    //               <div className="row px-3 mt-2 mb-4">
    //                 <div className="line" />
    //                 <small className="or text-center"> OR </small>
    //                 <div className="line" />
    //               </div>

    //               <form onSubmit={handleSubmit}>
    //                 <div className="row px-3">
    //                   <input
    //                     type="text"
    //                     name="name"
    //                     placeholder="Enter Your Name"
    //                     value={formData.name}
    //                     onChange={handleInputChange}
    //                   />
    //                   {errors.name && (
    //                     <small className="text-danger">{errors.name}</small>
    //                   )}
    //                 </div>

    //                 <div className="row px-3 mt-3">
    //                   <input
    //                     type="email"
    //                     name="email"
    //                     placeholder="Enter Your Email_Id"
    //                     value={formData.email}
    //                     onChange={handleInputChange}
    //                   />
    //                   {errors.email && (
    //                     <small className="text-danger">{errors.email}</small>
    //                   )}
    //                 </div>

    //                 <div className="row px-3 mt-3">
    //                   <textarea
    //                     name="message"
    //                     placeholder="Enter Your Message"
    //                     value={formData.message}
    //                     onChange={handleInputChange}
    //                   />
    //                   {errors.message && (
    //                     <small className="text-danger">{errors.message}</small>
    //                   )}
    //                 </div>

    //                 <button
    //                   className="button mt-3 w-50"
    //                   type="submit"
    //                   disabled={isSubmitting}
    //                 >
    //                   {isSubmitting ? "Sending..." : "Send Message"}
    //                   <FaArrowRight style={{ marginLeft: "10px" }} />
    //                 </button>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </Rotate>
    //     </div>
    //   </div>
    // </div>
<div
  className="d-flex align-items-center justify-content-center"
  style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }} // optional background
>
  <div className="container card border-0 shadow p-4">
    <div className="row g-4 align-items-start">
      {/* Left Side - Contact Info */}
<div className="col-md-6 p-3 d-flex align-items-center justify-content-center">
  <div className="p-4 bg-white rounded shadow-sm w-100">
    {/* About Me */}
    <h4 className="text-center mb-3">About Me</h4>
    <p className="text-center mb-4">
      Hi, I'm <strong>Pradeepan V</strong>, a passionate React.js developer
      with hands-on experience in building responsive UIs and integrating
      REST APIs. I love crafting clean and user-friendly web applications.
    </p>

    {/* Email */}
    <h5 className="mb-3 text-center">
      <MdEmail size={24} color={color}  className="me-2" />
      <strong style={{color:"gray"}}>pradeepanv03@gmail.com</strong>
    </h5>

    {/* Phone */}
    <h5 className="text-center">
      <MdPhone size={24} color={color} className="me-2" />
      <strong style={{color:"gray"}}>9361847704</strong>
    </h5>
  </div>
</div>


      {/* Right Side - Contact Form */}
      <div className="col-md-6">
        <div className="p-4 bg-white rounded shadow-sm">
              <div className="text-center mb-3">
                <h6>
                  Contact With
                  {/* <a
                    href="https://www.linkedin.com/in/savitha-h-393600315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-2"
                  >
                    <BsLinkedin color="blue" size={30} />
                  </a> */}
                  <a
                    href="https://github.com/pradeepanv03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-2"
                  >
                    <BsGithub color="black" size={30} />
                  </a>
                </h6>
              </div>

              <div className="d-flex align-items-center my-3">
                <div className="flex-grow-1 border-top" />
                <small className="px-3 text-muted">OR</small>
                <div className="flex-grow-1 border-top" />
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Your Email_Id"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Enter Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-primary px-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FaArrowRight style={{ marginLeft: '10px' }} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
            </div>

  );
}


// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     user_name: '',
//     user_email: '',
//     phone: '',
//     location: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!formData.user_email) {
//       alert("❗ Email is required");
//       return;
//     }

//     emailjs
//       .sendForm(
//         'service_6vud5nl',      // ✅ Your EmailJS Service ID
//         'template_x5ot7na',     // ✅ Your Template ID
//         form.current,
//         'iXTfKiDcU9jVF8Y00'     // ✅ Your Public Key
//       )
//       .then(() => {
//         alert('✅ Message sent successfully!');
//         form.current.reset();
//         setFormData({
//           user_name: '',
//           user_email: '',
//           phone: '',
//           location: '',
//           message: '',
//         });
//       })
//       .catch((error) => {
//         alert('❌ Failed to send message. Please try again later.');
//         console.error('EmailJS Error:', error);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} style={styles.form}>
//       <h2 style={styles.heading}>Get In Touch</h2>
//       <p style={styles.subtext}>Fill out the form below and we'll get back to you soon.</p>

//       <div style={styles.row}>
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Your Name"
//           style={styles.input}
//           value={formData.user_name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="Email address *"
//           style={styles.input}
//           value={formData.user_email}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div style={styles.row}>
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           style={styles.input}
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           style={styles.input}
//           value={formData.location}
//           onChange={handleChange}
//         />
//       </div>

//       <textarea
//         name="message"
//         placeholder="Your Message"
//         rows="4"
//         style={styles.textarea}
//         value={formData.message}
//         onChange={handleChange}
//       ></textarea>

//       <label style={styles.checkboxContainer}>
//         <input type="checkbox" name="save_info" />
//         Save my name, email, and website in this browser for the next time.
//       </label>

//       <button type="submit" style={styles.button}>Send Message</button>
//     </form>
//   );
// };

// const styles = {
//   form: {
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '15px',
//     maxWidth: '800px',
//     margin: 'auto',
//     fontFamily: 'Poppins, sans-serif',
//     boxShadow: '0 0 10px rgba(0,0,0,0.05)',
//   },
//   heading: {
//     fontSize: '32px',
//     marginBottom: '10px',
//     fontWeight: '600',
//   },
//   subtext: {
//     color: '#555',
//     marginBottom: '25px',
//   },
//   row: {
//     display: 'flex',
//     gap: '20px',
//     marginBottom: '20px',
//     flexWrap: 'wrap',
//   },
//   input: {
//     flex: 1,
//     minWidth: '200px',
//     padding: '14px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '14px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//     marginBottom: '20px',
//   },
//   checkboxContainer: {
//     fontSize: '14px',
//     marginBottom: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   button: {
//     backgroundColor: '#85b9ad',
//     color: '#fff',
//     padding: '12px 25px',
//     border: 'none',
//     borderRadius: '25px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
// };

// export default ContactForm;
