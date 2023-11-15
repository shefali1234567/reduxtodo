const Todoreducer=(state={todos:[]},action)=>{

    switch (action.type){
        case "ADD_TODOS" :
            return {todos:action.payload};
       case "REMOVE_TODOS" :
                return {todos:action.payload};
       default :
       return state;
    }

};

export default Todoreducer;