const ADD_NEW_TODO = 'TODO_LIST/ADD_NEW_TODO'
const DEL_TODO = 'TODO_LIST/DEL_TODO'
const TOGGLE_SUCCESS = 'TODO_LIST/TOGGLE_SUCCESS'
const SET_FILTER_TYPE = 'TODO_LIST/SET_FILTER_TYPE'

let initialState = {
  todos: [],
  filter: 0
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_NEW_TODO: {

      const newTodo = {
        id: state.todos.length,
        title: action.title,
        complete: false
      }

      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    }

    case DEL_TODO: {
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id)
      }
    }

    case TOGGLE_SUCCESS: {
      return {
        ...state,
        todos: state.todos.map(item => item.id === action.id ? {...item, complete: !item.complete} : item)
      }
    }

    case SET_FILTER_TYPE: {
      return {
        ...state,
        filter: action.filter
      }
    }

    default:
      return state
  }
}

export default appReducer

export const actions = {
  addTodoItem: (title) => ({type: ADD_NEW_TODO, title}),
  delTodoItem: (id) => ({type: DEL_TODO, id}),
  toggleSuccessTodoItem: (id) => ({type: TOGGLE_SUCCESS, id}),
  setFilterType: (filter) => ({type: SET_FILTER_TYPE, filter})
}

