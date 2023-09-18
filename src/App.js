import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importáljuk a Bootstrap stílusokat

function App() {

  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    // Ellenőrzés, hogy minden mező kitöltve legyen
    if (todo.trim() === '' || time.trim() === '' || email.trim() === '' || date.trim() === '') {
      alert("Minden mezőt ki kell tölteni!");
      return;
    }

    setTodoList([...todoList, { todo: todo, time: time, email: email, date: date }]);
    setTodo("");
    setTime("");
    setEmail("");
    setDate("");
  }

  const deleteTodo = (todoToDelete, timeToDelete, emailToDelete, dateToDelete) => {
    const updatedList = todoList.filter(item =>
      item.todo !== todoToDelete ||
      item.time !== timeToDelete ||
      item.email !== emailToDelete ||
      item.date !== dateToDelete
    );
    setTodoList(updatedList);
  }

  return (
    <div className="container mt-5"> {/* A Bootstrap 'container' osztállyal rögtön középre igazíthatod az alkalmazást */}
      <h1 className="text-center mb-4">Napi Todo-List</h1> {/* A 'text-center' osztállyal középre igazíthatod a címet */}
      <div className="row">
        <div className="col-md-12 mb-3"> {/* Az 'col-md-6' osztállyal a mezők a felbontástól függően foglalnak teret */}
          <label>Feladat:</label>
          <input type="text" className="form-control" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </div>
        <div className="col-md-12 mb-3">
          <label>Teljesítéshez szükséges idő:</label>
          <input type="text" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="col-md-12 mt-3 mb-3">
          <label>E-mail cím:</label>
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="col-md-12 mt-3">
          <label>Dátum:</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="col-12 mt-3">
          <button className="btn btn-primary" onClick={addTodo}>Hozzáad</button> {/* A 'btn' és 'btn-primary' osztályokkal stílusozzuk a gombot */}
        </div>

        <footer className='mt-3'>&copy; Minden jog fenntartva. | Készítette: Somossy László</footer>
      </div>
      <div className="row mt-5">
        {todoList.map((t, index) => (
          <div className="col-md-12" key={index}>
            <Todo
              todo={t.todo}
              time={t.time}
              email={t.email}
              date={t.date}
              onDelete={(todoToDelete, timeToDelete, emailToDelete, dateToDelete) =>
                deleteTodo(todoToDelete, timeToDelete, emailToDelete, dateToDelete)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
