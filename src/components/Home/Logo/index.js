import LogoT from '../../../assets/images/Logo-t.png'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoT}
        alt="SysAdmin,  Linux"
      />
    </div>
  )
}

export default Logo
