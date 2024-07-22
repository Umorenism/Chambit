export const Signup = () => {
  return (
    <div className=" flex justify-center items-center py-20 px-4">
      <div className="mb-20">
        <div>Logo</div>
        <h1 className="text-2xl mt-2 font-bold">Create your Account</h1>
        <p className="py-2">
          Login to your account by entering your email and <br /> Password
        </p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className=" w-full py-2 rounded-md
                border 
                p-2
                outline-none hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className=" w-full py-2 rounded-md
                border 
                p-2
                outline-none hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className=" w-full py-2 rounded-md
                border 
                p-2
                outline-none hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="UserName"
              className=" w-full py-2 rounded-md
                border 
                p-2
                outline-none hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Phone Number"
              className=" w-full py-2 rounded-md
                border 
                p-2
                outline-none hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <p className="py-2">Country</p>
            <input
              type="text"
              className=" w-full py-2 rounded-md
                border 
                p-2
                outline-none hover:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Password"
              className=" w-full py-2 rounded-md
                border 
                p-2
                outline-none hover:border-blue-400"
            />
          </div>
          <div className="flex justify-center items-center gap-4 px-2 mb-2">
            <input
              type="checkbox"
              className="flex justify-center h-5 w-5
              "
            />
            <span className="text-sm w-full">
              by registering you have agree to our Terms and privacy <br />
              policy
              <span className="text-blue-500 underline">
                see privacy.policy
              </span>
            </span>
          </div>
          <button className="w-full bg-blue-600  rounded-lg py-2 mb-2 text-xl text-white font-bold">
            Create Account
          </button>
          <p className="py-2  text-center">
            Already have an account?<a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};
