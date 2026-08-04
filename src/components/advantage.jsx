function Advantage({ numAdvantage, setNumAdvantage }) {
  return (
    <form>
      <label htmlFor="advantageCount">Number of advantage rolls?: </label>
      <input
        type="number"
        name="advantageCount"
        value={numAdvantage}
        onChange={(e) => setNumAdvantage(Number(e.target.value))}
        min={0}
        style={{ width: "50px" }}
      />
    </form>
  );
}

export default Advantage;
