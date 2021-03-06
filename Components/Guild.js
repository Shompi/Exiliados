import Image from "next/image"

export default function Guild({ ownerTag, memberCount, channelCount, iconURL, name, ownerAvatar }) {
  return (
    <div id="guild-card" className="flex flex-col w-36 justify-center items-center">
      <div id="guild-image">
        <Image
          src={iconURL}
          alt={""}
          layout="fixed"
          width={128}
          height={128}
          className="rounded-full" />
      </div>
      <div id="guild-name">
        <h1 className="font-light text-center break-normal">{name}</h1>
      </div>
    </div>
  )
}