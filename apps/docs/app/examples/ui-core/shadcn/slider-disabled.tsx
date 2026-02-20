import { Slider } from '@melv1c/ui-core';

export default function SliderDisabled() {
  return (
    <Slider defaultValue={[50]} max={100} step={1} disabled className="mx-auto w-full max-w-xs" />
  );
}
