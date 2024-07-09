import React from "react";
import "./Landing.css";

export default function Bottom() {
  return (
    <div className="bottom-container">
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/deepanshu-garg-515a9022a"
      >
        <i class="fa-brands fa-linkedin icon"></i>
        LinkedIn
      </a>
      <a className="footer-link" href="https://github.com/dgarg6333">
        <i class="fa-brands fa-github icon"></i>
        GitHub
      </a>
      <a
        className="footer-link"
        href="https://twitter.com/Deepans51432965?t=qF3zJY0F6nnB94FOEFp8-A&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-twitter icon"></i>
        Twitter
      </a>
      <a
        className="footer-link"
        href="https://www.instagram.com/deepanshugarg_20/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-instagram icon"></i>
        Instagram
      </a>
      <a
        className="footer-link"
        href="mailto:dgarg6333.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-solid fa-envelope icon"></i>
        Email
      </a>
      <a
        className="footer-link"
        href="https://portfolio-alpha-red-72.vercel.app/"
      >
        <i class="fa-solid fa-laptop icon"></i>
        Website
      </a>
      <p className="aj">© 2024 Deepanshu Garg.</p>
    </div>
  );
}
