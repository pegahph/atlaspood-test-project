import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      credentials.email === "admin@email.com" &&
      credentials.password === "1234"
    ) {
      dispatch(login());
      navigate("/");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary-main">
          Login
        </h2>
        {error && (
          <div className="px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
            {error}
          </div>
        )}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-primary-main" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-primary-main placeholder:text-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-primary-main" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-primary-main placeholder:text-gray-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white rounded bg-primary-main hover:bg-gray-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-primary-main">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Need test login credentials?
        </p>
        <p style={{ fontSize: "1rem", color: "#666", fontStyle: "italic" }}>
          Check out{" "}
          <a
            href="/README.md"
            target="_blank"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            README.md
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default Login;
