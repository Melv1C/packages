import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group';
import { Input } from './input';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: `
A container that groups related buttons together with consistent styling.

For more information, see the <a href="https://ui.shadcn.com/docs/components/button-group" target="_blank" style="text-decoration: underline;">Shadcn Button Group documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const HorizontalButtons: Story = {
  render: _ => (
    <ButtonGroup>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  ),
};

export const VerticalButtons: Story = {
  render: _ => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Profile</Button>
      <Button variant="outline">Notifications</Button>
      <Button variant="outline">Security</Button>
    </ButtonGroup>
  ),
};

export const WithTextAndActions: Story = {
  render: _ => (
    <ButtonGroup>
      <ButtonGroupText>View</ButtonGroupText>
      <Button variant="outline">List</Button>
      <Button variant="outline">Grid</Button>
    </ButtonGroup>
  ),
};

export const WithSeparator: Story = {
  render: _ => (
    <ButtonGroup>
      <Button>Edit</Button>
      <Button>Duplicate</Button>
      <ButtonGroupSeparator />
      <Button>Delete</Button>
    </ButtonGroup>
  ),
};

export const WithInput: Story = {
  render: _ => (
    <ButtonGroup className="items-stretch">
      <Input placeholder="Search" className="w-50" />
      <Button>Apply</Button>
    </ButtonGroup>
  ),
};
