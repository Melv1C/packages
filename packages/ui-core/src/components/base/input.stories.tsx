import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
Displays a form input field or a component that looks like an input field.

For more information, see the <a href="https://ui.shadcn.com/docs/components/input" target="_blank" style="text-decoration: underline;">Shadcn Input documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'email',
        'password',
        'text',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
      ],
      description: 'The type of the input',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
  args: {
    type: 'email',
    placeholder: 'Email',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: props => <Input {...props} />,
};

export const File: Story = {
  render: _ => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};

export const Disabled: Story = {
  render: props => <Input disabled type="email" placeholder="Email" {...props} />,
};

export const WithLabel: Story = {
  render: _ => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithButton: Story = {
  render: _ => (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  ),
};
