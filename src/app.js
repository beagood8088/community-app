import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { useSession } from './contexts/SessionContext'

// pages
import { Home } from './pages/Home'
import { Login } from './pages/Login'

import { PageNotFound } from './pages/PageNotFound'
import 'react-loading-skeleton/dist/skeleton.css'
import { PhoneVerification } from './pages/PhoneVerification'
import { NewPost } from './pages/NewPost'
import { Signup } from './pages/Signup'
import { Header } from './components/Header'
import { Profile } from './pages/Profile'
import { PostDetail } from './components/PostDeail'
import { Community } from './pages/Community'

export const App = () => {
  const [{ loading, auth }] = useSession()

  return (
    <>
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/my-profile' element={<Profile />} />
            <Route path='/phone-verification' element={<PhoneVerification />} />
            <Route path='/community' element={<Community />} />
            <Route path='/create' element={<NewPost />} />
            <Route path='/posts/:slug' element={<PostDetail />} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </>
      )}
    </>
  )
}
