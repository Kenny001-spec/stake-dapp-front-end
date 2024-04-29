import React from "react";
import StakedAmount from "./StakedAmount";
import RewardRate from "./RewardRate";
import EarnedReward from "./EarnedReward";


const DisplayPanel = () => {
  return (
   
    <div className="mt-20">
        <div className="flex justify-around">
            <div className="text-4xl font-medium">
                <h1>Connected Account</h1>
            </div>
            <div>
                <h2 className="text-4xl font-medium">Connected Amount</h2>
                <p className="text-center text-[15px] mt-6">Unsupported</p>
            </div>

        </div>
        <div className="flex justify-around px-40 mt-7">
            <StakedAmount/>
            <RewardRate/>
            <EarnedReward/>
        </div>

    </div>

  );
};

export default DisplayPanel;
