<script setup lang="ts">
import type { CommentT } from "@/models/interfaces";

const props = defineProps<{
  comment: CommentT
}>()
</script>

<template>
  <div v-if="comment" class="flex gap-[12px] max-w-[600px] gap-[10px]">
    <img
        :src="comment.img"
        alt=""
        class="size-[38px] rounded-[12px]"
    >
    <div class="flex flex-col gap-[6px]">
      <p class="text-black text-semibold text-[16px]">{{ comment.author }}</p>
      <p class="text-textDark text-[14px]">{{ comment.text }}</p>
      <p class="text-gray text-[14px]">{{ comment.createdAt }}</p>
    </div>
  </div>
</template>