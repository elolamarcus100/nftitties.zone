import { MediaRenderer, useActiveListings, useContract, useContractRead, useAddress, Web3Button} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import mypic from './assets/NFTittiesWords.png';
import { BigNumber } from "ethers";
import BR from './assets/BRimage.png';
import BR0 from './assets/BR0image.png';
import React, {useState} from "react";
import Link from "next/link";
import { useRouter, Router } from "next/router";
import BLUES from './assets/TittyTicket.png';
import IG from './assets/IGICON.png';
import DC from './assets/DiscordIC.png';
import TC from './assets/TwitterIC.png';
import CookieConsent from "react-cookie-consent";
import BR1 from './assets/BR1image.png'



const Home: NextPage = () => {
  const { contract: c1 } = useContract(
    "0xac47b2804D6fDbD5f00430Eb8d79694ce3AFACbf", "marketplace"
  );
  const contractAddress = "0x53A5de81c077a05E04C707Fa5DFab691f5602d3a"
  const type = "nft-drop"

  const { contract: c2 } = useContract(
    contractAddress
  );
  const router = useRouter();
  const { data: nfts, isLoading } = useActiveListings(c1);

  const address = useAddress();
  const quantity = 1;

  const { data: name } = useContractRead(c2, "name");
  const { data: price } = useContractRead(c2, "priceForAddress", address, quantity);


  const [modal, setModal] = useState(true);

const toggleModal = () => {
    setModal(!modal)
}
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    
      <CookieConsent
      debug={false}
      location="top"
      style={{ 
        background: "#2B373B",
        borderRadius: "8px",
        height: "650px",
      }}
      buttonStyle={{ color: "white", backgroundColor:"black", fontSize: "14px", borderRadius: "8px", width: "120px", height: "30px"}}
      expires={30}
      buttonText="I am 18+"
      >
      <br/>
      Our marketplace is intended for a mature audience.
      <br/>
      <br/>
      This content should only be viewed & interacted with if you are 18+. 
      <br/>
      <br/>
      We Use Cookies to remember your Age, please see our <Link href="./privacyPolicy">Privacy Policy</Link> for more details.
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className={styles.nubie}>
      </div>
       </CookieConsent>


    
        <Image src={BR} alt="Loading..." width={350}/>

        <h1 className={styles.title} >
          Welcome To
        </h1>

        <br></br>

        <button className={styles.buttonAzd}
          onClick={async () => {
            location.href='./';
          } }
          ><Image className={styles.logoTIT} src={mypic} alt="Loading..." width={350}/>
        </button>
      

        <br />

        <button className={styles.buttonAz}
          onClick={async () => {
            location.href='./myNFTitties';
          } }
        >My NFTitties</button>

        <button className={styles.buttonAz1}
          onClick={async () => {
            location.href='./mint';
          } }
        >Marketplace Coming Phase 6</button>

        <br/>
        <div className={styles.item}>
            <h1 className={styles.titlesA}>{name}</h1>

           
              <Image onClick={async () => {
            location.href='./mint';
            } } src={BLUES} alt="Loading..." width={350} className={styles.bctrl1}/>

            <p/>
            

            <div className={styles.connect}>

        <Web3Button
          contractAddress={contractAddress}
          action={(c2) => {
            c2.call('claim', address, quantity, {
              value: price,
            });
          }}
        >
          Mint One For: {price == "0" ? "Increase QuanTitty" : (price?.toString()/1000000000000000000) + " ETH" }

        </Web3Button>
        </div>
        </div>

        <br/>


        {/* <h1 className={styles.titlem} >
          Exclusive NFT Drops
        </h1>
      

      

        {!isLoading ? (
          <div>
          <div className={styles.grid}>
            {nfts && nfts.map((nft) => {
              return (               
                  <div className={styles.item}>
                  <p className={styles.titlesA}> {nft.asset.name}</p>

                  <MediaRenderer className={styles.imageA} src={nft.asset.image} width='250px' ></MediaRenderer>

                  <p className={styles.aboutA} >{nft.asset.description}</p>
                  <p>Price: {nft.buyoutCurrencyValuePerToken.displayValue} AVAX</p>

                  <div className={styles.buttonBox}>
                  <button className={styles.buttonA}
                  onClick={async () => {
                    try {
                      await c1?.buyoutListing(BigNumber.from(nft.id), 1);
                    } catch (error) {
                      console.error(error);
                      alert(error);
                    }
                  } }
                  >Buy Now</button>
                  </div>
                </div>                
              );
            })}
          </div>
            <br/>
          <h1 className={styles.titleN}>(Full Marketplace Coming Phase 6)</h1>

          </div>
        ) : (
          <div>
            Loading...
          </div>
        )} */}
        <div className={styles.socialB}>
        <button className={styles.buttonAzd}
          onClick={async () => {
            location.href='https://www.instagram.com/nftitties_zone/';
          } }
          ><Image className={styles.logoIGmain} src={IG} alt="Loading..." width={350}/>
        </button>
        <button className={styles.buttonAzd}
          onClick={async () => {
            location.href='https://discord.gg/jQ4kfeKN';
          } }
          ><Image className={styles.logoIGmain} src={DC} alt="Loading..." width={350}/>
        </button>
        <button className={styles.buttonAzd}
          onClick={async () => {
            location.href='https://twitter.com/nftitties_zone';
          } }
          ><Image className={styles.logoIGmain} src={TC} alt="Loading..." width={350}/>
        </button>
        </div>
      
        <p>Copyright © 2023 NFTitties</p>

      </main>
    </div>
  );
};

export default Home;
