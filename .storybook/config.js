import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/components/widgets/Topbar/Topbar.stories');
}

configure(loadStories, module);
