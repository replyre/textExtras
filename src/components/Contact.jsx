import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="box1 box">
        <div className="content">
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/replyre/profileCard-Neo-Brutalism/main/img/Rectangle-1503.png"
              alt="Profile Image"
            />
          </div>
          <div className="level">
            <p>@replyre</p>
          </div>
          <div className="text">
            <p className="name">Rahul Gupta</p>
            <p className="job_title">Full Stack Developer</p>
            <p className="job_discription">
              Hello! I'm Rahul 👋, working in MERN and Nextjs projects would
              love to contribute to yours as well 😊.
            </p>
          </div>
          <div className="icons">
            <button
              onClick={() =>
                window.open("https://github.com/replyre", "_blank")
              }
            >
              <ion-icon name="logo-github"></ion-icon>
            </button>
            <button
              onClick={() =>
                window.open("https://instagram.com/wayward_rahul", "_blank")
              }
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
            <button
              onClick={() =>
                window.open("https://codepen.io/replyre/", "_blank")
              }
            >
              <ion-icon name="logo-codepen"></ion-icon>
            </button>
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/replyr", "_blank")
              }
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://rahul-gupta-portfolio.vercel.app/",
                  "_blank"
                )
              }
            >
              <ion-icon name="logo-electron"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
