/* eslint-disable @next/next/no-page-custom-font */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        {/* Preload fonts - original HTML had these as sr-text divs, converting to link preloads */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          media="print"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          />
        </noscript>
        {/* Original HTML had other font links, but Inter is the only one with a direct Google Fonts link.
            'Centra' and 'Doyle' were likely custom fonts loaded via CSS.
            For simplicity and direct conversion, only including Inter. */}

        {/* Leaflet CSS - assuming it's needed for some map functionality not explicitly shown in the provided HTML body */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
          crossOrigin="anonymous"
        />

        {/* Favicons and Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/sitecore/frieslandcampina/globals.css?ver=6.7.3"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/sitecore/frieslandcampina/spa.min.css?b4e5b1b6518695dfa62d"
          crossOrigin="anonymous"
        />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="svg-sprite">
        <svg
          style={{ overflow: 'hidden' }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <symbol viewBox="0 0 24 14" id="icon--arrow-left">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 7c0-.473.384-.857.857-.857h22.286a.857.857 0 1 1 0 1.714H.857A.857.857 0 0 1 0 7Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.464.394a.857.857 0 0 1 0 1.212L2.07 7l5.394 5.394a.857.857 0 0 1-1.213 1.212l-6-6a.857.857 0 0 1 0-1.212l6-6a.857.857 0 0 1 1.213 0Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 24 14" id="icon--arrow-right">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 7a.857.857 0 0 1-.857.857H.857a.857.857 0 0 1 0-1.714h22.286c.473 0 .857.384.857.857Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.537 13.606a.857.857 0 0 1 0-1.212L21.931 7l-5.394-5.394A.857.857 0 0 1 17.749.394l6 6a.857.857 0 0 1 0 1.212l-6 6a.857.857 0 0 1-1.212 0Z"
              ></path>
            </symbol>
            <symbol fill="none" viewBox="0 0 55 60" id="icon--bee">
              <path
                d="M13.6 14.296c3.591 13.108 6.837 17.8 6.837 17.8l.075-.084L20.598 0c-3.93.261-10.2 2.62-6.997 14.296z"
                fill="#dce7f7"
              ></path>
              <path
                d="M21.949.025c-.45-.026-.902-.026-1.353 0l-.084 32.012c.389-.404 5.662-6.048 8.299-17.076C31.549 3.471 28.397.514 21.949.025z"
                fill="#eef3fb"
              ></path>
              <g fill="#fdc689">
                <path d="m30.216 29.707-.095 30.277 5.054.016.095-30.277zM19.717 29.654l-.084 30.269 5.045.008.093-30.268zM40.778 29.713H40.5l-.093 30.268h.288a15.233 15.233 0 0 0 10.152-4.723 15.138 15.138 0 0 0 4.155-10.371 15.137 15.137 0 0 0-4.097-10.395 15.232 15.232 0 0 0-10.126-4.78zM0 44.733c-.023 3.874 1.448 7.608 4.11 10.43s6.31 4.518 10.19 4.734l.101-30.184c-3.868.206-7.51 1.874-10.187 4.665S.031 40.873 0 44.733z"></path>
              </g>
              <path
                d="M15.232 29.645h-.845l-.102 30.184c.279 0 .55.042.845.05h4.496l.085-30.268zM24.77 29.662l-.092 30.269 5.34.033.102-30.277zM35.175 29.697l-.093 30.277 5.324.025.085-30.276z"
                fill="#2c353a"
              ></path>
              <path
                d="M24.288 14.346c3.6 13.108 6.837 17.817 6.837 17.817l.068-.092.1-32.012c-3.938.219-10.2 2.603-7.005 14.287z"
                fill="#dce7f7"
              ></path>
              <path
                d="M32.621.084a8.936 8.936 0 0 0-1.352 0l-.101 32.013c.414-.396 5.68-6.04 8.316-17.077C42.239 3.504 39.053.54 32.622.084z"
                fill="#eef3fb"
              ></path>
            </symbol>
            <symbol fill="none" viewBox="0 0 1165 132" id="icon--carousel">
              <path
                d="M1165 132V0H755.476c-94.25-.007-186.669 21.52-267.047 62.206l-14.871 7.537C393.174 110.453 300.74 131.999 206.47 132H0z"
                fill="#fff"
              ></path>
            </symbol>
            <symbol viewBox="0 0 10 7" id="icon--chevron">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M.293.293a1 1 0 0 1 1.414 0L5 3.586 8.293.293a1 1 0 0 1 1.414 1.414L5 6.414.293 1.707a1 1 0 0 1 0-1.414Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 14 14" id="icon--close">
              <path
                fill-rule="evenodd"
                d="M13.707.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0z"
              ></path>
              <path d="M13.707 13.707a1 1 0 0 0 0-1.414l-12-12A1 1 0 0 0 .293 1.707l12 12a1 1 0 0 0 1.414 0z"></path>
            </symbol>
            <symbol fill="none" viewBox="0 0 24 24" id="icon--download">
              <g stroke="#4192d3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
              </g>
            </symbol>
            <symbol viewBox="0 0 24 24" id="icon--facebook">
              <path d="M17.14 12.007h-3.363V24H8.793V12.007h-2.37V7.773h2.37V5.029c0-1.964.932-5.029 5.03-5.029l3.692.014v4.113h-2.68a1.014 1.014 0 0 0-1.057 1.152v2.495h3.8Z"></path>
            </symbol>
            <symbol viewBox="0 0 22 22" id="icon--globe">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM0 11C0 4.925 4.925 0 11 0s11 4.925 11 11-4.925 11-11 11S0 17.075 0 11Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 0a1 1 0 0 1 .738.326A16.3 16.3 0 0 1 16 11.02a16.3 16.3 0 0 1-4.262 10.653 1 1 0 0 1-1.476 0A16.3 16.3 0 0 1 6 10.98 16.3 16.3 0 0 1 10.262.326 1 1 0 0 1 11 0ZM8 11a14.3 14.3 0 0 0 3 8.45A14.3 14.3 0 0 0 14 11a14.3 14.3 0 0 0-3-8.45A14.3 14.3 0 0 0 8 11Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="icon--instagram">
              <path d="M11.996 5.836a6.16 6.16 0 1 1-6.16 6.16 6.16 6.16 0 0 1 6.16-6.16Zm0 2.161a3.999 3.999 0 1 0 3.999 4 3.999 3.999 0 0 0-3.999-4ZM18.4 4.153a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44ZM11.996 0C8.738 0 8.33.014 7.05.072A8.805 8.805 0 0 0 4.138.63a5.88 5.88 0 0 0-2.125 1.383A5.88 5.88 0 0 0 .63 4.138 8.805 8.805 0 0 0 .072 7.05C.014 8.33 0 8.738 0 11.996s.014 3.667.072 4.946a8.805 8.805 0 0 0 .558 2.912 5.88 5.88 0 0 0 1.383 2.125 5.881 5.881 0 0 0 2.125 1.384 8.806 8.806 0 0 0 2.912.557c1.28.059 1.688.072 4.946.072s3.667-.013 4.946-.072a8.806 8.806 0 0 0 2.912-.557 6.134 6.134 0 0 0 3.509-3.509 8.805 8.805 0 0 0 .557-2.912c.059-1.28.072-1.688.072-4.946S23.98 8.33 23.92 7.05a8.805 8.805 0 0 0-.557-2.912 5.88 5.88 0 0 0-1.384-2.125A5.88 5.88 0 0 0 19.854.63a8.804 8.804 0 0 0-2.912-.558C15.662.014 15.254 0 11.996 0Zm0 2.161c3.203 0 3.583.013 4.848.07a6.638 6.638 0 0 1 2.227.413 3.717 3.717 0 0 1 1.38.898 3.715 3.715 0 0 1 .897 1.38 6.636 6.636 0 0 1 .413 2.227c.058 1.265.07 1.644.07 4.847s-.012 3.583-.07 4.848a6.636 6.636 0 0 1-.413 2.227 3.973 3.973 0 0 1-2.277 2.277 6.637 6.637 0 0 1-2.227.413c-1.265.058-1.644.07-4.848.07s-3.582-.012-4.847-.07a6.637 6.637 0 0 1-2.228-.413 3.717 3.717 0 0 1-1.38-.897 3.715 3.715 0 0 1-.896-1.38 6.636 6.636 0 0 1-.414-2.227c-.057-1.265-.07-1.645-.07-4.848s.013-3.582.07-4.847a6.636 6.636 0 0 1 .414-2.228 3.715 3.715 0 0 1 .897-1.38 3.717 3.717 0 0 1 1.38-.896 6.638 6.638 0 0 1 2.227-.413c1.265-.058 1.644-.07 4.847-.07Z"></path>
            </symbol>
            <symbol viewBox="0 0 20 20" id="icon--linkedin">
              <path d="M14.674 12.213a2.204 2.204 0 0 0-2.075-2.265 1.834 1.834 0 0 0-2.063 1.056 3.6 3.6 0 0 0-.196 1.044v5.456H7.687V7.156h2.755l.136 1.348h.06a3.262 3.262 0 0 1 2.932-1.348c1.988 0 3.77 1.574 3.77 4.458v5.89h-2.666v-5.29ZM4.115 5.926A1.353 1.353 0 0 1 2.69 4.65q-.002-.048-.002-.097a1.364 1.364 0 0 1 1.35-1.377q.057 0 .114.003a1.359 1.359 0 0 1 1.443 1.27q.004.052.003.104a1.369 1.369 0 0 1-1.36 1.378q-.06 0-.122-.005ZM3.007 17.504V7.156h2.33v10.348h-2.33Z"></path>
            </symbol>
            <symbol viewBox="0 0 24 23" id="icon--magnify">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM0 11C0 4.925 4.925 0 11 0s11 4.925 11 11-4.925 11-11 11S0 17.075 0 11Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM19 18l4 4ZM18.293 17.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 24 24" id="icon--milk-carton">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 23h14a2 2 0 0 0 2-2V10.303a1 1 0 0 0-.168-.555L18 5.5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.5L3.336 9.496A2 2 0 0 0 3 10.606V21a2 2 0 0 0 2 2ZM16 4V3H8v1h8Zm-.348 2 .001.02L13.667 9H6.07l2-3h7.582ZM13 11H5v10h8V11Zm4-2.382-2 2.803v9.71h4v-9.71l-2-2.803Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 30 30" id="icon--play">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m7 2 23.006 13.804L7 28.457V2Zm2 3.532v19.543l16.994-9.346L9 5.532Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 30 30" id="icon--text">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 7a1 1 0 0 1 1-1h23.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h7.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm13 0a1 1 0 0 1 1-1h10.5a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1ZM2 23a1 1 0 0 1 1-1h23.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 20 20" id="icon--twitter">
              <path d="M17.553 4.494a5.6 5.6 0 0 0 2.19-.6s-.15.547-2.03 2.277c0 0 .633 9.337-9.017 11.624 0 0-4.894 1.061-8.44-1.645 0 0 3.713.67 5.801-1.674a3.8 3.8 0 0 1-3.546-2.762 3.187 3.187 0 0 0 1.622-.056A3.928 3.928 0 0 1 1.136 7.64a2.53 2.53 0 0 0 1.567.502S-.046 5.77 1.658 2.813c0 0 3.683 4.42 8.248 4.158a4.055 4.055 0 0 1-.122-.99A3.952 3.952 0 0 1 13.706 2a3.885 3.885 0 0 1 2.797 1.19 4.446 4.446 0 0 0 2.667-.865s.061.851-1.617 2.17Z"></path>
            </symbol>
            <symbol viewBox="0 0 20 20" id="icon--user">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.16 2a3 3 0 1 0-.001 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 19c0-5.058 4.59-9 10-9 5.409 0 10 3.922 10 9a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1Zm2.083-1h15.835c-.55-3.316-3.793-6-7.918-6-4.121 0-7.365 2.696-7.917 6Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 68 68" id="icon--video">
              <path d="M34 0c18.778 0 34 15.222 34 34S52.778 68 34 68 0 52.778 0 34 15.222 0 34 0zm0 1C15.775 1 1 15.775 1 34s14.775 33 33 33 33-14.775 33-33S52.225 1 34 1z"></path>
              <path d="m24 23 21 10.154L24 45zm1 1.594v18.693l17.842-10.065z"></path>
            </symbol>
            <symbol viewBox="0 0 512 512" id="icon--vimeo">
              <path d="M511.8 137c-2.3 49.8-37.1 118.1-104.4 204.7-69.6 90.4-128.5 135.7-176.7 135.7-29.8 0-55.1-27.5-75.7-82.6-13.8-50.5-27.5-101-41.3-151.5-15.3-55.1-31.7-82.6-49.3-82.6-3.8 0-17.2 8.1-40.2 24.1l-24.1-31c25.3-22.2 50.2-44.4 74.7-66.6 33.7-29.1 59-44.4 75.9-46 39.8-3.8 64.4 23.4 73.6 81.7 9.9 62.9 16.8 102 20.7 117.3 11.5 52.2 24.1 78.3 37.9 78.3 10.7 0 26.8-16.9 48.3-50.8 21.4-33.8 32.9-59.6 34.5-77.3 3.1-29.2-8.4-43.9-34.5-43.9-12.3 0-24.9 2.8-37.9 8.4 25.2-82.4 73.2-122.4 144.2-120.1 52.5 1.4 77.3 35.5 74.3 102.2z"></path>
            </symbol>
            <symbol viewBox="0 0 22 22" id="icon--x">
              <path d="M12.812 9.316 20.825 0h-1.899l-6.958 8.089L6.41 0H0l8.404 12.231L0 22h1.9l7.347-8.542L15.117 22h6.41L12.81 9.316Zm-2.602 3.023-.851-1.218L2.583 1.43H5.5l5.468 7.82.852 1.219 7.107 10.166H16.01l-5.8-8.296Z"></path>
            </symbol>
            <symbol viewBox="0 0 20 20" id="icon--youtube">
              <path d="M18.5 12.975a3.178 3.178 0 0 1-3.163 3.174H4.663A3.178 3.178 0 0 1 1.5 12.975v-5.95A3.178 3.178 0 0 1 4.663 3.85h10.674A3.178 3.178 0 0 1 18.5 7.025v5.95ZM8.01 7.245v5.87l5.012-2.934Z"></path>
            </symbol>
            <symbol viewBox="0 0 72 144" id="illustration--plant">
              <path d="M34.316 47.932C16.201 21.531 35.85 0 35.85 0c15.89 18.608 5.718 40.362 1.544 47.588v10.36c6.718-29.527 34.605-30.813 34.605-30.813-2.143 26.92-29.454 34.111-34.605 35.231v29.29c7.462-27.665 34.129-28.894 34.129-28.894-2.085 26.176-27.965 33.699-34.13 35.124v31.146c7.462-27.664 34.13-28.893 34.13-28.893-2.085 26.176-27.965 33.699-34.13 35.124v8.672a228.15 228.15 0 0 0-3.077.066v-8.565c-5.573-.65-30.135-5.208-34.316-35.297 0 0 27.995 4.795 34.316 28.719V98.109C28.743 97.46 4.181 92.902 0 62.813c0 0 27.995 4.795 34.316 28.718V62.424C28.743 61.775 4.181 57.218 0 27.134c0 0 27.995 4.796 34.316 28.72v-7.922Z"></path>
            </symbol>
            <symbol viewBox="0 0 85 80" id="illustration--trees">
              <path d="M55.832 41.908c-1.46 4.477-2.901 8.901-3.863 13.423-.961 4.514-1.41 9.136-1.86 13.755-.177 1.818-.353 3.636-.561 5.447-.022.193-.03.395-.04.599-.044.959-.088 1.927-1.418 1.901-1.476-.028-1.442-1.211-1.411-2.27l.007-.293c.218-12.704 2.92-24.908 7.618-36.715.381-.96.758-1.92 1.117-2.84-9.675-8.882-11.424-18.84-4.883-27.387C56.443-.18 67.45-2.297 75.722 2.709c4.063 2.405 7.074 6.205 8.452 10.665a18.543 18.543 0 0 1-.993 13.485c-4.311 9.083-14.518 12.959-25.47 9.154a317.903 317.903 0 0 1-1.88 5.895Zm3.3-8.646a16.442 16.442 0 0 0 12.099.63c3.963-1.339 7.244-4.136 9.152-7.803a15.667 15.667 0 0 0 1.08-11.862c-1.216-3.943-3.94-7.268-7.599-9.276a16.518 16.518 0 0 0-12.049-1.58c-4.073 1.023-7.585 3.556-9.8 7.068a15.509 15.509 0 0 0-2.11 11.709c.883 4.024 3.334 7.547 6.83 9.815l.305-.613c.229-.463.455-.92.707-1.36l1.206-2.152.001-.001c1.6-2.854 3.196-5.704 4.862-8.534.07-.116.139-.243.21-.373.501-.914 1.107-2.018 2.475-1.217 1.293.758.694 1.65.127 2.495-.117.176-.234.35-.332.52l-7.163 12.534ZM23.62 48.151a71.106 71.106 0 0 0-5.216 25.597c0 .228.022.483.044.746.096 1.146.206 2.457-1.375 2.5-1.78.049-1.676-1.357-1.586-2.576.018-.246.036-.484.037-.702a70.732 70.732 0 0 1 4.616-24.618c.685-1.817.517-2.809-.909-4.144-4.397-4.117-5.415-10.405-2.82-15.803a14.062 14.062 0 0 1 5.898-6.138 14.406 14.406 0 0 1 8.42-1.67c2.914.31 5.66 1.5 7.858 3.405a13.918 13.918 0 0 1 4.424 7.238c2.421 10.047-6.741 19.063-17.003 16.737-.487-.112-.972-.23-1.527-.364a346.82 346.82 0 0 0-.862-.208Zm-1.46-4.572c.427-.758.846-1.518 1.265-2.279 1.16-2.103 2.317-4.204 3.605-6.228.277-.438.938-.638 1.598-.839.303-.092.607-.184.874-.3-.008.27.013.552.033.835.044.617.088 1.234-.151 1.715-1.056 2.12-2.205 4.194-3.354 6.267-.433.782-.866 1.563-1.294 2.347 4.843 2.612 11.248.594 14.164-4.233a10.94 10.94 0 0 0 1.242-8.266 11.113 11.113 0 0 0-4.973-6.776 11.456 11.456 0 0 0-8.37-1.448 11.299 11.299 0 0 0-7.027 4.7c-3.216 4.756-2.126 11.41 2.389 14.505Z"></path>
              <path d="M75.005 77.037H0V80h75.005v-2.963Z"></path>
            </symbol>
          </defs>
        </svg>
      </div>
      <div className={mainClassPageEditing}>
        <header className="header app__header">
          <div className="header__inner" id="header">
            {route && <Placeholder name="headless-header" rendering={route} />}
          </div>
        </header>
        <main className="main app__main">
          <article id="content" className="page">
            {route && <Placeholder name="headless-main" rendering={route} />}
          </article>
        </main>
        <footer className="footer app__footer" id="a11y-footer">
          <div className="footer__container ls-container--m ls-gutter" id="footer">
            {route && <Placeholder name="headless-footer" rendering={route} />}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
