import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bold, BookmarkIcon, HeartIcon, Italic, StarIcon, Underline } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component: `
A set of two-state buttons that can be toggled on or off.

For more information, see the <a href="https://ui.shadcn.com/docs/components/toggle-group" target="_blank" style="text-decoration: underline;">Shadcn Toggle Group documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    spacing: {
      control: 'number',
    },
  },
  args: {
    type: 'multiple',
    variant: 'outline',
    size: 'default',
    spacing: 2,
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: props => (
    <ToggleGroup {...props}>
      <ToggleGroupItem
        value="star"
        aria-label="Toggle star"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
      >
        <StarIcon />
        Star
      </ToggleGroupItem>
      <ToggleGroupItem
        value="heart"
        aria-label="Toggle heart"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
      >
        <HeartIcon />
        Heart
      </ToggleGroupItem>
      <ToggleGroupItem
        value="bookmark"
        aria-label="Toggle bookmark"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
      >
        <BookmarkIcon />
        Bookmark
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  render: _ => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Single: Story = {
  render: _ => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Small: Story = {
  render: _ => (
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Large: Story = {
  render: _ => (
    <ToggleGroup type="multiple" size="lg">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Disabled: Story = {
  render: _ => (
    <ToggleGroup type="multiple" disabled>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Spacing: Story = {
  render: _ => (
    <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
      <ToggleGroupItem
        value="star"
        aria-label="Toggle star"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
      >
        <StarIcon />
        Star
      </ToggleGroupItem>
      <ToggleGroupItem
        value="heart"
        aria-label="Toggle heart"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
      >
        <HeartIcon />
        Heart
      </ToggleGroupItem>
      <ToggleGroupItem
        value="bookmark"
        aria-label="Toggle bookmark"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
      >
        <BookmarkIcon />
        Bookmark
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
