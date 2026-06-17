/// <reference path="../.astro/types.d.ts" />

interface Window {
  _portal?: {
    getExtraPeople?: () => Array<{ name: string; title: string }>;
    saveOrder?: (data: Record<string, unknown>) => void;
    clearExtraPeople?: () => void;
    loadSvgTemplate?: (url: string) => void;
  };
  netlifyIdentity?: {
    on(event: string, callback: (user?: unknown) => void): void;
    currentUser?(): unknown;
    logout(): void;
  };
}
