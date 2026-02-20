import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Label } from './label';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
Displays a form textarea or a component that looks like a textarea.

For more information, see the <a href="https://ui.shadcn.com/docs/components/textarea" target="_blank" style="text-decoration: underline;">Shadcn Textarea documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: _ => <Textarea placeholder="Type your message here." />,
};

export const Disabled: Story = {
  render: _ => <Textarea placeholder="Type your message here." disabled />,
};

export const WithLabel: Story = {
  render: _ => (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const WithText: Story = {
  render: _ => (
    <div className="grid w-full gap-3">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const WithButton: Story = {
  render: _ => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
};
