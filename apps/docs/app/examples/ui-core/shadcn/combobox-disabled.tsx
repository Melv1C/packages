import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@melv1c/ui-core';

const frameworks = [
  'Next.js',
  'SvelteKit',
  'Nuxt.js',
  'Remix',
  'Astro',
] as const;

export default function ComboboxDisabled() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" disabled />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
