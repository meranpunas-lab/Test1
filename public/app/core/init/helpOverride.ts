import config from 'app/core/config';

/**
 * Prepare a preloaded state override for navBarTree that sets a custom Help menu subtitle.
 * This runs purely in the frontend and avoids touching backend files.
 */
export function getHelpNavPreloadedState(): any | undefined {
  try {
    const bootData = (config as any).bootData;
    if (bootData && Array.isArray(bootData.navTree)) {
      const navTree = bootData.navTree as any[];
      // find the Help node and override its subtitle
      for (let i = 0; i < navTree.length; i++) {
        const n: any = navTree[i];
        if (n && (n.id === 'help' || n.text === 'Help')) {
          n.subTitle = 'AKMind v1.0.1';
          break;
        }
      }

      // return a preloaded state object for configureStore
      return { navBarTree: navTree.map((n: any) => ({ ...n })) };
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Failed to prepare Help menu subtitle override:', err);
  }
  return undefined;
}
