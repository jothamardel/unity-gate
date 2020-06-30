import ConstantActionTypes from './modal.constants';

const INITIAL_STATE = {
  showStudentProfile: false,
  showMenu: false,
  showPayment: false,
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
        showMenu: false,
        showPayment: false,
        index: null
      });
    case ConstantActionTypes.TOGGLE_MENU:
      return ({
        ...state,
        showMenu: !state.showMenu
      });
    case ConstantActionTypes.TOGGLE_PAYMENT:
      return ({
        ...state,
        showPayment: !state.showMenu
      });
    default:
      return state;
  }
};

export default modalReducer;