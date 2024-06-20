import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box font-satoshi">
    <p className="font-semibold sm:text-l text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn font-extrabold">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-l sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 font-satoshi font-semibold">
      Hi, I am <span className="font-extrabold">Prathamesh</span> 👋🏻
      <br />A MS-Computer Engineering student from Virginia Tech
    </h1>
  ),
  2: (
    <InfoBox
      text="I am passionate about solutions that leverage best-practice technologies 💻 to deliver a top user experience"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Dicover a curated collection of all my projects 🛠, each navigating complexity to deliver simple yet elegant solutions"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Ready to take your product to the next level? 🤝🏻"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
