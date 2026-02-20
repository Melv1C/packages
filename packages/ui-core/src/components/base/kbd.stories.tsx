import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from 'lucide-react';
import { Button } from './button';
import { ButtonGroup } from './button-group';
import { InputGroup, InputGroupAddon, InputGroupInput } from './input-group';
import { Kbd, KbdGroup } from './kbd';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

const meta: Meta<typeof Kbd> = {
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component: `
Used to display textual user input from keyboard.

For more information, see the <a href="https://ui.shadcn.com/docs/components/kbd" target="_blank" style="text-decoration: underline;">Shadcn Kbd documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: _ => (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  ),
};

export const Group: Story = {
  render: _ => (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground text-sm">
        Use{' '}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>
        to open the command palette
      </p>
    </div>
  ),
};

export const ButtonExample: Story = {
  render: _ => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" size="sm" className="pr-2">
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm" className="pr-2">
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  ),
};

export const TooltipExample: Story = {
  render: _ => (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Save
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Print
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Print Document{' '}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  ),
};

export const InputGroupExample: Story = {
  render: _ => (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
