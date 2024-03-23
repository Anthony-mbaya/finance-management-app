import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-info-text">
        <h1>CruxTon Ltd Finance App</h1>
        <p>
          At Cruxton Ltd., we're more than just a business. We're a passionate
          team dedicated to Monitor Your Finace Data With Us. With a relentless
          commitment to excellence and innovation, we strive to ensure proper
          finance management.
        </p>
        <div className="handles-container">
          <AiOutlineGithub className="handles" />
          <FaXTwitter className="handles" />
          <AiFillLinkedin className="handles" />
          <AiOutlineInstagram className="handles" />
          <FaFacebook className="handles" />
        </div>
      </div>

      <div className="footer-links-container">
        <div className="footer-links">
            <h4>Merging Banks</h4>
            <ul className="footer-list">
                <li>KCB</li>
                <li>Equity</li>
                <li>Stanbic</li>
                <li>Family</li>
            </ul>
        </div>

        <div className="footer-links">
            <h4>Solutions</h4>
            <ul className="footer-list">
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
        </div>

        <div className="footer-links">
            <h4>Support</h4>
            <ul className="footer-list">
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API status</li>
            </ul>
        </div>
        </div>
    </div>
  );
};
