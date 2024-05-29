import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulario = ({ children, setIsLoading }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm("service_hzc93zi", "template_4re3fam", form.current, {
        publicKey: "MpSpXXtqhL_pl5ilL",
      });
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
