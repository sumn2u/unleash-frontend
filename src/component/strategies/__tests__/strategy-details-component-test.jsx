import React from 'react';

import StrategyDetails from '../strategy-details-component';
import renderer from 'react-test-renderer';
import { UPDATE_STRATEGY } from '../../../permissions';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-mdl');

test('renders correctly with one strategy', () => {
    const strategy = {
        name: 'Another',
        description: "another's description",
        editable: true,
        parameters: [
            {
                name: 'customParam',
                type: 'list',
                description: 'customList',
                required: true,
            },
        ],
    };
    const applications = [
        {
            appName: 'appA',
            description: 'app description',
        },
    ];
    const toggles = [
        {
            name: 'toggleA',
            description: 'toggle description',
        },
    ];
    const tree = renderer.create(
        <MemoryRouter>
            <StrategyDetails
                strategyName={'Another'}
                strategy={strategy}
                activeTab="view"
                applications={applications}
                toggles={toggles}
                fetchStrategies={jest.fn()}
                fetchApplications={jest.fn()}
                fetchFeatureToggles={jest.fn()}
                history={{}}
                hasPermission={permission => [UPDATE_STRATEGY].indexOf(permission) !== -1}
            />
        </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
});
