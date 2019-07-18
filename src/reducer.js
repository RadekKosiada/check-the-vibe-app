import {
  SEND_TEXT,
  RECEIVE_RESPONSE
} from './actions';

const initialState = {
  response: '',
  stringToCheck: ''
};

function checkVibe(state = initialState, action){
  switch(action.type) {
    case SEND_TEXT:
      return Object.assign({}, state, {
        
      })
  }
}