<script setup>
import { computed } from 'vue'
import { DISCARDED_FIRST_LETTER_LIST } from '@/constants/common'
import { useRouter } from 'vue-router'
import { extractPersonId } from '@/utils/common'

const props = defineProps({
  people: Array
})

const router = useRouter()

const filteredPeople = computed(() =>
  props.people.filter((person) => !DISCARDED_FIRST_LETTER_LIST.includes(person.name.charAt(0)))
)

const goToEditPage = (person) => {
  const personId = extractPersonId(person.url)

  router.push({
    name: 'Edit',
    params: { personId: personId },
    query: { birth_year: person.birth_year, gender: person.gender }
  })
}
</script>

<template>
  <div>
    <div class="person-item" v-for="person in filteredPeople" :key="person.name">
      <div :style="{ color: person.eye_color }">{{ person.name }}</div>
      <button @click="goToEditPage(person)">Edit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.person-item {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;

  button {
    padding: 0.2rem 0.6rem;
    background-color: $yellow;
    color: $white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>