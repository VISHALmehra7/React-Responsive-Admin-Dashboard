import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle} from "lucide-react";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22O4ka7nvYENrjnY71p3poXNx9VfCR_f21w&s",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__cKpt9ETf_mRKQdsEOuAn0_k5o8vY5TRtw&s",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazLNzrqCH3rXM4OJ8eQO-E1mi85QYjcJ3zw&s",
    },
  ]);

  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex justify-between items-center py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt="social pic"
              className="size-6 object-cover rounded-full mr-2"
            />
            <span className="text-gray-300 ">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected:!acc.connected,
                    };
                  }
                  return acc
                })
              );
            }}
          >{account.connected ?"Connected":"Connect"}</button>
        </div>
      ))}
    </SettingSection>
  );
};

export default ConnectedAccounts;
