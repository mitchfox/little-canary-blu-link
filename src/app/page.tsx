'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  AmazonIcon,
} from '@/components/SocialIcons'
import { Satisfy } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import WithMeLogo from '@/images/photos/withmelogo.png'
import Littlecanaryblu_img from '../images/photos/Littlecanaryblu_img.jpg'
import Snapchat_img from '../images/photos/snapchat_img.webp'
import Coffee_img from '../images/photos/coffee_img.webp'
import { FaSnapchat } from 'react-icons/fa'
import { BiDollarCircle } from "react-icons/bi";
import { RiTelegramLine, RiTwitterXFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 transform p-1 transition-transform hover:scale-110"
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-purple-300 transition group-hover:fill-purple-400" />
    </Link>
  )
}

function LinkBox({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  href: string
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl border border-purple-800/40 bg-gray-800/70 p-2 backdrop-blur-sm transition-colors hover:bg-gray-700/80 hover:border-purple-600/60"
    >
      <div className="flex flex-1 items-center gap-4">
        {image ? (
          <div className="aspect-square h-12 w-12 min-w-[3rem] overflow-hidden rounded-xl border border-purple-900/30">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ) : (
          Icon && (
            <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl bg-gray-700/60 p-2 border border-purple-900/30">
              <Icon className="h-6 w-6 text-purple-300" />
            </div>
          )
        )}
        <div className="text-left">
          <h2 className="pr-6 text-xs font-bold text-purple-200">{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-gray-300/80">{description}</p>
          )}
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-purple-400/70"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  )
}

export default function Home() {
  const socialLinks = [
    {
      href: 'https://instagram.com/littlecanaryblu',
      icon: InstagramIcon,
    },
    {
      href: 'https://snapchat.com/t/TKqpLwhZ',
      icon: FaSnapchat,
    },
    {
      href: 'https://amazon.com/shop/littlecanaryblu',
      icon: AmazonIcon,
    },
    {
      href: 'https://x.com/littlecanaryblu',
      icon: RiTwitterXFill,
    },
    {
      href: 'https://cash.app/$Canaryblu',
      icon: BiDollarCircle,
    },
    {
      href: 'https://t.me/canaryblu',
      icon: RiTelegramLine,
    },
  ]

  const linksData = [
    {
      title: 'Courtney on Snapchat',
      description: '',
      href: 'https://snapchat.com/t/QBdqBrts',
      image: Snapchat_img,
      icon: null,
    },
    {
      title: 'Twitter',
      description: '',
      href: 'https://mobile.twitter.com/LittleCanaryblu',
      image: null,
      icon: FiTwitter,
    },
    {
      title: 'Amazon Store',
      description: '',
      href: 'https://www.amazon.com/shop/littlecanaryblu?ref_=cm_sw_r_apin_aipsfshop_aipsflittlecanaryblu_MS3VH0BHMK3V2TGJZS9D&language=en_US',
      image: null,
      icon: AmazonIcon,
    },
    {
      title: 'Instagram',
      description: '',
      href: 'http://www.instagram.com/littlecanaryblu',
      image: null,
      icon: InstagramIcon,
    },
    {
      title: 'Cash App',
      description: '',
      href: 'https://cash.app/$Canaryblu',
      image: null,
      icon: BiDollarCircle,
    },
    {
      title: 'Premium Adaptogenic Mushroom Coffee',
      description: 'Everyday Dose Premium Adaptogenic Mushroom Coffee with Grass-Fed Collagen, Chaga, Lions Mane & L-Theanine for Better Focus, Energy, Digestion, Skin, and Immunity 30 Servings',
      href: 'https://r.amzlink.to/?btn_url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB0B53Y7Z7D%3Ftag%3Dlinktree02e-20%26linkCode%3Dogi%26th%3D1%26psc%3D1&btn_ref=org-433bb393e1b8b503',
      image: Coffee_img,
      icon: null,
    },
    {
      title: 'WithMe',
      description: '',
      href: 'https://withme.so/Littlecanaryblu',
      image: WithMeLogo,
      icon: null,
    },
  ]

  return (
    <>
      <Container className="flex-1 bg-gradient-to-b from-gray-900 via-gray-900 to-black pb-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30dvh] sm:hidden"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 0.8) 50%, rgba(17, 24, 39, 0.95) 75%, rgb(17, 24, 39) 100%)',
                }}
              />
              <div className="mx-auto h-[52dvh] w-full sm:mt-12 sm:h-48 sm:w-40 md:h-72 md:w-64">
                <img
                  src={Littlecanaryblu_img.src}
                  alt="Founders"
                  className="h-full w-full object-cover sm:object-cover object-top sm:rounded-3xl border-2 border-purple-800/30"
                />
              </div>
            </div>

            <div className="relative z-30">
              <h1
                className={`${satisfy.className} -mt-16 mb-4 text-4xl leading-none text-purple-300 sm:mt-6 sm:text-5xl`}
              >
                Canaryblu
              </h1>
              <p className="mb-8 px-6 text-sm text-gray-300/80">
                Critical Care | Creator | Mom
              </p>

              <div className="mb-12 flex justify-center gap-6">
                {socialLinks.map(({ href, icon: Icon }) => (
                  <SocialLink key={href} href={href} icon={Icon} />
                ))}
              </div>

              <div className="space-y-4 px-4">
                {linksData.map(({ title, description, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    {...(icon ? { icon } : {})}
                    {...(image ? { image: image.src } : {})}
                  />
                ))}
              </div>
              <div className="mt-10">
                <FreeTrialBanner />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}