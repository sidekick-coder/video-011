<script setup>
import { provideDialog } from './composable/dialog'
import VDialogContainer from './components/VDialogContainer.vue'

const dialog = provideDialog()

async function onMessage() {
  // on message

  await dialog.open({
    titulo: 'Message type',
    message: 'Hello word',
    disableTimeout: true
  })

  console.log('Leave dialog')
}

async function onConfirm() {
  const result = await dialog.confirm({
    titulo: 'Message type',
    message: 'Hello word',
    disableTimeout: true
  })

  console.log('Result', result)

  if (result) {
    alert('delete item')
  }
}

async function onCustom() {
  const result = await dialog.open({
    titulo: 'Message type',
    message: 'Hello word',
    actions: true,
    onOk: () => 'custom ok message',
    onCancel: () => 'custom cancel message'
  })

  alert('Custom result: ' + result)
}
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center space-x-4 bg-gray-900">
    <VDialogContainer />
    <button @click="onMessage" class="bg-white p-2">Message</button>
    <button @click="onConfirm" class="bg-white p-2">Confirm</button>
    <button @click="onCustom" class="bg-white p-2">Custom</button>
  </div>
</template>
