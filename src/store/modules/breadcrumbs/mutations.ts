import { reactive } from '@vue/composition-api'

import state from './state'

export const SET_BREADCRUMBS = (breadcrumbs = []) => {
  const reactiveState = reactive(state)
  reactiveState.breadcrumbs = breadcrumbs
}
