import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { SidebarProvider } from './sidebar';

const meta: Meta<typeof SidebarProvider> = {
  component: SidebarProvider,
  parameters: {
    docs: {
      description: {
        component: `
A composable, themeable and customizable sidebar component.

Please refer to the <a href="https://ui.shadcn.com/docs/components/sidebar" target="_blank" style="text-decoration: underline;">Shadcn Sidebar documentation</a> for comprehensive examples and usage instructions.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarProvider>;

export const Default: Story = {
  render: _ => (
    <Alert className="w-[500px]">
      <InfoIcon />
      <AlertTitle>This component is too complex to demonstrate in a simple story</AlertTitle>
      <AlertDescription>
        Please refer to the
        <a
          href="https://ui.shadcn.com/docs/components/sidebar"
          target="_blank"
          className="underline"
          rel="noopener"
        >
          Shadcn Sidebar documentation
        </a>
        for comprehensive examples and usage instructions.
      </AlertDescription>
    </Alert>
  ),
};
