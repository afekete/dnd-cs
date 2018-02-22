import React from 'react'
import StatInputLink from '../containers/StatInputLink';
import DiceRoller from './DiceRoller';
import ClassSelectLink from '../containers/ClassSelectLink';
import StatCreateLink from '../containers/StatCreateLink';
import RaceBuilder from './RaceBuilder'
import '../App.css'

const App = () => (
    <div id="App">
        <ClassSelectLink />
        <br />
        <StatCreateLink />
        <br />
        <StatInputLink />
        <br />
        <DiceRoller />
        <br />
        <RaceBuilder />
    </div>
)

export default App