import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../actions';


class ChannelList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  renderChannel = (channel) => {
    return(
      <li className={(channel === this.props.channelFromParams) ? "selected" : null}
        role="presentation"
        key={channel}>
        <Link to={`/${channel}`}>
        #{channel}
        </Link>
      </li>
    );
  }

  render() {
    return(
      <div className="channels-container">
        <span>redux-chat</span>
        <ul>
         { this.props.channels.map(this.renderChannel)}
        </ul>
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
    channels: state.channels
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
