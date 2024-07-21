import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const sortByDate = () => {
    setData(
      data.toSorted((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA.getTime() === dateB.getTime()) {
          return b.views - a.views;
        }
        return dateB - dateA;
      })
    );
  };

  const sortByViews = () => {
    setData(
      data.toSorted((a, b) => {
        return b.views - a.views;
      })
    );
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr key={ele.article + ele.views + ele.date}>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
