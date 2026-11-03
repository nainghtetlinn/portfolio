import env from "./env";

export const siteConfig = {
  title: "Naing Htet Linn",
  description:
    "my personal portfolio website showcasing projects, skills, and other cool stuffs",
  url: env.NEXT_PUBLIC_APP_URL,
  twitter: `https://x.com/${env.NEXT_PUBLIC_TWITTER_USERNAME}`,
  linkedin: `https://www.linkedin.com/in/${env.NEXT_PUBLIC_LINKEDIN_USERNAME}`,
  github: `https://github.com/${env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  email: env.NEXT_PUBLIC_EMAIL_ADDRESS,
  telegram: `https://t.me/${env.NEXT_PUBLIC_TELEGRAM_USERNAME}`,
};
