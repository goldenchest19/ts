// import { useNavigate } from 'react-router-dom';
// import styles from './Header.module.css';
// export const Header = () => {
//     const navigate = useNavigate();
//     return (
//         <header className={styles.header}>
//             <nav>
//                 <ul className={styles.navList}><li className={styles.navItem}>
//                     <button onClick={() => navigate('/')}>Home</button>
//                 </li>
//                     <li className={styles.navItem}>
//                         <button onClick={() => navigate('/about')}>About</button>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';
export const Header = () => {
    const navigate = useNavigate();
    return (
        <Box bg="gray.100" p={4}>
            <Flex justifyContent="space-between">
                <Button onClick={() => navigate('/')}>
                    Home
                </Button>
                <Button onClick={() => navigate('/about')}>
                    About
                </Button>
            </Flex>
        </Box>
    );
};
