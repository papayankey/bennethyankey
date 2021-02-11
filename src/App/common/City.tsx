// material components
import Box from '@material-ui/core/Box';

// components
import { Tower } from '.';

function City() {
  return (
    <Box position="absolute" bottom={0} left={0} display="flex">
      {[...new Array(20)].map((_, idx) => (
        <Box
          key={idx}
          width="200px"
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridTemplateRows="1fr"
          gridColumnGap={10}
          mr={1.5}
        >
          <Tower gridColumn="1/2" height={30} gridTemplateRows="repeat(2, 1fr)">
            <Tower.Level level={0} />
            <Tower.Level level={1} />
          </Tower>
          <Tower gridColumn="2/3" height={60} gridTemplateRows="repeat(4, 1fr)">
            {[...new Array(4)].map((_, index) => (
              <Tower.Level key={index} level={index} />
            ))}
          </Tower>
          <Tower gridColumn="3/4" height={90} gridTemplateRows="repeat(5, 1fr)">
            {[...new Array(5)].map((_, index) => (
              <Tower.Level key={index} level={index} />
            ))}
          </Tower>
        </Box>
      ))}
    </Box>
  );
}

export { City };
