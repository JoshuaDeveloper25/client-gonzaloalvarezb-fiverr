import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Formulario = ({ children, setIsLoading }) => {
  const navigate = useNavigate();
  const form = useRef();

  // Hacer que la url aparezca en un input oculto
  useEffect(() => {
    if (form.current) {
      form.current.querySelector('input[name="from_url"]').value =
        window.location.href;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!form.current) {
      return toast.error("¡Llena los espacios en blanco!");
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      console.log("SUCCESS!");
      navigate("/correo-enviado-exitosamente");
    } catch (error) {
      console.log("FAILED...", error?.text);
      toast.error(error?.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-5">
      {/* Input oculto para capturar la url */}
      <input type="hidden" name="from_url" value="" />
      {children}
    </form>
  );
};

export default Formulario;
