<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" elevated>
      <q-toolbar>
        <q-toolbar-title
          class="text-base text-primary h-24 flex flex-col justify-center"
        >
          Lemon & lime
          <h6 class="text-xs text-secondary">Find your next meal with ease</h6>
        </q-toolbar-title>
        <div class="w-24 flex justify-between">
          <q-icon name="facebook" class="text-black text-base" />
          <q-icon name="facebook" class="text-black text-base" />
          <q-icon name="facebook" class="text-black text-base" />
          <q-icon name="facebook" class="text-black text-base" />
        </div>
      </q-toolbar>
      <q-toolbar
        class="flex items-center justify-between max-lg:flex-col max-lg:h-28 max-lg:pb-4 max-lg:items-start h-14"
      >
        <q-tabs class="text-black" dense>
          <q-tab name="home" label="Home" />
          <q-tab name="recipes" label="Recipes" />
          <q-tab name="Features" label="Features" />
          <q-tab name="Pages" label="Pages" />
          <q-tab name="Course" label="Course" />
          <q-tab name="Blog" label="Blog" />
          <q-tab name="Shop" label="Shop" />
        </q-tabs>
        <q-input
          dense
          standout
          v-model="text"
          input-class="text-right "
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer text-black"
              @click="text = ''"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const text = ref("");

defineOptions({
  name: "MainLayout",
});
</script>
<style scoped>
:deep(.q-tab__label) {
  text-transform: capitalize !important;
}
</style>
