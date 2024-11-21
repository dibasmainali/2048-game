import React from 'react'
import './main.css'
import { Routes, Route } from 'react-router-dom';
import './styles.scss'
import BoardView from './components/Board'

function App() {
  return (
    <div>
      <BoardView/>
    </div>
  )
}

export default App
