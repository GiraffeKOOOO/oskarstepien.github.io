import { useRef } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Colours } from './Theme/Colours';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Socials from './Socials/Socials';
import About from './About/About';

const HomePage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const galleryRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <Grid container width={`100vw - 3px`} style={{ backgroundColor: `${Colours.backgroundGrey}` }}>
      <Grid item xs={12}>
        <Header
          mobile={mobile}
          galleryRef={galleryRef}
          aboutRef={aboutRef}
          socialsRef={socialsRef}
        />
      </Grid>

      <Grid item xs={12}>
        <Gallery galleryRef={galleryRef} />
      </Grid>

      <Grid item xs={12}>
        <About mobile={mobile} aboutRef={aboutRef} />
      </Grid>

      <Grid item xs={12}>
        <Socials mobile={mobile} socialsRef={socialsRef} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
