import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlusIcon } from 'lucide-react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
Displays a button or a component that looks like a button.

For more information, see the <a href="https://ui.shadcn.com/docs/components/button" target="_blank" style="text-decoration: underline;">Shadcn Button documentation</a>.`,
      },
    },
  },
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
  },
  args: {
    variant: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: _ => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: _ => (
    <div className="flex flex-wrap gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-sm">
        <PlusIcon />
      </Button>
      <Button size="icon">
        <PlusIcon />
      </Button>
      <Button size="icon-lg">
        <PlusIcon />
      </Button>
    </div>
  ),
};
