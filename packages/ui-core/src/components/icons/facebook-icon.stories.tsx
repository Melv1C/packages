import type { Meta, StoryObj } from '@storybook/react-vite';
import { FacebookIcon } from './facebook-icon';

const meta: Meta<typeof FacebookIcon> = {
  component: FacebookIcon,
  parameters: {
    docs: {
      description: {
        component: `
The Facebook icon component with multiple variants and sizes.

Supports light, dark, transparent, square, and circle variants, with configurable sizes from small to extra large.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light', 'dark', 'transparent'],
      description: 'The background variant of the Facebook icon',
    },
    shape: {
      control: 'select',
      options: ['default', 'square', 'rounded'],
      description: 'The shape of the Facebook icon',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the Facebook icon',
    },
  },
  args: {
    variant: 'default',
    shape: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof FacebookIcon>;

export const Default: Story = {
  render: args => <FacebookIcon {...args} />,
};
