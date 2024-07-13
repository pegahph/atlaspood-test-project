const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary-main">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-primary-main" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-primary-main placeholder:text-gray-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-primary-main" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-primary-main placeholder:text-gray-600"
              placeholder="Enter your password"
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
    </div>
  );
};

export default Login;
