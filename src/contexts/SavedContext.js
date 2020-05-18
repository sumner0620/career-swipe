import React, { createContext, useReducer } from "react";

const initialState = { savedJobListings: [] };
const SavedContext = createContext();

const SavedReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_JOB":
      return {
        savedJobListings: [...state.savedJobListings, action.payload]
      };
    default:
      throw new Error();
  }
};
const SavedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SavedReducer, initialState);

  return (
    <SavedContext.Provider value={[state, dispatch]}>
      {children}
    </SavedContext.Provider>
  );
};

export { SavedContext, SavedProvider, SavedReducer };
