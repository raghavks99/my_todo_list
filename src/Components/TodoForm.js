import React, {useState} from 'react'
//This method will get value from props.
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
          id : Math.floor(Math.random() * 10000),
          text : input
        })
        setInput('');
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

  return (
    <form className="todo-form" onSubmit = {handleSubmit}>
      {props.edit ? (
        <>
          <input type = "text" 
          placeholder='Update your item' 
          value = {input} 
          name = 'text' 
          className='todo-input edit' onChange={handleInput}/>
          <button className='todo-button edit'>Update</button>
        </>
      )
    :
    (
      <>
        <input type = "text" 
        placeholder='Add a todo' 
        value = {input} 
        name = 'text' 
        className='todo-input' onChange={handleInput}/>
        <button className='todo-button'> Add todo</button>
      </>
    )} 
        
    </form>
  )
}

export default TodoForm
