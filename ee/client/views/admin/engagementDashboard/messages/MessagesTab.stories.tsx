import { Margins } from '@rocket.chat/fuselage';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import MessagesTab from './MessagesTab';

export default {
	title: 'admin/engagementDashboard/MessagesTab',
	component: MessagesTab,
	decorators: [(fn) => <Margins children={fn()} all='x24' />],
} as Meta;

export const Default: Story = () => <MessagesTab />;
Default.storyName = 'MessagesTab';
