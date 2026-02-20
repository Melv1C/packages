import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: `
A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

For more information, see the <a href="https://ui.shadcn.com/docs/components/radio-group" target="_blank" style="text-decoration: underline;">Shadcn Radio Group documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: _ => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};
