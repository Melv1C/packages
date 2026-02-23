import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';

const packages = [
  {
    name: '@melv1c/ui-core',
    description: '50+ accessible UI components built on Radix UI and Tailwind CSS.',
    href: '/docs/ui-core',
    available: true,
  },
  {
    name: '@melv1c/rich-text-editor',
    description: 'A Tiptap-based editor with pre-configured extensions.',
    href: '/docs/rich-text-editor',
    available: true,
  },
  {
    name: '@melv1c/code-editor',
    description: 'A Monaco-based code editor with syntax highlighting and autocompletion.',
    href: '/docs/code-editor',
    available: false,
  },
];

export function meta() {
  return [
    { title: '@melv1c — Documentation' },
    {
      name: 'description',
      content: 'Documentation for @melv1c packages — reusable UI components and tools for React.',
    },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="mb-2 text-sm font-medium text-fd-muted-foreground">
          Open-source packages by Melvyn
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">@melv1c</h1>
        <p className="mt-4 max-w-lg text-lg text-fd-muted-foreground">
          A collection of reusable, accessible, and well-documented packages for building modern
          React applications.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            className="rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            to="/docs"
          >
            Get Started
          </Link>
          <a
            className="rounded-full border border-fd-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
            href="https://github.com/Melv1C/packages"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <section className="mt-16 grid w-full max-w-3xl gap-4 text-left sm:grid-cols-3">
          {packages.map(pkg => (
            <Link
              key={pkg.name}
              to={pkg.href}
              className="group relative rounded-xl border border-fd-border p-5 transition-colors hover:bg-fd-accent/50"
            >
              <h2 className="text-sm font-semibold">{pkg.name}</h2>
              <p className="mt-1.5 text-sm text-fd-muted-foreground">{pkg.description}</p>
              {!pkg.available && (
                <span className="mt-3 inline-block rounded-full bg-fd-muted px-2 py-0.5 text-xs font-medium text-fd-muted-foreground">
                  Coming soon
                </span>
              )}
            </Link>
          ))}
        </section>
      </main>
    </HomeLayout>
  );
}
