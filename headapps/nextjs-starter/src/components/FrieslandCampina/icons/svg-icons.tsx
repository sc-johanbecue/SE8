// This file contains individual React components for each SVG icon from the sprite.
// This avoids the use of xlink:href which is deprecated.

import React from 'react';

export function IconArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7c0-.473.384-.857.857-.857h22.286a.857.857 0 1 1 0 1.714H.857A.857.857 0 0 1 0 7Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.464.394a.857.857 0 0 1 0 1.212L2.07 7l5.394 5.394a.857.857 0 0 1-1.213 1.212l-6-6a.857.857 0 0 1 0-1.212l6-6a.857.857 0 0 1 1.213 0Z"
      ></path>
    </svg>
  );
}

export function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 7a.857.857 0 0 1-.857.857H.857a.857.857 0 0 1 0-1.714h22.286c.473 0 .857.384.857.857Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.537 13.606a.857.857 0 0 1 0-1.212L21.931 7l-5.394-5.394A.857.857 0 0 1 17.749.394l6 6a.857.857 0 0 1 0 1.212l-6 6a.857.857 0 0 1-1.212 0Z"
      ></path>
    </svg>
  );
}

export function IconChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10 7" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.293.293a1 1 0 0 1 1.414 0L5 3.586 8.293.293a1 1 0 0 1 1.414 1.414L5 6.414.293 1.707a1 1 0 0 1 0-1.414Z"
      ></path>
    </svg>
  );
}

export function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 14" {...props}>
      <path
        fillRule="evenodd"
        d="M13.707.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0z"
      ></path>
      <path d="M13.707 13.707a1 1 0 0 0 0-1.414l-12-12A1 1 0 0 0 .293 1.707l12 12a1 1 0 0 0 1.414 0z"></path>
    </svg>
  );
}

export function IconDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <g stroke="#4192d3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
      </g>
    </svg>
  );
}

export function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17.14 12.007h-3.363V24H8.793V12.007h-2.37V7.773h2.37V5.029c0-1.964.932-5.029 5.03-5.029l3.692.014v4.113h-2.68a1.014 1.014 0 0 0-1.057 1.152v2.495h3.8Z"></path>
    </svg>
  );
}

export function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM0 11C0 4.925 4.925 0 11 0s11 4.925 11 11-4.925 11-11 11S0 17.075 0 11Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0a1 1 0 0 1 .738.326A16.3 16.3 0 0 1 16 11.02a16.3 16.3 0 0 1-4.262 10.653 1 1 0 0 1-1.476 0A16.3 16.3 0 0 1 6 10.98 16.3 16.3 0 0 1 10.262.326 1 1 0 0 1 11 0ZM8 11a14.3 14.3 0 0 0 3 8.45A14.3 14.3 0 0 0 14 11a14.3 14.3 0 0 0-3-8.45A14.3 14.3 0 0 0 8 11Z"
      ></path>
    </svg>
  );
}

export function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M11.996 5.836a6.16 6.16 0 1 1-6.16 6.16 6.16 6.16 0 0 1 6.16-6.16Zm0 2.161a3.999 3.999 0 1 0 3.999 4 3.999 3.999 0 0 0-3.999-4ZM18.4 4.153a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44ZM11.996 0C8.738 0 8.33.014 7.05.072A8.805 8.805 0 0 0 4.138.63a5.88 5.88 0 0 0-2.125 1.383A5.88 5.88 0 0 0 .63 4.138 8.805 8.805 0 0 0 .072 7.05C.014 8.33 0 8.738 0 11.996s.014 3.667.072 4.946a8.805 8.805 0 0 0 .558 2.912 5.88 5.88 0 0 0 1.383 2.125 5.881 5.881 0 0 0 2.125 1.384 8.806 8.806 0 0 0 2.912.557c1.28.059 1.688.072 4.946.072s3.667-.013 4.946-.072a8.806 8.806 0 0 0 2.912-.557 6.134 6.134 0 0 0 3.509-3.509 8.805 8.805 0 0 0 .557-2.912c.059-1.28.072-1.688.072-4.946S23.98 8.33 23.92 7.05a8.805 8.805 0 0 0-.557-2.912 5.88 5.88 0 0 0-1.384-2.125A5.88 5.88 0 0 0 19.854.63a8.804 8.804 0 0 0-2.912-.558C15.662.014 15.254 0 11.996 0Zm0 2.161c3.203 0 3.583.013 4.848.07a6.638 6.638 0 0 1 2.227.413 3.717 3.717 0 0 1 1.38.898 3.715 3.715 0 0 1 .897 1.38 6.636 6.636 0 0 1 .413 2.227c.058 1.265.07 1.644.07 4.847s-.012 3.583-.07 4.848a6.636 6.636 0 0 1-.413 2.227 3.973 3.973 0 0 1-2.277 2.277 6.637 6.637 0 0 1-2.227.413c-1.265.058-1.644.07-4.848.07s-3.582-.012-4.847-.07a6.637 6.637 0 0 1-2.228-.413 3.717 3.717 0 0 1-1.38-.897 3.715 3.715 0 0 1-.896-1.38 6.636 6.636 0 0 1-.414-2.227c-.057-1.265-.07-1.645-.07-4.848s.013-3.582.07-4.847a6.636 6.636 0 0 1 .414-2.228 3.715 3.715 0 0 1 .897-1.38 3.717 3.717 0 0 1 1.38-.896 6.638 6.638 0 0 1 2.227-.413c1.265-.058 1.644-.07 4.847-.07Z"></path>
    </svg>
  );
}

export function IconLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M14.674 12.213a2.204 2.204 0 0 0-2.075-2.265 1.834 1.834 0 0 0-2.063 1.056 3.6 3.6 0 0 0-.196 1.044v5.456H7.687V7.156h2.755l.136 1.348h.06a3.262 3.262 0 0 1 2.932-1.348c1.988 0 3.77 1.574 3.77 4.458v5.89h-2.666v-5.29ZM4.115 5.926A1.353 1.353 0 0 1 2.69 4.65q-.002-.048-.002-.097a1.364 1.364 0 0 1 1.35-1.377q.057 0 .114.003a1.359 1.359 0 0 1 1.443 1.27q.004.052.003.104a1.369 1.369 0 0 1-1.36 1.378q-.06 0-.122-.005ZM3.007 17.504V7.156h2.33v10.348h-2.33Z"></path>
    </svg>
  );
}

export function IconMagnify(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 23" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM0 11C0 4.925 4.925 0 11 0s11 4.925 11 11-4.925 11-11 11S0 17.075 0 11Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM19 18l4 4ZM18.293 17.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414Z"
      ></path>
    </svg>
  );
}

export function IconMilkCarton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 23h14a2 2 0 0 0 2-2V10.303a1 1 0 0 0-.168-.555L18 5.5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.5L3.336 9.496A2 2 0 0 0 3 10.606V21a2 2 0 0 0 2 2ZM16 4V3H8v1h8Zm-.348 2 .001.02L13.667 9H6.07l2-3h7.582ZM13 11H5v10h8V11Zm4-2.382-2 2.803v9.71h4v-9.71l-2-2.803Z"
      ></path>
    </svg>
  );
}

export function IconPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 30" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m7 2 23.006 13.804L7 28.457V2Zm2 3.532v19.543l16.994-9.346L9 5.532Z"
      ></path>
    </svg>
  );
}

export function IconText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 30" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7a1 1 0 0 1 1-1h23.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h7.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm13 0a1 1 0 0 1 1-1h10.5a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1ZM2 23a1 1 0 0 1 1-1h23.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      ></path>
    </svg>
  );
}

export function IconTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M17.553 4.494a5.6 5.6 0 0 0 2.19-.6s-.15.547-2.03 2.277c0 0 .633 9.337-9.017 11.624 0 0-4.894 1.061-8.44-1.645 0 0 3.713.67 5.801-1.674a3.8 3.8 0 0 1-3.546-2.762 3.187 3.187 0 0 0 1.622-.056A3.928 3.928 0 0 1 1.136 7.64a2.53 2.53 0 0 0 1.567.502S-.046 5.77 1.658 2.813c0 0 3.683 4.42 8.248 4.158a4.055 4.055 0 0 1-.122-.99A3.952 3.952 0 0 1 13.706 2a3.885 3.885 0 0 1 2.797 1.19 4.446 4.446 0 0 0 2.667-.865s.061.851-1.617 2.17Z"></path>
    </svg>
  );
}

export function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.16 2a3 3 0 1 0-.001 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19c0-5.058 4.59-9 10-9 5.409 0 10 3.922 10 9a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1Zm2.083-1h15.835c-.55-3.316-3.793-6-7.918-6-4.121 0-7.365 2.696-7.917 6Z"
      ></path>
    </svg>
  );
}

export function IconVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 68 68" {...props}>
      <path d="M34 0c18.778 0 34 15.222 34 34S52.778 68 34 68 0 52.778 0 34 15.222 0 34 0zm0 1C15.775 1 1 15.775 1 34s14.775 33 33 33 33-14.775 33-33S52.225 1 34 1z"></path>
      <path d="m24 23 21 10.154L24 45zm1 1.594v18.693l17.842-10.065z"></path>
    </svg>
  );
}

export function IconVimeo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M511.8 137c-2.3 49.8-37.1 118.1-104.4 204.7-69.6 90.4-128.5 135.7-176.7 135.7-29.8 0-55.1-27.5-75.7-82.6-13.8-50.5-27.5-101-41.3-151.5-15.3-55.1-31.7-82.6-49.3-82.6-3.8 0-17.2 8.1-40.2 24.1l-24.1-31c25.3-22.2 50.2-44.4 74.7-66.6 33.7-29.1 59-44.4 75.9-46 39.8-3.8 64.4 23.4 73.6 81.7 9.9 62.9 16.8 102 20.7 117.3 11.5 52.2 24.1 78.3 37.9 78.3 10.7 0 26.8-16.9 48.3-50.8 21.4-33.8 32.9-59.6 34.5-77.3 3.1-29.2-8.4-43.9-34.5-43.9-12.3 0-24.9 2.8-37.9 8.4 25.2-82.4 73.2-122.4 144.2-120.1 52.5 1.4 77.3 35.5 74.3 102.2z"></path>
    </svg>
  );
}

export function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path d="M12.812 9.316 20.825 0h-1.899l-6.958 8.089L6.41 0H0l8.404 12.231L0 22h1.9l7.347-8.542L15.117 22h6.41L12.81 9.316Zm-2.602 3.023-.851-1.218L2.583 1.43H5.5l5.468 7.82.852 1.219 7.107 10.166H16.01l-5.8-8.296Z"></path>
    </svg>
  );
}

export function IconYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M18.5 12.975a3.178 3.178 0 0 1-3.163 3.174H4.663A3.178 3.178 0 0 1 1.5 12.975v-5.95A3.178 3.178 0 0 1 4.663 3.85h10.674A3.178 3.178 0 0 1 18.5 7.025v5.95ZM8.01 7.245v5.87l5.012-2.934Z"></path>
    </svg>
  );
}
