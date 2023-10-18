import {
  motion,
  type TargetAndTransition,
  type Variants
} from 'framer-motion'
import {
  useGlobalStore,
  OCH_STATE,
  OC_STATE
} from '@/lib/store'

const transition: TargetAndTransition['transition'] = {
  stiffness: 64,
  damping: 12,
  duration: 0.24,
  ease: 'easeOut'
}

/** Header element animation variants */
const SPAN_A_VARIANTS: Variants = {
  open: {
    right: '0px',
    top: '18.5px',
    rotate: '45deg',
    transition
  },
  closed: {
    right: '4px',
    top: '14px',
    transition
  },
  hover: {
    right: '4px',
    top: '10px',
    transition: {
      ...transition,
      duration: 0.16
    }
  }
}

const SPAN_B_VARIANTS: Variants = {
  open: {
    left: '0px',
    bottom: '18.5px',
    rotate: '-45deg',
    transition
  },
  closed: {
    left: '4px',
    bottom: '14px',
    transition
  },
  hover: {
    left: '4px',
    bottom: '10px',
    transition: {
      ...transition,
      duration: 0.16
    }
  }
}

export default function ButtonMenu () {
  const [menuState, buttonMenuState, setMenuState, setButtonMenuState] = useGlobalStore(
    (state) => [
      state.menuState,
      state.buttonMenuState,
      state.setMenuState,
      state.setButtonMenuState
    ]
  )

  const isMenuClosed = () => menuState !== OC_STATE.open

  const toggleMenu = () => {
    const state = isMenuClosed() ? OC_STATE.open : OC_STATE.closed
    setMenuState(state)
    setButtonMenuState(state)
  }

  const handleMouseOver = () => { isMenuClosed() && setButtonMenuState(OCH_STATE.hover) }
  const handleMouseOut = () => { isMenuClosed() && setButtonMenuState(OC_STATE.closed) }

  return (
    <button
      className='bg-transparent w-6 sm:w-9 h-10 relative [&>span]:w-full [&>span]:h-0.5 [&>span]:absolute [&>span]:bg-white'
      onClick={toggleMenu}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <motion.span
        variants={SPAN_A_VARIANTS}
        animate={buttonMenuState}
        initial={false}
      />
      <motion.span
        variants={SPAN_B_VARIANTS}
        animate={buttonMenuState}
        initial={false}
      />
    </button>
  )
}
