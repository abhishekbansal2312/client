import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = ({ darkMode }) => {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url = `http://localhost:4600/api/auth/login`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
          password,
        }),
        credentials: "include", // Make sure credentials are included to handle cookies
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      setLoading(false);

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }


      const data = await response.json();
      console.log(data);
      localStorage.setItem("authToken", data.token); // Optional: Use if you need to access token directly

      navigate("/");
    } catch (err) {
      setLoading(false);
      if (err.name === "AbortError") {
        setError("Request timed out. Please try again.");
      } else {
        setError(err.message);
      }
    }
  };


  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-dark-bg">
        <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-dark-text">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="studentId"
                className="block text-gray-700 dark:text-dark-text font-semibold mb-2">
                Student Id:
              </label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                id="studentId"
                placeholder="Enter 9 digit student id"
                className="w-full p-3 border text-black border-gray-300 dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 dark:text-dark-text font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border text-black border-gray-300 dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 transition-colors font-semibold ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && (
              <p className="mt-4 text-red-600 dark:text-red-400 text-center">
                {error}
              </p>
            )}
            <p className="mt-4 text-center text-gray-600 dark:text-dark-text">
              Forget Password?{" "}
              <Link
                to="/auth/forgot-password"
                className="text-indigo-500 hover:underline">
                Click Here
              </Link>
            </p>
            <p className="mt-4 text-center text-gray-600 dark:text-dark-text">
              Not Registered?{" "}
              <Link
                to="/auth/register"
                className="text-indigo-500 hover:underline">
                Click Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
