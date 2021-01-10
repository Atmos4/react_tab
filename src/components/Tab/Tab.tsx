import React, { ReactNode } from 'react'
import "./tab.css"

interface TabProps {
  children: ReactNode;
  title: string;
}

const Tab = ({ children }: TabProps) => {
  return <div className={'tab-content'}>{children}</div>
}

export default Tab