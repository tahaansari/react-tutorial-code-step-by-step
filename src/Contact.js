import { Link, Outlet } from "react-router-dom";
function Contact() {
  console.log("contact page got rendered");
  return (
    <>
      <h2>Contact Page</h2>
      <h3>We have some other business as well</h3>
      <Link to="company">company</Link>
      <br />
      <Link to="channel">channel</Link>
      <Outlet />
    </>
  );
}

export default Contact;
