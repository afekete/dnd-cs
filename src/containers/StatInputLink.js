import { connect } from 'react-redux'
import { setStats } from '../actions'
import StatInput from '../components/StatInput'

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: stats => {
            console.log(stats)
            dispatch(setStats(stats))
        }
    }
}

const StatInputLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatInput)

export default StatInputLink