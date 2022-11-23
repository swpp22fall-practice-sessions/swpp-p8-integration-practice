import './Hero.css'
import React, { ReactElement } from 'react'

interface IProps {
  name: string
  age: string
  clickDetail?: React.MouseEventHandler<HTMLDivElement> // Defined by React
}

const Hero = (props: IProps): ReactElement => {
  return (
    <div className="Hero">
      <div className="text" onClick={props.clickDetail}>
        {props.name}
      </div>
    </div>
  )
}

export default Hero
