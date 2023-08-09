import { Inputs } from "../Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPasswordLogin";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const submitLoginForm = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitLoginForm)}>
      <Inputs
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <div>
        <button type="submit">Entrar</button>
      </div>
      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </form>
  );
};
