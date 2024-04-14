// import { ConnectWallet, Web3Button, useAddress, useConnect, useContract, useContractRead } from "@thirdweb-dev/react";
// import styles from "../../styles/Home.module.css";
// import Image from "next/image";
// import { NextPage } from "next";

// const Home: NextPage = () => {
//   const address = useAddress();
//   // const contractAddress = "0x2d15390e57B7af6Be800c3818dDfB4dd03B65e1b";
//   const contractAddress = "0x3C25E99abB35007Dd4e3d0BC0dA2f92899351237";

//   const { contract } = useContract(contractAddress);
//   const { data: proposals, isLoading: proposalsLoading } = useContractRead(contract, "proposals", [0]);
//   const { data: hasVoted, isLoading: hasVotedLoading } = useContractRead(contract, "hasVoted", [0, address]);

//   return (
//   <div className={styles.container}>
//     <main className={styles.main}>
//       <div className={styles.card}>
//         <title>Voting Page</title>
//         <ConnectWallet/>
//         <h1>Voting Dapp</h1>
//         <div>
//           {address?(
//             <div>
//               {proposalsLoading?(
//                 <div>
//                   <p>Loading proposal...</p>
//                 </div>
//               ):(
//                 <div>
//                   <h2>{proposals[0]}</h2>
//                   <div>
//                     <Web3Button
//                       contractAddress={contractAddress}
//                       action= {(contract) => contract.call("vote", [0, true])}
//                       isDisabled = {hasVoted}
//                     >Yes</Web3Button>
//                     <br/>
//                     <Web3Button 
//                       contractAddress={contractAddress}
//                       action= {(contract) => contract.call("vote", [0, false])}
//                       isDisabled = {hasVoted}
//                     >No</Web3Button>
//                   </div>
//                   <div>
//                     {!hasVotedLoading && hasVoted ? (
//                       <div>
//                         <h3>Results:</h3>
//                         <p>Yes: {proposals[1].toNumber()}</p>
//                         <p>No: {proposals[2].toNumber()}</p>
//                       </div>
//                     ):(
//                       <div>
//                         <p>You have not voted yet.</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ):(
//             <div>
//               <p>Please Connect wallet</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   </div>
//   );
// };

// export default Home;

//     // "deploy": "next build && next export && npx thirdweb@latest upload out",

import { ConnectWallet, Web3Button, useAddress, useConnect, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  // const contractAddress = "0x2d15390e57B7af6Be800c3818dDfB4dd03B65e1b";
  const contractAddress = "0xeE2Dd447A6a140df92248A122288D7e9ca4159F8";

  const { contract } = useContract(contractAddress);
  const { data: proposals, isLoading: proposalsLoading } = useContractRead(contract, "proposals", [0]);
  const { data: hasVoted, isLoading: hasVotedLoading } = useContractRead(contract, "hasVoted", [0, address]);

  return (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.card}>
        <title>Voting Page</title>
        <ConnectWallet/>
        <h1>Voting Dapp</h1>
        <div>
          {address?(
            <div>
              {proposalsLoading?(
                <div>
                  <p>Loading proposal...</p>
                </div>
              ):(
                <div>
                  <h2>{proposals[0]}</h2>
                  <div>
                    <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 0])}
                      isDisabled = {hasVoted}
                    >Candidate 1</Web3Button>
                    <br/>
                    <Web3Button 
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 1])}
                      isDisabled = {hasVoted}
                    >Candidate 2</Web3Button>
                    <br/>
                    <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 2])}
                      isDisabled = {hasVoted}
                    >Candidate 3</Web3Button>
                    <br/>
                    <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 3])}
                      isDisabled = {hasVoted}
                    >Candidate 4</Web3Button>
                  </div>
                  <div>
                    {!hasVotedLoading && hasVoted ? (
                      <div>
                        <h3>Results:</h3>
                        <p>Candidate 1: {proposals[1].toNumber()}</p>
                        <p>Candidate 2: {proposals[2].toNumber()}</p>
                        <p>Candidate 3: {proposals[3].toNumber()}</p>
                        <p>Candidate 4: {proposals[4].toNumber()}</p>
                      </div>
                    ):(
                      <div>
                        <p>You have not voted yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ):(
            <div>
              <p>Please Connect wallet</p>
            </div>
          )}
        </div>
      </div>
    </main>
  </div>
  );
};

export default Home;

    // "deploy": "next build && next export && npx thirdweb@latest upload out",
