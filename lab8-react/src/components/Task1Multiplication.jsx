import React from 'react';

const Task1Multiplication = () => {
  const numbers = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div>
      <h2>Задание 1: Таблица умножения</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {numbers.map(num => <th key={num}>{num}</th>)}
          </tr>
        </thead>
        <tbody>
          {numbers.map(row => (
            <tr key={row}>
              <th>{row}</th>
              {numbers.map(col => (
                <td key={col}>{row * col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task1Multiplication;