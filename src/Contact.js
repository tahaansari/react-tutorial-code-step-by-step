import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <h2>Contact Page</h2>
      <h3>We have some other business as well</h3>
      <Link to="/company">company</Link>
      <br />
      <Link to="/channel">channel</Link>
    </>
  );
}

export default Contact;
