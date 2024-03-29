/// <reference types="vite/client" />

import { PRELOAD_INJECTOR, PreloadInjector } from '@db-gui/core'

interface ImportMetaEnv {
  VITE_RUNTIME_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    [PRELOAD_INJECTOR]: PreloadInjector
  }
}
