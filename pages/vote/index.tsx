import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, Box, Typography, Divider, Stack, useTheme, useMediaQuery } from '@mui/material';
import { ConnectWallet, Web3Button, useAddress, useConnect, useContract, useContractRead } from "@thirdweb-dev/react";
import Image from 'next/image'
import styles from "../../styles/Home.module.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function IntroDivider() {
  const theme = useTheme();
  const address = useAddress();
  const contractAddress = "0xeE2Dd447A6a140df92248A122288D7e9ca4159F8";
  const { contract } = useContract(contractAddress);
  const { data: proposals, isLoading: proposalsLoading } = useContractRead(contract, "proposals", [0]);
  const { data: hasVoted, isLoading: hasVotedLoading } = useContractRead(contract, "hasVoted", [0, address]);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={darkTheme}>
      {address?(
        <div>
          {proposalsLoading?(
            <div>
               <Stack sx={{padding: 2 }}  spacing={5}  justifyContent="space-between" alignItems="center">
                <h2>Loading proposal...</h2>
              </Stack>
            </div>
          ):(
          <Stack sx={{padding: 2 }}  spacing={5}  justifyContent="space-between" alignItems="center">
            <h2>{proposals[0]}</h2>
          </Stack>
          )}
        </div>
      ):(
        <div>
          <Stack direction={isMobile ? 'column' : 'row'} sx={{padding: 2 }}  spacing={5}  justifyContent="space-between" alignItems="center">
            <h2>Please Connect wallet</h2>
            <ConnectWallet/>
          </Stack>
        </div>
      )}

            
      <Stack direction={isMobile ? 'column' : 'row'} sx={{padding: 2 }}  spacing={5}  justifyContent="space-between" alignItems="center">
        <Card variant="outlined" sx={{ maxWidth: isMobile ? '100%' : 360}}>
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="image-container">
              <Image 
                src='https://www.webcoderskull.com/img/team4.png' 
                alt="Profile Picture" // Add alt text for accessibility
                width={270} // Replace with desired width in pixels
                height={280} // Replace with desired height in pixels
              />
            </div>
            <Typography sx={{padding: 2}} gutterBottom variant="h5" component="div" align="center">
              Marat Tulegenov
            </Typography>
            <Typography color="text.secondary" variant="body2" align="center" className='card-description'>
            Economist who backs a practical economy, prioritizing community development and growth over corporate greed.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {address?(
              hasVoted?(
                <div>
                  <h3>Score: {proposals[1].toNumber()}</h3>
                </div>
              ):
              (
                <div>
                  <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 0])}
                      isDisabled = {hasVoted}>
                    Candidate 1
                  </Web3Button>
                </div>
              )
            ):(
              <p>To vote please connect wallet</p>
            )}
          </Box>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: isMobile ? '100%' : 360}}>
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="image-container">
              <Image 
                src='https://i.ibb.co.com/t3fCg8L/Untit.png' 
                alt="Profile Picture" // Add alt text for accessibility
                width={270} // Replace with desired width in pixels
                height={280} // Replace with desired height in pixels
              />
            </div>
            <Typography sx={{padding: 2}} gutterBottom variant="h5" component="div" align="center">
            Aigerim Rakhim
            </Typography>
            <Typography color="text.secondary" variant="body2" align="center" className='card-description'>
            Famous labor leader, known for her passionate support of workers rights and cooperative ownership for big production.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {address?(
              hasVoted?(
                <div>
                  <h3>Score: {proposals[2].toNumber()}</h3>
                </div>
              ):
              (
                <div>
                  <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 1])}
                      isDisabled = {hasVoted}>
                    Candidate 1
                  </Web3Button>
                </div>
              )
            ):(
              <p>To vote please connect wallet</p>
            )}
          </Box>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: isMobile ? '100%' : 360}}>
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="image-container">
              <Image 
                src='https://www.webcoderskull.com/img/team1.png' 
                alt="Profile Picture"
                width={270} // Replace with desired width in pixels
                height={280} // Replace with desired height in pixels
              />
            </div>
            <Typography sx={{padding: 2}} gutterBottom variant="h5" component="div" align="center">
              Yerlan Omarov
            </Typography>
            <Typography color="text.secondary" variant="body2" align="center" className='card-description'>
            Engineer with a socialist vision for tech, driven by fair access to technology and renewable energy.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {address?(
              hasVoted?(
                <div>
                  <h3>Score: {proposals[3].toNumber()}</h3>
                </div>
              ):
              (
                <div>
                  <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 2])}
                      isDisabled = {hasVoted}>
                    Candidate 2
                  </Web3Button>
                </div>
              )
            ):(
              <p>To vote please connect wallet</p>
            )}
          </Box>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: isMobile ? '100%' : 360}}>
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="image-container">
              <Image 
                src='https://i.ibb.co.com/RQn4PdG/example-image-1.png' 
                alt="Profile Picture" // Add alt text for accessibility
                width={270} // Replace with desired width in pixels
                height={280} // Replace with desired height in pixels
              />
            </div>
            <Typography sx={{padding: 2}} gutterBottom variant="h5" component="div" align="center">
              Saule Akhimova
            </Typography>
            <Typography color="text.secondary" variant="body2" align="center" className='card-description'>
             Emphasizes ecological sustainability and environmental protection. Advocates for a green transition. 
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {address?(
              hasVoted?(
                <div>
                  <h3>Score: {proposals[4].toNumber()}</h3>
                </div>
              ):
              (
                <div>
                  <Web3Button
                      contractAddress={contractAddress}
                      action= {(contract) => contract.call("vote", [0, 3])}
                      isDisabled = {hasVoted}>
                    Candidate 4
                  </Web3Button>
                </div>
              )
            ):(
              <p>To vote please connect wallet</p>
            )}
          </Box>
        </Card>
      </Stack>
    </ThemeProvider>
  );
}
