<script setup>
import { ref, onMounted, computed, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import SwapiService from '@/services/SwapiService'
import { BIRTH_YEAR_REQUIRED_FOR_FILL, GENDER, INITIAL_PERSON_DETAILS } from '@/constants/common'

const route = useRoute()
let personDetails = ref({})
let loading = ref(true)

onMounted(async () => {
  loading.value = true
  const personId = route.params.personId

  if (!fillPersonInformation.value) {
    personDetails.value = structuredClone(INITIAL_PERSON_DETAILS)
  } else {
    // NOTE - Performance wise it could be improved not to perform fetch but rather use people data passed here i.e. by creating composable and state
    // but just for purpose of exercise and usage of SWAPI API fetch call performed, another thing would be a memo function to cache already used params
    personDetails.value = await SwapiService.fetchPersonDetailsById(personId)
  }

  loading.value = false
})

const fillPersonInformation = computed(() => {
  return (
    //NOTE - I've checked all BIRTH_YEARS and given required year do not appear on any of people available on SWAPI therefore it will always return false.
    route.query.birth_year === BIRTH_YEAR_REQUIRED_FOR_FILL && route.query.gender === GENDER.female
  )
})

const logInputedData = () => {
  console.log('=== INPUTED DATA ===', toRaw(personDetails.value))
}
</script>

<template>
  <div class="container rounded shadow">
    <h1>Person Information</h1>
    <div class="person-details" v-if="!loading">
      <div class="field">
        <label>Name:</label>
        <input class="rounded" type="text" v-model="personDetails.name" />
      </div>
      <div class="field">
        <label>Gender:</label>
        <input class="rounded" type="text" v-model="personDetails.gender" />
      </div>
      <div class="field">
        <label>Height:</label>
        <input class="rounded" type="text" v-model="personDetails.height" />
      </div>
      <div class="field">
        <label>Mass:</label>
        <input class="rounded" type="text" v-model="personDetails.mass" />
      </div>

      <div class="field">
        <label>Birth Year:</label>
        <input class="rounded" type="text" v-model="personDetails.birth_year" />
      </div>

      <div class="field">
        <label>Hair Color:</label>
        <input class="rounded" type="text" v-model="personDetails.hair_color" />
      </div>
      <div class="field">
        <label>Skin Color:</label>
        <input class="rounded" type="text" v-model="personDetails.skin_color" />
      </div>
      <div class="field">
        <label>Eye Color:</label>
        <input class="rounded" type="text" v-model="personDetails.eye_color" />
      </div>
    </div>
    <button class="log-button" @click="logInputedData">Log Data</button>
  </div>
</template>

<style lang="scss" scoped>
.person-details {
  display: flex;
  flex-direction: column;
}
.field {
  color: $gray;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: 6px;

  label {
    color: $gray;
    font-weight: bold;
    margin-right: 10px;
  }

  input {
    color: $dark-gray;
    border: 1px solid $border-gray;
    min-width: 400px;
  }
}

.log-button {
  margin: 20px;
  float: right;
}
</style>
