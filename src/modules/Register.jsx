import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { errorsForm } from "./components/handle-errors";

const Register = () => {

  const [confirmMessageSubmit, setConfirmMessageSubmit] = useState(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    defaultValues: {
      name: "Luis",
    }
  });

  const submitForm = handleSubmit((data) => {console.log(data); setConfirmMessageSubmit(true)});

  return (
    <form onSubmit={submitForm}>

      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        {...register("name", errorsForm.name)}
      />
      {
        errors.name && <span>{errors.name.message}</span>
      }


      <label htmlFor="lastname">Apellido</label>
      <input
        type="text"
        {...register("lastname", errorsForm.lastname)}
      />
      {
        errors.lastname && <span>{errors.lastname.message}</span>
      }


      <label htmlFor="user">Usuario</label>
      <input
        type="text"
        {...register("user", errorsForm.user)}
      />
      {
        errors.user && <span>{errors.user.message}</span>
      }


      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        {...register("password", errorsForm.password)}
      />
      {
        errors.password && <span>{errors.password.message}</span>
      }


      <label htmlFor="email">Email</label>
      <input
        type="text"
        {...register("email", errorsForm.email)}
      />
      {
        errors.email && <span>{errors.email.message}</span>
      }


      <label htmlFor="phone">Celular</label>
      <input
        type="text"
        {...register("phone", errorsForm.phone)}
      />
      {
        errors.phone && <span>{errors.phone.message}</span>
      }


      <label htmlFor="birth">Fecha de Nacimiento</label>
      <input
        type="date"
        {...register("birth", errorsForm.birth)}
      />
      {
        errors.birth && <span>{errors.birth.message}</span>
      }


      <label htmlFor="">País</label>
      <select
        {...register("country", errorsForm.country)}
      >
        <option value="pe">Perú</option> 
        <option value="br">Brasil</option>
        <option value="ar">Argentina</option>
        <option value="co">Colombia</option>
        <option value="ve">Venezuela</option>
      </select>
      {
        errors.country && <span>{errors.country.message}</span>
      }


      <label htmlFor="city">Ciudad</label>
      <input
        type="text"
        {...register("city", errorsForm.city)}
      />
      {
        errors.city && <span>{errors.city.message}</span>
      }


      <button>Enviar</button>
      <button onClick={() => {setConfirmMessageSubmit(false); reset()}} type="button">Limpiar formulario</button>

      {
        confirmMessageSubmit && <p className="messageCompleteForm">Completaste exitamente el formulario</p>
      }
    </form>
  );
};

export default Register;
