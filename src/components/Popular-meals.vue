<template>
  <div
    class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 w-full mx-10"
  >
    <div class="col-span-3 row-span-2" v-if="data.length > 0">
      <q-card class="h-96">
        <q-img :src="data[0].strMealThumb" class="object-cover h-full">
          <div class="absolute-bottom text-white">
            <div class="text-h6">
              {{ data[0].strMeal }}
            </div>
            <div class="text-subtitle2">by John Doe</div>
          </div>
        </q-img>
      </q-card>
    </div>

    <div class="" v-for="meal in data" :key="meal.idMeal">
      <q-card class="my-card">
        <q-img :src="meal.strMealThumb" class="object-cover h-full">
          <div class="absolute-bottom text-white">
            <div class="text-h6">{{ meal.strMeal }}</div>
            <div class="text-subtitle2">{{ meal.strCategory }}</div>
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    if (response.ok) {
      const jsonData = await response.json();

      data.value = jsonData.meals;

      if (data.value.length > 0) {
        console.log(data.value[0].strMeal); // Replace strMeal with the property you want to access
      }
    } else {
      console.log("Error:", response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchData();
</script>

<style lang="css" scoped>
.column > div {
  height: 20rem;
  width: 100%;
  padding: 10px 15px;
  background: primary;
  border: 1px solid black;
}

.my-card {
  height: 20rem;
}
</style>
