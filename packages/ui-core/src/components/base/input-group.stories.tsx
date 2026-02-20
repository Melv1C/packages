import type { Meta, StoryObj } from '@storybook/react-vite';
import { Copy, Info, Search } from 'lucide-react';
import { ButtonGroup, ButtonGroupText } from './button-group';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group';
import { Label } from './label';
import { Spinner } from './spinner';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component: `
Display additional information or actions to an input or textarea.

For more information, see the <a href="https://ui.shadcn.com/docs/components/input-group" target="_blank" style="text-decoration: underline;">Shadcn Input Group documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Icon: Story = {
  render: _ => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Text: Story = {
  render: _ => (
    <div className="w-[320px] space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const ButtonExample: Story = {
  render: _ => (
    <div className="w-[320px] space-y-4">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Copy this text" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Copy">
            <Copy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const TooltipExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter your email" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton size="icon-xs" aria-label="Help">
                <Info />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll never share your email.</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Textarea: Story = {
  render: _ => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton>Send</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const SpinnerExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="Processing..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const LabelExample: Story = {
  render: _ => (
    <div className="w-[320px] space-y-2">
      <Label htmlFor="username">Username</Label>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="username" placeholder="username" />
      </InputGroup>
    </div>
  ),
};

export const Dropdown: Story = {
  render: _ => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupAddon>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton>USD</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>USD</DropdownMenuItem>
              <DropdownMenuItem>EUR</DropdownMenuItem>
              <DropdownMenuItem>GBP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
      </InputGroup>
    </div>
  ),
};

export const ButtonGroupExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <ButtonGroup>
        <ButtonGroupText>View</ButtonGroupText>
        <InputGroup className="flex-1">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" aria-label="Search">
              <Search />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </div>
  ),
};
