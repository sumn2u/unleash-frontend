import { connect } from 'react-redux';
import AddContextComponent from './create-context-component';

const mapDispatchToProps = dispatch => ({
    validateName: name => validateName(name)(dispatch),
    createFeatureToggles: featureToggle => createFeatureToggles(featureToggle)(dispatch),
});

const FormAddContainer = connect(
    () => ({}),
    mapDispatchToProps
)(AddContextComponent);

export default FormAddContainer;
