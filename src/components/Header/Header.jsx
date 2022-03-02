import './Header.css';
import homeIcon from './homeIcon.png';

export function Header() {
  return (
    <header className="header">
      <img src={homeIcon} className="logo" />
      <h1>A React Shopping List APP</h1>
    </header>
  );
}
