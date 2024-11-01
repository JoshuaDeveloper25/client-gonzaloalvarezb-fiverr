import surAtlantidaLogo from "../../images/logo-atlantida.png";
import { useMutation } from "@tanstack/react-query";
import AppContext from "../../context/AppProvider";
import { toast } from "react-toastify";
import { useContext } from "react";
import axios from "axios";

const Form = () => {
  const { setUserInfo } = useContext(AppContext);

  const logginMutation = useMutation({
    mutationFn: async (userInfo) =>
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userInfo
      ),
    onSuccess: (res) => {
      console.log(res);
      setUserInfo(res?.data);
      localStorage.setItem("userInfo", JSON.stringify(res?.data));
    },
    onError: (err) => {
      toast.error(err.response.data.message)
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      email: e?.target?.username?.value,
      password: e?.target?.password?.value,
    };

    if (!userInfo.email || !userInfo?.password) {
      return toast.error("Llena los espacios disponibles!");
    }

    logginMutation.mutate(userInfo);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-primary-color shadow-xl rounded-md px-8 py-16 max-w-3xl mx-auto"
    >
      <div className="max-w-xl mx-auto">
        <h4 className="text-primary-color uppercase text-xl">
          Iniciar sesión <span className="font-semibold">admin</span>
        </h4>

        <img
          className="w-96 my-1.5"
          src={surAtlantidaLogo}
          loading="lazy"
          decoding="async"
        />

        <div className="mt-5">
          <input
            className="outline-none py-2.5 px-3 rounded-md w-full bg-[#EFEFEF] mb-5"
            placeholder="Usuario"
            type="text"
            name="username"
            id="username"
          />

          <input
            className="outline-none py-2.5 px-3 rounded-md w-full bg-[#EFEFEF]"
            placeholder="Contraseña"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          disabled={logginMutation?.isPending}
          className="btn-normal button-red-primary w-full mt-5 disabled:bg-red-300"
        >
          {logginMutation?.isPending ? (
            <span className="flex justify-center gap-3 font-semibold">
              {" "}
              <svg
                aria-hidden="true"
                className="w-6 h-6 my-auto text-gray-200 animate-spin dark:text-gray-100 fill-primary-color"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span>Enviando...</span>
            </span>
          ) : (
            "Entrar"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
