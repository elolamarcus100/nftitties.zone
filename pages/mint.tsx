import { useContract, useContractRead, useAddress, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import mypic from './assets/NFTittiesWords.png';
import BR0 from './assets/BR0image.png';
import BLUES from './assets/TittyTicket.png';
import Head from "next/head";

import { useState } from "react";

const Home: NextPage = () => {  
  
  const contractAddress = "0x53A5de81c077a05E04C707Fa5DFab691f5602d3a"
  const type = "nft-drop"


  const { contract: goal } = useContract(
    contractAddress, type
  );


  const address = useAddress();
  const [quantity, setQuantity] = useState("0");
  const { data: price } = useContractRead(goal, "priceForAddress", address, quantity);

  //Total Contracts Minted
  const { data: sup } = useContractRead(goal, "totalSupply");

  const { data: name } = useContractRead(goal, "name")
  const { data: cost } = useContractRead(goal, "pricePerToken")  


  return (
    <div className={styles.container}>
      <Head>
          <title>Mint</title>
          <meta name="description" content="A place for you to view the details about and mint our newest project."/>
          <meta property="og:title" content="Mint"/>
          <meta property="og:description" content="A Place For You To Mint Our Newest Project"/>
          <meta property="og:url" content="nftitties.zone/mint"/>
          <meta property="og:type" content="website"/>

      </Head>
      <main className={styles.main}>

    
        <br></br>

        <button className={styles.buttonAzd}
          onClick={async () => {
            location.href='./';
          } }
          ><Image className={styles.logoTIT} src={mypic} alt="Loading..." width={350}/>
        </button>
        <br/>
        <button className={styles.buttonAz}
          onClick={async () => {
            location.href='./myNFTitties';
          } }
        >My NFTitties</button>
        
        <br/>
        <div className={styles.item}>
          <h1 className={styles.titlesA}>{name}</h1>

        <Image src={BLUES} alt="Loading..." width={350} className={styles.bctrl1}/>

          <p className={styles.aboutAG} >{(cost?.toString()/1000000000000000000)} ETH
           </p>
           <p className={styles.aboutA1} >
            Members of the NFTitties Exclusive Collection maintain an All Access Pass to Events. Members will periodically be chosen at random to receive Airdrops with free NFTs, & Merchandise. This is an Exclusive Collection NFT, in limited supply, & will not be minted in further supply.
            <br/>
            <br/>
            Utility: 
            <br/>
            - Serves As An All Access VIP Pass To Every NFTitties Event 
            <br/>
            - Provides Exclusive Networking Opportunities With NFTitties Photographer & Model Community
            <br/>
            - Gives Automatic Entries To NFT Giveaways & Airdrop Contests
            <br/>
            - Allows Inside Access & Collaboration With NFTittes Team
            </p>
        </div>
        
  <label >
            QuanTitty: <br/>
            <input className={styles.labe}
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <p className={styles.aboutAG}>
              Amount Already Minted: {sup == "20" ? "All Gone" : sup?.toString() + " / 20"}
            </p>
            <p className={styles.aboutAG}>
              Maximum Total To Exist: 200
            </p>
          </label>

        <div>
        <Web3Button
      contractAddress={contractAddress}
      action={(contract) => {
        contract.call('claim', address, quantity, {
          value: price,
        });
      }}
    >
      Mint For: {price == "0" ? "Increase QuanTitty" : (price?.toString()/1000000000000000000) + " ETH" }

    </Web3Button>
        </div>

        <p>Copyright © 2023 NFTitties</p>
        
      </main>
    </div>
  );
};

export default Home;