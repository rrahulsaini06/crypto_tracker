import "./App.css";
import comapaniesData from "./data/companies.json";
// import tradeData from "./data/tradeData.json";
import { useSelector, useDispatch } from "react-redux";
import { tradeChange } from "./features/counter/counterSlice";
import chart from "./images/chart.svg";

function App() {
  const tradeData = useSelector((state) => state?.tradeData?.value);
  const dispatch = useDispatch();
  const priceHandler = () => {
    return dispatch(tradeChange());
  };
  // const decHandler = ()=>{
  //   return  dispatch(decrement())
  // }
  // setInterval(()=>{
  //   console.log("TRADE DATA", JSON.stringify(tradeData));
  //   return  dispatch(tradeChange())
  // },10000);

  return (
    <div className="App">
      <header className="App-header">
        <table border="1">
          <tr>
            <th>#</th>
            <th className="company_Name">Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap </th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
          {comapaniesData.map((company, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td className="logo-cell">
                  <div className="logo-wrapper">
                    <img
                      src={require(`${company.logo}`)}
                      alt="LOGO"
                      className="company-logo"
                    />
                    <span className="company-name">{company.name}</span>
                  </div>
                </td>

                <td>${console.log("TRADE DATA", JSON.stringify(tradeData))}</td>
                <td> {(Math.random() * 1).toFixed(2) + "%"}</td>
                <td>{(Math.random() * 10).toFixed(2) + "%"}</td>
                <td>{(Math.random() * 20).toFixed(2) + "%"}</td>
                <td>${Math.floor(Math.random() * 1000000000000) + 1}</td>
                <td>${Math.floor(Math.random() * 100000000000) + 1}</td>
                <td>9</td>
                <td>
                  <img src={chart} alt="chart" className="company-logo" />
                </td>
              </tr>
            );
          })}
        </table>
      </header>
    </div>
  );
}

export default App;
