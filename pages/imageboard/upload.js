import Head from "next/head";
import { useState } from "react";

const disableButton = () => {
  const button = document.getElementById('submit-button');

  button.toggleAttribute('disabled');
  button.classList.remove(['hover:bg-blue-700']);
  button.classList.add(['text-neutral-500'])


  setTimeout(() => {
    button.toggleAttribute('disabled');
    button.classList.add(['hover:bg-blue-700'])
    button.classList.remove(['text-neutral-500'])
  }
    , 5000);
}

const previewFile = (event) => {
  const sizeErrorElement = document.getElementById('error-size');

  if (event.target.files[0].size >= 2_000_000) {  // 2Mb
    return sizeErrorElement.classList.remove(['hidden']);
  } else {
    sizeErrorElement.classList.add(['hidden']);
  }

  const file = event.target.files[0];

  const preview = document.querySelector('#preview');
  const reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

export default function UploadImage() {

  const [success, setSuccess] = useState("Esperando imagen...");

  const ParseFormData = async (event) => {
    event.preventDefault();
    if (event.target[2].files.length === 0) return;


    const name = event.target[0].value;
    const description = event.target[1].value;
    const imagen = event.target[2].files[0];

    const readFile = () => {
      return new Promise((r) => {
        const reader = new FileReader();

        reader.readAsDataURL(imagen);
        reader.onloadend = () => r(reader.result);
      })
    }

    const message = await fetch("/api/imageboard/upload", {
      method: 'POST', body: JSON.stringify({
        name,
        description,
        file: {
          name: imagen.name,
          type: imagen.type,
          data: await readFile(),
        }
      }), headers: { "Content-Type": "application/json" }
    }).then(response => response.json()).then(data => data.message);


    setSuccess(message);
  }

  return (
    <div className="flex flex-col pt-20 justify-center items-center gap-y-2">
      <Head>
        <title>Subir Imagen</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-6xl text-4xl pb-12">¡Sube tu imagen!</h1>
        <form
          onSubmit={ParseFormData}
          className="flex flex-col gap-y-2 justify-center items-center p-4 rounded-lg md:text-lg text-sm">
          <label htmlFor="file-name" className="self-start font-semibold">Nombre</label>
          <input
            required
            maxLength={30}
            id="file-name"
            className="p-2 text-white bg-black self-start w-full"
            size={40}>
          </input>

          <label htmlFor="file-description" className="self-start font-semibold">Descripción</label>
          <textarea
            maxLength={512}
            id="file-description"
            className="p-2 text-white bg-black self-start w-full"
            style={{ maxHeight: "200px", minHeight: "40px" }}>
          </textarea>

          <input
            className="w-full place-items-end"
            type="file"
            id="file" name="meme"
            accept="image/png, image/jpeg"
            onChange={previewFile}>
          </input>

          <button
            type="submit"
            id="submit-button"
            onClick={disableButton}
            className="rounded-full hover:bg-blue-700 py-1 px-4 font-bold border-2 border-blue-700">ENVIAR
          </button>
        </form>
      </div>

      <div id="information-container" className="flex flex-col gap-y-2">

        <div id="success" className="hidden">
          <h1 className="px-4 py-2 rounded-r-lg bg-green-100 border-l-4 border-green-700 text-green-700 md:text-lg text-sm">{success}</h1>
        </div>

        <div id="error-size" className="hidden">
          <h1 className="px-4 py-2 rounded-r-lg bg-red-100 border-l-4 border-red-500 text-red-800 md:text-lg text-sm">El peso de la imagen excede el máximo permitido.</h1>
        </div>

        <div id="error-dimensions" className="hidden">
          <h1 className="px-4 py-2 rounded-r-lg bg-red-100 border-l-4 border-red-500 text-red-800 md:text-lg text-sm">Las dimensiones de la imagen exceden el máximo permitido.</h1>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex justify-center w-1/2">
          <img id="preview" src="" height={512} alt="" className="object-contain"></img>
        </div>
      </div>
    </div>
  )
}