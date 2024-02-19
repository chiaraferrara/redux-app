// import { store } from "@/store";
import "@/styles/globals.css";
import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useReducer } from "react";


export const sliceCounter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    //ogni azione (in redux non si chiamano metodi ma azioni)
    //riceve due parametri: state (type) e  il payload (variabile che passiamo)
    increment: (state, action) =>  state + action.payload
  }
})


//ogni singolo valore è costruito in base ad uno slice. 
const store = configureStore({
  //oggetto, dentro la chiave reducer passiamo un oggetto che ha al suo interno tutte le chiavi della nostra applicazione
  reducer: {
    counter: sliceCounter.reducer,
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>);
}
