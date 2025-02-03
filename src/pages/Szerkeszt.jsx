import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Szerkeszt() {
  const [ uditok, setUditok ] = useState( [ { uaz: "loading..", nev: "loading..", meret: "loading..", kep: "loading.." } ] );
  const [ refresh, setRefresh ] = useState(false);
  const [nev,setNev] = useState('');
  const [meret,setMeret] = useState('');
  const [kep,setKep] = useState('');

  useEffect(() => {
    async function getUditok() {
        const resp = await fetch("http://localhost:88/uditok");
        const json = await resp.json();
        setUditok(json);
    }
    getUditok();
  })

  async function postUdito() {
    await axios.post("http://localhost:88/udito", {nev: nev, meret: meret, kep: kep })
    setRefresh(!refresh);
  }
  async function torol(uaz) {
    await axios.delete("http://localhost:88/udito/"+uaz)
    setRefresh(!refresh);
  }
  return (
    <>
      <div className='szerkezet'>
        <input type="text" placeholder='Név' value={nev} onChange={e => setNev(e.target.value)}/>
        <input type="text" placeholder='Méret' value={meret} onChange={e => setMeret(e.target.value)}/>
        <input type="text" placeholder='Kép' value={kep} onChange={e => setKep(e.target.value)}/>
        <input type="button" value="Feltölt" onClick={postUdito} />
      </div>
    {uditok.map(x => 
            <div className='gatya' key={x.uaz}>
                <span>{x.nev} ({x.meret}L)</span>
                <span id='torol' onClick={() => torol(x.uaz)}>X</span>
            </div>)}
    </>
  )
}
