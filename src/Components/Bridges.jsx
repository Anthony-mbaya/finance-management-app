import React from "react";
import kcbimage from "../images/kcb.png";
import equityimage from "../images/equity.png";
import stanbicimage from "../images/stanbic.png";
import familyimage from "../images/family.png";

export const Bridges = () => {
  return (
    <div className="bridges">
      <div className="bridge">
        <img src={kcbimage} alt="kcb bank" />
        <div className="bridge-text">
          <h2> KCB Bank</h2>
          <p>
            KCB(Kenya Commercial Bank) is a robust & innovative mobile banking
            platform in Kenya offers customers not only an account but also a
            means of interacting with the bank.
          </p>
          <button className="bridge-btn">Go KCB</button>
        </div>
      </div>

      <div className="bridge">
        <img src={equityimage} alt="equity bank" />
        <div className="bridge-text">
          <h2> Equity Bank</h2>
          <p>
            Inua Biashara is a loan with a difference, giving you affordable
            loans, free training in Business Management, Financial Education and
            access to mentoring.
          </p>
          <button className="bridge-btn">Go Equity</button>
        </div>
      </div>

      <div className="bridge">
        <img src={stanbicimage} alt="stanbic bank" />
        <div className="bridge-text">
          <h2> Stanbic Bank</h2>
          <p>
            As a leading Africa-focused financial services organisation, Africa
            is our home, and we drive her growth. Our Leadership · Code of
            ethics. Investor relations.
          </p>
          <button className="bridge-btn">Go Stanbic</button>
        </div>
      </div>

      <div className="bridge">
        <img src={familyimage} alt="family bank" />
        <div className="bridge-text">
          <h2> Family Bank</h2>
          <p>
            Winning Together, Within ourselves and with our customers, we work
            together and we win together; Self Belief – in ourselves and our
            customers
          </p>
          <button className="bridge-btn">Go Family</button>
        </div>
      </div>
    </div>
  );
};
