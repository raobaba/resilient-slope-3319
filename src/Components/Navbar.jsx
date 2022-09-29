import React from 'react';
import styles from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
const links = [
    {path:"/",title:<img src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw" alt="googleimage" width="250px" />},
    {path:"/onlinecourses",title:"Online Courses"},
    {path:"/certification",title:"Certification"},
    {path:"/livetraining",title:"Live Training"}, 
    {path:"/remoteworking",title:"Remote Working"},
    {path:"/more",title:<Menu>
                            <MenuButton cursor="pointer" color="grey" fontSize="16px" as={Button} mr={250} border="none" bg='white'>More</MenuButton>
                            <MenuList border="none">
                                 <MenuItem>Tools & Resourse</MenuItem>
                                 <MenuItem>Help & FAQs</MenuItem>
                                 <MenuItem>Feedback</MenuItem>
                            </MenuList>
                        </Menu>},
    {path:"/signin",title:<Button color="#174EA6" cursor="pointer" background="white" fontSize="18px" border="none">Sign In</Button>},
    {path:"/register",title:<Button bg="#174EA6" h={45} w={100} cursor="pointer" borderRadius={4} color="white" fontSize='18px' >Register</Button>}
]

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    {links.map((link) => (
      <NavLink
        className={({ isActive }) => {
          return isActive ? styles.active : styles.default;
        }}
        key={link.path}
        to={link.path}
        end
      >
        {link.title}
      </NavLink>
    ))}
  </div>
  );
}

export default Navbar