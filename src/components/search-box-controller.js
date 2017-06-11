import { compose, withState, withHandlers, renameProp } from 'recompose';

import makeExpanding from './expanding-animation';
import makeShakingAnimation from './shake-animation';

const makeAnimatedValidationSearchBox = compose(
  withState('hasError', 'setHasError', false),
  withState('query', 'setQuery', ''),
  withHandlers({
    onQueryUpdate: ({ setHasError, setQuery }) => value => {
      setHasError(false);
      setQuery(value);
    },
    onSubmit: ({ setHasError }) => () => setHasError(true),
  }),
  renameProp('hasError', 'shouldShake'),
  makeShakingAnimation,
  makeExpanding
)

export default makeAnimatedValidationSearchBox;