export default function ImageCard({ sample_url, tags, id, score }) {

  return (

    <div className="relative flex h-full w-full items-end" style={{ backgroundImage: "url(" + sample_url + ")", backgroundSize: "cover" }}>
      <div className="flex w-full justify-around h-1/4 bg-black opacity-50"></div>
      <div className="absolute flex flex-col text-sm h-1/4 justify-around w-full">
        <h1 className="text-neutral-300">ID: {id}</h1>
        <h1 className="text-neutral-300">Tags: {tags}</h1>
        <h1 className="text-neutral-300">Score: {score}</h1>
      </div>
    </div>
  )
}