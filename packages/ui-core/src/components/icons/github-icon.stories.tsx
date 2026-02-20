import type { Meta, StoryObj } from '@storybook/react-vite';
import { GithubIcon } from './github-icon';

const meta: Meta<typeof GithubIcon> = {
  component: GithubIcon,
  parameters: {
    docs: {
      description: {
        component: `
The GitHub icon component with multiple variants and sizes.

Supports light, dark, transparent, square, and circle variants, with configurable sizes from small to extra large.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light', 'dark', 'transparent'],
      description: 'The background variant of the GitHub icon',
    },
    shape: {
      control: 'select',
      options: ['default', 'square', 'rounded'],
      description: 'The shape of the GitHub icon',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the GitHub icon',
    },
  },
  args: {
    variant: 'default',
    shape: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof GithubIcon>;

export const Default: Story = {
  render: args => <GithubIcon {...args} />,
};
