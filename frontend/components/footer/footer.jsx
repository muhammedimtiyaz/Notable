import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer" id="footer">
      <div className="footer-body">

        <div className="footer-about">
          <p>Welcome to NoTable! Notable is a clone of OpenTable created using Rails (backend), Postgresql (DB)  and React/Redux (frontend).</p>
        </div>

        <div className="footer-links">
          <p>Muhammed Imtiyaz</p>
          <br />
          <a href="https://github.com/muhammedimtiyaz" target="_blank"><i className="fab fa-github"></i><p>Github</p></a>
          <br />
          <a href="https://www.linkedin.com/in/muhammed-imtiyaz/" target="_blank"><i className="fab fa-linkedin"></i><p>LinkedIn</p></a>
          <br />
          <a href="https://angel.co/muhammed-imtiyaz"><i className="fab fa-angellist" target="_blank"></i><p>Angel List</p></a>
          <br />
          <a href="http://muhammed-imtiyaz.com/"><i className="fas fa-user user-icon" target="_blank"></i><p>About Me</p></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;