import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Guild from "../Components/Guild";
import Commands from "../public/fuyumi-comandos.json"
import GuildModel from "../Schemas/Guild.js"

export async function getServerSideProps(context) {
  const guilds = await GuildModel.find();

  return {
    props: {
      commands: Commands,
      guilds: guilds.map(guild => ({ id: guild.id, name: guild.name, iconURL: guild.iconURL, memberCount: guild.memberCount })),
      botInvite: "https://discord.com/api/oauth2/authorize?client_id=552272683543560194&scope=bot+applications.commands&permissions=1513174985846"
    }
  }
}

export default function Fuyumi({ botInvite, commands, guilds }) {

  return (
    <div className="flex flex-col justify-center items-center px-2">
      <Head>
        <title>Fuyumi</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Bot de Discord con comandos de moderación, fun y más!" />
        <meta name="keywords" content="Bot, Discord, Moderación, Fun" />
        <meta name="author" content="ShompiFlen" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/Fuyumi.png" />
        <link rel="icon" href="/Fuyumi.png"></link>
      </Head>
      <div className="flex flex-col h-screen items-center justify-center">
        <div id="Fuyumi-title">
          <a href={botInvite} className="flex gap-4 place-content-center pb-12 hover:cursor-pointer">
            <div className="relative w-[124px] h-[124px] rounded-full overflow-hidden">
              <Image
                src={"/fuyumi.png"}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative flex flex-col justify-center items-center">
              <div className="text-6xl place-self-center hover:underline">Fuyumi<span className="text-neutral-500">#2289</span></div>
              <p className="absolute bottom-0 text-xs self-start text-neutral-500">Art: DoremiZH#2830</p>
            </div>
          </a>
        </div>
        <p className="xl:text-xl lg:text-lg text-center">
          Fuyumi es mi primer bot que hice para Discord, desarrollada en Javascript con la librería <Link href="https://discord.js.org"><span className="hover:cursor-pointer text-blue-500 hover:underline">Discord.js</span></Link>
          <br></br>Se puede decir que es mi primer proyecto de programación que realicé de forma autónoma y seria.
        </p>
      </div>

      <div className="flex w-full gap-x-10">
        <div className="flex flex-col w-full justify-center items-center">
          <p className="md:text-4xl text-xl pb-8">Comandos de Slash</p>
          <div id="commands-container">
            <div className="bg-black rounded-md border-b-2 border-blue-700">
              <div className="flex flex-col px-2">
                {commands.map(command => (
                  <div className="flex p-2 my-2" key={Math.random()}>
                    <div className="md:text-lg text-sm w-1/4 font-semibold">/{command.name}</div>
                    <div className="md:text-base font-normal text-sm  w-4/6 border-l-2 border-blue-700 text-left pl-4">{command.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl py-32">Guilds</p>
        <div id="guilds-container" className="px-4 pb-32">
          <div className="flex flex-wrap gap-4 bg-black place-content-evenly p-4 rounded-md border-b-2 border-blue-700">
            {guilds.length ?
              guilds.map(guild =>
                <Guild key={Math.random()}
                  name={guild.name}
                  memberCount={guild.memberCount}
                  channelCount={guild.channelCount}
                  iconURL={guild.iconURL}
                  ownerTag={guild.ownerTag}
                  ownerAvatar={guild.ownerAvatar}
                />)
              : "No se recibieron Guilds desde la API..."}
          </div>
        </div>
      </div>

    </div>
  )
}