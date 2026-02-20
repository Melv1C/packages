import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowUpIcon } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './empty';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from './input-group';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from './item';
import { Progress } from './progress';
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: `
An indicator that can be used to show a loading state.

For more information, see the <a href="https://ui.shadcn.com/docs/components/spinner" target="_blank" style="text-decoration: underline;">Shadcn Spinner documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: _ => (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const Size: Story = {
  render: _ => (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
};

export const Color: Story = {
  render: _ => (
    <div className="flex items-center gap-6">
      <Spinner className="size-6 text-red-500" />
      <Spinner className="size-6 text-green-500" />
      <Spinner className="size-6 text-blue-500" />
      <Spinner className="size-6 text-yellow-500" />
      <Spinner className="size-6 text-purple-500" />
    </div>
  ),
};

export const ButtonExample: Story = {
  render: _ => (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner />
        Processing
      </Button>
    </div>
  ),
};

export const BadgeExample: Story = {
  render: _ => (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Processing
      </Badge>
    </div>
  ),
};

export const InputGroupExample: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Send a message..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Send a message..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> Validating...
          <InputGroupButton className="ml-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const EmptyExample: Story = {
  render: _ => (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const ItemExample: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col gap-4 [--radius:1rem]">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Downloading...</ItemTitle>
          <ItemDescription>129 MB / 1000 MB</ItemDescription>
        </ItemContent>
        <ItemActions className="hidden sm:flex">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
        </ItemActions>
        <ItemFooter>
          <Progress value={75} />
        </ItemFooter>
      </Item>
    </div>
  ),
};
