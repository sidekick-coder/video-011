// code

import { inject, provide, reactive, ref } from 'vue'

const key = Symbol('dialog')

export function createDialog() {
  const dialogs = ref([])

  function close(id) {
    const index = dialogs.value.findIndex((d) => d.id)

    if (index === -1) return

    dialogs.value.splice(index, 1)
  }

  function open(options) {
    return new Promise((resolve) => {
      const id = Date.now()

      const wrapResolve = (cb) => {
        return () => {
          close(id)

          resolve(cb ? cb() : undefined)
        }
      }

      const dialog = {
        ...options,
        id,
        onOk: wrapResolve(options.onOk),
        onCancel: wrapResolve(options.onCancel)
      }

      if (!options.disableTimeout) {
        setTimeout(dialog.onCancel, options.timeout ?? 3000)
      }

      dialogs.value.push(dialog)
    })
  }

  function confirm(options) {
    return open({
      ...options,
      actions: true,
      onOk: () => true,
      onCancel: () => false
    })
  }

  return reactive({
    dialogs,
    open,
    confirm,
    close
  })
}

export function provideDialog() {
  const state = createDialog()

  provide(key, state)

  return state
}

export function useDialog() {
  return inject(key, createDialog())
}
