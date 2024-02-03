"use client";
import React, { createContext, useContext, useReducer, useState } from "react";
import { reducer, initialState, actions } from "./State";

const DataContext = createContext(null);
export const useData = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
