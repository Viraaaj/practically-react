const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){

    case FETCH_USERS_REQUEST: return {
      ...state,
      loading: true
    }

    case FETCH_USERS_SUCCESS: return {
      loading: false,
      users: action.payload,
      error: ''
    }

    case FETCH_USERS_ERROR: return {
      loading: false,
      users: [],
      error: action.payload
    }

  }
}

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest())

    axios
      .get('https://jsonplaceholder.typicode.com/users')

      .then(response => {
        // console.log('response', response.data);
        const users = response.data.map(users => users.id)
        dispatch(fetchUsersSuccess(users))
      })

      .catch(err => {
        // console.log('error', err);
        dispatch(fetchUsersFailure(err.message))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
console.log('initial', store.getState());

store.subscribe(() => console.log('Data', store.getState()))
store.dispatch(fetchUsers())