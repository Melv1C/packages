import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  Plus,
  ShieldAlertIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item';

const meta: Meta<typeof Item> = {
  component: Item,
  parameters: {
    docs: {
      description: {
        component: `
A versatile component that you can use to display any content.

The Item component is a straightforward flex container that can house nearly any type of content. Use it to display a title, description, and actions. Group it with the ItemGroup component to create a list of items.

You can pretty much achieve the same result with the div element and some classes, but I've built this so many times that I decided to create a component for it. Now I use it all the time.

For more information, see the <a href="https://ui.shadcn.com/docs/components/item" target="_blank" style="text-decoration: underline;">Shadcn Item documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
      description: 'The variant of the item',
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'The size of the item',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: props => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline" {...props}>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="/">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
};

export const Variants: Story = {
  render: _ => (
    <div className="flex flex-col gap-6">
      <Item>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Standard styling with subtle background and borders.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>
            Subdued appearance with muted colors for secondary content.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const Size: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="/">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
};

export const Icon: Story = {
  render: _ => (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>New login detected from unknown device.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const AvatarExample: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarFallback>CNLRER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            <Plus className="size-4" />
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const Image: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="image">
          <img src="https://github.com/shadcn.png" alt="shadcn" className="size-10" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>shadcn</ItemTitle>
          <ItemDescription>Designer at Vercel</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const Group: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col">
      <ItemGroup>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Item 1</ItemTitle>
            <ItemDescription>Description for item 1</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Item 2</ItemTitle>
            <ItemDescription>Description for item 2</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Item 3</ItemTitle>
            <ItemDescription>Description for item 3</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const Header: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemHeader>
          <ItemTitle>Header Title</ItemTitle>
        </ItemHeader>
        <ItemContent>
          <ItemDescription>Content description goes here.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const Link: Story = {
  render: _ => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item asChild>
        <a href="/">
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>Learn how to get started with our components.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
      <Item variant="outline" asChild>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ExternalLinkIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
};

export const Dropdown: Story = {
  render: _ => {
    const people = [
      {
        username: 'shadcn',
        avatar: 'https://github.com/shadcn.png',
        email: 'shadcn@vercel.com',
      },
      {
        username: 'maxleiter',
        avatar: 'https://github.com/maxleiter.png',
        email: 'maxleiter@vercel.com',
      },
      {
        username: 'evilrabbit',
        avatar: 'https://github.com/evilrabbit.png',
        email: 'evilrabbit@vercel.com',
      },
    ];

    return (
      <div className="flex min-h-64 w-full max-w-md flex-col items-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-fit">
              Select <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 [--radius:0.65rem]" align="end">
            {people.map(person => (
              <DropdownMenuItem key={person.username} className="p-0">
                <Item size="sm" className="w-full p-2">
                  <ItemMedia>
                    <Avatar className="size-8">
                      <AvatarImage src={person.avatar} className="grayscale" />
                      <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-0.5">
                    <ItemTitle>{person.username}</ItemTitle>
                    <ItemDescription>{person.email}</ItemDescription>
                  </ItemContent>
                </Item>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};
