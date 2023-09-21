export const errorsForm = {
  name: {
    required: { 
      value: true,
      message: "El nombre es requerido"
    },
    minLength: {
      value: 2,
      message: "Se requiere un mínimo de 2 caracteres para el nombre",
    },
    maxLength: {
      value: 20,
      message: "El máximo de caracteres permitidos es de 20",
    },
  },
  lastname: {
    required: { 
      value: true,
      message: "Los apellidos son requerido"
    },
    minLength: {
      value: 2,
      message: "Se requiere un mínimo de 2 caracteres",
    },
    maxLength: {
      value: 20,
      message: "El máximo de caracteres permitidos es de 30",
    },
  },
  user: {
    required: { 
      value: true,
      message: "El usuario es requerido"
    },
  },
  password: {
    required: { 
      value: true,
      message: "El password es requerido"
    }
  },
  email: {
    required: {
      value: true,
      message: "El correo es requerido"
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    }
  },
  phone: {
    required: { 
      value: true,
      message: "El número celular es requerido"
    },
  },
  birth: {
    required: {
      value: true,
      message: "fecha de nacimiento es requerida"
    },
    validate: (data) => {
      const fechaActual = new Date()
      const fechaDeNacimeinto = new Date(data)
      const isVerifyOld = (fechaActual.getFullYear()*12 + fechaActual.getMonth()) - (fechaDeNacimeinto.getFullYear()*12 + fechaDeNacimeinto.getMonth())

      return isVerifyOld >= 18 || "Debe ser mayor de edad"
    }
  },
  country: {
    required: {
      value: true,
      message: "El país es requerido"
    }
  },
  city: {
    required: {
      value: true,
      message: "La cuidad es requerida"
    }
  } 
  
}