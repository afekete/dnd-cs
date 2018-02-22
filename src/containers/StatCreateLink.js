import { connect } from 'react-redux'
import { createStat } from '../actions'
import StatCreate from '../components/StatCreate'

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: stat =>{
            dispatch(createStat(stat))
        }
    }
}

const StatCreateLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatCreate)

export default StatCreateLink