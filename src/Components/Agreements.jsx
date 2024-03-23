import React from "react";
import { HiMiniUser } from "react-icons/hi2";
import { HiMiniUserPlus } from "react-icons/hi2";
import { HiMiniUserGroup } from "react-icons/hi2";
export const Agreements = () => {
  return (
    <div className="contracts">
      <div className="contracts-container">
        <div className="contracts-details">
          <HiMiniUser className="user-icon" />
          <h3>Single User Contract</h3>
          <div className="contracts-text">
            <p className="cost">Free Trial</p>
            <p>This is the most basic form of a contract</p>
            <p>Includes all the essential features that any user requires</p>
            <button className="contract-btn">Start Trial</button>
          </div>
        </div>

        <div className="contracts-details">
          <HiMiniUserPlus className="user-icon" />
          <h3>Single User+ Contract</h3>
          <div className="contracts-text">
            <p className="cost">KES 1500</p>
            <p>This is the most basic form of a contract</p>
            <p>Includes all the essential features that any user requires</p>
            <button className="contract-btn">Start Trial</button>
          </div>
        </div>

        <div className="contracts-details">
          <HiMiniUserGroup className="user-icon" />
          <h3>User Group Contract</h3>
          <div className="contracts-text">
            <p className="cost">KES 3000</p>
            <p>This is the most basic form of a contract</p>
            <p>Includes all the essential features that any user requires</p>
            <button className="contract-btn">Start Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};
