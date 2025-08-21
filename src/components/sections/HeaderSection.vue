<script setup lang="ts">
import { ref, watchEffect } from "vue"
import { useRoute } from "vue-router"
import type { NavigationT } from "@/models/interfaces"

const baseUrl = import.meta.env.BASE_URL
const route = useRoute()
const isMenuOpen = ref(false)

const headerNav = ref<NavigationT[]>([
  { id: 0, title: "Главная", name: "home", link: "/", isActive: false },
  { id: 1, title: "Блог", name: "blog", link: "/blog", isActive: false },
])

const toggleActiveTab = () => {
  headerNav.value.forEach((el: NavigationT) => (el.isActive = false))
  const currentTab = headerNav.value.find(
      (el: NavigationT) => el.name === route.name
  )
  if (currentTab) currentTab.isActive = true
}

watchEffect(toggleActiveTab)
</script>

<template>
  <header class="bg-black flex justify-center relative z-50 max-xl:px-[22px]">
    <div class="max-w-[1288px] py-[15px] flex-1 flex xl:gap-[80px] items-center">
      <button
          class="xl:hidden text-white text-2xl mr-[20px] cursor-pointer"
          @click="isMenuOpen = true"
      >
          <img :src="`${baseUrl}assets/burger.svg`" alt="burger">
      </button>

      <router-link to="/">
        <img :src="`${baseUrl}assets/logo.svg`" alt="Logo" class="h-[32px]" />
      </router-link>

      <nav class="hidden xl:flex gap-[20px]">
        <template v-for="item in headerNav" :key="item.id">
          <router-link
              class="text-lightWhite font-bold py-[8px] px-[14px] text-base"
              :class="{ 'text-primary bg-nav rounded-[6px]': item.isActive }"
              :to="item.link"
          >
            {{ item.title }}
          </router-link>
        </template>
      </nav>
    </div>


    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-70 flex">
      <div class="bg-black w-[250px] h-full p-6 flex flex-col gap-6">
        <button
            class="self-end text-white text-2xl cursor-pointer"
            @click="isMenuOpen = false"
        >
          <img class="size-[40px]" :src="`${baseUrl}assets/close.svg`" alt="">
        </button>

        <nav class="flex flex-col gap-4 mt-4">
          <template v-for="item in headerNav" :key="item.id">
            <router-link
                class="text-lightWhite font-bold py-2 px-3 text-lg"
                :class="{ 'text-primary bg-nav rounded-[6px]': item.isActive }"
                :to="item.link"
                @click="isMenuOpen = false"
            >
              {{ item.title }}
            </router-link>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>