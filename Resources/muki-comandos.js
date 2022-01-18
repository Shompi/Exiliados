const Commands = [
  {
    name: "info server",
    description: "Muestra información general del servidor",
  },
  {
    name: "info user",
    description: "Muestra la información general de un usuario dentro del servidor, o cualquier usuario de Discord si se provee una Id",
  },
  {
    name: "info role",
    description: "Muestra información general de un Rol dentro de un servidor",
  },
  {
    name: "invite",
    description: "Enlace de invitación de Muki para que la puedas agregar a tu servidor",
  },
  {
    name: "moderacion timeout",
    description: "Comando de moderación para silenciar a miembros dentro del servidor",
  },
  {
    name: "moderacion anuncio",
    description: "Crea un Discord Embed con descripcion, color, titulo, etc, y lo envía a un canal que especifiques"
  },
  {
    name: "party",
    description: "Crea un grupo con la cantidad de miembros que especifiques"
  },
  {
    name: "roll",
    description: "Lanza un dado"
  },
  {
    name: "streams rol",
    description: "Configura un Rol de Streamer en el servidor"
  },
  {
    name: "streams canal",
    description: "Configura un canal para que se envien los mensajes de transmisiones en vivo"
  },
  {
    name: "streams habilitar",
    description: "Activa o desactiva los mensajes de streamings en vivo"
  }
]

export default Commands;