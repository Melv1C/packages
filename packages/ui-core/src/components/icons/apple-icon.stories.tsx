import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppleIcon } from './apple-icon';

const meta: Meta<typeof AppleIcon> = {
  component: AppleIcon,
  parameters: {
    docs: {
      description: {
        component: `
The Apple icon component with multiple variants and sizes.

Supports light, dark, transparent, square, and circle variants, with configurable sizes from small to extra large.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light', 'dark', 'transparent'],
      description: 'The background variant of the Apple icon',
    },
    shape: {
      control: 'select',
      options: ['default', 'square', 'rounded'],
      description: 'The shape of the Apple icon',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the Apple icon',
    },
  },
  args: {
    variant: 'default',
    shape: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof AppleIcon>;

export const Default: Story = {
  render: args => <AppleIcon {...args} />,
};
