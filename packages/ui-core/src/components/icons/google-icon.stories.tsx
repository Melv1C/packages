import type { Meta, StoryObj } from '@storybook/react-vite';
import { GoogleIcon } from './google-icon';

const meta: Meta<typeof GoogleIcon> = {
  component: GoogleIcon,
  parameters: {
    docs: {
      description: {
        component: `
The Google icon component with multiple variants and sizes.

Supports light, dark, transparent, square, and circle variants, with configurable sizes from small to extra large.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light', 'dark', 'transparent'],
      description: 'The background variant of the Google icon',
    },
    shape: {
      control: 'select',
      options: ['default', 'square', 'rounded'],
      description: 'The shape of the Google icon',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the Google icon',
    },
  },
  args: {
    variant: 'default',
    shape: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof GoogleIcon>;

export const Default: Story = {
  render: args => <GoogleIcon {...args} />,
};
