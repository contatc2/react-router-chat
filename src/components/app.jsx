import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="logo-container">
          <img src="logo.svg" alt="logo" className="messaging-logo"/>
        </div>
        <ChannelList />
        <MessageList />
      </div>
    );
  }
}

export default App;
