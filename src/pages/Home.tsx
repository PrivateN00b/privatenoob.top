import Bio from "../components/Bio";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ border: "solid", width: "20%" }}>
        <Bio />
      </div>
      <div style={{ border: "solid", width: "60%", margin: "0 10px 0 10px" }}>
        <h1>Home</h1>
      </div>
      <div style={{ border: "solid", width: "20%" }}>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
