import {connect} from "react-redux";
import {incrementCounter} from "../actions/increment";
import App from "../components/app";

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => {
            dispatch(incrementCounter())
        }
    }
};

const mapStateToProps = (state) => {
    return {
        counter: state.increment.counter
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)