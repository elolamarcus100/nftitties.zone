import type { NextPage } from "next";
import Image from 'next/image';

import styles from "../styles/Home.module.css";
import mypic from './assets/NFTittiesWords.png';
import Head from "next/head";


const Home: NextPage = () => {  
  
 
  return (
    <div className={styles.container}>
      <Head>
          <title>Privacy Policy</title>
          <meta name="description" content="At nftitties.zone, we are committed to protecting the privacy of our visitors and customers. This privacy policy explains how we collect, use, and protect your personal information when you visit our website. By visiting nftitties.zone, you agree to the terms of this privacy policy."/>
          <meta name="og:title" property="og:title" content="Privacy Policy"/>
          <meta name="og:description"property="og:description" content="By visiting nftitties.zone, you agree to the terms of this privacy policy."/>
          <meta name="og:url" property="og:url" content="nftitties.zone/privacyPolicy"/>
          <meta name="og:type" property="og:type" content="website"/>          
      </Head>
      <main className={styles.main}>
      
        <div>
        <button className={styles.buttonAzd}
          onClick={async () => {
            location.href='./';
          } }
          ><Image className={styles.logoTIT} src={mypic} alt="Loading..." width={350}/>
        </button>



            <p>
At nftitties.zone, we are committed to protecting the privacy of our visitors and customers. This privacy policy explains how we collect, use, and protect your personal information when you visit our website. By visiting nftitties.zone, you agree to the terms of this privacy policy.

Cookies

We use cookies to improve your browsing experience and personalize the content on our website. Cookies are small text files that are stored on your device when you visit our website. We use both session cookies and persistent cookies. Session cookies are deleted when you close your browser, while persistent cookies remain on your device until they expire or you delete them.

You can adjust your browser settings to refuse cookies, but this may limit certian liabilities to nfitties.zone.

How We Use Your Information

We may also use your information to send you marketing communications about our products and services, but you can opt-out of these communications at any time. (Including Air Drops)

We do not share your personal information with third parties except as necessary to provide you with our products and services, comply with applicable laws and regulations, or protect our rights and property.

Security

We take the security of your personal information seriously and have implemented appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, or misuse.

However, no system can be completely secure, and we cannot guarantee the security of your information.

Children&apos;s Privacy

Our website is not intended for children under the age of 18, and we do not knowingly collect personal information from children under the age of 18.

Changes to This Privacy Policy

We may update this privacy policy from time to time. If we make material changes to this policy, we will notify you by posting a new notice on our website.

Contact Us

If you have any questions or concerns about this privacy policy or our use of your personal information, please contact us at nftitties.contact@gmail.com. <br/>(Click on our logo to get back home if you are 18+!)
            </p>
        </div>
      </main>
    </div>
  );
};

export default Home;