import type { Meta, StoryObj } from '@storybook/react-vite';
import { InboxIcon } from 'lucide-react';
import { Button } from './button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './empty';

const meta: Meta<typeof Empty> = {
  component: Empty,
  parameters: {
    docs: {
      description: {
        component: `
Use the Empty component to display an empty state.

For more information, see the <a href="https://ui.shadcn.com/docs/components/empty" target="_blank" style="text-decoration: underline;">Shadcn Empty documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: _ => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No items yet</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item. It will show up here once saved.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <p className="text-muted-foreground text-sm">
          This state is useful when there is no data to display in a list or table.
        </p>
        <div className="flex gap-2">
          <Button>Create Item</Button>
          <Button variant="outline">View Example</Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
};
