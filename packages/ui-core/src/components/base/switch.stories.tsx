import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
A control that allows the user to toggle between checked and not checked.

For more information, see the <a href="https://ui.shadcn.com/docs/components/switch" target="_blank" style="text-decoration: underline;">Shadcn Switch documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: _ => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
