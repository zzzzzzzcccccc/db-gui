import React, { useEffect } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import GlobalLayout from '../global-layout'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { history } from '../../utils'
import { setHistoryUpdate } from '../../store'

function App() {
  const { historyUpdate } = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unbind = history.listen((update) => {
      dispatch(setHistoryUpdate(update))
    })

    return () => {
      unbind()
    }
  }, [dispatch])

  return (
    <Router navigator={history} location={historyUpdate.location} navigationType={historyUpdate.action}>
      <Routes>
        <Route path="/" element={<GlobalLayout />} />
      </Routes>
    </Router>
  )
}

export default App
