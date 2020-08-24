const TotoListReducer = (state, action) => {
    switch(action.type){
        case 'add':
            if(action.payload.length > 0)
                return [
                    {
                        id:Date.now(),
                        label:action.payload,
                        isComplited:false,
                    },
                    ...state
                ]
            else 
                return state
        case 'toggle':
            let add2top = null
            let add2end = null
            let newState = []
            
            state.map((el, index) => {
                if(action.payload === el.id){
                    el.isComplited = !el.isComplited

                    if(!el.isComplited){
                        add2top = el  
                    } else {
                        add2end = el
                    }
                    
                } else {
                    newState.push(el)
                }
            })
            
            if(add2end !== null)
                newState.push(add2end)
            if(add2top !== null)
                newState.splice(0, 0, add2top)
            
            return newState

        case 'remove':
            return state.filter(el => action.payload !== el.id)
        default:
            return state
    }
}

const InputReducer = (state, action) => {
    switch(action.type){
        case 'change':
            return action.payload 
        default:
            return state
    }
}

export default {TotoListReducer, InputReducer}