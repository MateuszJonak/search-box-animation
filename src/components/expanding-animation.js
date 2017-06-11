import { compose, withState, withHandlers, defaultProps } from 'recompose';

const animationStyle = {
  transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
};
const makeExpanding = compose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    onClick: ({ setIsOpen, isOpen }) => () => setIsOpen(!isOpen)
  }),
  defaultProps({
    additionalStyles: { text: animationStyle, frame: animationStyle }
  })
)

export default makeExpanding;