import { connect } from 'react-redux'
import AbilityBonusBuilder from '../components/AbilityBonusBuilder'
import { addMod } from '../actions'

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: modifiers => {
            modifiers.forEach((mod) => {
                dispatch(addMod(mod))
            })
        }
    }
}

const AbilityBonusBuilderLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(AbilityBonusBuilder)

export default AbilityBonusBuilderLink