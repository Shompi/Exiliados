import Link from "next/link";

export default function Memes() {
  return (
    <>
      <div id="memes-container" className="flex flex-col items-center justify-around">

        <div id="center-container" className="pt-16">
          Vayanse pa la verga
        </div>
      </div>

      <Link href={"/memes/upload"}>
        <button
          className="fixed flex 
            justify-center
            pt-2
            bg-blue-700 
            rounded-full 
            text-4xl h-16 w-16
            right-12
            bottom-10">
          +
        </button>
      </Link>
    </>
  )
}