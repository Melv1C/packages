# @melv1c/ui-core

## 1.1.1

### Patch Changes

- Remove the optional peer dependencies on Tailwind CSS and tw-animate-css. These are only needed if users want to use the base styles or animations, but many users will want to use their own styling solutions instead. By making them optional, we avoid forcing users to install packages they don't need.

## 1.1.0

### Minor Changes

- Rename the provider from UIKitProvider to UICoreProvider
