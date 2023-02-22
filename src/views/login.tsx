import { useFeature } from "../hooks/useFeature";
import IconGoogle from "../assets/iconGoogle.svg"
import IconLinkedin from "../assets/iconLinkedin.svg"


export const LoginPage = () => {

  const {  isEnable } = useFeature()

  return (
    <div className="flex flex-col gap-5 w-[520px] h-[556px] bg-[#1F2937] rounded-lg p-6">
      <h1 className="text-white text-[1.2rem] font-bold">Welcome back</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {isEnable("new_API_login") && <button className="w-full flex flex-nowrap items-center justify-center gap-2 text-gray-400 border dark:border-gray-600 hover:dark:bg-gray-700 hover:text-white rounded-lg px-5 py-2">
          <img src={IconGoogle} alt="Google Icon" />
          Login with Google
        </button>}

        <button className="w-full flex flex-nowrap items-center justify-center gap-2 text-gray-400 border dark:border-gray-600 hover:dark:bg-gray-700 hover:text-white rounded-lg px-5 py-2">
          <img src={IconLinkedin} alt="Linkedin Icon" />
          Login with Linkedin
        </button>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-2 dark:border-gray-600" />
        <span className="flex-shrink mx-4 text-[1.2rem] text-gray-400">or</span>
        <div className="flex-grow border-2 dark:border-gray-600" />
      </div>

      <form>
        <div className="mb-8">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your email" required />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account Or Login</button>
      </form>
    </div>
  );
}