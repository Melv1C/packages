import type { Meta, StoryObj } from '@storybook/react-vite';
import { NextButton, PreviousButton } from './buttons';

const meta: Meta<typeof NextButton> = {
  component: NextButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof NextButton>;

export const Next: Story = {
  render: args => <NextButton {...args} />,
};

export const AllButtons: Story = {
  render: _ => (
    <div className="flex gap-4">
      <PreviousButton />
      <NextButton />
    </div>
  ),
};
