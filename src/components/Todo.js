import React from 'react'

const Todo = ({todo, time, email, date, onDelete}) => {

  const handleDelete = () => {
    onDelete(todo, time, email, date);
  };

  return (
    <div className='todoContainer flex-column'>
        <h3>Feladat: {todo}</h3>
        <span>Szükséges idő: {time}</span>
        <span>E-mail: {email}</span>
        <span>Dátum: {date}</span>
        <button onClick={handleDelete}>Törlés</button>
    </div>
  )
}

export default Todo