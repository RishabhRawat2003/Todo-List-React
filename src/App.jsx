import { useEffect, useState } from "react"
import { AddField, TodoList } from "./Components"
import './browserApperance.css'

function App() {

  const [todoList, setTodoList] = useState([])


  function addTodo(input) {
    setTodoList([...todoList, input])
  }

  function deleteTodo(index) {
    let newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      setTodoList(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center pt-40 bg-slate-800">
        <div className="todoContainer h-[70vh] w-[50vw] border-gray-600 rounded-lg border-[1px] shadow-xl shadow-gray-900 flex flex-col justify-center items-center overflow-y-scroll">
          <h1 className="text-white text-3xl font-bold">Todo List</h1>
          <AddField addTodo={addTodo} />
          <div className="todoItems w-[30vw] h-60 overflow-scroll gap-2 my-4 flex flex-col px-4">
            {
              todoList.map((items, i) => (
                <TodoList deleteTodo={deleteTodo} index={i} list={items} key={i} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
