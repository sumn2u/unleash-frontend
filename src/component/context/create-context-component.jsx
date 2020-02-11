import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Chip, Textfield, Switch, Card, CardTitle, CardText, CardActions } from 'react-mdl';

import { FormButtons } from '../common';
import { trim } from '../common/util';
import { styles as commonStyles } from '../common';

class AddContextComponent extends Component {
    // static displayName = `AddContextComponent-${getDisplayName(Component)}`;

    constructor() {
        super();
        this.state = {
            contextField: { name: '', description: '', legalValues: [] },
            errors: {},
            dirty: false,
        };
    }

    setValue = (field, value) => {
        const { contextField } = this.state;
        contextField[field] = value;
        this.setState({ contextField, dirty: true });
    };

    validateName = async name => {
        const { errors } = this.state;
        try {
            await validateName(name);
            errors.name = undefined;
        } catch (err) {
            errors.name = err.message;
        }

        this.setState({ errors });
    };

    onCancel = evt => {
        evt.preventDefault();
        this.props.history.push('/context');
    };

    onSubmit = evt => {
        evt.preventDefault();
        this.props.createContextField({name: 'test'});
        this.props.history.push('/context');
    }

    render() {
        const input = {};
        const errors = {};
        const validateName = () => {};

        return (
            <Card shadow={0} className={commonStyles.fullwidth} style={{ overflow: 'visible' }}>
                <CardTitle style={{ paddingTop: '24px', paddingBottom: '0', wordBreak: 'break-all' }}>
                    Create context field
                </CardTitle>
                <CardText>
                    Context fields are a basic building block used in Unleash to control roll-out. Context fields can be
                    used together with strategy constraints as part of the activation strategy evaluation.
                </CardText>
                <form onSubmit={this.onSubmit}>
                    <section style={{ padding: '16px' }}>
                        <Textfield
                            floatingLabel
                            label="Name"
                            name="name"
                            value={input.name}
                            error={errors.name}
                            onBlur={v => validateName(v.target.value)}
                            onChange={v => this.setValue('name', trim(v.target.value))}
                        />
                        <Textfield
                            floatingLabel
                            style={{ width: '100%' }}
                            rows={1}
                            label="Description"
                            error={errors.description}
                            value={input.description}
                            onChange={v => setValue('description', v.target.value)}
                        />
                        <section style={{ padding: '16px', background: '#EFE' }}>
                            <h6 style={{ marginTop: '0' }}>Legal values</h6>
                            <p style={{ color: 'rgba(0,0,0,.54)' }}>
                                Sometimes we know all legal values for a context field. A concrete example would be that
                                we usually we know all values for our “environment” (local, development, stage,
                                production). By defining the legal values the Unleash Admin UI will validate the user
                                input.
                            </p>
                            <Textfield floatingLabel label="Legal value" name="value" />
                            <Button>Add</Button>
                            <div>
                                <Chip
                                    onClose={e => {
                                        alert('Close icon clicked!');
                                    }}
                                >
                                    local
                                </Chip>
                            </div>
                        </section>
                    </section>
                    <CardActions>
                        <FormButtons submitText={'Create'} onCancel={this.onCancel} />
                    </CardActions>
                </form>
            </Card>
        );
    }
}

AddContextComponent.propTypes = {};

export default AddContextComponent;
