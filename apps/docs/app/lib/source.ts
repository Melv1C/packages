import { getDemoComponentCode } from '@/lib/registry';
import { loader, type InferPageType } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docs } from 'fumadocs-mdx:collections/server';

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: '/docs',
  plugins: [lucideIconsPlugin()],
});

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');
  const withExpandedPreviews = processed.replace(
    /<ComponentPreview\s+name=(['"])([^'"]+)\1\s*\/>/g,
    (_match, _quote, name: string) => `\n\n\`\`\`tsx\n${getDemoComponentCode(name)}\n\`\`\`\n\n`,
  );

  return `# ${page.data.title} (${page.url})

${withExpandedPreviews}`;
}
