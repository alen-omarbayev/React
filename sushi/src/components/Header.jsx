import Logo from '../assets/logo.jpg'
import Phone from '../assets/phone.png'
function Header(){
    return(
      <div className='header'>
        <div className='info'>
            <img src={Logo} alt="logo" />
            <p>| 123 Main Street</p>
        </div>
        <div className='contact'>
          <a href=""><img src={Phone} alt="" /> +7 123 456 78 91</a>
          <p>Call center</p>
        </div>
      </div>
    );
}
export default Header;
