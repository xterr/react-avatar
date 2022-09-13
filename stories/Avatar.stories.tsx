import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../node_modules/bootstrap/scss/bootstrap.scss';
import '!style-loader!css-loader!sass-loader!../scss/avatar.scss';
import { Avatar } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark' ] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']},
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Builder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Builder.args = {
  children: 'JP',
};

const Variants = () => {
  return (
    <div>
      <Avatar color={'primary'}>AB</Avatar>{' '}
      <Avatar color={'secondary'}>AB</Avatar>{' '}
      <Avatar color={'success'}>AB</Avatar>{' '}
      <Avatar color={'info'}>AB</Avatar>{' '}
      <Avatar color={'warning'}>AB</Avatar>{' '}
      <Avatar color={'danger'}>AB</Avatar>{' '}
    </div>
  );
}

Variants.parameters = {
  docs: {
    description: {
      story: 'There are several predefined avatar styles, each serving its own semantic purpose, with a few extras thrown in for more control.'
    }
  }
}

const Sizes = () => {
  return (
    <div>
      <Avatar size={'xs'}>AB</Avatar>{' '}
      <Avatar size={'sm'}>AB</Avatar>{' '}
      <Avatar size={'md'}>AB</Avatar>{' '}
      <Avatar size={'lg'}>AB</Avatar>{' '}
      <Avatar size={'xl'}>AB</Avatar>{' '}
      <Avatar size={'xxl'}>AB</Avatar>{' '}
    </div>
  );
}

Sizes.parameters = {
  docs: {
    description: {
      story: 'Fancy larger or smaller avatar? Add `size` prop with `lg` or `sm` values to make avatar bigger or smaller.'
    }
  }
}

const Images = () => {
  return (
    <div>
      <Avatar size={'md'}>
        <img src={'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=450'}/>
      </Avatar>{' '}
      <Avatar size={'md'} rounded>
        <img src={'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=450'}/>
      </Avatar>{' '}

      <Avatar size={'xl'}>
        <img src={'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=450'}/>
      </Avatar>{' '}
      <Avatar size={'xl'} rounded>
        <img src={'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=450'}/>
      </Avatar>{' '}

      <Avatar size={'xxl'}>
        <img src={'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=450'}/>
      </Avatar>{' '}
      <Avatar size={'xxl'} rounded>
        <img src={'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=450'}/>
      </Avatar>{' '}
    </div>
  );
}

export {
  Variants,
  Sizes,
  Images,
};
