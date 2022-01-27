import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Guild from "../Components/Guild";
import Commands from "../public/muki-comandos.json"

export async function getServerSideProps(context) {

  let guilds = await fetch("http://localhost:3000/api/muki/guilds").then(response => response.json()).then(data => data.guilds);

  if (!(guilds instanceof Array))
    guilds = [];

  return {
    props: {
      commands: Commands,
      guilds,
    }
  }
}

export default function Muki({ commands, guilds }) {

  return (
    <>
      <Head>
        <title>Muki</title>
        <link rel="icon" href="/Muki.png"></link>
      </Head>
      <div className="flex flex-col gap-y-96 pt-52 h-screen text-center">
        <div className="flex flex-col h-screen">
          <div id="muki-title" className="flex gap-4 place-content-center pb-12">
            <div className="relative w-[124px] h-[124px] rounded-full overflow-hidden">
              <Image
                src={"/Muki.png"}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-6xl place-self-center">Muki<span className="text-neutral-500">#6752</span></div>
          </div>
          <p className="xl:text-xl lg:text-lg text-base">
            Muki es mi primer bot que hice para Discord, desarrollada en Javascript con la librería <Link href="https://discord.js.org"><a className="text-blue-500 hover:underline">Discord.js</a></Link>
            <br></br>Se puede decir que es mi primer proyecto de programación que realicé de forma autónoma y seria.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="xl:text-6xl lg:text-4xl text-2xl py-8">Comandos de Slash</p>
          <div id="commands-container" className="px-4">
            <div className="bg-black rounded-md">
              <div className="grid grid-cols-1">
                {commands.map(command => (
                  <div className="flex p-2 my-2" key={Math.random()}>
                    <div className="xl:text-xl lg:text-lg text-sm w-2/6 mr-4 font-semibold">/{command.name}</div>
                    <div className="xl:text-lg lg:text-md lg:font-medium font-light text-sm  w-4/6 border-l-2 border-blue-700 text-left pl-4">{command.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-screen justify-center items-center">
          <p className="text-5xl pb-8 w-1/3">Guilds</p>
          <div id="guilds-container" className="px-4">
            <div className="flex flex-wrap gap-4 bg-black place-content-evenly p-4 rounded-md">
                {
                  guilds.map(guild =>
                    <Guild key={Math.random()}
                      name={guild.name}
                      memberCount={guild.memberCount}
                      channelCount={guild.channelCount}
                      iconURL={guild.iconURL}
                      ownerTag={guild.ownerTag}
                      ownerAvatar={guild.ownerAvatar}
                    />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}