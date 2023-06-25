"use client";

import "@/app/globals.css";
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

import Link from "next/link";

export default function SocialNetwork(props) {


  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{props.isPremium?"C'est fini 🥳":"Préparez-vous au succès!"}</h1>
      <p className="py-6">
      Partagez notre simulateur sur vos réseaux sociaux pour offrir à vos proches la chance de se préparer professionnellement. Rejoignez notre communauté et propagez l'excellence !
      </p>
      <div className="flex sm:flex-row flex-col justify-between m-20">
      <FacebookShareButton
  url={'https://github.com/next-share'}
  quote={'Ajiratomo - Un simulateur d entretien amusant !'}
  hashtag={'#ajiratomo #entretien #simulateur'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>

<TelegramShareButton
  url={'https://github.com/next-share'}
  title={'Ajiratomo - Un simulateur d entretien amusant !'}
>
  <TelegramIcon size={32} round />
</TelegramShareButton>

<TwitterShareButton
  url={'https://github.com/next-share'}
  title={'Ajiratomo - Un simulateur d entretien amusant !'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>

<WhatsappShareButton
  url={'https://github.com/next-share'}
  title={'Ajiratomo - Un simulateur d entretien amusant !'}
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
      {(!props.isPremium) && <button className="btn btn-primary m-5" onClick={()=>{props.setGoToSocial(false)}}>Retour</button>}
</div>
    </div>
  </div>
</div>
  );
}
