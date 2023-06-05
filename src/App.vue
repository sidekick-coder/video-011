<script setup>
import { ref } from 'vue'
import VDialog from './components/VDialog.vue'

const show = ref(false)
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center bg-gray-900">
    <button @click="show = true" class="bg-white p-2">Show dialog</button>
    <v-dialog v-model="show"> My dialog </v-dialog>
  </div>
</template>
