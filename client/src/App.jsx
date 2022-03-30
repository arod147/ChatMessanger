import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

const apiKey = "nw8htpg6g65v";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app-wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer />
        <ChanelContainer />
      </Chat>
    </div>
  );
};

export default App;
