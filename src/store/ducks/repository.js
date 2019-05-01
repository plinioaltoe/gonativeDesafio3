/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "repository/ADD_REQUEST",
  ADD_SUCESS: "repository/ADD_SUCESS",
  ADD_FAILURE: "repository/ADD_FAILURE",
  RM_SUCESS: "repository/RM_SUCESS",
  CHANGE_STATE_MODAL: "modal/CHANGE_STATE_MODAL"
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  modalOpen: false,
  coords: {}
};

export default function repository(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCESS:
      return {
        ...state,
        loading: false,
        error: null,
        modalOpen: false,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.RM_SUCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(
          repository => repository.id !== action.payload.id
        )
      };
    case Types.CHANGE_STATE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        coords: action.payload.coords
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  rmRepositoryRequest: id => ({
    type: Types.RM_SUCESS,
    payload: { id }
  }),

  addRepositoryRequest: ({ repository, latitude, longitude }) => ({
    type: Types.ADD_REQUEST,
    payload: { repository, latitude, longitude }
  }),

  addRepositorySuccess: data => ({
    type: Types.ADD_SUCESS,
    payload: { data }
  }),

  addRepositoryFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  changeStateModal: coords => ({
    type: Types.CHANGE_STATE_MODAL,
    payload: { coords }
  })
};
