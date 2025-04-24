import "./App.css";
import comapaniesData from "./data/companies.json";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table border="1">
          <tr>
            <th>#</th>
            <th>Name</th>
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
                <td>{index+1}</td>
                <td className="logo"><img src={require(`${company.logo}`)}  alt="LOGO" style={{ width: '20px', height: '20px' }} />{company.name}</td>
                <td>${ (Math.random() * 100000).toFixed(1) + 1}</td>
                <td> {(Math.random() * 1).toFixed(2) + '%'}</td>
                <td>{(Math.random() * 10).toFixed(2) + '%'}</td>
                <td>{(Math.random() * 20).toFixed(2) + '%'}</td>
                <td>${Math.floor(Math.random() * 1000000000000)  + 1}</td>
                <td>${Math.floor(Math.random() * 100000000000)  + 1}</td>
                <td>9</td>
                <td>10</td>
              </tr>
            );
          })}
        </table>
      </header>
    </div>
  );
}

export default App;
