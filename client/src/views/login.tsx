export const LoginPage = () => {
  return (
    <div className="w-[520px] h-[556px] bg-[#1F2937] rounded-lg p-6">
      <h1 className="text-white text-[1.2rem] font-bold">Welcome back</h1>
      <div className="flex gap-6">
        <button className="w-full text-gray-400 border dark:border-gray-600 hover:dark:bg-gray-700 hover:text-white rounded-lg px-7 py-1">Login in with Google</button>
        <button className="w-full text-gray-400 border dark:border-gray-600 hover:dark:bg-gray-700 hover:text-white rounded-lg px-7 py-1">Login in with Linkedin</button>
      </div>
    </div>
  );
}