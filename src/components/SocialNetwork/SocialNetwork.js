"use client";

import "@/app/globals.css";
import { useEffect } from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    
  } from 'next-share'
  import { useRouter } from "next/router";
import Link from "next/link";

export default function SocialNetwork(props) {


  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Préparez-vous au succès!</h1>
      <p className="py-6">
      Partagez-la sur vos réseaux sociaux pour offrir à vos proches la chance de se préparer professionnellement. Rejoignez notre communauté et propagez l'excellence !
      </p>
      <div className="flex sm:flex-row flex-col justify-between m-20">
      <FacebookShareButton
  url={'https://github.com/next-share'}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>

<TelegramShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TelegramIcon size={32} round />
</TelegramShareButton>

<TwitterShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>

<WhatsappShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>

<LinkedinShareButton url={'https://github.com/next-share'}>
  <LinkedinIcon size={32} round />
</LinkedinShareButton>
      </div>
<div className="flex lg:flex-row flex-col">
<Link href="./" className="btn btn-neutral m-5">Quitter</Link>
      <button className="btn btn-primary m-5" onClick={()=>{props.setGoToSocial(false)}}>Retour</button>
</div>
    </div>
  </div>
</div>
  );
}
