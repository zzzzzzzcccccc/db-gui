import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { cssVars, i18nConfig } from './config'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalError, App } from './components'
import { logger, getPreloadInjector } from './utils'
import wdyr from '@welldone-software/why-did-you-render'

function setDeviceInfo(target: HTMLElement) {
  const { getDeviceInfo } = getPreloadInjector()
  const deviceInfo = getDeviceInfo()

  target.className = deviceInfo.platform

  return deviceInfo
}

function setupWhyDidRender() {
  if (import.meta.env.DEV) {
    wdyr(React, {
      trackAllPureComponents: false,
    })
  }
}

export default async function bootstrap() {
  logger.debug('Start bootstrap')

  setupWhyDidRender()

  const injector = document.getElementById('root')
  if (injector) {
    setDeviceInfo(injector)
    cssVars(injector)

    await i18nConfig.changeLanguage()

    ReactDOM.createRoot(injector).render(
      <React.StrictMode>
        <ErrorBoundary
          fallback={<GlobalError />}
          onError={(error, info) => logger.error(`UI render oops`, error, info)}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </ErrorBoundary>
      </React.StrictMode>,
    )

    logger.debug('Success bootstrap')
  }
}
