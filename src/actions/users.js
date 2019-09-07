import {
  CREATE_AUTH_USER,
  SET_AUTH_USER
} from './types'

export const createAuthUser = payload => ({
  type: CREATE_AUTH_USER,
  payload
})

export const setAuthUser = ({ authUser }) => ({
  type: SET_AUTH_USER,
  authUser
})


