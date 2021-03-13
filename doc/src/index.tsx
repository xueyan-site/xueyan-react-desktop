/**
 * @package xueyan-react-desktop
 * @author xueyan <yang@xueyan.site>
 * @description 文档入口 document entry
 */

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pages, { PageSources } from 'xueyan-react-pages'
import './index.scss'

const Readme = lazy(() => import('./readme'))
const Example = lazy(() => import('./example'))

const sources: PageSources = {
  en: {
    header: 'xueyan-react-desktop',
    groupList: [
      {
        name: 'api',
        nodeList: [
          {
            path: '/api-one',
            name: 'SwitchProps',
            component: lazy(() => import('pages/en/api-one'))
          }
        ]
      },
      {
        name: 'use',
        nodeList: [
          {
            path: '/use-one',
            name: 'normal',
            component: lazy(() => import('pages/en/use-one'))
          },
          {
            path: '/use-two',
            name: 'block element',
            component: lazy(() => import('pages/en/use-two'))
          }
        ]
      }
    ]
  },
  zh: {
    header: 'xueyan-react-desktop',
    groupList: [
      {
        name: '接口',
        nodeList: [
          {
            path: '/api-one',
            name: 'SwitchProps',
            component: lazy(() => import('pages/zh/api-one'))
          }
        ]
      },
      {
        name: '示例',
        nodeList: [
          {
            path: '/use-one',
            name: '常规用法',
            component: lazy(() => import('pages/zh/use-one'))
          },
          {
            path: '/use-two',
            name: '显示为块级元素',
            component: lazy(() => import('pages/zh/use-two'))
          }
        ]
      }
    ]
  },
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          <Route strict={true} path="/example" component={Example} />
          <Pages readme={Readme} sources={sources} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
