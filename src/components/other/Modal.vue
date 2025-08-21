<script setup lang="ts">
import type { PostT } from "@/models/interfaces";

const props = defineProps<{
  post: PostT | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const baseUrl = import.meta.env.BASE_URL

const closeModal = () => {
  emit('close')
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}
</script>

<template>
  <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-modal z-50 flex items-center justify-center p-4 "
        @click="handleBackdropClick"
        @keydown="handleKeydown"
    >
      <div class="bg-white w-auto h-[80vh] overflow-y-auto relative rounded-[12px]">
        <button
            class="absolute top-[15px] right-[17px] text-gray-400 hover:text-gray-600 transition-colors z-10"
            @click="closeModal"
        >
          <img class="size-[20px]" :src="`${baseUrl}assets/close.svg`" alt="Закрыть">
        </button>

        <div v-if="post" class="p-[15px]">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>