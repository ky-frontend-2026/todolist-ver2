import React ,{useState,useRef}from 'react'
import "./TodoEditor.css"
const TodoEditor = ({onCreate}) => {

  const [content, setContet]=useState("")
  const inputRef =useRef()

  const onChangeContent =(e)=>{
    setContet(e.target.value)
  }

  const onSubmit=()=>{
    if(content==''){
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContet("")
  }

  const onKeyDown =(e)=>{
    if(e.keyCode===13){
      onSubmit()
    }
  }
  return (
    <div className='Editor'>
        <input 
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        type="text" 
        placeholder='새로운 Todo...' />
        <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor