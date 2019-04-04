export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';


export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { channel: channel, author: author, content: content, created_at: Date.now() };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: MESSAGE_POSTED,
    payload: promise
  }
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
}
