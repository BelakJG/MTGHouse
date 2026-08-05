function ArtCounter({
  tokenName,
  ArtImage,
  artUntapped,
  setArtUntapped,
  artTapped,
  setArtTapped,
}) {
  return (
    <div id={tokenName + "Counter"}>
      <div className="untapped">
        <img src={ArtImage} className="card" />
        <form>
          <label htmlFor={tokenName + "Untapped"}>
            Number of untapped {tokenName + "s"}:{" "}
          </label>
          <input
            type="number"
            id={tokenName + "Untapped"}
            value={artUntapped}
            onChange={(e) => setArtUntapped(Number(e.target.value))}
            min={0}
            style={{ width: "50px" }}
          ></input>
        </form>
      </div>
      <div className="tapped">
        <img src={ArtImage} className="card rotated" />
        <form>
          <label htmlFor={tokenName + "Tapped"}>
            Number of tapped {tokenName + "s"}:{" "}
          </label>
          <input
            type="number"
            id={tokenName + "Tapped"}
            value={artTapped}
            onChange={(e) => setArtTapped(Number(e.target.value))}
            min={0}
            style={{ width: "50px" }}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default ArtCounter;
