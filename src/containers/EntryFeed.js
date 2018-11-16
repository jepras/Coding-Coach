import { connect } from 'react-redux'
import EntryList from '../components/EntryList'

const mapStateToProps = state => {
    return {
        entries: state.entries
    }
}

const EntryFeed = connect(
    mapStateToProps,
    null
)(EntryList)

export default EntryFeed