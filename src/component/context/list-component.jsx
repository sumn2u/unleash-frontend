import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemAction, ListItemContent, Icon, IconButton, Card } from 'react-mdl';
import { HeaderTitle, styles as commonStyles } from '../common';
import { CREATE_CONTEXT_FIELD, DELETE_CONTEXT_FIELD } from '../../permissions';

class ContextFieldListComponent extends Component {
    static propTypes = {
        contextFields: PropTypes.array.isRequired,
        fetchStrategies: PropTypes.func.isRequired,
        removeStrategy: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        hasPermission: PropTypes.func.isRequired,
    };

    componentDidMount() {
        // this.props.fetchStrategies();
    }

    render() {
        const { contextFields, removeStrategy, hasPermission } = this.props;

        return (
            <Card shadow={0} className={commonStyles.fullwidth} style={{ overflow: 'visible' }}>
                <HeaderTitle
                    title="Context Fields"
                    actions={
                        hasPermission(CREATE_CONTEXT_FIELD) ? (
                            <IconButton
                                raised
                                name="add"
                                onClick={() => this.props.history.push('/context/create')}
                                title="Add new context field"
                            />
                        ) : (
                            ''
                        )
                    }
                />
                <List>
                    {contextFields.length > 0 ? (
                        contextFields.map((field, i) => (
                            <ListItem key={i} twoLine>
                                <ListItemContent icon="extension" subtitle={field.desription}>
                                    <Link to={`/context/view/${field.name}`}>
                                        <strong>{field.name}</strong>
                                    </Link>
                                </ListItemContent>
                                <ListItemAction>
                                    <a href="#">
                                        <Icon name="delete" />
                                    </a>
                                </ListItemAction>
                            </ListItem>
                        ))
                    ) : (
                        <ListItem>No entries</ListItem>
                    )}
                </List>
            </Card>
        );
    }
}

export default ContextFieldListComponent;
