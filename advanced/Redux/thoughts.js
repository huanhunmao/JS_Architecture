// 1 函数式编程  compose.js  这个不就是 compose 基本原理嘛  reduce 组合函数
export default function compose(...func) {
    if(func.length === 0) {
        return arg => arg
    }

    if(func.length === 1) {
        return func[0]
    }

    return func.reduce((a,b) => (...args) => a(b(...args)))
}


// 2 中间件模式
return (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
        throw new Error('')
    }

    const middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args),
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI)) // applyMiddleware 函数允许你在 action 被发送到 store 之前执行代码
    dispatch = compose(...chain)(store.dispatch)

    return {
        ...store, 
        dispatch
    }
}


// 3 观察者模式  createStore.js
function subscribe(listener){   // subscribe 方法允许你添加监听器，当 state 改变时，这些监听器会被调用
    if(typeof listener !== 'function'){
        throw new Error('Expected the listener to be a function')
    }

    let isSubscribed = true
    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    return function unSubscribe(){
        if(!isSubscribed){
            return 
        }

        isSubscribed = false

        ensureCanMutateNextListeners()
        const index = nextListeners.indexOf(listener)
        nextListeners.splice(index, 1) // 从观察者中 移出
    }
}

// 4 hoc 高阶函数 combineReducers.js
export default function combineReducers(reducers){
    // ...
    return function combination(state={}, action){
        // ...
    }
}

// 5 使用 switch-case 处理 actions 
function todoReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload.id)
        default:
            return state 
    }
}

// 6 使用闭包维护 store 内部状态 使得 store 的状态不能被外部直接修改，只能通过 dispatching actions 来修改
// createStore.js
function getState(){
    if (isDispatching) {
        throw new Error('You may not call store.getState() while the reducer is executing.')
      }

      return currentState
}

// 7 Redux 的设计原则之一是保持简单和小巧。例如，Redux 的核心只处理同步逻辑，而异步逻辑则通过中间件来处理
// createStore.js
function dispatch(action){
    if(!isPlainObject(action)){
        throw new Error('Actions must be plain objects.')
    }

    if(typeof action.type === 'undefined'){
        throw new Error('Actions may not have an undefined "type" property.')
    }

    if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.')
      }

    try{
        isDispatching = true
        currentState = currentReducer(currentState, action)
    }finally{
        isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    for(let i = 0; i < listeners.length; i++){
        const listener = listener[i]
        listener()
    }

    return action
}