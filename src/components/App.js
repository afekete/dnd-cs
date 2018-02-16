import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import StatInputLink from '../containers/StatInputLink';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <StatInputLink />
    </div>
)

export default App