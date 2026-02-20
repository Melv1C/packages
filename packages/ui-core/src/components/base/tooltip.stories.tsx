import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `
A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

For more information, see the <a href="https://ui.shadcn.com/docs/components/tooltip" target="_blank" style="text-decoration: underline;">Shadcn Tooltip documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: _ => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};
