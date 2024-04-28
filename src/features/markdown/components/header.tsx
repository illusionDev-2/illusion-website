import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { siteName } from "@/consts/site";

export default function Header() {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: "transparent"
      }}
    >
      <Toolbar
        disableGutters
        variant="dense"
      >
        <Container>
          <Stack
            width="100%"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={theme => ({
              [theme.breakpoints.down("md")]: {
                justifyContent: "center"
              }
            })}
          >
            <MuiLink
              component={NextLink}
              href="/"
              underline="none"
            >
              <Typography
                variant="h3"
                color="text.secondary"
              >
                {siteName}
              </Typography>
            </MuiLink>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
