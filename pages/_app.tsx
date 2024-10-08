import type { AppProps } from "next/app";
import { ThirdwebProvider} from "@thirdweb-dev/react";
import { BinanceTestnet } from "@thirdweb-dev/chains";

import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance-testnet";
const clientid = "64b5937a7c5aac8c6937fb007f3481a0";


function Voting({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={BinanceTestnet}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );  
}

export default Voting;
