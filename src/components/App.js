import React from 'react'
import StatInputLink from '../containers/StatInputLink';
import DiceRoller from './DiceRoller';
import ClassSelectLink from '../containers/ClassSelectLink';
import '../App.css'
import StatCreateLink from '../containers/StatCreateLink';

const App = () => (
    <div id="App">
        <ClassSelectLink />
        <br />
        <StatCreateLink />
        <br />
        <StatInputLink />
        <br />
        <DiceRoller />
    </div>
)

export default App