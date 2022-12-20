import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Navbar = () => {
  return (
    <AppBar 
      position="absolute"
      elevation={1}
      sx={{ height: "70px", justifyContent: "center", flexGrow: 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="https://acerosmedina.com/" >
              <img src="acerosmedina.png" width={220} alt="Logo" />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Navbar;
