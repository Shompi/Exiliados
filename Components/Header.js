import Link from "next/link"

export default function Header() {
  return (
    <header className="absolute flex">
      <div className="border-b-2 border-b-neutral-800 flex items-center justify-between mx-auto py-3 px-32 w-screen">
        <Link href="/">
          <h1 className="text-4xl hover:cursor-pointer">Exiliados</h1>
        </Link>
        <ul className="flex items-center list-none text-xl">
          <li className="ml-4">
            <Link href="muki"><a>Muki</a></Link>
          </li>
          <li className="ml-4">
            <Link href="https://discord.gg/RdTUgqT"><a>Discord</a></Link>
          </li>
          <li className="ml-4">
            <Link href="about"><a>Acerca de</a></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}