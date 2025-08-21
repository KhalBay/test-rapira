<script setup lang="ts">
import type { PostT } from "@/models/interfaces";
import { computed, ref } from "vue";

const props = defineProps<{
  post: PostT
  full?: boolean
}>()

const baseUrl = import.meta.env.BASE_URL

const commentText = ref<string>('')

const commentEnding = computed((): string => {
  const count = props.post.comments.length
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'иев'
  }

  switch (lastDigit) {
    case 1:
      return 'ий'
    case 2:
    case 3:
    case 4:
      return 'ия'
    default:
      return 'иев'
  }
})

const commentDelete = () => {
  commentText.value = ''
}
const commentAdd = () => {
  const now = new Date()

  const day = now.getDate()
  const month = now.getMonth() + 1
  const year = now.getFullYear()

  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')

  const formatted = `${day}.${month}.${year} в ${hours}:${minutes}`

  props.post.comments.push(
      {id: Date.now(), text: commentText.value, img: `${baseUrl}assets/comm.png`, createdAt: formatted, author: 'Егор Игоревич'}
  )
  commentDelete()
}
</script>

<template>
  <div
      v-if="post"
      class="flex flex-col gap-[10px]"
      :class="full ? 'max-w-[600px]' : 'max-w-[400px] max-xl:max-w-[365px]'"
  >
    <img
        :src="post?.img"
        alt=""
        class="rounded-[12px]"
        :class="full ? 'order-3' : 'order-1'"
    >
    <div
        class="flex gap-[10px] text-textGray text-[14px]"
        :class="full ? 'order-2' : 'order-2'"
    >
      <p>{{ post.createdAt }}</p>
      <img :src="`${baseUrl}assets/point.svg`" alt="">
      <p class="flex gap-[4px]">
        <img :src="`${baseUrl}assets/time.svg`">
        {{ post.readingTime + ' мин'}}
      </p>
      <img :src="`${baseUrl}assets/point.svg`" alt="">
      <p class="flex gap-[4px]">
        <img :src="`${baseUrl}assets/comment.svg`">
        {{ post.comments.length  + ' комментар' + commentEnding}}
      </p>
    </div>
    <h2
        class="text-[22px] font-semibold"
        :class="full ? 'order-1' : 'order-3'"
    >
      {{ post.title }}
    </h2>
    <h3
        class="text-[16px]"
        :class="full ? 'order-4' : 'order-4'"
    >
      {{ full ? post.text : post.desc }}
    </h3>
    <div
        class="flex gap-[10px]"
        :class="full ? 'order-5' : 'order-5'"
    >
      <chips-ui v-for="chip in post.tags" :key="chip" without-ico small>
        {{ chip }}
      </chips-ui>
    </div>

    <div v-if="full" class="mt-[15px] order-6">
      <div class="flex gap-[4px] mb-[10px]">
        <p class="font-semibold text-[16px] text-dark">Комментариев</p>
        <p class="text-[16px] text-textGray">{{ post.comments.length }}</p>
      </div>

      <input-ui
          v-model="commentText"
          placeholder="Введите комментарий"
          class="md:w-[600px] mb-[10px]"
          max-length="250"
      />

      <div v-if="commentText" class="flex justify-end gap-[10px]">
        <button-ui outline @click="commentDelete">Отмена</button-ui>
        <button-ui :disabled="commentText.length > 250" @click="commentAdd">Опубликовать</button-ui>
      </div>

      <div class="flex flex-col">
        <comment-ui v-for="comment in post.comments" :key="comment.id" :comment="comment" class="mb-[10px]"/>
      </div>
    </div>
  </div>
</template>