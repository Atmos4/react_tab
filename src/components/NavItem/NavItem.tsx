import "./navItem.css"
import classNames from "classnames"

interface NavItemProps {
  title: string;
  index: number;
  active: boolean;
  setSelectedTab: (index: number) => void;
}

const NavItem = ({ title, index, active, setSelectedTab}:NavItemProps) => {

  const onClick = () => {
    setSelectedTab(index)
  }

  let itemClasses = classNames({
    'nav-item': true,
    'active' : active,
  })

  return (
    <li className={itemClasses} onClick={onClick}><span className={'item-title'}>{title}</span>
    </li>
  )
}

export default NavItem