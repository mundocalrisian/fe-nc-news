import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { getAllTopics, getAllUsers } from '../../utils/api'
import Header from '../header'
import { Sidebar } from '../sidebar'
import ShowAllArticles from '../articles/show-all-articles'
import Home from '../home'
import SingleArticle from '../articles/single-article'
import { UserContext } from '../../context/user'
import { Login } from '../user/login'

function App () {
  const [allUsers, setAllUers] = useState([])
  const [user, setUser] = useState('Guest')
  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    getAllTopics()
    .then((data) => setAllTopics(data))
  }, [])


  return (
    <UserContext.Provider value={{user, setUser}}>
      <section className='grid-container'>
        <Header/>
        <Sidebar allTopics={allTopics}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/articles' element={<ShowAllArticles allTopics={allTopics}/>} />
          <Route path='/article/:article_id' element={<SingleArticle/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </section>
    </UserContext.Provider>
      
  )
}

export default App
