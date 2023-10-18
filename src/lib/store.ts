import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'

export const OC_STATE = {
  open: 'open',
  closed: 'closed'
} as const

export const OCH_STATE = {
  ...OC_STATE,
  hover: 'hover'
} as const

export type OCState = keyof typeof OC_STATE
export type OCHState = keyof typeof OCH_STATE

export interface GlobalState {
  menuState: OCState
  buttonMenuState: OCHState
  setMenuState: (newState: OCState) => void
  setButtonMenuState: (newState: OCHState) => void
}

export const useGlobalStore = createWithEqualityFn<GlobalState>((set) => ({
  menuState: OC_STATE.closed,
  buttonMenuState: OCH_STATE.closed,
  setMenuState: (newState) => set(() => ({
    menuState: OC_STATE[newState]
  })),
  setButtonMenuState: (newState) => set(() => ({
    buttonMenuState: OCH_STATE[newState]
  }))
}), shallow)
