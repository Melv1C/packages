import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
Renders an accessible label associated with controls.

For more information, see the <a href="https://ui.shadcn.com/docs/components/label" target="_blank" style="text-decoration: underline;">Shadcn Label documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: _ => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
