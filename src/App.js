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
      <header className="header">Header</header>
      <aside className="sidebar">Sidebar</aside>
      <main className="main">
        <span>Count: {count}</span>

        <button onClick={() => dispath(asyncIncrementAC())}>INCREMENT</button>

        <hr />

        <button onClick={() => dispath(fetchAlbumsAC())}>FETCH USERS</button>

        {albums.length ? (
          albums.map((album, index) => <div key={index}>{album.title}</div>)
        ) : (
          <span>List with albums empty</span>
        )}
      </main>
      <div className="content1">Content 1</div>
      <div className="content2">Content 2</div>
      <div className="content3">Content 3</div>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
