import React, { Fragment, useState } from 'react'
import Playground from 'xueyan-react-playground'
import Switch from 'xueyan-react-desktop'

const code1 = `
import React, { useState } from 'react'
import Switch from 'xueyan-react-desktop'

export default function UseSwitch() {
  const [state, setState] = useState<boolean>(false)
  return (
    <Fragment>
      switch: <Switch block={true} value={state} onChange={setState}/>
    </Fragment>
  )
}
`

export default function UseOne() {
  return <Playground scope={{ React, Fragment, useState, Switch }} code={code1}/>
}
