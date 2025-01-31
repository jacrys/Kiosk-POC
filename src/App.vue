<template>
<v-app>
  <v-layout>
    <v-navigation-drawer
      expand-on-hover
      rail
      :mobile-breakpoint="0"
    >
      <v-list>
        <v-list-item
          prepend-avatar="/gcc.png"
          title="Greenwood Kiosk"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" link title="Home" to="/"></v-list-item>
        <v-list-group value="Maps">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-map" title="Maps"></v-list-item>
          </template>
          <v-list-item v-for="map in CensusMaps" :key="map.id" link :to="'/maps/' + map.year">
            <v-list-item-title>{{map.name}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid>
      <RouterView />
    </v-container>
  </v-layout>
</v-app>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';


interface CensusMap {
      id: number,
      name: string,
      year: string
}

const CensusMaps = ref<CensusMap[]>([
  { id: 1, name: '1910', year: '1910' },
  { id: 2, name: '1920', year: '1920' },
  { id: 3, name: 'Current', year: 'current' }
]);

</script>