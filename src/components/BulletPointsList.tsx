import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { fc } from '@/utils/function-component';

const StyledUl = styled('ul')({
  'li:not(:first-of-type)': {
    margin: '0.5rem 0'
  },
  margin: 0,
  paddingInlineStart: '1rem'
});

export type BulletPointsListProps = {
  list: Partial<Record<string, string>>
};

export default fc<BulletPointsListProps>('BulletPointsList', ({ list }) => (
  <StyledUl>
    {Object.entries(list).map(([title, description]) => (
      <li key={title}>
        <Typography fontWeight='bold'>{title}</Typography>
        {description?.split(/\r?\n/).map(line => (
          <Typography key={line}>{line}</Typography>
        ))}
      </li>
    ))}
  </StyledUl>
));
