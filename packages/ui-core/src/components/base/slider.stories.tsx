import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `
An input where the user selects a value from within a given range.

For more information, see the <a href="https://ui.shadcn.com/docs/components/slider" target="_blank" style="text-decoration: underline;">Shadcn Slider documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'The minimum value of the slider',
    },
    max: {
      control: 'number',
      description: 'The maximum value of the slider',
    },
    step: {
      control: 'number',
      description: 'The step value of the slider',
    },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: props => <Slider className="w-[320px]" defaultValue={[50]} {...props} />,
};
