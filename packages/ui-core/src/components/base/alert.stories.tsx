import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoIcon, XCircleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
Displays a callout for user attention.

For more information, see the <a href="https://ui.shadcn.com/docs/components/alert" target="_blank" style="text-decoration: underline;">Shadcn Alert documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'The variant of the alert',
    },
  },
  args: {
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: args => (
    <Alert {...args} className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
};

export const WithIcon: Story = {
  render: _ => (
    <Alert className="w-[400px]">
      <InfoIcon />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This alert includes an icon to provide visual context for the message.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: _ => (
    <Alert variant="destructive" className="w-[400px]">
      <XCircleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  render: _ => (
    <Alert className="w-[400px]">
      <AlertTitle>Alert Title Only</AlertTitle>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  render: _ => (
    <Alert className="w-[400px]">
      <AlertDescription>This alert only contains a description without a title.</AlertDescription>
    </Alert>
  ),
};

export const WithLongContent: Story = {
  render: _ => (
    <Alert className="w-[500px]">
      <InfoIcon />
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        <p>
          This alert contains longer content to demonstrate how it handles multiple paragraphs and
          extended text. The layout should remain consistent and readable.
        </p>
        <p className="mt-2">
          Additional information can be included here, and the alert will expand to accommodate all
          content while maintaining proper spacing and alignment.
        </p>
      </AlertDescription>
    </Alert>
  ),
};

export const WithRichContent: Story = {
  render: _ => (
    <Alert className="w-[500px]">
      <InfoIcon />
      <AlertTitle>Rich Content Alert</AlertTitle>
      <AlertDescription>
        <p>This alert contains formatted content:</p>
        <ul className="mt-2 ml-4 list-inside list-disc space-y-1">
          <li>First item in the list</li>
          <li>Second item with more details</li>
          <li>Third item completing the list</li>
        </ul>
        <p className="mt-2">You can include various HTML elements within the alert description.</p>
      </AlertDescription>
    </Alert>
  ),
};
