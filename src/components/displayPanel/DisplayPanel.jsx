import React from "react";
import StakedAmount from "./StakedAmount";
import RewardRate from "./RewardRate";
import EarnedReward from "./EarnedReward";
import TokenApproval from "../stakeToken/tokenApproval";
import StakeToken from "../stakeToken/stakeToken";
import Stake from "../stake/Stake";
import Approval from "../stake/Approval";

const DisplayPanel = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-around px-40 mt-20">
        <div className="text-4xl font-medium">
          <h1>Connected Account</h1>
        </div>
        <div>
          <h2 className="text-4xl font-medium">Connected Amount</h2>
          <p className="text-center text-[15px] mt-6">Unsupported</p>
        </div>
      </div>
      <div className="flex justify-around px-40 mt-7">
        <StakedAmount />
        <RewardRate />
        <EarnedReward />
      </div>

      <div className="flex justify-around">
        <TokenApproval />
        <StakeToken />
      </div>

      <div>
        <Stake />
        <Approval />
      </div>
    </div>
  );
};

export default DisplayPanel;
