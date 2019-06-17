export const SEND_TEXT = 'SEND_TEXT';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';

export function sendText(text) {
  return { type: SEND_TEXT, text}
}

export function receiveResponse(msg) {
  return { type: RECEIVE_RESPONSE, msg}
}
