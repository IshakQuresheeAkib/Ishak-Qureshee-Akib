// Type declarations for libraries without TypeScript support

declare module "split-text-js" {
  interface SplitTextJSOptions {
    type?: string;
    split?: string;
  }

  export default class SplitTextJS {
    constructor(element: HTMLElement, options?: SplitTextJSOptions);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}
