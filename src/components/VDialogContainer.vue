<script setup>
import { useDialog } from '../composable/dialog'
import VDialog from './VDialog.vue'

// code

const dialog = useDialog()
</script>
<template>
  <v-dialog
    v-for="d in dialog.dialogs"
    :key="d.id"
    :model-value="true"
    @update:model-value="d.onCancel"
  >
    <div>
      {{ d.title }}
    </div>

    <div>
      {{ d.message }}
    </div>

    <div v-if="d.actions" class="mt-2 space-x-4">
      <button class="bg-teal-500 px-4 py-2 text-white" @click="d.onOk">Ok</button>

      <button class="bg-red-500 px-4 py-2 text-white" @click="d.onCancel">Cancel</button>
    </div>
  </v-dialog>
</template>
