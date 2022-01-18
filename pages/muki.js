import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Guild from "../Components/Guild";
import Header from "../Components/Header";

const commandsAPI = "http://localhost:3000/api/muki/commands"
const guildsAPI = "http://localhost:3000/api/muki/guilds"

export async function getStaticProps(context) {
  const commands = await fetch(commandsAPI).then(response => response.json());
  const guilds = await fetch(guildsAPI).then(response => response.json()).then(data => data.guilds) ?? [];

  return {
    props: {
      commands,
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
      <div className="grid grid-cols-1 pt-24 h-screen mx-32 text-center">
        <div>
          <div id="muki-title" className="flex gap-4 place-content-center">
            <div className="w-[124px] h-[124px] pt-1 rounded-full overflow-hidden">
              <Image
                src={"/Muki.png"}
                height={224}
                width={259}
              />
            </div>
            <div className="text-6xl place-self-center">Muki<span className="text-neutral-500">#6752</span></div>
          </div>
          <p className="text-xl">
            Muki es mi primer bot que hice para Discord, desarrollada en Javascript con la librería <Link href="https://discord.js.org"><a className="text-blue-500 hover:underline">Discord.js</a></Link>
            <br></br>Se puede decir que es mi primer proyecto de programación que realicé de forma autónoma y seria.
          </p>
          <div className="text-5xl pt-32 pb-8">Comandos de Slash</div>
          <div id="commands-container" className="flex">
            <div className="bg-black rounded-md w-full">
              <div className="grid grid-cols-1">
                {commands.map(command => (
                  <div className="flex p-2 my-2">
                    <div className="w-1/6 mr-4 font-semibold">/{command.name}</div>
                    <div className="w-5/6 border-l-2 border-blue-700 text-left pl-4">{command.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-5xl pt-32 pb-8">Guilds</p>
          <div id="guilds-container" className="py-2">
            <div>
              <div className="flex flex-wrap gap-2
              bg-black place-content-evenly p-4 rounded-md">
                {
                  guilds.map(guild =>
                    <Guild
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
      </div>
    </>
  )
}