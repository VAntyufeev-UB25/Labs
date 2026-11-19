import React, { useState } from 'react';
import './App.css';
import Task1Multiplication from './components/Task1Multiplication';
import Task2Calendar from './components/Task2Calendar';
import Task3Registration from './components/Task3Registration';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="app-container">
      <header>
        <h1>Лабораторная работа React</h1>
        <nav className="tabs">
          <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>Задание 1 (Таблица)</button>
          <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>Задание 2 (Календарь)</button>
          <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>Задание 3 (Регистрация)</button>
        </nav>
      </header>

      <main>
        {activeTab === 1 && <Task1Multiplication />}
        {activeTab === 2 && <Task2Calendar />}
        {activeTab === 3 && <Task3Registration />}
      </main>
    </div>
  );
}

export default App;