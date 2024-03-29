export const APP_NAME = 'DataMaster'
export const PRELOAD_INJECTOR = '__PRELOAD_INJECTOR__'
export const CSS_VARS_NAME_SPACE = '--dm'
export const DARWIN = 'darwin'
export const WIN32 = 'win32'
export const DEFAULT_MAIN_WINDOW_LAYOUT = {
  minWidth: 800,
  minHeight: 600,
  width: 1440,
  height: 900,
}
export const ELECTRON_APP_EVENT_NAME = {
  ready: 'ready',
  activate: 'activate',
  beforeQuit: 'before-quit',
  windowAllClosed: 'window-all-closed',
} as const
export const ELECTRON_WINDOW_EVENT_NAME = {
  readyToShow: 'ready-to-show',
  close: 'close',
  move: 'move',
} as const
export const DEFAULT_THEME_PRIMARY_COLOR = '#1890ff'
export const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'
export const BASE_ROUTE = '/'
