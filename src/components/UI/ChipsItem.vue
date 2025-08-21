<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: boolean,
  withoutIco?: boolean
  small?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const baseUrl = import.meta.env.BASE_URL

const isActive = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const toggleChip = () => {
  isActive.value = !isActive.value
}

const iconSrc = computed(() => isActive.value
    ? `${baseUrl}assets/check.svg`
    : `${baseUrl}assets/plus.svg`
)
</script>

<template>
  <button
      class="flex items-center px-[14px] rounded-[20px] gap-[6px] duration-200 cursor-pointer font-500 box-border flex-shrink-0"
      :class="{
        'bg-primary text-white hover:bg-hoverDarkPrimary': isActive,
        'bg-lightPrimary hover:bg-hoverPrimary text-textPrimary': !isActive,
        'text-[14px] py-[6px] ': small,
        'text-[16px] py-[8px] ': !small
      }"
      @click="toggleChip"
  >
    <slot />
    <img v-if="!withoutIco" :src="iconSrc" alt="">
  </button>
</template>