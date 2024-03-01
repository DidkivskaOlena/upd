import * as React from 'react';
import { Paper, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'

const items = [
  {src: '../../public/drillm.png'},
  {src: '../../public/lampm.png'},
  {src: '../../public/laptopm.png'},
  {src: '../../public/tvm.png'},
];

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: { xs: 8, sm: 12 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '90%' } }}>
          <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                alignItems: "center"
              }}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: { xs: '40px'}
              }}
            >
              UPD - 1600
            </Typography>
            <img
                src='upd250.png'
                alt='photo upd'
                loading="lazy"
              />
          </Box>
          <Typography variant="body1" textAlign="center" color="text.secondary">
          UPD-1600 є компактним, мобільним, екологічно-чистим, чудовим рішенням для забезпечення резвервного живлення.
          </Typography>
          {/* <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 300, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        ><Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel></Box>
        
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{
          mt: { xs: 8, sm: 10 },
        }}>
          Вбудована інвертнорна система з сучасним літій-залізо-фосфатним (LiFePO4) акумулятором утворює надійний вузол для забезпечення автономного живлення електроприладів квартир, офісів, магазинів, медичних та косметоглогічних кабінетів та інших місць, де потрібне просте, надійне та економічне рішення.
          </Typography>
      </Container>
    </Box>
  );
}

function Item(props)
{
    return (
         <Paper>
          <img src={props.item.src}/>
         </Paper> 
    )
}