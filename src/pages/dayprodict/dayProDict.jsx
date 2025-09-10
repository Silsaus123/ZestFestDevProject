import React from 'react'
import "./dayProDict.css"
import { useState } from 'react'
import Spørsmål from './spørsmål'
import { useNavigate } from 'react-router-dom';

export default function DayProDict() {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('spørsmål');
    };
  return (
    <div id ="backgrounddih">
        <h1>eg skal ProDih din dag </h1>
        <h2>din dag skal bli ProDih-gda med bare x spørsmål</h2>
        <button onClick={handleClick}> ProDih min dag</button>
    </div>
  )
}

