import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

export type AppBreadcrumbsItem = {
  href?: string,
  label: string
};

export type AppBreadcrumbsProps = {
  items: AppBreadcrumbsItem[]
};

export default function AppBreadcrumbs({ items }: AppBreadcrumbsProps) {
  return (
    <Stack spacing={2} width='100%'>
      <Breadcrumbs>
        {items.map(({ href, label }) => (
          <span key={label}>
            {href && (
              <MuiLink
                color="inherit"
                component={NextLink}
                href={href}
                underline="hover"
              >
                {label}
              </MuiLink>
            )}
            {!href && <Typography color='text.primary'>{label}</Typography>}
          </span>
        ))}
      </Breadcrumbs>
      <Divider />
    </Stack>
  );
}
