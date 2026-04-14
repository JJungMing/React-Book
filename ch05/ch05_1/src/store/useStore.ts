import {useMemo} from 'react'
import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'

const initialStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initialStore(), [])
  return store
}
