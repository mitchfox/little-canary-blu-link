import { FaXing, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaYoutube, FaTiktok, FaAmazon, FaFacebook, FaLink,FaEtsy } from 'react-icons/fa';
import { SlSocialSpotify } from "react-icons/sl";
import { PiTiktokLogoLight,PiFacebookLogo ,PiPinterestLogo,PiGlobeSimple} from "react-icons/pi";


export function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaXing {...props} />;
}

export function InstagramIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaInstagram {...props} />;
}

export function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaGithub {...props} />;
}

export function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaLinkedin {...props} />;
}

export function WhatsAppIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaWhatsapp {...props} />;
}

export function ExternalLinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaLink {...props} />;
}

export function YouTubeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaYoutube {...props} />;
}

export function TikTokIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaTiktok {...props} />;
}

export function AmazonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaAmazon {...props} />;
}

export function FacebookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaFacebook {...props} />;
}

export function SpotifyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <SlSocialSpotify  {...props} />;
}
export function TiktokIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <PiTiktokLogoLight  {...props} />;
}
export function PiFacebookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <PiFacebookLogo  {...props} />;
}

export function PinterestIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <PiPinterestLogo  {...props} />;
}
export function EtsyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FaEtsy  {...props} />;
}
export function GlobeSimpleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <PiGlobeSimple  {...props} />;
}
