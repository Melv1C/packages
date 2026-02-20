/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import MultipleSelector, { type Option } from './multiselect';

const meta: Meta<typeof MultipleSelector> = {
  component: MultipleSelector,
  parameters: {
    docs: {
      description: {
        component: `
A multi-select component with search, keyboard navigation, and customization options.

This component is from <a href="https://21st.dev/originui/multiselect/default" target="_blank" style="text-decoration: underline;">Origin UI</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'Placeholder text displayed when no options are selected.',
      control: 'text',
    },
    disabled: {
      description: 'Disables the multiselect when set to true.',
      control: 'boolean',
    },
    creatable: {
      description: 'Allows users to create new options that are not in the predefined list.',
      control: 'boolean',
    },
    maxSelected: {
      description:
        'Maximum number of options that can be selected. If not provided, there is no limit.',
      control: 'number',
    },
    groupBy: {
      description:
        'Property name to group options by. Options with the same value for this property will be grouped together.',
      control: 'text',
    },
  },
  args: {
    placeholder: 'Select options...',
    disabled: false,
    creatable: false,
    maxSelected: undefined,
    groupBy: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof MultipleSelector>;

const OPTIONS: Option[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'ember', label: 'Ember' },
  { value: 'backbone', label: 'Backbone' },
  { value: 'preact', label: 'Preact' },
  { value: 'alpine', label: 'Alpine.js' },
  { value: 'solid', label: 'Solid' },
  { value: 'lit', label: 'Lit' },
];

export const Default: Story = {
  render: props => {
    const [value, setValue] = useState<Option[]>([]);

    return (
      <div className="h-60 w-100">
        <MultipleSelector
          emptyIndicator={
            <p className="text-muted-foreground text-center text-sm leading-10">
              No results found.
            </p>
          }
          {...props}
          value={value}
          onChange={setValue}
          defaultOptions={OPTIONS}
        />
      </div>
    );
  },
};
