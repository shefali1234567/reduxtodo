import './App.css';
import {useState } from  "react";
import {useDispatch, useSelector} from "react-redux"
import {Addtodoaction,Removetodo} from './actions/Todoaction';

function App() {

  const [todo,setTodo]=useState(""); 
  const dispatch=useDispatch();
  const Todo=useSelector((state)=>state.Todo);
  const {todos}=Todo;

  const removeHandler=(t,e)=>{
    dispatch(Removetodo(t));

  }

  const submitHandler=(e)=>{
   e.preventDefault();
   dispatch(Addtodoaction(todo))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List app in Redux</h2>
        <form onSubmit={submitHandler}>
          <input placeholder="enter a todo"
          style={{
            width:350,
            padding: 10,
            borderRadius:20,
            border:"none",
            fontSize: 20,
          }}
          onChange={e=>setTodo(e.target.value)}
          />
          <button type="submit" 
          style={{
            padding: 12,
            borderRadius:25,
            border:"none",
            fontSize: 15,
            marginLeft:20,
          }}
          
          >Go
          
          </button>
        </form>

        <ul className="alltodo">
          {todos && todos.map((t =>{
            return (
             <li  key={t.id}className="singletodo">
             <span className="todotext">{t.todo}</span>
             <button  onClick={()=>removeHandler(t)} style={{
             padding: 10,
             borderRadius:25,
             border:"1px solid white",
             fontSize: 15,
             marginLeft:20,
             color:"white",
             backgroundColor:"orangered"
           }}>

            Delete
           </button>
           </li>
            )
            

          }))}
            
         
        </ul>
      </header>
    </div>
  );
}

export default App;
