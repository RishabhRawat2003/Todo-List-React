import React from 'react'

function TodoList({list , index , deleteTodo}) {

  function deleteTodofunc(index){
    deleteTodo(index)
  }

  return (
    <>
    <p className='w-full text-lg bg-slate-600 rounded-xl py-2 text-white font-bold flex justify-between px-4'>
      {list}
      <span className='p-0.5 rounded-xl px-2.5 cursor-pointer bg-blue-500 text-white font-bold'
      onClick={(e)=>deleteTodofunc(index)}>
        X
      </span>
    </p>
    </>
  )
}

export default TodoList