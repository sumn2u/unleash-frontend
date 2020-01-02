import { connect } from 'react-redux';
import ContextFieldListComponent from './list-component.jsx';
import { fetchStrategies, removeStrategy } from './../../store/strategy/actions';
import { hasPermission } from '../../permissions';

const mapStateToProps = state => {
    const list = state.context;


    return {
        contextFields: list,
        hasPermission: hasPermission.bind(null, state.user.get('profile')),
    };
};

const mapDispatchToProps = dispatch => ({
    removeStrategy: strategy => {
        // eslint-disable-next-line no-alert
        if (window.confirm('Are you sure you want to remove this strategy?')) {
            removeStrategy(strategy)(dispatch);
        }
    },
    fetchStrategies: () => fetchStrategies()(dispatch),
});

const ContextFieldListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContextFieldListComponent);

export default ContextFieldListContainer;
