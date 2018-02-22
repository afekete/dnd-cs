import React from 'react'

const StatSelect = ({ stats, name, value, handleChange }) => {
    let statOptions = stats.map((stat, idx) =>
        <option key={idx} value={stat.name}>{stat.name}</option>
    )
    return (
        <select name={name} value={value} onChange={e => handleChange(e)} >
            {statOptions}
        </select>
    )
}

export default StatSelect