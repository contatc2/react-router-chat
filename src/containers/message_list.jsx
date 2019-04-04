import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message'
import MessageForm from './message_form'


class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.fetchMessages();
    this.list = React.createRef();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 10000);
  }

  componentDidUpdate() {
      this.list.current.scrollTop = this.list.current.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className='channel-container'>
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div
          className="channel-content"
          ref = {this.list}
        >
         { this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
