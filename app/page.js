import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          &nbsp;
          <code className={styles.code}></code>
        </p>
        <div>
          <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        </div>
      </div>

      <div className={styles.center}>
        

        <iframe
          src="https://bafybeic54udbggbhtn7nfjrrj7elrim4shfped7c3cco7neset7fdwpwmu.gateway.ipfscdn.io/erc1155.html?contract=0x65D8A98596D25Df1700F6258183791E070ebD195&chain=%7B%22name%22%3A%22Cronos+Mainnet+Beta%22%2C%22chain%22%3A%22CRO%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcronos-beta.rpc.thirdweb.com%2Fa8a7f8aa7ddd8115bad1892b179be99f%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Cronos%22%2C%22symbol%22%3A%22CRO%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22cro%22%2C%22chainId%22%3A25%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22cronos-beta%22%7D&tokenId=0&theme=dark&primaryColor=cyan"
          width="600px"
          height="600px"
          style={{ maxWidth: '100%' }} // Replace the string with an object
          frameBorder="0"
        ></iframe>
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.sycoticsociety.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            FREE🪙COIN<span>-&gt;</span>
          </h2>
          <p>Official digital asset of Sycotic💢Society</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           <span>-&gt;</span>
          </h2>
          <p>
        
          </p>
        </a>
      </div>
    </main>
  )
}
  
