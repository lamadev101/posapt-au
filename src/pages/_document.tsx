/** @format */

import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const gtmTags = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WC6VWJ3');`;

  const gtag = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-QM35YBD0EJ');`;

  return (
    <Html lang="en">
      <Head>
        <>
          <script dangerouslySetInnerHTML={{ __html: gtmTags }} />
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-QM35YBD0EJ"></script>
          <script dangerouslySetInnerHTML={{ __html: JSON.stringify(gtag) }} />
          <link href="/assets/dist/css/bootstrap.min.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />
          {/* <link href="carousel.css" rel="stylesheet" /> */}
          <link href="/assets/dist/css/style.css" rel="stylesheet" />
          <link href="/assets/dist/css/custom.css" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="96x96" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="128x128" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="192x192" href="/favicon.ico" />

          {/* <!-- Custom styles for this template --> */}
          <link href="assets/dist/swiper/swiper-bundle.min.css" rel="stylesheet" />

          {/* <!-- Custom styles for this template --> */}
          <link href="carousel.css" rel="stylesheet" />

          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
            integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
            defer
          ></script> */}
          <script src="/assets/dist/js/bootstrap.bundle.min.js" defer></script>
          
          {/* <script src="assets/dist/swiper/swiper-bundle.min.js" defer></script>
          <script src="assets/dist/js/main.js" defer></script> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                $(window).on('scroll', function() {
                  if ($(window).scrollTop() > 95) {
                      $('.mobfoot').show();
                  } else {
                      $('.mobfoot').hide();
                  }
                });
              `,
            }}
          />
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WC6VWJ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
