'use client'
import { Card, CardBody, Image, Link } from "@nextui-org/react"
import NextImage from 'next/image'
import tumblrIcon from '../public/images/tumblr.svg'
import githubIcon from '../public/images/github.svg'
import twitterIcon from '../public/images/twitter.svg'
import blueskyIcon from '../public/images/bluesky.svg'
import LinkTreeCard from "./components/LinkTreeCard"
import lapAvatar from '../public/images/lap-ava.jpg'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center dark mt-8 lg:mx-[30%] mx-[10%]">
      <Image
        as={NextImage}
        src="/images/lap-ava.jpg"
        width={256}
        height={256}
        isBlurred
      />
      <h1 className="text-4xl font-bold pb-4">Raccoon Bees!</h1>
      <LinkTreeCard
        icon={twitterIcon}
        destination="https://twitter.com/RaccoonLaprau"
        text="Twitter"
        fillColor="fill-primary-400"
      />
      <LinkTreeCard
        icon={tumblrIcon}
        destination="https://laprau.tumblr.com/"
        text="Tumblr"
      />
      <LinkTreeCard
        icon={blueskyIcon}
        destination="https://bsky.app/profile/laprau.raccoons.buzz"
        text="Blue Sky"
        fillColor="fill-yellow-400"
      />
    </div>
  )
}