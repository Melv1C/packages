/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './button';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command';
import { Kbd } from './kbd';

const meta: Meta<typeof Command> = {
  component: Command,
  parameters: {
    docs: {
      description: {
        component: `
Fast, composable, unstyled command menu for React.

For more information, see the <a href="https://ui.shadcn.com/docs/components/command" target="_blank" style="text-decoration: underline;">Shadcn Command documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Command>;

export const InDialog: Story = {
  render: _ => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>Open command palette</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Navigation">
              <CommandItem>
                Dashboard
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                Projects
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                Tasks
                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  },
};

export const WithKeyboardShortcut: Story = {
  render: _ => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen(open => !open);
        }
      };
      document.addEventListener('keydown', down);
      return () => document.removeEventListener('keydown', down);
    }, []);

    return (
      <>
        <p className="text-muted-foreground text-sm">
          Press <Kbd>⌘J</Kbd>
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};
