import { ConnectWallet, Web3Button, useAddress, useConnect, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";


const Home: NextPage = () => {
  const address = useAddress();
  // const contractAddress = "0x2d15390e57B7af6Be800c3818dDfB4dd03B65e1b";
  const contractAddress = "0x3C25E99abB35007Dd4e3d0BC0dA2f92899351237";

  const { contract } = useContract(contractAddress);
  const { data: proposals, isLoading: proposalsLoading } = useContractRead(contract, "proposals", [0]);
  const { data: hasVoted, isLoading: hasVotedLoading } = useContractRead(contract, "hasVoted", [0, address]);

  return (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.card}>
      <title>Voting Page</title>
        <h1>Voting Dapp</h1>
        <ConnectWallet/>
          {address?(
            <div style={{padding: "1em"}}>
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
                      action= {(contract) => contract.call("vote", [0, true])}
                    >Yes</Web3Button>
                    <br/>
                    <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, false])}
                    >No</Web3Button>
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
    </main>
  </div>
  );
};

export default Home;

    // "deploy": "next build && next export && npx thirdweb@latest upload out",


  //   <div>
  //   <Navbar expand="lg" className="bg-body-tertiary">
  //   <Container>
  //   <Navbar.Brand href="#home">
  //     <img
  //       alt=""
  //       src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/128/external-voting-politics-xnimrodx-lineal-color-xnimrodx.png"
  //       width="50"
  //       height="50"
  //       className="d-inline-block align-top"
  //     />{' '}
  //     Electronic Voting System
  //   </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="me-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#link">Link</Nav.Link>
  //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.2">
  //             Another action
  //           </NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item href="#action/3.4">
  //             Separated link
  //           </NavDropdown.Item>
  //         </NavDropdown>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  // </div>