import './App.css';

function App() {
  return (
   <>
   
    <div
    style={{width: "100vw", height: "100vh", margin: "0 0 0 0", padding: "0 0 0 0", backgroundColor: "rgba(125, 52, 237, 1)"}}
    >

    <video style={{width: "100vw", height: "100vh"}} autoPlay muted controls>
      <source src={"/videos/martinianime.mp4"} type="video/mp4"/>
    </video>

    </div>
   </>
  );
}

export default App;
