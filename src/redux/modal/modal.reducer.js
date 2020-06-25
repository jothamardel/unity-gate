import ConstantActionTypes from './modal.constants';

const INITIAL_STATE = {
  showStudentProfile: false,
  index: null
};

const modalReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantActionTypes.SHOW_STUDENT_PROFILE:
      return ({
        ...state,
        index: action.payload,
        showStudentProfile: true
      });
    case ConstantActionTypes.CLOSE_ALL_MODAL:
      return ({
        ...state,
        showStudentProfile: false,
        index: null
      });
    default:
      return state;
  }
};

export default modalReducer;