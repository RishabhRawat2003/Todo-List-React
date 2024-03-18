import React, { useState } from 'react'

function AddField({ addTodo }) {

    const [input, setInput] = useState('')

    function addTodoItem() {
        if (input === '') return
        else {
            addTodo(input)
            setInput('')
        }
    }

    function btnFuncHandle(e) {
        let key = e.key
        if (key === 'Enter') {
            if (input === '') return
            else {
                addTodo(input)
                setInput('')
            }
        }
    }

    return (
        <>
            <div className='w-[40vw] h-16 my-4 flex justify-center items-center'>
                <input type="text"
                    onKeyDown={btnFuncHandle}
                    className='h-12 w-[30vw] border-[1px] rounded-l-lg outline-none border-gray-500 shadow-sm px-3 text-lg'
                    placeholder='Write Todos Here...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <p className='h-12 w-20 flex justify-center items-center rounded-r-lg text-white bg-blue-500 font-bold cursor-pointer hover:bg-blue-700'
                    onClick={addTodoItem}
                >Add</p>
            </div>
        </>
    )
}

export default AddField