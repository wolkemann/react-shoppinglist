import './Finder.css';

export function Finder({ shoppingChart, setShoppingChart }) {
  function onPressEnter(e) {
    e.preventDefault();
    const newArray = e.target.addInput.value
      .trim()
      .split(',')
      .map(element => {
        return { id: 'id-' + element, name: element };
      });

    setShoppingChart([...newArray, ...shoppingChart]);
    e.target.reset();
  }

  return (
    <section>
      <h2 className="Finder__title">What do you want to buy?</h2>
      <form onSubmit={onPressEnter}>
        <input
          type="text"
          name="addInput"
          className="Finder__searchInput"
          placeholder="(Spaghetti, Apples, Meat...)"
          required
        />
      </form>
    </section>
  );
}
