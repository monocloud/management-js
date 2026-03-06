/** @type {import("typedoc").TypeDocOptions} */
const config = {
  $schema: 'https://typedoc.org/schema.json',
  packageOptions: {
    gitRevision: 'main',
    includeVersion: false,
    excludeExternals: true,
    excludeInternal: true,
    excludePrivate: true,
    excludeNotDocumented: false,
    sortEntryPoints: true,
    disableGit: false,
    disableSources: false,
    sort: 'alphabetical',
  },
  entryPoints: ['../packages/core', '../packages/management'],
  exclude: ['**/dist/**', '**/node_modules/**', '**/tests/**'],
  entryPointStrategy: 'packages',
  visibilityFilters: {},
  includeHierarchySummary: false,
  sortEntryPoints: false,
  out: '../docs',
  includeVersion: false,
  name: 'MonoCloud Management SDK',
  readme: '../README.md',
  hideGenerator: true,
  disableSources: false,
  excludeExternals: true,
  exclude: ['**/node_modules/**', '**/tests/**', '**/examples/**'],
  categorizeByGroup: false,
  theme: 'default',
  validation: {
    notExported: true,
    invalidLink: true,
    notDocumented: false,
  },
};

export default config;
