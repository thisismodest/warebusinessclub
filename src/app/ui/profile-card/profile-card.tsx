"use server"

import styles from './profile-card.module.css';
import HeroIcon from '../hero-icon/hero-icon';
import Image from 'next/image';
import { getUserProfile } from "@/lib/user-data";

export default async function ProfileCard({ profileId }: { profileId: string }) {

  const details = await getUserProfile(profileId);

  const SocialsList = (props: any) => {
    const { socials } = props;

    const socialList = Object.keys(socials).map(social => {
      switch (social) {
        case 'facebook':
          return (
            <li>
              <a href={socials.facebook} target="_blank">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
              </a>
            </li>
          );
        case 'twitter':
          return (
            <li>
              <a href={socials.twitter} target="_blank">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
            </li>
          );
        case 'tiktok':
          return (
            <li>
              <a href={socials.tiktok} target="_blank">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
            </li>
          );
        case 'instagram':
          return (
            <li>
              <a href={socials.instagram} target="_blank">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
              </a>
            </li>
          );
      }
    });

    console.log(props.socials, { socialList });

    return socialList;
  }

  return (
    details ?
      <article className={styles.card}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            <Image width="160" height="160" className="profile-card__avatar--img" src={details?.image || "/img/placeholder-avatar.jpg"} alt={details?.name || "Mysterious business owner"} />
          </div>

          {details.name && <h1 className={styles.name}>{details.name}</h1>}

          <ul className={styles.details}>
            {
              details.businessName &&
              <li className={styles['detail-item']}>
                <HeroIcon size={5} icon="briefcase" />
                <p className={styles.business}>{details.businessName}</p>
              </li>
            }
            {
              details.phoneNumber &&
              <li className={styles['detail-item']}>
                <HeroIcon size={5} icon="phone" />
                <p className={styles.business}><a href="tel:">{details.phoneNumber}</a></p>
              </li>
            }
            {
              (details.businessEmail) &&
              <li className={styles['detail-item']}>
                <HeroIcon size={5} icon="email" />
                <p style={{ marginLeft: "0.1rem" }} className={styles.business}><a href="mailto:">{details.businessEmail}</a></p>
              </li>
            }
          </ul>

          {
            (details.website || details.socials) &&

            <ul className={styles['social-icons']}>
              {/* https://simpleicons.org/ */}
              {
                details.website &&
                <li>
                  <a href={details.website}>
                    <svg role="img" fill="none" viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </a>
                </li>
              }
              {
                details.socials && <SocialsList socials={details.socials} />
              }

            </ul>
          }
          {
            details.description &&
            <blockquote className={styles.quote}>
              <p>
                {details.description}
              </p>
            </blockquote>
          }
        </header>

        <section className={styles.highlights}>
          <div className={styles['highlight-card']}>
            <h2>I can advise on</h2>
            <ul>
              <li>Local coffee roasting</li>
              <li>Hiring staff</li>
              <li>Business rates</li>
              <li>Social media marketing</li>
            </ul>
          </div>
          <div className={styles['highlight-card']}>
            <h2>Help me with</h2>
            <ul>
              <li>Setting up my website</li>
              <li>Connecting with local businesses</li>
              <li>Content creation</li>
            </ul>
          </div>
          <div className={styles['highlight-card']}>
            <h2>We can offer</h2>
            <ul>
              <li>Wholesale coffee</li>
              <li>An venue for the evening</li>
              <li>Catering for company meetings</li>
            </ul>
          </div>

        </section>
        <section>
          <iframe className={styles.map} src={details.businessMap || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19734.200498558825!2d-0.03848605!3d51.810270599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8821561722129%3A0x341d9150b6621ddd!2sWare!5e0!3m2!1sen!2suk!4v1725457566616!5m2!1sen!2suk"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {
            details.businessLoc &&
            <div className={styles.address}>
              <HeroIcon size={5} icon="storefront" />
              <address className={styles.business}>{details.businessLoc}</address>
            </div>
          }
        </section>
      </article>
      :
      <div style={{ textAlign: "center", marginTop: "6rem" }}>Profile not found</div>
  )
}