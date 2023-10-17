// 最简单 redux 实现 

// createStore 函数
function createStore(reducer){
    let state 
    let listeners = []

    const getState = () => state

    const dispatch = action => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = listener => {
        listeners.push(listener)

        return () => {
            listeners = listeners.forEach(item !== listener)
        }
    }

    // 初始化 state
    dispatch({})

    return {getState, dispatch, subscribe}
}

// 例子 reducer
function counterReducer(state = 0, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// use
const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'INCREMENT'}) // 1
store.dispatch({type: 'INCREMENT'}) // 2
store.dispatch({type: 'DECREMENT'}) // 1