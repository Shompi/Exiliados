import Head from "next/head"
import Image from "next/image"
const image = "https://media.discordapp.net/attachments/806268687333457920/930255287582093312/Screenshot_20220110-212149_Instagram.png?width=701&height=701";

export default function NotFound() {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <div className="grid columns-1 items-center justify-center w-screen h-screen">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full"
            width="80"
            height="80"
            src={image}
            alt=""
          />
          <div className="text-xl border-l-2 pl-4 border-blue-700 grid columns-1 text-center">
            <b className="text-6xl pb-2">404</b>Recurso no encontrado
          </div>
        </div>
      </div>
    </div>
  )
}