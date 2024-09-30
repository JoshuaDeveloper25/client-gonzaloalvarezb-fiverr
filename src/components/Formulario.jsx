import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulario = ({ children, setIsLoading }) => {
  console.log(import.meta.env.VITE_PUBLIC_KEY);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );
      console.log("SUCCESS!");
      setIsLoading(true);
    } catch (error) {
      console.log("FAILED...", error?.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-5">
      {children}
    </form>
  );
};

export default Formulario;
