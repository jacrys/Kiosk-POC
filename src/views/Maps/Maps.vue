<template>
    <div id="maps">
        <div v-for="map in CensusMaps" :key="map.id">
        <p>{{map.name}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

interface CensusMap {
    id: number,
    name: string,
    year: string
}

const CensusMaps = ref<CensusMap[]>([]);

const fetchMaps = async () => {
    try {
        const response = await axios.get<CensusMap[]>('http://localhost:3000/maps');
        CensusMaps.value = response.data;
    }
    catch (error) {
        console.error('Error fetching Maps:', error)
    }
};

onMounted(fetchMaps);
</script>