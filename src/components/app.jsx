import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'


const App = (props) => {
  return (
    <div className="App">
      <div className="logo-container">
        <img src="logo.svg" alt="logo" className="messaging-logo"/>
      </div>
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
  }

export default App;
