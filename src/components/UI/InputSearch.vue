<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  placeholder: string
  appendIco?: string
  maxLength?: number
}>()

const baseUrl = import.meta.env.BASE_URL
const value = defineModel()

const currentLength = computed(():number => {
  const val = value.value
  return typeof val === 'string' ? val.length : String(val).length
})

const isOverLimit = computed(():boolean => {
  if (!props.maxLength) return false
  return currentLength.value > props.maxLength
})

const clearInput = () => {
  value.value = ''
}
</script>

<template>
  <div class="relative">
    <img
        v-if="appendIco"
        :src="appendIco"
        class="absolute left-[10px] top-[13px] pointer-events-none"
        alt=""
    >

    <input
        type="text"
        name="search"
        class="bg-lightWhite w-full h-[40px] rounded-[6px] py-[13px] text-[13px] focus:outline-none border-2 transition-colors"
        :class="[
          appendIco ? 'px-[34px]' : 'pr-[34px] pl-[13px]',
          isOverLimit
            ? 'border-error focus:border-error hover:border-error'
            : 'border-transparent hover:border-primary'
        ]"
        :placeholder="placeholder"
        v-model="value"
    >

    <button
        v-if="value"
        type="button"
        class="absolute right-[10px] top-[13px] cursor-pointer"
        @click="clearInput"
    >
      <img :src="`${baseUrl}assets/close.svg`" alt="">
    </button>

    <div
        v-if="maxLength"
        class="text-[12px] flex text-textGray"
    >
      <p :class="isOverLimit ? 'text-error' : 'text-textGray'">{{ currentLength }}</p>{{ `\u00A0из ${maxLength} символов` }}
    </div>
  </div>
</template>