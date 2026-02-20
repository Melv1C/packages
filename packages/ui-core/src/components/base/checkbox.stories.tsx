import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
A control that allows the user to toggle between checked and not checked.

For more information, see the <a href="https://ui.shadcn.com/docs/components/checkbox" target="_blank" style="text-decoration: underline;">Shadcn Checkbox documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: args => (
    <div className="flex items-center gap-2">
      <Checkbox id="default" {...args} />
      <Label htmlFor="default">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: _ => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="checked" checked disabled />
        <Label htmlFor="checked" className="text-muted-foreground">
          Checked (disabled)
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="unchecked" disabled />
        <Label htmlFor="unchecked" className="text-muted-foreground">
          Unchecked (disabled)
        </Label>
      </div>
    </div>
  ),
};
