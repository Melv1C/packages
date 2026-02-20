/* eslint-disable react-hooks/rules-of-hooks */
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { Input } from './input';

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    docs: {
      description: {
        component: `<div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background-color: #f9fafb;">
<strong>
⚠️ Shadcn is not actively developing this component anymore.
</strong>
<p>
The Form component is an abstraction over the <a href="https://react-hook-form.com" target="_blank" style="text-decoration: underline;">react-hook-form</a> library. Going forward, we recommend using the <a href="/docs/components-base-field--docs" style="color: #2563eb; text-decoration: underline;"><code style="background-color: #f3f4f6; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.875rem;">Field</code></a> component to build forms. See the <a href="https://ui.shadcn.com/docs/components/form" target="_blank" style="text-decoration: underline;">Shadcn Form documentation</a> for more information.
</p>
</div>
Building forms with React Hook Form and Zod.

For more information, see the <a href="https://ui.shadcn.com/docs/components/form" target="_blank" style="text-decoration: underline;">Shadcn Form documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => {
    const formSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
      },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[360px] space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    );
  },
};
