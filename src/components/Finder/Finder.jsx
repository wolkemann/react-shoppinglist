import './Finder.css';

export function Finder() {
  return (
    <section>
      <h2 className="Finder__title">What do you want to buy?</h2>
      <input type="text" className="Finder__searchInput" maxLength="20" />
    </section>
  );
}
