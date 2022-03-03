import './Header.css';
import homeIcon from './homeIcon.png';

export function Header() {
  return (
    <header className="Header">
      <img src={homeIcon} className="logo" />
      <h1 className="Header__title">A React Shopping List</h1>
      <div>EN / DE</div>
    </header>
  );
}
