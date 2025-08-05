import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define your tables and their respective API URLs
const tableConfig = {
  Applicatie_Ontwikkeling: `${import.meta.env.VITE_API_URL}/users`,
  Branding: `${import.meta.env.VITE_API_URL}/forms`,
  Standard_Template: `${import.meta.env.VITE_API_URL}/custom`,
  Maatwerk_Website: `${import.meta.env.VITE_API_URL}/maatwerk`,
  Payment: `${import.meta.env.VITE_API_URL}/payment`,
};

const Dashboard = () => {
  const [activeTable, setActiveTable] = useState("Applicatie_Ontwikkeling");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTableData = async () => {
      setLoading(true);
      try {
        const response = await fetch(tableConfig[activeTable]);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTableData();
  }, [activeTable]);

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("auth");
  };

  console.log(data);

  return (
    <div className="flex min-h-screen  text-black bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 min-w-[16rem] max-w-[16rem] bg-white p-4 h-screen flex flex-col shadow-lg">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          {Object.keys(tableConfig).map((tableName) => (
            <li
              key={tableName}
              onClick={() => setActiveTable(tableName)}
              className={`cursor-pointer p-2 rounded ${
                activeTable === tableName
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {tableName}
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogOut}
          className="hidden lg:block hover:bg-[#468AFFE6] bg-[#468AFF] font-plus-jakarta text-white px-6 py-2 rounded-md shadow-md mt-6 "
        >
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">{activeTable} Table</h1>

        {loading ? (
          <p className="animate-pulse text-gray-600">Loading...</p>
        ) : data.length > 0 ? (
          <div className="max-h-[500px] overflow-auto border border-gray-300 rounded">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-200 sticky top-0 z-10">
                  <tr>
                    {Object.keys(data[0]).map((key, i) => (
                      <th
                        key={key}
                        className="p-2 text-left capitalize border-b"
                      >
                        {i === 0 && key === "_id"
                          ? "SL"
                          : key.replace(/_/g, " ")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-t">
                      {/* SL number */}
                      <td className="p-2 text-sm border-b">{index + 1}</td>

                      {/* All other fields except _id */}
                      {Object.entries(item)
                        .filter(([key]) => key !== "_id")
                        .map(([val], i) => (
                          <td key={i} className="p-2 text-sm border-b">
                            {Array.isArray(val)
                              ? val.join(", ")
                              : val?.toString()}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>No data found for {activeTable}.</p>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
