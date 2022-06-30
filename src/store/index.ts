import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { setItem, getItem } from '@/utils/useStorage'
import { ILoginResponse } from '@/api/types/login'

const state = {
  tap: getItem('tap') || {
    isCollapse: false
  },
  loginInfo: getItem('loginInfo') || null as (ILoginResponse | null)
}
export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}

// 数据持久化
// const MyPlugin = (state : any) => {
//   state.subscribe((mutations : any, state : any) => {
//     if (mutations.type === 'toggleCollapse') {
//       setItem('tap', state.tap)
//     } else if (mutations.type === 'setLoginInfo') {
//       setItem('loginInfo', state.loginInfo)
//     }
//   })
// }

export const store = createStore<State>({
  state,
  getters: {

  },
  mutations: {
    toggleCollapse (state) {
      (state.tap as any).isCollapse = !(state.tap as any).isCollapse
      setItem('tap', state.tap)
    },
    setLoginInfo (state, payload) {
      state.loginInfo = payload
      setItem('loginInfo', state.loginInfo)
    }

  },
  actions: {

  },
  modules: {

  }
  // plugins: [MyPlugin]
})
