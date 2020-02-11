import { connect } from 'react-redux';
import AddContextComponent from './create-context-component';
import { createContextField } from './../../store/context/actions';

const mapDispatchToProps = dispatch => ({
    validateName: name => validateName(name)(dispatch),
    createContextField: contextField => createContextField(contextField)(dispatch),
});

const FormAddContainer = connect(
    () => ({}),
    mapDispatchToProps
)(AddContextComponent);

export default FormAddContainer;
