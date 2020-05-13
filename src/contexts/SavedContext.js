import React, { createContext, useReducer } from "react";

const initialState = { saved: false };
const SavedContext = createContext(initialState);

const SavedProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SAVED_JOB":
        const newState = true;
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <SavedContext.Provider value={{ state, dispatch }}>
      {children}
    </SavedContext.Provider>
  );
};

export { SavedContext, SavedProvider };
