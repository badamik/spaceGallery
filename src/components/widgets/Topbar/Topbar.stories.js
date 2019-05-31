import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Topbar from './Topbar';

storiesOf('Widgets/Topbar', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => <Topbar/>);