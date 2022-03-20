import Link from "next/link";

const showDropdown = () => {
  document.getElementById('dropdown').toggleAttribute('hidden');
}



export default function Header() {

  const Links = [
    { name: "Fuyumi", ref: "/fuyumi" },
    { name: "Imágenes", ref: "/imageboard" },
    { name: "Discord", ref: "/discord" },
    { name: "Acerca de", ref: "/about" }
  ]


  return (
    <header className="fixed bg-black w-full h-12 px-4 border-b-2 border-blue-700 z-50">
      <div className="flex md:px-16 px-2 h-full w-full justify-between items-center">
        <Link href="/"><h1 className="text-4xl hover:cursor-pointer">Exiliados</h1></Link>

        <ul className="md:flex hidden gap-x-1 md:text-xl text-lg list-none">
          {
            Links.map(link => {
              return (
                <li key={Math.random()}>
                  <Link href={link.ref}><a className="hover:bg-blue-700 px-2 py-2 rounded-md">{link.name}</a></Link>
                </li>
              )
            })}
        </ul>

        <div className="md:hidden absolute right-1 top-0">
          <button className="md:hidden pb-3" id="dropdownButton">
            <img
              src="/header-arrow.png" width={44} height={44}
              onClick={showDropdown}
              className="rotate-180"
            ></img>
          </button>

          <div id="dropdown" hidden className="absolute right-1 w-36 rounded-lg bg-black border-2 border-blue-700">
            <ul onClick={showDropdown} className="flex flex-col font-semibold">
              {Links.map(link => {
                return (
                  <li key={Math.random()}>
                    <Link href={link.ref}><a className="hover:bg-blue-700 px-2 py-2 rounded-md">{link.name}</a></Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}