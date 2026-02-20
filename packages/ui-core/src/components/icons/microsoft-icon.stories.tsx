import type { Meta, StoryObj } from '@storybook/react-vite';
import { MicrosoftIcon } from './microsoft-icon';

const meta: Meta<typeof MicrosoftIcon> = {
  component: MicrosoftIcon,
  parameters: {
    docs: {
      description: {
        component: `
The Microsoft icon component with multiple variants and sizes.

Supports light, dark, transparent, square, and circle variants, with configurable sizes from small to extra large.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light', 'dark', 'transparent'],
      description: 'The background variant of the Microsoft icon',
    },
    shape: {
      control: 'select',
      options: ['default', 'square', 'rounded'],
      description: 'The shape of the Microsoft icon',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the Microsoft icon',
    },
  },
  args: {
    variant: 'default',
    shape: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof MicrosoftIcon>;

export const Default: Story = {
  render: args => <MicrosoftIcon {...args} />,
};
