import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StatInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats: props.stats
        }
    }
    
    handleModChange(statIdx, modIdx, e) {
        // get stat by idx, get modifier by idx, set value from e
    }

    handleChange(stat, e) {
        let stats = { ...this.state.stats }
        stats[stat] = e.target.value
        this.setState({ stats })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(this.state.stats)
    }

    render() {
        let statInputs = this.state.stats.map((stat, statIdx) => {
            let modifiers = stat.modifiers.map((mod, modIdx) => {
              switch (mod.type) {
                case 'num':
                  return (
                    <div key={modIdx} className="inline-block" >{mod.operator}<input type="number" value={mod.value}
                      onChange={e => this.handleModChange(statIdx, modIdx, e)} /></div>
                  )
                case 'stat':
                  return (
                    <span key={modIdx}>{mod.operator + mod.value}</span>
                  )
                default:
                  throw new Error("Invalid modifier type " + mod.type)
              }
            })
            return (
              <div key={stat.name}>
                  <label htmlFor={stat.name + "-input"}>{stat.name + ': '}</label>
                  {modifiers}
                  <br />
              </div>
            )
        })

        return (
            <form
                onSubmit={e => this.handleSubmit(e)}
            >
                {statInputs}
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

StatInput.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    stats: PropTypes.array.isRequired
}

export default StatInput