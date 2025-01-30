<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import { Map, NavigationControl, FullscreenControl } from 'maplibre-gl';
import { filterByDate } from '@openhistoricalmap/maplibre-gl-dates';
import 'maplibre-gl/dist/maplibre-gl.css';

const props = defineProps({
    date: {
        type: String,
        required: true,
    }
})

onMounted(() => {

    const map = new Map ({
        container: 'map',
        // style: 'https://www.openhistoricalmap.org/map-styles/main/main.json',
        // style: 'https://www.openhistoricalmap.org/map-styles/rail/rail.json',
        // style: 'https://www.openhistoricalmap.org/map-styles/japanese_scroll/ohm-japanese-scroll-map.json',
        // style: 'https://www.openhistoricalmap.org/map-styles/woodblock/woodblock.json',
        style: '/streets-v12.json',
        attributionControl: {
            customAttribution: '<a href="https://www.openhistoricalmap.org/">OpenHistoricalMap</a>',
        },
        center: [-95.9872222, 36.1619444], // starting position [lng, lat]
        zoom: 15
    });

    map.addControl(new NavigationControl(), 'top-left');
    map.addControl(new FullscreenControl(), 'top-left');

    function setDate(date: string) {
        map.once('styledata', function (event) {
            filterByDate(map,date);
        });
    }

    setDate(props.date);
})

</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 100vh;
}
</style>