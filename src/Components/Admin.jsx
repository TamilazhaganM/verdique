import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const API_URL = process.env.API_URL || "http://localhost:5000";
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  // Fetch Customers
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/client`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);

        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/admin");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [navigate]);

  // Update Customer Status
  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API_URL}/client/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCustomers((prev) =>
        prev.map((customer) =>
          customer._id === id
            ? { ...customer, status }
            : customer
        )
      );

      if (
        selectedCustomer &&
        selectedCustomer._id === id
      ) {
        setSelectedCustomer({
          ...selectedCustomer,
          status,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Contacted":
        return "bg-blue-100 text-blue-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#0D1F0F]">
            Customer Enquiries
          </h1>

          <p className="text-gray-600 mt-2">
            Customers who submitted the contact form.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
        >
          Logout
        </button>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Customers</p>

          <h2 className="text-4xl font-bold text-[#0D1F0F] mt-2">
            {customers.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Pending</p>

          <h2 className="text-4xl font-bold text-yellow-500 mt-2">
            {
              customers.filter(
                (c) => c.status === "Pending"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Completed</p>

          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {
              customers.filter(
                (c) => c.status === "Completed"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Customer Table */}

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0D1F0F] text-white">

              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>

            </thead>

            <tbody>

              {customers.map((customer) => (

                <tr
                  key={customer._id}
                  className="border-b hover:bg-[#F5F2EC] transition"
                >

                  <td className="px-6 py-5 font-semibold">
                    {customer.name}
                  </td>

                  <td className="px-6 py-5">
                    {customer.mail}
                  </td>

                  <td className="px-6 py-5">
                    {customer.phone}
                  </td>

                  <td className="px-6 py-5">
                    {customer.service}
                  </td>

                  <td className="px-6 py-5">
                    {new Date(customer.createdAt).toLocaleString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}
                  </td>

                  <td className="px-6 py-5">

                    <select
                      value={customer.status}
                      onChange={(e) =>
                        updateStatus(
                          customer._id,
                          e.target.value
                        )
                      }
                      className={`px-3 py-2 rounded-lg font-semibold outline-none ${getStatusColor(
                        customer.status
                      )}`}
                    >
                      <option value="Pending">
                        ⌛ Pending
                      </option>

                      <option value="Contacted">
                        📞 Contacted
                      </option>

                      <option value="Completed">
                        ✅ Completed
                      </option>

                    </select>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <button
                      onClick={() =>
                        setSelectedCustomer(customer)
                      }
                      className="bg-[#7EC845] hover:bg-[#4A7C59] text-[#0D1F0F] hover:text-white px-4 py-2 rounded-lg transition"
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Customer Details Modal */}

      {selectedCustomer && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6">

            <h2 className="text-2xl font-bold mb-5 text-[#0D1F0F]">
              Customer Details
            </h2>

            <div className="space-y-4">

              <p><strong>👤 Name:</strong> {selectedCustomer.name}</p>

              <p><strong>📧 Email:</strong> {selectedCustomer.mail}</p>

              <p><strong>📱 Phone:</strong> {selectedCustomer.phone}</p>

              <p><strong>🌿 Service:</strong> {selectedCustomer.service}</p>

              <p>
                <strong>📅 Submitted:</strong>{" "}
                {new Date(
                  selectedCustomer.createdAt
                ).toLocaleString("en-IN")}
              </p>

              <p>
                <strong>⌛ Status:</strong>{" "}

                <span
                  className={`px-3 py-1 rounded-full ${getStatusColor(
                    selectedCustomer.status
                  )}`}
                >
                  {selectedCustomer.status}
                </span>
              </p>

              <div>

                <strong>💬 Message:</strong>

                <div className="bg-gray-100 rounded-lg p-3 mt-2">
                  {selectedCustomer.message}
                </div>

              </div>

            </div>

            <div className="text-right mt-6">

              <button
                onClick={() =>
                  setSelectedCustomer(null)
                }
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Admin;