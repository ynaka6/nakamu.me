import { provide, reactive } from '@vue/composition-api'
import state from './state'
import { INJECT_KEY } from './constants'

export { setBreadcrumbs } from './actions'
export { useBreadcrumbs } from './getters'

export default () => {
  const reactiveState = reactive(state)
  provide(INJECT_KEY, reactiveState)
}
