<script setup lang="ts">
const props = defineProps<{
  outline?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="w-[120px] h-[38px] border-box p-[10px] text-[13px] text-semibold rounded-[6px] cursor-pointer"
    :class="[
      disabled
        ? 'pointer-events-none bg-lightWhite text-textGray'
        : (outline ? 'bg-lightPrimary text-primary hover:bg-hoverPrimary' : 'bg-primary text-white hover:bg-hoverDarkPrimary')
    ]"
  >
    <slot/>
  </button>
</template>