import React from 'react';
import styles from '../Components/Navbar.module.css';
import Footer from './Footer';

import { Container,
  Center,
  Box,
  Text,
  Image,
  Button,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
} from '@chakra-ui/react'

const Home = () => {
  return (
    <Container>
      <Center>
         <Box>
          <Text fontSize="50px" mr={20} >Learn the skills of <br /> the future</Text>
          <Text color="grey" mt={-30} ml={-40} >Accelerate your career or business with an online <br /> digital skills course in everything from marketing <br /> to coding and beyond.</Text>
         </Box>
         <Box >
             <Image mt='100px' width="400px" height="250px"  src="https://www.comtectranslations.co.uk/wp-content/uploads/2019/04/7-steps-to-reduce-the-complexity-of-your-website-translation-project-1-1024x832.jpg"  />
         </Box>
      </Center>
      <Button bg="#174EA6" ml={-600} h={45} w={200} cursor="pointer" borderRadius={4} color="white" fontSize='18px'>Find Your Course</Button>
      <Box bg="#FBFBFC" w='100%' h='150px' >
      <Text mt={50} ml={-340}>We provide courses along with leading institutions and companies</Text>
      <Stack direction='row' gap="30px">
          <Image
            width='90px'
            height="30px"
            objectFit='cover'
            src='https://lh3.googleusercontent.com/jJZnt3_ZEgqPLoDXv9OMtmvHQ13ExWDcg4TeOruamOAm1MLaLGmzj1qwz4VBveo0Q_LCph1Idy558gyl5KHp5HDEbTxRdkzD5sGjDOjBhte3eqvw8A=w160'
            alt='Dan Abramov'
            ml={270}
          />
          <Image
            width='90px'
            height="30px"
            objectFit='cover'
            src='https://lh3.googleusercontent.com/Q3wBjzp1-TGEZWpdp-E6PSkc-nMEV66Jaokd4gUjyGh95KMqQyR1I7Gu1eSU7qifjLuiwVJrEmB92HPTa4Hr3e6Mh7JGk7zrQ8YmZ-1HQCWZpKHpzTU=w160'
            alt='Dan Abramov'
          />
          <Image
            width='90px'
            height="30px"
            objectFit='cover'
            src='https://lh3.googleusercontent.com/MVTsJCD1WJjExvucPvW4GWYHnJ6YLPgQEFijPCVpSyfIM1wAgVvW-AQghsLFZLoWgnBCYbqI3wOveQ1RdOeDf_2Sgo03A7zN8Pwd6NSsu_wBuITKdiE=w160'
            alt='Dan Abramov'
          />
          <Image
            width='90px'
            height="30px"
            objectFit='cover'
            src='https://lh3.googleusercontent.com/oDBNKrOW0hYPsQgbz7v2BAUCjUoPfuyBBaqUFGg-oify2xKieu2OjW_6C_6smen-YNlOf_CR8M3-VN5pOy_3r4VQ1FPdOUk8mrO58abJNS0RwN9_YYY=w160'
            alt='Dan Abramov'
          />
          <Image
           width='90px'
           height="30px"
           src='https://lh3.googleusercontent.com/KZYTEfg4wkORJscNEaj27bVFV83vzRB_6Kd7Fwpqnd5KipwGdqkkulHt9KPWr8oPQnHsh2zyw1tpPyKbB_HfzrG6XTeoy91EONnq9fRj6dV9p4HL_TA=w160'
           alt='Dan Abramov'
           />
       </Stack>
      </Box>
      <Box w='100%' justifyContent='space-evenly' h='150px' bg='#1A73E8' display="flex" >
          <Box w={60} mt={55} h={60} bg='white' borderRadius='50%'>
            <Image mt={20} src='https://lh3.googleusercontent.com/N9jW0_MdICcLbzV1L-JcfAXr5QaadNKtc8HgH-KPixv3J9XaSnjLkru3dZl0dfNYR12hEsDkQM_WMXtXqe_ohTSx96E7gmFHwzpXPubIJlfV3ybeTxks=-rw'  />
          </Box>
          <Box mt={10}>
            <Text ml={-310} fontSize='30px' color='white' >Did you know we also have webinars ?</Text> 
            <Text mt={-20} color='white' >Online session designed to help you develop skills in less then one hour. You can watch webinars live or register to <br /> take part in what is coming up</Text>
          </Box>
          <Box mt={60}>
            <Button border='none' bg="white" h={45} w={200} cursor="pointer" borderRadius={4} color="black" fontSize='18px'>Explore our webinars</Button>
          </Box>
      </Box>
      <Box>
          <Text fontSize='35px'>Do things you never thought possible</Text>
          <Text color='grey' fontSize='19px'>Discover courses in topics designed to help expand your career, business and horizons and to <br /> upgrade your skills for a new digital world.</Text>
      </Box>
      <div className={styles.first}>
        <div>
          <img src="https://lh3.googleusercontent.com/-0GVWZi0ZL7pLYB8XEJRfDrSC2dI6gT8RvubBrpw2BrIxtHkZY--Jn5FxXC4gp0s0fTJa4aV59o1F29qXNv_HBxcwW7zyyiDSMegNwBOEcgS_KU27Fiw=w64" alt="" />
          <h4>Digital Marketing</h4>
          <p>Get Certified free of charge in our 'Fundamentals of digital marketing' course or explore other content to help get your bussiness online</p>
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/yUtRjWMWqcVM2Z0MWD3KX1GCkqO585TTOGlDeu3yOLIqv4Zd_Ywa6Fh-YurdcjqfYS0nZrUGBI8V-24saZac4YOri5yuoApFaxJwJZ2IzWEDaWYMfA=w64" alt="" />
          <h4>Career Development</h4>
          <p>Gain the skills you need to your career or gain a new job</p>
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/XyURkvWIqHkfiP5yHRbJOHjUYNfEbVfqP_WoHllMs8n0su4vWyB9iwGca_UaqNRfIRLcPw-smh6Ra5XWl3R9Td-PhQcrK6KwsNiF8w8i2bIz0JcHLeP-=w64" alt="" />
          <h4>Data</h4>
          <p>Demands for workers with specialist data skills has a more than tripled over the last five years</p>
        </div>
      </div>
      <div className={styles.second}>
         <div>
          <img src="https://lh3.googleusercontent.com/DxI7wff6hMCJz5NdnBMDjV8KJlLJOhUShC4cg5ZAGUWvS-wWwqzkuM5VKeFNLZQhxR7wW_WL5RY71ShVN1-FVmofpRoXZppnuud5H0JBeLASVYFO2Fi3=w680-rw" alt="" />
         </div>
         <div>
          <p>Since 2015, we've trained over 700,000 people, to help them find a job, grow their career or business. Across Britain, local businesses, communities and people are using Google tools and training to thrive. Discover how Google is helping the UK economy to grow. </p>
          <button>Explore Now</button>
         </div>
      </div>
      <Center mt={20}>
       <h1>FAQs</h1>
      </Center>
      <hr width='700px'/>
       <Accordion allowToggle>
          <AccordionItem >
           <Center>
           <h2>
              <AccordionButton border='none' bg='white' w={700} fontSize='25px'>
                <Box flex='1' textAlign='left'>
                Who is Google Digital Garage for?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
           </Center>
           <Center>
           <AccordionPanel pb={4} w={700}>
            Everyone. Gain today's most in-demand skills, whether you're growing your business, starting a career, or just want to try something new. We’ve got a range of courses and over 40 hours of learning available to help take you where you need to go. If you’re keen to come and learn, we’re keen to meet you!
            </AccordionPanel>
           </Center>
          </AccordionItem>
          <hr width='700px'/>
          <AccordionItem >
           <Center>
           <h2>
              <AccordionButton border='none' bg='white' w={700} fontSize='25px'>
                <Box flex='1' textAlign='left'>
                Who provides the courses?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
           </Center>
            <Center>
            <AccordionPanel pb={4} w={700}>
            Some of the courses are provided by us, and others from our partner universities or institutions.
            </AccordionPanel>
            </Center>
          </AccordionItem>
      </Accordion>
      <hr width='700px'/>
      <Center>
         <Button m={50} border='none' color='grey' w={100} h={40}>
          See All FAQs
         </Button>
      </Center>
     <Footer />
    </Container>
    
  )
}

export default Home