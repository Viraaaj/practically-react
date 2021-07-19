import React, { forwardRef } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
  return <span style={{ color:"red" }} > Colored Component! </span>
}

const CustomChildComponent = forwardRef( (props, ref) => {
  return (
    <div ref={ref} >
      <div> First </div>
      <div> Second </div>
    </div>
  )
} )

function Tooltip() {
  return (
    <div>
      
      <div style={{ paddingBottom: 20 }}>
        <Tippy arrow={false} delay={1000} placement='right' content="Basic Tooltip">
          <button>
            Hover Here!
          </button>
        </Tippy>
      </div>


      <div style={{ paddingBottom: 20 }}>
        <Tippy content={<span style={{color:"orange"}} > Colored Text </span>}>
          <button>
            Hover Here!
          </button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: 20 }}>
        <Tippy content={<ColoredTooltip />}>
          <button>
            Hover Here!
          </button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: 20 }}>
        <Tippy content={<ColoredTooltip />}>
          <CustomChildComponent />
        </Tippy>
      </div>

    </div>
  )
}

export default Tooltip