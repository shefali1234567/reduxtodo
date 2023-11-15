
const Addtodoaction=(todo)=>(dispatch,getState)=>{

    const {Todo:{todos}}=getState();

    const hastodo=todos.find((i)=>i.todo===todo);

    if(!hastodo && todo!=="")
    {
        dispatch({
            type:"ADD_TODOS",
            payload: [{id:todo,todo},...todos]
        })
    }



}

const Removetodo=(todo)=>(dispatch,getState)=>{
    const {Todo:{todos}}=getState();
    dispatch({
        type:"REMOVE_TODOS",
        payload: todos.filter((t)=>t.id!==todo.id),
    })

}

export  {Addtodoaction,Removetodo};