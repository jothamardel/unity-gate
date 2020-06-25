import ConstantActionTypes from './modal.constants';

export const showStudentProfile = (index) => ({ 
  type: ConstantActionTypes.SHOW_STUDENT_PROFILE,
  payload: index
});
export const closeAllModals = () => ({ type: ConstantActionTypes.CLOSE_ALL_MODAL });
export const toggleMenu = () => ({ type: ConstantActionTypes.TOGGLE_MENU });
