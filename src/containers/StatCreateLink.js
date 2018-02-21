import { connect } from 'react-redux'
import StatCreate from '../components/StatCreate'

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = null

const StatCreateLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatCreate)

export default StatCreateLink