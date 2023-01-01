import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useState, useEffect } from "react";

const url = "src\\database\\db.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const removeTour = (id) => setTours(tours.filter((tour) => tour.id != id));

  if (loading) {
    return <Loading />;
  }
  if (!tours.length) {
    return (
      <main className="container">
        <h1>No tour left</h1>
        <button className="btn" onClick={getData}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main className="container ">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
