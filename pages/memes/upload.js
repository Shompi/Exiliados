const previewFile = (event) => {

  const fileSize = event.target.size;

  if (fileSize > 1000) {

  }
  const file = event.target.files[0];

  const preview = document.querySelector('img');
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

export default function UploadMeme() {

  const ParseFormData = async (event) => {
    event.preventDefault();

    console.log(event.target[2].files[0]);

    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

    const name = event.target[0].value;
    const description = event.target[1].value;
    const file = event.target[2].files[0];

    const base64 = await toBase64(file);

    await fetch("/api/memes/upload", { method: 'POST', body: JSON.stringify({ name, description, file: base64 }), headers: { "Content-Type": "application/json" } });
  }

  return (
    <div className="pt-20">
      <div className="flex flex-col justify-center items-center mx-32">
        <h1 className="text-6xl pb-16">¡Sube tu Meme!</h1>
        <div id="upload-container" className="bg-black rounded-lg p-4">
          <form
            onSubmit={ParseFormData}
            className="flex flex-col gap-2 justify-center items-center">

            <label htmlFor="file-name" className="self-start font-semibold">Nombre</label>
            <input
              required
              maxLength={30}
              id="file-name"
              className="p-2 text-white bg-neutral-700"
              size={64}>
            </input>

            <label htmlFor="file-description" className="self-start font-semibold">Descripción</label>
            <textarea
              maxLength={512}
              id="file-description"
              className="p-2 text-white bg-neutral-700 self-start w-full"
              style={{ maxHeight: "200px" }}>
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
              onClick={() => {

                if (document.getElementById('submit-button').attributes.getNamedItem('disabled'))
                  return;

                document.getElementById('submit-button').toggleAttribute('disabled');
              }}
              className="w-52 bg-blue-700 rounded-lg px-4 py-1">ENVIAR
            </button>
          </form>
        </div>
        <div className="pt-4 flex flex-col gap-2 place-items-center">
          <div id="error-size" hidden>
            <h1 className="text-red-500 text-lg">El tamaño del archivo excede el máximo permitido.</h1>
          </div>
          <label htmlFor="preview" className="font-bold text-xl">Vista previa</label>
          <div className="p-2 border-2 border-blue-700 rounded-lg">
            <img id="preview" src="" height={512} alt="" className=""></img>
          </div>
        </div>
      </div>
    </div >
  )
}