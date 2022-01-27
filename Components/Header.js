import Link from "next/link";

const showDropdown = () => {
  document.getElementById('dropdown').toggleAttribute('hidden');
}

export default function Header() {

  return (
    <header className="fixed bg-black w-full h-12 px-4 border-b-2 border-blue-700">
      <div className="flex md:px-16 px-2 h-full w-full justify-between items-center">
        <Link href="/"><h1 className="text-4xl hover:cursor-pointer">Exiliados</h1></Link>

        <ul className="md:flex hidden gap-x-4 md:text-xl text-lg list-none">
          <Link href="/muki"><a>Muki</a></Link>
          <Link href="/discord"><a>Discord</a></Link>
          <Link href="/memes"><a>Memes</a></Link>
          <Link href="/about"><a>Acerca de</a></Link>
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
              <Link href="/muki"><a className="pl-4 py-2 w-full hover:bg-blue-700">Muki</a></Link>
              <Link href="/discord"><a className="pl-4 py-2 w-full hover:bg-blue-700">Discord</a></Link>
              <Link href="/memes"><a className="pl-4 py-2 w-full hover:bg-blue-700" >Memes</a></Link>
              <Link href="/about"><a className="pl-4 py-2 w-full hover:bg-blue-700">Acerca de</a></Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}