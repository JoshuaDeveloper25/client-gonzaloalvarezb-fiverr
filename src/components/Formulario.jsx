import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Formulario = ({ children, setIsLoading }) => {
  const form = useRef();

  // Set the URL in a hidden input field
  useEffect(() => {
    if (form.current) {
      form.current.querySelector('input[name="from_url"]').value =
        window.location.href;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
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
      {/* Hidden input field to capture the URL */}
      <input type="hidden" name="from_url" value="" />
      {children}
    </form>
  );
};

export default Formulario;
