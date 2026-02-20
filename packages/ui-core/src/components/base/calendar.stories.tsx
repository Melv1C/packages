import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `
A date field component that allows users to enter and edit date.

For more information, see the <a href="https://ui.shadcn.com/docs/components/calendar" target="_blank" style="text-decoration: underline;">Shadcn Calendar documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'The mode of the calendar',
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'The layout of the calendar caption',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Whether to show the outside days',
    },
    buttonVariant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost'],
      description: 'The variant of the calendar buttons',
    },
  },
  args: {
    mode: 'single',
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: args => <Calendar {...args} className="rounded-md border shadow-sm" />,
};
