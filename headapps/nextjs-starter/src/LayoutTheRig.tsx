/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  Field,
  HTMLLink,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
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
  OgTitle?: Field;
  OgDescription?: Field;
  OgImage?: ImageField;
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
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Welcome to THE RIG., the ultimate extreme destination in the Arabian Gulf. Get your adrenaline pumping with thrilling activities, relax in unique accommodations, and enjoy unparalleled hospitality. Book your offshore adventure today."
        />
        <meta
          name="keywords"
          content="Adrenaline , Holiday Adventures: Zip Line, Scuba Diving, THERIG., extreme park, adrenaline "
        />
        <link rel="icon" href="https://therig.sa/the-rig-logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="The world&#x27;s first, offshore, adventure tourism destination. From adrenalin pumping karting to extreme sports and submersibles, there&#x27;s something for everyone! "
        />
        <meta
          property="og:description"
          content="Welcome to THE RIG., the ultimate extreme destination in the Arabian Gulf. Get your adrenaline pumping with thrilling activities, relax in unique accommodations, and enjoy unparalleled hospitality. Book your offshore adventure today."
        />
        <meta property="og:url" content="https://therig.sa/" />
        <meta property="og:site_name" content="The RIG." />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="The world&#x27;s first, offshore, adventure tourism destination. From adrenalin pumping karting to extreme sports and submersibles, there&#x27;s something for everyone! "
        />
        <meta
          name="twitter:description"
          content="Welcome to THE RIG., the ultimate extreme destination in the Arabian Gulf. Get your adrenaline pumping with thrilling activities, relax in unique accommodations, and enjoy unparalleled hospitality. Book your offshore adventure today."
        />
        <meta name="twitter:url" content="https://therig.sa/" />
        <meta name="twitter:image" content="https://therig.sa/bg/media-header.png" />
        <link rel="alternate" hrefLang="en" href="https://therig.sa/" />
        <link rel="alternate" hrefLang="ar" href="https://therig.sa/ar/" />
        <link rel="alternate" hrefLang="x-default" href="https://therig.sa/" />
        <meta name="next-head-count" content="22" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta data-version="0.1.101" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link data-next-font="" rel="preconnect" href="/" crossOrigin="anonymous" />
        <style
          id="holderStyle"
          dangerouslySetInnerHTML={{
            __html: `
         .css-19tk58b {
    background: url(https://therig.sa/bg/sea.webp) no-repeat 50% 50% / cover;
    position: relative;
    z-index: 20;
    height: 80vh;
    -webkit-filter: none;
    filter: none;
}

@media screen and (max-width: 899px) {
    .css-19tk58b {
        height: 816px;
    }
}

@media screen and (min-width: 900px) {
    .css-19tk58b {
        height: 901px;
    }
}

@media screen and (min-width: 1200px) {
    .css-19tk58b {
        height: 901px;
    }
}

@media screen and (min-width: 1440px) {
    .css-19tk58b {
        height: 901px;
    }
}

@media screen and (min-width: 1601px) {
    .css-19tk58b {
        height: 1150px;
    }
}

.css-i9vblt {
    background: url('https://therig.sa/bg/egsBg.webp');
    z-index: 20;
    height: 890px;
    position: relative;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}

@media screen and (max-width: 899px) {
    .css-i9vblt {
        height: auto;
    }
}

.css-qvju8t {
    width: 100%;
    height: 340px;
    margin: 0 !important;
    padding: 0px 82px;
    max-width: 100% !important;
    background: #494949;
    position: relative;
}

@media screen and (min-width: 1200px) {
    .css-qvju8t {
        padding: 0px !important;
    }
}

@media screen and (max-width: 899px) {
    .css-qvju8t {
        padding: 0px !important;
        height: auto;
    }
}

.css-17fx44v {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    height: 340px;
    margin: 0 !important;
    padding: 0px 82px;
    max-width: 100% !important;
    background: #494949;
    position: relative;
}

@media (min-width: 600px) {
    .css-17fx44v {
        padding-left: 24px;
        padding-right: 24px;
    }
}

@media (min-width: 1200px) {
    .css-17fx44v {
        max-width: 1200px;
    }
}

@media screen and (min-width: 1200px) {
    .css-17fx44v {
        padding: 0px !important;
    }
}

@media screen and (max-width: 899px) {
    .css-17fx44v {
        padding: 0px !important;
        height: auto;
    }
}

.css-1lxviua {
    box-sizing: border-box;
    margin: 0;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 100%;
    padding: 80px 50px 80px;
    position: relative;
}

@media (min-width: 600px) {
    .css-1lxviua {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }
}

@media (min-width: 900px) {
    .css-1lxviua {
        -webkit-flex-basis: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 50%;
    }
}

@media (min-width: 1200px) {
    .css-1lxviua {
        -webkit-flex-basis: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 50%;
    }
}

@media (min-width: 1536px) {
    .css-1lxviua {
        -webkit-flex-basis: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 50%;
    }
}

@media screen and (max-width: 899px) {
    .css-1lxviua {
        background: url('https://therig.sa/bg/line-break-top.png') no-repeat 100% -80px/2000px 160px 160px #ff6a39;
        padding: 80px 50px 80px;
    }
}

.css-1xiwo48 {
    padding: 64px 60px 48px 60px;
    height: 382px;
    position: relative;
    background: #1d1d1b;
}

@media screen and (max-width: 899px) {
    .css-1xiwo48 {
        padding: 48px 20px;
        height: auto;
    }
}

.css-fy3zvu {
    background: #1d1d1b;
    position: relative;
    width: 100%;
    height: 405px;
}

@media screen and (max-width: 900px) {
    .css-fy3zvu {
        height: auto;
    }
}

@media screen and (min-width: 1200px) {
    .css-fy3zvu .fact-grid .ar-grid-item:first-child {
        max-width: 25%;
        -webkit-flex-basis: 25%;
        -ms-flex-preferred-size: 25%;
        flex-basis: 25%;
    }

    .css-fy3zvu .fact-grid .ar-grid-item:nth-child(2) {
        max-width: 15%;
        -webkit-flex-basis: 15%;
        -ms-flex-preferred-size: 15%;
        flex-basis: 15%;
    }

    .css-fy3zvu .fact-grid .en-grid-item:first-child {
        max-width: 25%;
        -webkit-flex-basis: 25%;
        -ms-flex-preferred-size: 25%;
        flex-basis: 25%;
    }

    .css-fy3zvu .fact-grid .en-grid-item:nth-child(2) {
        max-width: 15%;
        -webkit-flex-basis: 15%;
        -ms-flex-preferred-size: 15%;
        flex-basis: 15%;
    }
}

.css-fy3zvu .fact-grid .en-grid-item:last-child>div {
    border: none;
}

.css-fy3zvu .fact-grid .ar-grid-item:first-child>div {
    border: none;
}

.css-dy1auj .Toastify__toast-container {
    min-width: 410px;
    -webkit-filter: none;
    filter: none;
}

.css-dy1auj .Toastify__toast-container--top-center {
    top: 168px;
}

.css-dy1auj .Toastify__toast {
    padding: 24px;
    border-radius: 0;
    min-height: auto;
    background-color: #6bcaba;
}

.css-dy1auj .Toastify__toast-body {
    margin: 0;
}

.css-dy1auj .Toastify__close-button {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    opacity: 1;
    color: #494949;
    position: relative;
    top: 2px;
}

.css-cea17v {
    background: #1d1d1b;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    padding: 32px 60px;
    position: fixed;
    width: 100%;
    z-index: 100;
    opacity: 1;
}

@media screen and (max-width: 899px) {
    .css-cea17v {
        -webkit-padding-start: 24px !important;
        padding-inline-start: 24px !important;
        background: #1d1d1b;
    }
}

.css-18u71s2 {
    background: rgb(29, 29, 27);
    transition: all 0.3s ease 0s;
    padding: 32px 60px;
    position: fixed;
    width: 100%;
    z-index: 100;
    opacity: 0;
}

.css-18u71s2.compressed {
    padding: 8px 60px;
    top: 0px;
}

.css-1rmhix3.compressed {
    padding: 8px 60px;
    top: 0px;
}

.css-1rmhix3 {
    background: rgb(29, 29, 27);
    transition: all 0.3s ease 0s;
    padding: 32px 60px;
    position: fixed;
    width: 100%;
    z-index: 100;
    opacity: 1;
}

.css-cea17v.compressed {
    padding: 8px 60px;
    top: 0px;
}

.css-a36zzi {
    background: url(https://therig.sa/rust/dash.png), transparent 50% / cover no-repeat;
    position: absolute;
    left: 0px;
    min-width: 100%;
    height: 15px;
}

.css-si4eiy {
    width: 100%;
    background: url('https://therig.sa/career/bg.webp'), transparent 50% / cover no-repeat;
}

@media screen and (max-width: 899px) {
    .css-si4eiy {
        background: none;
        mix-blend-mode: normal;
    }
}

.css-1v3kjg {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    background: url('https://therig.sa/career/bg.webp'), transparent 50% / cover no-repeat;
}

@media screen and (max-width: 899px) {
    .css-1v3kjg {
        background: none;
        mix-blend-mode: normal;
    }
}

.css-kji4kb {
    position: relative;
    padding: 80px 50px 80px;
}

@media screen and (max-width: 899px) {
    .css-kji4kb {
        padding: 80px 50px 80px;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        -webkit-justify-content: start;
        justify-content: start;
    }
}

.css-n326iy {
    padding: 80px 50px 80px;
    position: relative;
}

@media screen and (max-width: 899px) {
    .css-n326iy {
        background: url('https://therig.sa/bg/line-break-top.png') no-repeat 100% -80px/2000px 160px 160px #ff6a39;
        padding: 80px 50px 80px;
    }
}

.css-10r2m1s {
    padding: 80px 60px;
    margin: 0px;
    height: 405px;
}

@media screen and (max-width: 900px) {
    .css-10r2m1s {
        height: auto;
    }
}

.css-tuxzvu {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-top: -8px;
    width: calc(100% + 8px);
    margin-left: -8px;
}

.css-tuxzvu>.MuiGrid-item {
    padding-top: 8px;
}

.css-tuxzvu>.MuiGrid-item {
    padding-left: 8px;
}

.css-15j76c0 {
    box-sizing: border-box;
    margin: 0;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 100%;
}

@media (min-width: 600px) {
    .css-15j76c0 {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }
}

@media (min-width: 900px) {
    .css-15j76c0 {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }
}

@media (min-width: 1200px) {
    .css-15j76c0 {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }
}

@media (min-width: 1536px) {
    .css-15j76c0 {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }
}

.css-1npb3ao {
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 3.25rem;
    text-align: center;
    margin-bottom: 60px;
    color: #e1e5ee;
}

.css-1y5qbxs {
    margin: 0;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 3.25rem;
    text-align: center;
    margin-bottom: 60px;
    color: #e1e5ee;
}

.css-1q09act {
    box-sizing: border-box;
    margin: 0;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 100%;
}

@media (min-width: 600px) {
    .css-1q09act {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }
}

@media (min-width: 900px) {
    .css-1q09act {
        -webkit-flex-basis: 20%;
        -ms-flex-preferred-size: 20%;
        flex-basis: 20%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 20%;
    }
}

@media (min-width: 1200px) {
    .css-1q09act {
        -webkit-flex-basis: 20%;
        -ms-flex-preferred-size: 20%;
        flex-basis: 20%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 20%;
    }
}

@media (min-width: 1536px) {
    .css-1q09act {
        -webkit-flex-basis: 20%;
        -ms-flex-preferred-size: 20%;
        flex-basis: 20%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 20%;
    }
}

.css-1d3bbye {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
}

.css-1wb1tnx {
    border-right: 2px solid #777777;
}

.css-1wb1tnx .breakLine {
    display: none;
}

@media screen and (max-width: 899px) {
    .css-1wb1tnx {
        border-right: none;
    }

    .css-1wb1tnx .breakLine {
        display: block;
        width: 100px;
        margin: 10px auto;
    }

    .css-1wb1tnx .last {
        display: none;
    }
}

.css-1q2jcol {
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    color: #ff6a39;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-weight: 800;
    font-size: 84px;
    line-height: 60px;
    padding-top: 40px;
    position: relative;
    text-align: center;
}

@media screen and (max-width: 1439px) {
    .css-1q2jcol {
        font-size: 48px;
        line-height: 68px;
        padding-top: 0;
    }
}

.css-1q2jcol span {
    font-size: 2.2rem;
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    color: inherit;
    font-weight: 800;
    text-transform: uppercase;
    margin-left: 8px;
}

@media screen and (max-width: 899px) {
    .css-1q2jcol span {
        font-size: 1.8rem;
        margin-left: 6px;
    }
}

.css-1b171hf {
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    color: #ff6a39;
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
}

.css-1b171hf span {
    font-size: 18px;
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    color: #ffffff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
}

@media screen and (max-width: 1439px) {
    .css-1b171hf span {
        font-size: 14px;
        padding-top: 0px;
    }
}

.css-1xjbe9x {
    position: absolute;
    bottom: -83px;
    background: url('https://therig.sa/rust/rust-top-straight.webp'),
        transparent 50% / cover no-repeat;
    mix-blend-mode: plus-darker;
    width: 2000px;
    height: 166px;
    -webkit-filter: brightness(0);
    filter: brightness(0);
    left: -280px;
}

@media screen and (min-width: 1921px) {
    .css-1xjbe9x {
        left: 0;
    }
}

.css-8hvgb2 {
    filter: brightness(0.4);
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    z-index: -20;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 0, 0);
    position: absolute;
}

.css-ly8dp0 {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 20;
    filter: none;
}

.css-18czceh {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    padding: 240px 0px;
}

@media (min-width: 600px) {
    .css-18czceh {
        padding-left: 24px;
        padding-right: 24px;
    }
}

@media (min-width: 1200px) {
    .css-18czceh {
        max-width: 1200px;
    }
}

.css-18czceh .egs-grid .en-grid-item .egsGrid:last-child>div {
    border: none;
}

.css-18czceh .egs-grid .ar-grid-item .egsGrid:last-child>div {
    border: none;
    max-width: 30ch;
}

@media screen and (max-width: 899px) {
    .css-18czceh {
        padding: 120px 0px !important;
    }
}

@media screen and (max-width: 1439px) {
    .css-18czceh {
        text-align: center;
    }

    .css-18czceh .egs-grid .ar-grid-item .egsGrid:last-child>div {
        max-width: none;
    }
}

.css-v57kt1 {
    --Grid-columns: 12;
    --Grid-columnSpacing: 24px;
    --Grid-rowSpacing: 24px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    min-width: 0;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2);
}

.css-b3tb0r {
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    width: calc(100% * 12 / var(--Grid-columns));
    min-width: 0;
    box-sizing: border-box;
    padding: calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);
}

@media (min-width: 600px) {
    .css-b3tb0r {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns));
    }
}

@media (min-width: 900px) {
    .css-b3tb0r {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 3 / var(--Grid-columns));
    }
}

@media (min-width: 1200px) {
    .css-b3tb0r {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 3 / var(--Grid-columns));
    }
}

.css-12mq798 {
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
}

.css-mxs5mc {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    color: #e1e5ee;
    font-family: Changa;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
    text-align: center;
}

.css-179ykmo {
    position: absolute;
    top: 0px;
    width: 100%;
}

.css-1f1qt3z {
    max-width: 1440px !important;
}

@media screen and (max-width: 899px) {
    .css-1f1qt3z {
        padding: 0 24px !important;
    }
}

.css-sjot2u {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1440px !important;
}

@media (min-width: 600px) {
    .css-sjot2u {
        padding-left: 24px;
        padding-right: 24px;
    }
}

@media (min-width: 1200px) {
    .css-sjot2u {
        max-width: 1200px;
    }
}

@media screen and (max-width: 899px) {
    .css-sjot2u {
        padding: 0 24px !important;
    }
}

.css-124fws5 {
    min-width: 0;
    box-sizing: border-box;
    padding: calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);
}

.css-1ug0hhs {
    width: 866px;
    z-index: 20;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 60%;
    -webkit-transform: translate(-60%, -60%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

@media screen and (min-width: 1200px) {
    .css-1ug0hhs {
        margin: auto;
    }
}

@media screen and (min-width: 1601px) {
    .css-1ug0hhs {
        top: 55%;
        -webkit-transform: translate(-50%, -40%);
        -moz-transform: translate(-50%, -40%);
        -ms-transform: translate(-50%, -40%);
        transform: translate(-50%, -40%);
    }
}

@media screen and (max-width: 899px) {
    .css-1ug0hhs {
        top: 50%;
        width: auto;
    }
}

.css-1vtk6j6 {
    -webkit-filter: none;
    filter: none;
}

@media screen and (max-width: 899px) {
    .css-1vtk6j6 {
        width: 327px;
        height: 100px;
    }
}

@media screen and (min-width: 900px) {
    .css-1vtk6j6 {
        height: 120px;
    }
}

@media screen and (min-width: 1200px) {
    .css-1vtk6j6 {
        height: 120px;
    }
}

@media screen and (min-width: 1440px) {
    .css-1vtk6j6 {
        height: 120px;
    }
}

.css-srloyh {
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 16px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: #e1e5ee;
}

@media screen and (max-width: 599px) {
    .css-srloyh {
        font-size: 18px;
        line-height: 160%;
        margin: 0px 16px 16px;
    }
}

.css-pheo6p {
    margin: 0;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-family: 'Changa', sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 16px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: #e1e5ee;
}

@media screen and (max-width: 599px) {
    .css-pheo6p {
        font-size: 18px;
        line-height: 160%;
        margin: 0px 16px 16px;
    }
}

.css-e35sq3 {
    background-color: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    border-radius: 2px;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 12px 32px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 8px;
    border: 1px solid #ffffff;
    margin-top: 60px;
    cursor: pointer;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
}

.css-e35sq3:active {
    background-color: #ffffff;
    border: 2px solid #ffffff;
    color: #ffffff;
}

@media screen and (max-width: 899px) {
    .css-e35sq3 {
        margin-top: 48px;
    }
}

.css-iiupvq {
    width: 10px;
    margin: 0 5px;
    vertical-align: middle;
    height: 10px;
}

.css-11ant8a {
    width: 38px;
    height: 51px;
    margin-top: 90px;
    display: none;
}

@media screen and (min-width: 900px) {
    .css-11ant8a {
        display: inline;
    }
}

.css-zqttgr {
    position: absolute;
    min-width: 100%;
    width: 1985px;
    height: 120px;
    bottom: 0px;
    z-index: 1;
    background: linear-gradient(180deg, rgba(1, 6, 13, 0) 0%, #01060d 100%);
}

.css-1peekm2 {
    box-sizing: border-box;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    position: absolute;
    min-width: 100%;
    width: 1985px;
    height: 120px;
    bottom: 0px;
    z-index: 1;
    background: linear-gradient(180deg, rgba(1, 6, 13, 0) 0%, #01060d 100%);
}

.css-mizbsd {
    background: url('https://therig.sa/rust/rust-top-straight.webp'),
        transparent 50% / cover no-repeat;
    mix-blend-mode: plus-darker;
    width: 2000px;
    height: 166px;
    -webkit-filter: brightness(0);
    filter: brightness(0);
    left: -280px;
    position: absolute;
    bottom: -84px;
}

@media screen and (min-width: 1921px) {
    .css-mizbsd {
        left: 0;
    }
}

.css-1hikysy {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 16px;
    -webkit-flex: 1 0 0;
    -ms-flex: 1 0 0;
    flex: 1 0 0;
    padding: 24px 20px;
}

.css-1yjs7k1 {
    border-inline-end: 1px solid #003b5c;
}

.css-1yjs7k1 .breakLine {
    display: none;
}

@media screen and (max-width: 899px) {
    .css-1yjs7k1 {
        border-right: none;
    }

    .css-1yjs7k1 .breakLine {
        display: block;
        width: 280px;
        margin: 10px auto;
    }

    .css-1yjs7k1 .last {
        display: none;
    }
}

.css-108vj9e {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 52px;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px;
    color: white;
    width: 800px;
    text-align: center;
    margin: auto;
    margin-bottom: 72px;
    text-transform: uppercase;
}

.css-108vj9e b {
    color: #6bcaba;
}

@media screen and (min-width: 900px) {
    .css-108vj9e {
        text-align: center;
    }
}

@media screen and (max-width: 899px) {
    .css-108vj9e {
        width: 100%;
        font-size: 36px;
        padding: 12px;
    }
}

.css-48vdzh {
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    width: calc(100% * 12 / var(--Grid-columns));
    min-width: 0;
    box-sizing: border-box;
    padding: calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);
}

@media (min-width: 600px) {
    .css-48vdzh {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns));
    }
}

@media (min-width: 900px) {
    .css-48vdzh {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns));
    }
}

@media (min-width: 1200px) {
    .css-48vdzh {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns));
    }
}

.css-58w1wt {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 1440px;
    margin: auto;
}

.css-xzc2ri {
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.css-f8bp36 {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center;
    -webkit-padding-end: 92px;
    padding-inline-end: 92px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

@media screen and (max-width: 899px) {
    .css-f8bp36 {
        -webkit-padding-end: 28px;
        padding-inline-end: 28px;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        -webkit-justify-content: end;
        justify-content: end;
    }
}

.css-lqzyi5 {
    max-width: 530px;
    margin: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #ffffff;
    gap: 24px;
}

@media screen and (max-width: 899px) {
    .css-lqzyi5 {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        -webkit-justify-content: end;
        justify-content: end;
        margin: 0;
    }
}

.css-an3xli {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    font-family: 'Changa', sans-serif !important;
    text-transform: uppercase;
    color: #e1e5ee;
    -webkit-transition: height 0.3s;
    transition: height 0.3s;
    position: relative;
}

.css-an3xli:hover .underline {
    background: #ff6a39;
    height: 2px;
    left: 0;
}

.css-an3xli:active {
    color: #ff6a39;
}

.css-an3xli:active .underline {
    background: #ff6a39;
    height: 2px;
    left: 0;
}

.css-an3xli.active .underline {
    background: #ff6a39;
    height: 2px;
    left: 0;
}

@media screen and (max-width: 899px) {
    .css-an3xli {
        display: none;
    }
}

.css-th6fei {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    background: #ff6a39;
    width: 100%;
    -webkit-transition: height 0.3s;
    transition: height 0.3s;
}

@media screen and (max-width: 899px) {
    .css-th6fei {
        display: none;
    }
}

.css-r2sx70 {
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    width: 24px;
    height: 24px;
}

.css-1tssrit {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    color: #e1e5ee;
    -webkit-transition: height 0.3s;
    transition: height 0.3s;
    position: relative;
}

.css-1tssrit:hover .underline {
    background: #ff6a39;
    height: 2px;
    left: 0;
}

.css-1tssrit:active:active {
    color: #ff6a39;
}

.css-1tssrit:active .underline {
    background: #ff6a39;
    height: 2px;
    left: 0;
}

.css-9qr6hs {
    position: absolute;
    top: 32px;
    inset-inline-end: 32px;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    width: 28px;
    height: 28px;
}

.css-9qr6hs svg {
    color: #ffffff;
    font-size: 3.2rem;
}

@media screen and (min-width: 900px) {
    .css-9qr6hs {
        display: none;
    }
}

.css-9qr6hs .line {
    -webkit-transition: 0.3s;
    transition: 0.3s;
    width: 28px;
    height: 4px;
    background-color: #ffffff;
    position: absolute;
    left: 4px;
}

.css-9qr6hs .line-a {
    top: 5px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}

.css-9qr6hs .line-b {
    top: 15px;
    opacity: 1;
}

.css-9qr6hs .line-c {
    top: 25px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}

.css-p2upxh {
    color: #ffffff;
    width: 100% !important;
    text-align: center;
    color: undefined;
}

.css-scoelx {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    margin-bottom: 32px;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
}

.css-scoelx strong {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    font-weight: 300;
}

.css-1wxb4u1 {
    box-sizing: border-box;
    margin: 0;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 100%;
    position: relative;
    padding: 80px 50px 80px;
}

@media (min-width:600px) {
    .css-1wxb4u1 {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }
}

@media (min-width:900px) {
    .css-1wxb4u1 {
        -webkit-flex-basis: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 50%;
    }
}

@media (min-width:1200px) {
    .css-1wxb4u1 {
        -webkit-flex-basis: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 50%;
    }
}

@media (min-width:1536px) {
    .css-1wxb4u1 {
        -webkit-flex-basis: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 50%;
    }
}

@media screen and (max-width: 899px) {
    .css-1wxb4u1 {
        padding: 80px 50px 80px;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        -webkit-justify-content: start;
        justify-content: start;
    }
}

.css-1lzrdpk {
    z-index: 20;
    margin: auto !important;
    position: relative;
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    margin: 2px;
    padding: 8px 24px;
    background-color: #FFD26A;
    color: #1D1D1B;
    cursor: pointer;
}

.css-1lzrdpk:has(svg) {
    -webkit-padding-end: 8px;
    padding-inline-end: 8px;
}

.css-1lzrdpk svg {
    margin-inline: 8px;
    -webkit-transition: margin 0.2s ease-in;
    transition: margin 0.2s ease-in;
}

.css-1lzrdpk:hover {
    border-radius: 4px;
    margin: 0;
}

.css-1lzrdpk:hover svg {
    -webkit-margin-end: 0;
    margin-inline-end: 0;
    -webkit-margin-start: 16px;
    margin-inline-start: 16px;
}

.css-1lzrdpk[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

.css-1lzrdpk[disabled]:hover svg {
    margin-inline: 8px;
}

.css-1lzrdpk:hover {
    border: 2px solid #FFD26A;
}

.css-1lzrdpk:active {
    background-color: #1D1D1B;
    border: 2px solid #1D1D1B;
    color: #FFD26A;
}

.css-1lzrdpk svg {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}

.css-r2wt59 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

.css-zgnl1z {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    margin-bottom: 32px;
    margin-bottom: 32px;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
}

.css-zgnl1z strong {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    font-weight: 300;
}

.css-1pp2eok {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 130%;
    margin-bottom: 24px;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
}

.css-1kiuamn {
    color: #FFFFFF;
    width: 100% !important;
    text-align: center;
}

.css-42e7fn {
    display: none;
    z-index: 5;
    position: absolute;
    left: 0;
    top: -75px;
    min-width: 100%;
    height: 153px;
}

@media screen and (max-width: 899px) {
    .css-42e7fn {
        display: block;
    }
}

.css-tfjqlz {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
    position: absolute;
    inset-inline-start: calc(100% - 74px);
    top: 0;
    width: 153px;
    height: 409px;
    -webkit-filter: brightness(0);
    filter: brightness(0);
    min-height: 100%;
}

@media screen and (max-width: 899px) {
    .css-tfjqlz {
        display: none;
    }
}

.css-ec8s0e {
    display: none;
    z-index: 5;
    position: absolute;
    left: 0;
    top: calc(100% - 73px);
    width: 100%;
    height: 153px;
}

@media screen and (max-width: 899px) {
    .css-ec8s0e {
        display: block;
    }
}

.css-s9k4ev {
    padding: 80px 0px;
    position: relative;
    z-index: 6;
    background: url(https://therig.sa/rust/yellow.webp);
}

@media screen and (max-width: 899px) {
    .css-s9k4ev {
        padding: 60px 0;
        -webkit-background-position: center;
        background-position: center;
    }
}

.css-atvliv {
    padding-inline: 60px !important;
    text-align: center;
}

@media screen and (max-width: 899px) {
    .css-atvliv {
        padding-inline: 24px !important;
    }
}

.css-1afftjp {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    padding-inline: 60px !important;
    text-align: center;
}

@media (min-width:600px) {
    .css-1afftjp {
        padding-left: 24px;
        padding-right: 24px;
    }
}

@media (min-width:1200px) {
    .css-1afftjp {
        max-width: 1200px;
    }
}

@media screen and (max-width: 899px) {
    .css-1afftjp {
        padding-inline: 24px !important;
    }
}

.css-18ua6wv {
    --Grid-columns: 12;
    --Grid-columnSpacing: 0px;
    --Grid-rowSpacing: 0px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    min-width: 0;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2);
}

.css-1ddtvp {
    --Grid-columns: 12;
    --Grid-columnSpacing1: var(--Grid-columnSpacing);
    --Grid-rowSpacing1: var(--Grid-rowSpacing);
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    width: calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing1));
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    min-width: 0;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: calc(var(--Grid-rowSpacing1) / -2) calc(var(--Grid-columnSpacing1) / -2);
    padding: calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);
    -webkit-align-items: end;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: end;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

@media (min-width:600px) {
    .css-1ddtvp {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing1));
    }
}

@media (min-width:900px) {
    .css-1ddtvp {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing1));
    }
}

.css-1u87g9e {
    min-width: 0;
    box-sizing: border-box;
    padding: calc(var(--Grid-rowSpacing1) / 2) calc(var(--Grid-columnSpacing1) / 2);
}

@media (min-width:600px) {
    .css-1u87g9e {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns));
    }
}

@media (min-width:900px) {
    .css-1u87g9e {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: calc(100% * 12 / var(--Grid-columns));
    }
}

.css-gwujtp {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 52px;
    font-weight: 700;
    color: #1D1D1B;
    margin-bottom: 16px;
    line-height: 52px;
    text-transform: uppercase;
}

.css-1szq56c {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 3.3rem;
    font-weight: 300;
    color: #1D1D1B;
    margin-bottom: 32px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}

@media screen and (max-width: 899px) {
    .css-1szq56c {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }
}

.css-qrtf8u {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 50%;
    margin: auto;
    -webkit-padding-start: 0;
    padding-inline-start: 0;
    margin: auto;
    background: rgba(112, 78, 0, 0.2);
    border: 1px solid transparent;
}

@media screen and (max-width: 1199px) {
    .css-qrtf8u {
        width: 80%;
        max-width: 550px;
    }
}

@media screen and (max-width: 599px) {
    .css-qrtf8u {
        display: block;
        width: 100%;
    }
}

.css-f70s96 {
    width: 100%;
    border: none;
    background-color: white;
    margin: 0 6px 0 0;
    -webkit-padding-start: 20px;
    padding-inline-start: 20px;
    font-family: 'Changa', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    border-radius: 2px;
}

.css-f70s96::-webkit-input-placeholder {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: #1D1D1B;
}

.css-f70s96::-moz-placeholder {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: #1D1D1B;
}

.css-f70s96:-ms-input-placeholder {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: #1D1D1B;
}

.css-f70s96::placeholder {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: #1D1D1B;
}

.css-f70s96:focus {
    outline: none;
}

@media screen and (max-width: 599px) {
    .css-f70s96 {
        height: 42px;
        margin-bottom: 12px;
    }
}

.css-ilix0n {
    font-family: 'Changa', sans-serif !important;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    margin: 2px;
    padding: 8px 24px;
    background-color: #1D1D1B;
    color: #FFFFFF;
    padding: 9px 24px !important;
    margin-left: 8px;
    margin-right: 0px;
    border-radius: 2px;
}

.css-ilix0n:has(svg) {
    -webkit-padding-end: 8px;
    padding-inline-end: 8px;
}

.css-ilix0n svg {
    margin-inline: 8px;
    -webkit-transition: margin 0.2s ease-in;
    transition: margin 0.2s ease-in;
}

.css-ilix0n:hover {
    border-radius: 4px;
    margin: 0;
}

.css-ilix0n:hover svg {
    -webkit-margin-end: 0;
    margin-inline-end: 0;
    -webkit-margin-start: 16px;
    margin-inline-start: 16px;
}

.css-ilix0n[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

.css-ilix0n[disabled]:hover svg {
    margin-inline: 8px;
}

.css-ilix0n:hover {
    border: 2px solid #1D1D1B;
}

.css-ilix0n:active {
    color: #FFC845;
}

.css-ilix0n svg {
    margin-inline: 0px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}

@media screen and (max-width: 599px) {
    .css-ilix0n {
        width: 100%;
        margin: 0px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
}

.css-ilix0n:hover {
    border: 2px solid #FFD26A;
    margin-left: auto;
}

.css-ilix0n:active {
    color: #FFD26A;
}

.css-hd3g63 {
    height: 27px;
}

.css-6flbmm {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 2.1875rem;
}
         `,
          }}
        />

        <script defer src="https://therig.sa/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js" />
        <script defer src="https://therig.sa/_next/static/chunks/webpack-7d607ad0e350eccb.js" />
        <script defer src="https://therig.sa/_next/static/chunks/framework-2c79e2a64abdb08b.js" />
        <script defer src="https://therig.sa/_next/static/chunks/main-2c344dd1b37f0ea7.js" />
        <script defer src="https://therig.sa/_next/static/chunks/pages/_app-c3938ff6c057bd4f.js" />
        <script defer src="https://therig.sa/_next/static/chunks/699-9c5e8f6d198c60f4.js" />
        <script defer src="https://therig.sa/_next/static/chunks/666-5a3c37bd48f296b8.js" />
        <script defer src="https://therig.sa/_next/static/chunks/440-d2f921bfebaf65be.js" />
        <script defer src="https://therig.sa/_next/static/chunks/513-dd1af0ac0d6287e7.js" />
        <script defer src="https://therig.sa/_next/static/chunks/435-10742e896af78f21.js" />
        <script defer src="https://therig.sa/_next/static/chunks/420-eafb122c24c6e0b1.js" />
        <script defer src="https://therig.sa/_next/static/chunks/258-f4e4822d18206e1d.js" />
        <script defer src="https://therig.sa/_next/static/chunks/484-dbf94c26d8162048.js" />
        <script defer src="https://therig.sa/_next/static/chunks/pages/index-f68afcea7b094900.js" />
        <script
          defer
          src="https://therig.sa/_next/static/1A9z0Ik3x0u_Errt0Chgc/_buildManifest.js"
        />
        <script defer src="https://therig.sa/_next/static/1A9z0Ik3x0u_Errt0Chgc/_ssgManifest.js" />
        <style data-href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap">
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:300;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwA_JxhTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:400;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:500;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:700;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:300;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:300;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:400;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:400;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:500;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:500;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:700;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:700;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
        </style>
        <style data-href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400;500;600;700;800&display=swap">
          @font-face
          {`font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ_OxQjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ62xQjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ5-xQjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ3O2QjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ0q2QjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZy22QjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
        </style>
        <style data-href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700&display=swap">
          @font-face
          {`font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-W1c.woff) format('woff')}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hNI-W1c.woff) format('woff')}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hAc5W1c.woff) format('woff')}@font-face{font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscQyyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscSCyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscRiyS8p4_RA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscQyyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscSCyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscRiyS8p4_RA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscQyyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscSCyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscRiyS8p4_RA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
        </style>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        {route && <Placeholder name="headless-header" rendering={route} />}

        <main>{route && <Placeholder name="headless-main" rendering={route} />}</main>

        {route && <Placeholder name="headless-footer" rendering={route} />}

        <div className="css-dy1auj">
          <div className="Toastify"></div>
        </div>
      </div>

      {/* <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317"
        integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA=="
        data-cf-beacon='{"rayId":"8643e4970aa42a34","version":"2024.2.4","token":"95d0ff46ebca47c7886903eb9234d320"}'
        crossOrigin="anonymous"
      /> */}

      <script defer src="https://therig.sa/_next/static/chunks/407-0b701f93c1c45baa.js" />
      <script defer src="https://therig.sa/_next/static/chunks/45-1e62ff89a816174c.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/about-497fe4ec30a7d93e.js" />
      <script defer src="https://therig.sa/_next/static/chunks/190-83c08bc2ec5e0bdf.js" />
      <script defer src="https://therig.sa/_next/static/chunks/641-ef09a6859b1428bb.js" />
      <script defer src="https://therig.sa/_next/static/chunks/707-550c01aaec79d951.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/press-29017a85477a96af.js" />
      <script defer src="https://therig.sa/_next/static/chunks/709-0789c51d73337628.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/privacy-7e9a0d88da107ada.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/terms-2f117c12cb0c5b79.js" />
      <script
        defer
        src="https://therig.sa/_next/static/chunks/pages/cookie_policy-5e6fcb9973ae9093.js"
      />
    </>
  );
};

export default Layout;
