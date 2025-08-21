<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { api } from "@/api";
import type { PostT } from "@/models/interfaces";
import FilterSection from "@/components/sections/FilterSection.vue";
import { useStore } from "@/stores/store";
import FailedSeacrh from "@/components/other/FailedSeacrh.vue";

const posts = ref<PostT[]>([])
const store = useStore()
const selectedPost = ref<PostT | null>(null)
const isModalOpen = ref(false)

const filteredPosts = computed(() => {
  let result = posts.value

  if (store.search) {
    const searchTerm = store.search.toLowerCase()
    result = result.filter(post =>
        post.title.toLowerCase().includes(searchTerm)
    )
  }

  if (store.activeFilters.length > 0) {
    result = result.filter(post => {
      const postTags = post.tags?.map(tag => tag.toLowerCase()) || []
      return store.activeFilterTitles.some(activeTag =>
          postTags.includes(activeTag.toLowerCase())
      )
    })
  }

  return result
})

const openPostModal = (post: PostT) => {
  selectedPost.value = post
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedPost.value = null
}

const startComponent = async () => {
  const postData = await api.post.getAll()
  posts.value = postData.data
}

onMounted(() => {
  startComponent()
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="bg-white">
      <filter-section class="mx-auto"/>
    </div>

    <div class="flex-grow">
      <div class="max-w-[1300px] mx-auto py-[20px] max-xl:p-[10px]">
        <div v-if="filteredPosts.length" class="bg-white rounded-[12px] p-[30px] flex flex-wrap gap-x-[20px] gap-y-[40px] max-xl:justify-between max-sm:justify-center">
          <blog-ui
              v-for="post in filteredPosts"
              :key="post.id"
              :post="post"
              class="cursor-pointer"
              @click="openPostModal(post)"
          />
        </div>

        <failed-seacrh v-else/>
      </div>
    </div>

    <modal-ui
        :post="selectedPost"
        :is-open="isModalOpen"
        @close="closeModal"
    >
      <blog-ui
          :post="selectedPost"
          full
      />
    </modal-ui>
  </div>
</template>