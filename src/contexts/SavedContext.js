import React, { createContext, useReducer } from "react";

const initialState = { savedJobListings: [] };
const SavedContext = createContext(initialState);

const SavedReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_JOB":
      state.savedJobListings.push(action.newJobListing);
      return state;
    default:
      throw new Error();
  }
};
const SavedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SavedReducer, initialState);

  return (
    <SavedContext.Provider value={{ state, dispatch }}>
      {children}
    </SavedContext.Provider>
  );
};

export { SavedContext, SavedProvider };
