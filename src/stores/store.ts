import { defineStore } from 'pinia'
import type { FilterTag } from "@/models/interfaces"

export const useStore = defineStore('store', {
  state: () => ({
    filterTags: [
      {title: 'Город', isActive: false},
      {title: 'Природа', isActive: false},
      {title: 'Люди', isActive: false},
      {title: 'Животные', isActive: false},
      {title: 'Еда', isActive: false},
      {title: 'Напитки', isActive: false},
      {title: 'Архитектура', isActive: false},
      {title: 'Искусство', isActive: false},
    ] as FilterTag[],
    search: '' as string
  }),

  getters: {
    activeFilters: (state) => state.filterTags.filter(tag => tag.isActive),
    activeFilterTitles: (state) => state.filterTags
      .filter(tag => tag.isActive)
      .map(tag => tag.title.toLowerCase())
  },

  actions: {
    clearFilters() {
      this.filterTags.forEach(tag => tag.isActive = false)
    },
    toggleFilter(title: string) {
      const tag = this.filterTags.find(t => t.title === title)
      if (tag) tag.isActive = !tag.isActive
    }
  }
})
