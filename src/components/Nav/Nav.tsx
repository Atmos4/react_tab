import React, { ReactElement, useState } from "react"
import ActiveTabEffect from "../effects/ActiveTabEffect"
import NavItem from "../NavItem/NavItem"
import "./nav.css"

interface NavProps {
  children: ReactElement[];
}

const Nav = ({children}:NavProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const count = children.length

  return (
    <div className={'nav-container'}>
      <ul className={'nav-list'}>
        {children.map((item, index) => (
          <NavItem
            key={index}
            title={item.props.title}
            index={index}
            active={index===selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
        <ActiveTabEffect
          index={selectedTab}
          count={count}/>
      </ul>
      {children[selectedTab]}
    </div>
  )
}

export default Nav