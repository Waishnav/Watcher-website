import "./App.css";

function Like() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      <div className="like-button">
        <span>Like</span>
      </div>
    </button>
  );
}
/*
function App() {
  return (
    <div className="App">

    </div>
  );
}
*/

export default Like;
