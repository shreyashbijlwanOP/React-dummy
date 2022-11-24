
import "./App.css";
import Name from "./Name";
import Batch from "./Batch";

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid bg-primary">
        <div className="row">
          <div className="col-12">
            <h1 className="display-3 text-light text-center p-2">
              Welcome to my First React Page
            </h1>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="row mt-4">
          <div className="col-8 m-auto shadow rounded">
          <Name/>
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
                <ul>
                  <li>I have done my Post graduation (MCA) in 2022</li>
                  
                  <li>Done my MCA From HNBGU garhwal</li>
                  <li>
                    I love technology, and always try to find way to learn them.
                  </li>
                  <li>
                    I am from mountains. Yes, Satpuli Pauri garhwal Uttarakhand
                  </li>
                  <li>I enrolled RFA in sept</li>
                  <Batch/>
                  <li>My Main Programming Languages Are C++ and JS</li>
                  <li>I am also A Ex-Nvodian</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

export  let a = {

}
