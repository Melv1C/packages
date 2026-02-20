import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircleIcon, CheckIcon, InfoIcon, XIcon } from 'lucide-react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `
Displays a badge or a component that looks like a badge.

For more information, see the <a href="https://ui.shadcn.com/docs/components/badge" target="_blank" style="text-decoration: underline;">Shadcn Badge documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The variant of the badge',
    },
  },
  args: {
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: args => <Badge {...args}>Badge</Badge>,
};

export const AllVariants: Story = {
  render: _ => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithLongText: Story = {
  args: {
    children: 'This is a longer badge text',
  },
};

export const WithIcons: Story = {
  render: _ => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <CheckIcon />
        Success
      </Badge>
      <Badge variant="secondary">
        <InfoIcon />
        Info
      </Badge>
      <Badge variant="destructive">
        <XIcon />
        Error
      </Badge>
      <Badge variant="outline">
        <AlertCircleIcon />
        Warning
      </Badge>
    </div>
  ),
};
