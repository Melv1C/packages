/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from './button';
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from './stepper';

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: `
A stepper component for displaying progress through a sequence of steps.

This component is from <a href="https://21st.dev/community/components/originui/stepper" target="_blank" style="text-decoration: underline;">Origin UI</a>.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the stepper',
    },
  },
  args: {
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [1, 2, 3, 4, 5];

export const Horizontal: Story = {
  render: props => {
    const [activeStep, setActiveStep] = useState(2);

    return (
      <>
        <Stepper {...props} value={activeStep} onValueChange={setActiveStep}>
          {steps.map(step => (
            <StepperItem key={step} step={step} className="not-last:flex-1">
              <StepperTrigger>
                <StepperIndicator asChild>{step}</StepperIndicator>
              </StepperTrigger>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
        <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
          Stepper with numbers only
        </p>
      </>
    );
  },
};

export const ControlledWithLoading: Story = {
  render: _ => {
    const [currentStep, setCurrentStep] = useState(2);
    const [isLoading, setIsLoading] = useState(false);

    const handleNextStep = () => {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsLoading(false);
      }, 1000);
    };

    return (
      <div className="mx-auto max-w-xl min-w-75 space-y-8 text-center">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map(step => (
            <StepperItem key={step} step={step} className="not-last:flex-1" loading={isLoading}>
              <StepperTrigger asChild>
                <StepperIndicator />
              </StepperTrigger>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            className="w-32"
            onClick={() => setCurrentStep(prev => prev - 1)}
            disabled={currentStep === 1}
          >
            Prev step
          </Button>
          <Button
            variant="outline"
            className="w-32"
            onClick={handleNextStep}
            disabled={currentStep > steps.length}
          >
            Next step
          </Button>
        </div>
        <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
          Controlled stepper with checkmarks and loading state
        </p>
      </div>
    );
  },
};

const stepsWithDetails = [
  {
    step: 1,
    title: 'Step One',
    description: 'Desc for step one',
  },
  {
    step: 2,
    title: 'Step Two',
    description: 'Desc for step two',
  },
  {
    step: 3,
    title: 'Step Three',
    description: 'Desc for step three',
  },
];

export const VerticalWithDetails: Story = {
  render: _ => {
    return (
      <div className="min-w-75 space-y-8 text-center">
        <Stepper defaultValue={2} orientation="vertical">
          {stepsWithDetails.map(({ step, title, description }) => (
            <StepperItem key={step} step={step} className="relative items-start not-last:flex-1">
              <StepperTrigger className="items-start pb-12 last:pb-0">
                <StepperIndicator />
                <div className="mt-0.5 space-y-0.5 px-2 text-left">
                  <StepperTitle>{title}</StepperTitle>
                  <StepperDescription>{description}</StepperDescription>
                </div>
              </StepperTrigger>
              {step < stepsWithDetails.length && (
                <StepperSeparator className="absolute inset-y-0 top-6.5 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
              )}
            </StepperItem>
          ))}
        </Stepper>
        <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
          Vertical stepper with inline titles and descriptions
        </p>
      </div>
    );
  },
};
