import { Link } from 'react-router-dom'

function Header(){
  return (
    <>     {/* root를 하나로 만들어 주기 위해서 빈태그 추가 */}
      <Link to="/">Home</Link> | {' '}
      <Link to="/about">About</Link>| {' '}
      <a href="/">old tag</a>    
    </>
    )
}

export default Header;
