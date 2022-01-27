export default function Discord() {
  return (
    <div className="flex pt-32 w-screen justify-between items-center">
      <div className="w-1/6"></div>
      <div className="flex flex-col gap-4 justify-around items-center w-4/6">
        <div className="flex w-full justify-center items-center">
          <h1 className="xl:text-6xl text-4xl text-center">¡Unete a nuestro Discord!</h1>
        </div>
        <iframe
          src="https://discord.com/widget?id=537484725896478733&theme=dark"
          width="300"
          height="500"
          allowtransparency="true"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
        </iframe>
      </div>
      <div className="w-1/6"></div>
    </div>
  )
}