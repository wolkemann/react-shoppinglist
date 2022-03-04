import './Finder.css';

export function Finder({ formEventHandler }) {
  return (
    <section>
      <h2 className="Finder__title">What do you want to buy?</h2>
      <form onSubmit={formEventHandler}>
        <input
          type="text"
          name="addInput"
          className="Finder__searchInput"
          maxLength="25"
          placeholder="(Spaghetti, Apples, Meat...)"
          required
        />
      </form>
    </section>
  );
}
