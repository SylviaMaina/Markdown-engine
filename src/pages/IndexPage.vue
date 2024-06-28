<template>
  <q-page class="flex pt-10">
    <div class="w-full grid grid-cols-3 gap-10">
      <q-card class="my-card">
        <q-img
          src="https://images.unsplash.com/photo-1621852003709-763b0b32da0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RhcnRlcnxlbnwwfHwwfHx8MA%3D%3D"
          class="object-cover h-full"
        >
          <div
            class="absolute-bottom text-subtitle2 text-center mx-10 text-white"
          >
            Starters
          </div>
        </q-img>
      </q-card>
      <q-card class="my-card">
        <q-img
          src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFpbiUyMGRpc2h8ZW58MHx8MHx8fDA%3D"
          class="object-cover h-full"
        >
          <div
            class="absolute-bottom text-subtitle2 text-center mx-10 text-white"
          >
            Mains
          </div>
        </q-img>
      </q-card>
      <q-card class="my-card">
        <q-img
          src="https://images.unsplash.com/photo-1612203985729-70726954388c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D"
          class="object-cover h-full"
        >
          <div
            class="absolute-bottom text-subtitle2 text-center mx-10 text-white"
          >
            Desserts
          </div>
        </q-img>
      </q-card>
    </div>
    <h6 class="text-center w-full text-lg py-14">The latest Recipes</h6>
    <popular-meals />
  </q-page>
</template>

<script setup>
import popularMeals from "components/Popular-meals.vue";
defineOptions({
  name: "IndexPage",
});
</script>
<style scoped>
.my-card {
  height: 20rem;
}
</style>
