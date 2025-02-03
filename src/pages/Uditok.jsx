import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Uditok() {
  
  const [ uditok, setUditok ] = useState( [ { uaz: "loading..", nev: "loading..", meret: "loading..", kep: "loading.." } ] );
  
  
  useEffect(() => {
    async function getUditok() {
        const resp = await fetch("http://localhost:88/uditok");
        const json = await resp.json();
        setUditok(json);
    }
    getUditok();
  })
  
  return (
    <>
        <div className='uditok'>
        {uditok.map(x => 
            <div className='kartya' key={x.uaz}>
                <img src={x.kep} />
                <br />
                <span>{x.nev} ({x.meret}L)</span>
            </div>)}
        </div>
    </>
  )
}
