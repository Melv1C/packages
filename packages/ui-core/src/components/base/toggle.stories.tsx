import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookmarkIcon, Italic, Underline } from 'lucide-react';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: `
A two-state button that can be either on or off.

For more information, see the <a href="https://ui.shadcn.com/docs/components/toggle" target="_blank" style="text-decoration: underline;">Shadcn Toggle documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: props => (
    <Toggle
      aria-label="Toggle bookmark"
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
      {...props}
    >
      <BookmarkIcon />
      Bookmark
    </Toggle>
  ),
};

export const Outline: Story = {
  render: _ => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: _ => (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  ),
};

export const Small: Story = {
  render: _ => (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const Large: Story = {
  render: _ => (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const Disabled: Story = {
  render: _ => (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  ),
};
