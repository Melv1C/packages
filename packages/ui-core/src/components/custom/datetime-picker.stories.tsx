/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateTimePicker } from './datetime-picker';

const meta = {
  component: DateTimePicker,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the picker',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
    },
    showClear: {
      control: 'boolean',
      description: 'Whether to show the clear button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the picker is disabled',
    },
  },
  args: {
    label: '',
    placeholder: 'Select date and time',
    showClear: true,
    disabled: false,
  },
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: props => {
    const [value, setValue] = useState<Date | undefined>(new Date());

    return (
      <div className="w-80">
        <DateTimePicker {...props} value={value} onChange={setValue} />
        <div className="text-muted-foreground mt-4 text-sm">
          Selected: {value?.toString() ?? 'None'}
        </div>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    return (
      <div className="w-80">
        <DateTimePicker value={value} onChange={setValue} label="Appointment Date & Time" />
        <div className="text-muted-foreground mt-4 text-sm">
          Selected: {value?.toString() ?? 'None'}
        </div>
      </div>
    );
  },
};

export const WithClear: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(new Date());

    return (
      <div className="w-80">
        <DateTimePicker value={value} onChange={setValue} />
        <div className="text-muted-foreground mt-4 text-sm">
          Selected: {value?.toString() ?? 'None'}
        </div>
      </div>
    );
  },
};

export const WithoutClear: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(new Date());

    return (
      <div className="w-80">
        <DateTimePicker value={value} onChange={setValue} showClear={false} label="Without Clear" />
        <div className="text-muted-foreground mt-4 text-sm">
          Selected: {value?.toString() ?? 'None'}
        </div>
      </div>
    );
  },
};

export const WithMinMaxConstraints: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    // Set min date to today
    const minDate = new Date();
    minDate.setHours(0, 0, 0, 0);

    // Set max date to 30 days from now
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);

    return (
      <div className="w-80">
        <DateTimePicker
          value={value}
          onChange={setValue}
          label="Book an appointment"
          placeholder="Select a date (next 30 days)"
          disabledDates={[{ before: minDate }, { after: maxDate }]}
        />
        <div className="text-muted-foreground mt-4 space-y-1 text-sm">
          <div>Selected: {value?.toString() ?? 'None'}</div>
          <div>Min: {minDate.toLocaleDateString()}</div>
          <div>Max: {maxDate.toLocaleDateString()}</div>
        </div>
      </div>
    );
  },
};
