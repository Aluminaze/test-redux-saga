import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncIncrementAC, fetchAlbumsAC } from "./redux/actions";

function App() {
  const dispath = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const albums = useSelector((state) => state.albumsReducer.albums);
  console.log("~ albums", albums);

  return (
    <div className="App">
      <span>Count: {count}</span>

      <button onClick={() => dispath(asyncIncrementAC())}>INCREMENT</button>

      <hr />

      <button onClick={() => dispath(fetchAlbumsAC())}>FETCH USERS</button>

      {albums.length ? (
        albums.map((album, index) => <div key={index}>{album.title}</div>)
      ) : (
        <span>List with albums empty</span>
      )}
    </div>
  );
}

export default App;
