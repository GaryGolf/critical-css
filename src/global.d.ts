
declare module '*.css' {
  const styles: any;
  export = styles;
}

interface Window {
  __PRELOADED_STATE__: string;
}

declare var window: Window 
