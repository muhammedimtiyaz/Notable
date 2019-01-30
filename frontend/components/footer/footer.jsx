import React from "react";

const Footer = () => {
  return (
    <div className="main-page-footer">
      <div className="footer-content">
        Muhammed Imtiyaz
        <a href="https://github.com/muhammedimtiyaz"><img src={window.githubURL} />Github</a>
        <a href="https://www.linkedin.com/in/muhammed-imtiyaz/"><img src={window.linkedinURL} />LinkedIn</a>
      </div>
    </div>
  )
}

export default Footer;