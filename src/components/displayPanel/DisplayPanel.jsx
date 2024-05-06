import React from "react";
import StakedAmount from "./StakedAmount";
import RewardRate from "./RewardRate";
import EarnedReward from "./EarnedReward";
import TokenApproval from "../stakeToken/tokenApproval";
import StakeToken from "../stakeToken/stakeToken";
import Stake from "../stake/Stake";
import Approval from "../stake/Approval";
import Withdraw from "../withdraw/Withdraw";
import Footer from "../footer/Footer";

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

      <div className="flex justify-around mt-20">
        <TokenApproval />
        <StakeToken />
      </div>

      <div className="flex justify-around mt-10">
        <Stake />
        <Approval />
      </div>

      <div className="">
        <Withdraw />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DisplayPanel;
