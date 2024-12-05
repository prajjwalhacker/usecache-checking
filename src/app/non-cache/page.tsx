"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {

    const [value, setValue]= useState<string | number>('');

   useEffect(() =>{
      const val = Math.random();
      setValue(val);
   }, []);
 
  return (
    <div>
       {value}
    </div>
  );
}
