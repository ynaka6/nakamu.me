import { inject, computed } from '@vue/composition-api'
import { INJECT_KEY } from './constants'

export const useBreadcrumbs = () => {
  const state: any = inject(INJECT_KEY)
  return computed(() => state.breadcrumbs)
}
