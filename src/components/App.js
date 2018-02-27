import React from 'react'
import StatInputLink from '../containers/StatInputLink';
import DiceRoller from './DiceRoller';
import ClassSelectLink from '../containers/ClassSelectLink';
import StatCreateLink from '../containers/StatCreateLink';
import RaceBuilderLink from '../containers/RaceBuilderLink'
import '../App.css'

const App = () => (
    <div id="App">
        <ClassSelectLink />
        <br />
        <StatCreateLink />
        <br />
        <StatInputLink />
        <br />
        <RaceBuilderLink />
        <br />
        <DiceRoller />
    </div>
)

export default App