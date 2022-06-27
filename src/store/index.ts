import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol('store')

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}

export const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
