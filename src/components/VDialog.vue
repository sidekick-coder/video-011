<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200"
      leave-active-class="transition duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="model"
        class="v-dialog fixed inset-0 flex h-full w-full items-center justify-center"
      >
        <div @click="model = false" class="fixed inset-0 bg-black/25" />

        <div class="relative">
          <div class="rounded bg-white p-5 text-center">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
