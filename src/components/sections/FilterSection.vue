<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/stores/store";

const store = useStore()
const filterVisible = ref<boolean>(false)

const toggleFilters = () => {
  filterVisible.value = !filterVisible.value
}

</script>

<template>
  <div class="max-w-[1210px]">
    <div class="flex justify-between sm:items-center py-[24px] max-xl:px-[30px] max-sm:relative">
      <div class="flex sm:gap-[40px] sm:items-center max-sm:flex-wrap max-sm:w-full">
        <h1 class="font-bold text-[32px] text-dark">Блог</h1>
        <input-ui v-model="store.search" placeholder="Поиск" append-ico="/assets/search.svg" class="max-sm:w-full md:w-[400px]"/>
      </div>

      <div
          class="flex cursor-pointer sm:items-center gap-[4px] select-none text-[14px] max-sm:absolute max-sm:top-[40px] max-sm:right-[30px]"
          @click="toggleFilters"
      >
        <div
            v-if="filterVisible && store.activeFilterTitles.length > 0"
            class="text-primary mr-[10px]"
            @click.stop="store.clearFilters"
        >
          Очистить
        </div>
        <div class="text-gray">{{ filterVisible ? 'Скрыть фильтр' : 'Фильтр' }}</div>
        <img class="size-[16px]" :src="filterVisible ? '/assets/up.svg' : '/assets/down.svg'">
      </div>
    </div>

    <div v-if="filterVisible" class="border-t-2 border-t-lightWhite py-[20px] flex gap-[8px] max-xl:px-[30px] max-xl:flex-wrap">
      <chips-ui v-for="tag in store.filterTags" :key="tag.title" v-model="tag.isActive">
        {{tag.title}}
      </chips-ui>
    </div>
  </div>
</template>