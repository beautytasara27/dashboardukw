import { useEffect, useState } from "react";

const Home = ({ user }) => {
  const [entries, setEntries] = useState(null);
  useEffect(() => {
    if (user) {
      setEntries(Object.entries(user));
    }
  }, [user]);
  if (!entries) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="table-container">
      <h2 className="table-header">DASHBOARD</h2>
      <div className="table">
          <div className="rows table-heading">
            <span>ATTRIBUTE</span>
            <span>VALUE</span>
          </div>
        <div className="table-body">
          {entries.map((entry) => (
            <div key={entry[0]} className="rows">
              <span>{entry[0]}</span>
              <span>{entry[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
