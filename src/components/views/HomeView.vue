<script setup>
import { ref, computed, onMounted } from 'vue'
import SwapiService from '@/services/SwapiService'
import PeopleList from '@/components/shared/PeopleList.vue'
import { extractPageNumber } from '@/utils/common'
import { GENDER } from '@/constants/common'

let people = ref([])
let nextPage = ref(null)
let previousPage = ref(null)
let currentPage = ref(1)
let loading = ref(false)

onMounted(async () => {
  // Fetch people count on init
  await loadPeopleByPage(currentPage.value)
})

const loadPeopleByPage = async (page) => {
  loading.value = true
  const fetchedData = await SwapiService.fetchPeopleDataByPage(page)

  currentPage.value = page
  people.value = fetchedData.results
  nextPage.value = fetchedData.next ? extractPageNumber(fetchedData.next) : null
  previousPage.value = fetchedData.previous ? extractPageNumber(fetchedData.previous) : null
  loading.value = false
}

const maleCount = computed(
  () => people.value.filter((person) => person.gender === GENDER.male).length
)

const femaleCount = computed(
  () => people.value.filter((person) => person.gender === GENDER.female).length
)
</script>

<template>
  <div class="container rounded shadow">
    <h1>SWAPI People List</h1>
    <header class="header">
      <p class="header-man-count">No. of Men: {{ maleCount }}</p>
      <p class="header-women-count">No. of Women: {{ femaleCount }}</p>
      <p class="header-current-page">Current Page: {{ currentPage }}</p>
      <nav class="header-nav">
        <button :disabled="!previousPage" @click="loadPeopleByPage(previousPage)">Previous</button>
        <button :disabled="!nextPage" @click="loadPeopleByPage(nextPage)">Next</button>
      </nav>
    </header>
    <PeopleList v-if="!loading" class="section" :people="people" />
    <div class="loader" v-else>Loading...</div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-field {
  padding: 0.5rem;
  margin-right: 1rem;
}

.loader {
  display: flex;
  justify-content: center;
}

.header-nav {
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  gap: 10px;
}
</style>