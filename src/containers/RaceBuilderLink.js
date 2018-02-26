import { connect } from 'react-redux'
import RaceBuilder from '../components/RaceBuilder'

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const RaceBuilderLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceBuilder)

export default RaceBuilderLink