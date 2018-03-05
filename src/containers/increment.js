import {connect} from 'react-redux'
import {incrementCounter} from "../actions/increment";
import Root from "../components/root";

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch(incrementCounter())
    }
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root)