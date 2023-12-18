import logo from "./logo.svg";
import "./App.css";

function App() {
  const text = "Hello World!";
  const num = 10;
  const isExist = false; //render nai hoga
  const icecream = {
    //directly render nahi hoga, lekin key ke sath
    name: "Chocbar",
    flavor: "Chocolate + Vanilla",
    company: "Walls",
  };

  const buffet = [
    "Fish Paplet",
    "Prawns",
    "Chkn Karahi",
    "Sandwich",
    "Handi",
    "Cake",
  ];

  const restaurants = [
    {
      name: "Javed Nihari",
      location: "Dastageer",
      review: "3.5 Star",
    },
    {
      name: "Kababjees Express",
      location: "Poray Karachi me",
      review: "5 Star",
    },
    {
      name: "Flame",
      location: "DHA",
      review: "4 Star",
    },
  ];

  return (
    <div className="App">
      <h1>Basics of Rendering</h1>
      <h2>{text}</h2>
      <h3>{num}</h3>

      <h1>Object</h1>
      <p>{icecream.name}</p>
      <p>{icecream.flavor}</p>
      <p>{icecream.company}</p>

      <ul>
        {buffet.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>

      <table border="2">
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Review</th>
        </tr>
        {restaurants.map(function (item) {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.review}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
