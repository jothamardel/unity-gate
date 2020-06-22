import ConstantsActionTypes from './user.constants';

const INITIAL_STATE = {
  user: null
}

const userReducer = (state = INITIAL_STATE, action = {}) => {
  
  switch (action.type) {
    case ConstantsActionTypes.TEST:
      return ({
        ...state,
        user: 'user'
      });
    default:
      return state;
  }
};

export default userReducer;
