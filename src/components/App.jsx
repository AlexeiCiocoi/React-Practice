import React, { Component } from 'react'
import {render} from 'react-dom'
import '../assets/common.scss'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import Reducers from '../assets/Reducers/rootReducer.jsx'
import Header from './Header/Header.jsx'
import Home from '../Pages/Home.jsx'
import TicTacPage from  '../Pages/TicTacPage.jsx'
import ChatPage from '../Pages/ChatPage.jsx'
import FilterPage from '../Pages/FilterPage.jsx'
import PostPage from '../Pages/PostsPage.jsx'
import Post from './Posts/Post.jsx'

import ToDoListPage from '../Pages/ToDoListPage.jsx'
import ModalWindow from './modalWindow/ModalWindow.jsx'


import { ProtectedRoute } from './protectedRouts/protected.route'




const store = createStore(Reducers);


export default class App extends React.Component {

    constructor(){
        super()

    
    }


    render(){
       
        return(
          <div className='app_wrapper'>
            <Header />
            <div className='app_content'>
                <Switch>
                 
                    <Route exact path='/to-do-list' component={ToDoListPage}  />
                    <Route exact path='/' component={Home}  />
                    <Route exact path='/tictac'component={TicTacPage}  />
                    <Route exact path='/chat-page' component={ChatPage}  />
                    <Route exact path='/filter-items' component={FilterPage}  />
                    <Route exact path='/posts' component={PostPage}  />
                    <Route exact path='/:post_id' component={Post}  />
                    
                </Switch> 
            </div>
            <ModalWindow modalContent={store.getState().modalReducer} />
         </div> 
          
        );
    }
}

render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('app'))  












{/* <FilterApp /> */}