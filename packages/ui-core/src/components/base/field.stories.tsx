/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from './button';
import { Checkbox } from './checkbox';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './field';
import { Input } from './input';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Slider } from './slider';
import { Switch } from './switch';
import { Textarea } from './textarea';

const meta: Meta<typeof Field> = {
  component: Field,
  parameters: {
    docs: {
      description: {
        component: `
Combine labels, controls, and help text to compose accessible form fields and grouped inputs.

For more information, see the <a href="https://ui.shadcn.com/docs/components/field" target="_blank" style="text-decoration: underline;">Shadcn Field documentation</a>.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Field>;
export const InputExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter" />
            <FieldDescription>Choose a unique username for your account.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>Must be at least 8 characters long.</FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const TextareaExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
            <FieldDescription>Share your thoughts about our service.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const SelectExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <Field>
        <FieldLabel>Department</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="support">Customer Support</SelectItem>
            <SelectItem value="hr">Human Resources</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>Select your department or area of work.</FieldDescription>
      </Field>
    </div>
  ),
};

export const SliderExample: Story = {
  render: _ => {
    const [value, setValue] = useState([50, 75]);
    return (
      <div className="w-[320px]">
        <Field>
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription>
            Set your budget range ($
            <span className="font-medium tabular-nums">{value[0]}</span> -{' '}
            <span className="font-medium tabular-nums">{value[1]}</span>).
          </FieldDescription>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            min={0}
            step={1}
            className="mt-2 w-full"
          />
        </Field>
      </div>
    );
  },
};

export const FieldsetExample: Story = {
  render: _ => (
    <div className="w-[320px] space-y-6">
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>We need your address to deliver your order.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const CheckboxExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">Show these items on the desktop</FieldLegend>
          <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
                defaultChecked
              >
                Hard disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-external-disks-1yg" />
              <FieldLabel htmlFor="finder-pref-9k2-external-disks-1yg" className="font-normal">
                External disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
              <FieldLabel htmlFor="finder-pref-9k2-cds-dvds-fzt" className="font-normal">
                CDs, DVDs, and iPods
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
              <FieldLabel htmlFor="finder-pref-9k2-connected-servers-6l2" className="font-normal">
                Connected servers
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
              Sync Desktop & Documents folders
            </FieldLabel>
            <FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud Drive. You can access
              them from other devices.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const RadioExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <FieldLabel htmlFor="plan-monthly" className="font-normal">
              Monthly ($9.99/month)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <FieldLabel htmlFor="plan-yearly" className="font-normal">
              Yearly ($99.99/year)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="lifetime" id="plan-lifetime" />
            <FieldLabel htmlFor="plan-lifetime" className="font-normal">
              Lifetime ($299.99)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  ),
};

export const SwitchExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor device, you can use
            a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id="2fa" />
      </Field>
    </div>
  ),
};

export const ChoiceCard: Story = {
  render: _ => (
    <div className="w-[320px]">
      <FieldGroup>
        <FieldSet>
          <FieldLabel htmlFor="compute-environment-p8w">Compute Environment</FieldLabel>
          <FieldDescription>Select the compute environment for your cluster.</FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>
                    Run GPU workloads on a K8s configured cluster.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Virtual Machine</FieldTitle>
                  <FieldDescription>
                    Access a VM configured cluster to run GPU workloads.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="vm" id="vm-z4k" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  ),
};

export const FieldGroupExample: Story = {
  render: _ => (
    <div className="w-[320px]">
      <FieldGroup>
        <FieldSet>
          <FieldLabel>Responses</FieldLabel>
          <FieldDescription>
            Get notified when ChatGPT responds to requests that take time, like research or image
            generation.
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push" defaultChecked disabled />
              <FieldLabel htmlFor="push" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLabel>Tasks</FieldLabel>
          <FieldDescription>
            Get notified when tasks you&apos;ve created have updates. <a href="/">Manage tasks</a>
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push-tasks" />
              <FieldLabel htmlFor="push-tasks" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="email-tasks" />
              <FieldLabel htmlFor="email-tasks" className="font-normal">
                Email notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  ),
};

export const Responsive: Story = {
  render: _ => (
    <div className="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>Provide your full name for identification</FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="lastName">Message</FieldLabel>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                id="message"
                placeholder="Hello, world!"
                required
                className="min-h-[100px] resize-none sm:min-w-[300px]"
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  ),
};

export const WithErrors: Story = {
  render: _ => (
    <div className="w-[320px]">
      <FieldSet>
        <FieldLegend>Form with errors</FieldLegend>
        <FieldDescription className="mb-4 text-sm">
          <ul className="list-disc space-y-1 pl-5">
            <li>Add data-invalid to Field to switch the entire block into an error state.</li>
            <li>Add aria-invalid on the input itself for assistive technologies.</li>
            <li>
              Render FieldError immediately after the control or inside FieldContent to keep error
              messages aligned with the field.
            </li>
          </ul>
        </FieldDescription>
        <FieldGroup>
          <Field data-invalid>
            <FieldLabel htmlFor="email-error">Email</FieldLabel>
            <Input id="email-error" placeholder="you@example.com" aria-invalid />
            <FieldError errors={[{ message: 'Email is required' }]} />
          </Field>
          <Field data-invalid>
            <FieldTitle>Password</FieldTitle>
            <FieldContent>
              <Input type="password" aria-invalid />
              <FieldError
                errors={[
                  { message: 'Password must be at least 8 characters' },
                  { message: 'Password must contain a number' },
                ]}
              />
            </FieldContent>
          </Field>
          <FieldSeparator>Or</FieldSeparator>
          <Field>
            <FieldLabel htmlFor="sso-error">Sign in with SSO</FieldLabel>
            <FieldDescription>Use your corporate identity provider to sign in.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};
