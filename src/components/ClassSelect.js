import React, { Component } from 'react'
import PropTypes from 'prop-types'

const CLASSES = [
    {
        name: "Warrior",
        description: "hits things"
    },
    {
        name: "Ranger",
        description: "shoots things"
    }
]

class ClassSelect extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            selectedClass: '',
            notification: ''       
        }
    }

    handleChange(event) {
        let newClass = CLASSES.find((elem) => {
            return elem.name === event.target.value
        })
        this.setState({ ...this.state, selectedClass: newClass })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({ ...this.state, notification: "Class (" + this.state.selectedClass.name + ") selected!"})
        this.props.handleSubmit(this.state.selectedClass)
    }

    render() {
        let classRadio = CLASSES.map((currClass) =>
            <div className="radio" key={currClass.name}>
                <label>
                    <input type="radio" value={currClass.name}
                        checked={this.state.selectedClass.name === currClass.name}
                        onChange={e => this.handleChange(e)} />
                    {currClass.name}
                </label>
            </div>
        )

        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)} >
                    {classRadio}
                    <span>{this.state.selectedClass.description}</span>
                    <br />
                    <button type="submit">Select</button>
                </form>
                <span>{this.state.notification}</span>
            </div>
        )
    }
}

ClassSelect.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default ClassSelect