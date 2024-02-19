import Head from "next/head";
import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { sliceCounter } from "./_app";

// const selector = (state : any) => state.counter;


export default function Home() {
  
  //funzione che ci permette di dire a redux di eseguire un'operazione
  const dispatch = useDispatch()
  //selettori
  const counter = useSelector<any>((store) => store.counter);

const onClickButton =() =>{
  //@ts-ignore
  dispatch(sliceCounter.actions.increment(Math.random() * 10))
}  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*@ts-ignore*/}
      <button onClick={onClickButton}>{counter}</button>
    </>
  );
}
