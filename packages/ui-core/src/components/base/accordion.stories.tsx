/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';
import { Button } from './button';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
A vertically stacked set of interactive headings that each reveal a section of content.

For more information, see the <a href="https://ui.shadcn.com/docs/components/accordion" target="_blank" style="text-decoration: underline;">Shadcn Accordion documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'The type of the accordion',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the accordion is collapsible',
      if: {
        arg: 'type',
        eq: 'single',
      },
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: args => (
    <Accordion {...args} className="w-100">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML elements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic. You can
          override these styles using className props.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleItem: Story = {
  render: _ => (
    <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Single Accordion Item</AccordionTrigger>
        <AccordionContent>
          This is a single accordion item with some content inside. You can expand and collapse it
          by clicking the trigger.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleItems: Story = {
  render: _ => (
    <Accordion type="multiple" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>
          This is the first accordion item. Multiple items can be open at the same time when using
          type="multiple".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item</AccordionTrigger>
        <AccordionContent>
          This is the second accordion item. You can have both items open simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>
          This is the third accordion item. All three can be open at once.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const NonCollapsible: Story = {
  render: _ => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Always Open Item</AccordionTrigger>
        <AccordionContent>
          This accordion item cannot be collapsed once opened. It requires collapsible prop to be
          false or omitted.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Another Item</AccordionTrigger>
        <AccordionContent>
          Opening this item will close the first one, but you cannot close it once opened.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithLongContent: Story = {
  render: _ => (
    <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Item with Long Content</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>
              This accordion item contains a lot of content to demonstrate how it handles longer
              text blocks. The content area will expand to accommodate all the text, and scrolling
              will be handled appropriately.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Another Long Content Item</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>
              Here's another item with substantial content. This helps test the accordion's behavior
              with multiple items containing longer text.
            </p>
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>First bullet point with some information</li>
              <li>Second bullet point with more details</li>
              <li>Third bullet point completing the list</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Controlled: Story = {
  render: _ => {
    const [value, setValue] = useState<string>('item-1');
    return (
      <div className="w-[400px] space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setValue('item-1')}>Open Item 1</Button>
          <Button onClick={() => setValue('item-2')}>Open Item 2</Button>
          <Button onClick={() => setValue('')}>Close All</Button>
        </div>
        <Accordion type="single" collapsible value={value} onValueChange={setValue}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Controlled Item 1</AccordionTrigger>
            <AccordionContent>
              This accordion is controlled externally. Use the buttons above to change which item is
              open.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Controlled Item 2</AccordionTrigger>
            <AccordionContent>
              The state is managed by React state, allowing for programmatic control.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};
