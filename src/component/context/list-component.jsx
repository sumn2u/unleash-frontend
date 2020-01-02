import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemContent, IconButton, Card } from 'react-mdl';
import { HeaderTitle, styles as commonStyles } from '../common';
import { CREATE_STRATEGY, DELETE_STRATEGY } from '../../permissions';

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
                        hasPermission(CREATE_STRATEGY) ? (
                            <IconButton
                                raised
                                name="add"
                                onClick={() => this.props.history.push('/strategies/create')}
                                title="Add new strategy"
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
                                <ListItemContent icon="extension">
                                    <Link to={`/context/view/${field.name}`}>
                                        <strong>{field.name}</strong>
                                    </Link>
                                </ListItemContent>
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
