
import "./App.css";
import Name from "./Name";
import Batch from "./Batch";
import Header from "./Components/Header";
import Items from "./Components/Items";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <div className="row mt-4">
          <div className="col-8 m-auto shadow rounded lol">
          <Name name ={"Shreyash"}/>
            <div className="borderline"></div>
            <div className="row my-3">
              <div className="col-md-4">
                <img
                  src="https://scontent.fagr1-4.fna.fbcdn.net/v/t1.6435-9/37005713_1005537069622167_668887645354459136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7wBfQUDnsqwAX8TQk7w&tn=vMNlciB5jXY9tYX7&_nc_ht=scontent.fagr1-4.fna&oh=00_AfCrjqOyB-n2RWvO6EEGyX4c9k-rf8sRtUZsykBSE3FI3g&oe=63A65EA9"
                  alt=""
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-8 mt-2">
                <Items/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-3">
        <p className="footer">all right reserved Designed By shreyash</p>
      </footer>
    </div>
  );
}

export default App;

