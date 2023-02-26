import { useFeature } from "../hooks/useFeature";
import IconGoogle from "../assets/iconGoogle.svg"
import IconLinkedin from "../assets/iconLinkedin.svg"
import { Button } from "../components/Button";
import { useState } from "react";
import { loginUser } from "../services/services";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  password: string;
}

export const LoginPage = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState<User>({ email: '', password: '' });

  const socialButtonStyle = "w-full flex flex-nowrap items-center justify-center gap-2 text-gray-400 border dark:border-gray-600 hover:dark:bg-gray-700 hover:text-white rounded-lg px-5 py-2"

  const {  isEnable } = useFeature()

  const handleButtonGoogle = () => {
    console.log('Botão google clicado!');
  };

  const handleButtonLinkedin = () => {
    console.log('Botão linkedin clicado!');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Se isEnable igual a true o endpoint fica https://bootcamp-api.vercel.app/v2/sessions
    // Se isEnable igual a false o endpoint fica https://bootcamp-api.vercel.app/sessions
    const value = isEnable("Aqui é passado o nome do parâmetro criado no remote config do firebase")
    const path = value ? "v2/sessions" : "sessions"

    const data = await loginUser({ payload: user, path})

    if(data.data.token) {
      navigate("/page-main")
    }

  };

  return (
    <div className="flex flex-col gap-5 w-[520px] h-[556px] bg-[#1F2937] rounded-lg p-6">
      <h1 className="text-white text-[1.2rem] font-bold">Welcome back</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Se isEnable igual a true exibe o botão */}
        {isEnable("Aqui é passado o nome do parâmetro criado no remote config do firebase") &&
          <Button
            text="Login with Google"
            pathIcon={IconGoogle}
            onClick={handleButtonGoogle}
            className={socialButtonStyle}
          />
        }

        <Button
          text="Login with Linkedin"
          pathIcon={IconLinkedin}
          onClick={handleButtonLinkedin}
          className={socialButtonStyle}
        />
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-2 dark:border-gray-600" />
        <span className="flex-shrink mx-4 text-[1.2rem] text-gray-400">or</span>
        <div className="flex-grow border-2 dark:border-gray-600" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
           type="email" id="email" value={user.email}
           onChange={(e) => setUser({ ...user, email: e.target.value })}
           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your email" required />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
           type="password" id="password" value={user.password}
           onChange={(e) => setUser({ ...user, password: e.target.value })}
           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <Button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          text="Login"
        />
      </form>
    </div>
  );
}