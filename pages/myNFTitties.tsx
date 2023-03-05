import { ConnectWallet, useContract, ThirdwebNftMedia, useNFTs, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import mypic from './assets/NFTittiesWords.png';
import Head from "next/head";


const Home: NextPage = () => {
  const address = "0x53A5de81c077a05E04C707Fa5DFab691f5602d3a"
  // const address2 = "0xdF65f1843167fE7060064A8559eB8907Dce570c8"
  // const address3 = "0x87bC5A104cD64e3492DA9D2315e0873d27b7e747"
  const drop = "nft-drop"
  // const collection = "nft-collection"

  
  const { contract: num1 } = useContract(
    address, drop
  )
  
  // const {contract: num2 } = useContract(
  //   address2, drop
  // )

  const { data: nfts } = useNFTs(num1, { start: 0, count: 100 });

  // const { data: nfts2 } = useNFTs(num2, { start: 0, count: 100 });


  const wallet = useAddress();

  return (
    <div className={styles.container}>
      <Head>
          <title>NFTitties.Zone</title>
          <meta name="description" content="A NFT Marketplace for High Class Nude Photography & Digital Art. 25% of ALL NFTitties profit is donated to Breast Cancer Research."/>
          <meta property="og:title" content="NFTitties.Zone"/>
          <meta property="og:description" content="NFT Marketplace for High Class Nude Photography & Digital Art"/>
          <meta property="og:url" content="nftitties.zone"/>
          <meta property="og:type" content="website"/>
          <link rel="icon" href="/favcon.ico" />
      </Head>
      <main className={styles.main}>


        <button className={styles.buttonAzd}
          onClick={async () => {
            location.href='./';
          } }
          ><Image className={styles.logoTIT} src={mypic} alt="Loading..." width={350}/>
        </button>

        

        <br></br>
       
        
        <div className={styles.connect}>
          <ConnectWallet />
        </div>



<div>

{nfts && nfts?.length > 0 && (
  <div> 
  <div className={styles.grid}>

  {nfts
  .filter((nft) => nft.owner == wallet)
  .map((nft) => (
    <div key={nft.metadata.id.toString()} className={styles.item}>
      <h1 className={styles.titlesA}>{nft.metadata.name}</h1>
      <ThirdwebNftMedia className={styles.imageAL} metadata={nft.metadata} />
      <p className={styles.aboutA} >{nft.metadata.description}</p>
    </div>
  ))}

  {/* {nfts2 && nfts2?.length > 0 && (
  <div> 
      <div className={styles.grid}>
  {nfts2
  .filter((nft) => nft.owner == wallet)
  .map((nft) => (
    <div key={nft.metadata.id.toString()} className={styles.item}>
      <h1 className={styles.titlesA}>{nft.metadata.name}</h1>
      <ThirdwebNftMedia className={styles.imageAL} metadata={nft.metadata} />
      <p className={styles.aboutA} >{nft.metadata.description}</p>
    </div>
  ))}

  </div> 
  </div>
)} */}
  </div> 
  </div>
)}

</div>
<p>Copyright © 2023 NFTitties</p>

      </main>
    </div>
  );
};

export default Home;

