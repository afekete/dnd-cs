import { connect } from 'react-redux'
import { setClass } from '../actions'
import ClassSelect from '../components/ClassSelect'

const mapStateToProps = null

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: chosenClass => {
            dispatch(setClass(chosenClass))
        }
    }
}

const ClassSelectLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassSelect)

export default ClassSelectLink