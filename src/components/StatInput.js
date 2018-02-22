import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StatInput extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    handleModChange(statIdx, modIdx, e) {
        e.preventDefault()
        let stats = [ ...this.props.stats ]
        let stat = { ...stats[statIdx] }
        let mods = [ ...stat.modifiers ]
        mods[modIdx].value = e.target.value 
        this.props.handleSubmit(stats)
        // this.setState({ stats })
        // get stat by idx, get modifier by idx, set value from e
    }

    render() {
        let statInputs = this.props.stats.map((stat, statIdx) => {
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
                  <label htmlFor={stat.name + "-input"}>{stat.name + '(' + stat.value + '): '}</label>
                  {modifiers}
                  <br />
              </div>
            )
        })

        return (
            <div>
                {statInputs}
            </div>
        )
    }
}

StatInput.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    stats: PropTypes.array.isRequired
}

export default StatInput