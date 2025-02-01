<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import { Map, NavigationControl, FullscreenControl } from 'maplibre-gl';
import { filterByDate } from '@openhistoricalmap/maplibre-gl-dates';
import StyleFlipperControl from "maplibre-gl-style-flipper";
import 'maplibre-gl/dist/maplibre-gl.css';

const styles = {
    historic: {
        code:   'historic',
        image:  'https://api.mdisvg.com/v1/i/clock-outline',
        url:    'https://www.openhistoricalmap.org/map-styles/main/main.json'
    },
    railway: {
        code:   'railway',
        image:  'https://api.mdisvg.com/v1/i/train',
        url:    'https://www.openhistoricalmap.org/map-styles/rail/rail.json'
    },
    japanese_scroll: {
        code:   'japanese_scroll',
        image:  'https://api.mdisvg.com/v1/i/ideogram-cjk',
        url:    'https://www.openhistoricalmap.org/map-styles/japanese_scroll/ohm-japanese-scroll-map.json'
    },
    woodblock: {
        code:   'woodblock',
        image:  'https://www.svgrepo.com/show/323667/wood-beam.svg',
        url:    'https://www.openhistoricalmap.org/map-styles/woodblock/woodblock.json'
    }
}

const props = defineProps({
    date: {
        type: String,
        required: true,
    },
})

onMounted(() => {

    const map = new Map ({
        container: 'map',
        style: styles["historic"].url,
        // style: '/streets-v12.json',
        attributionControl: {
            customAttribution: '<a href="https://www.openhistoricalmap.org/">OpenHistoricalMap</a>',
        },
        center: [-95.9872222, 36.1619444], // starting position [lng, lat]
        zoom: 15
    });

    const styleFlipperControl = new StyleFlipperControl(styles);

    styleFlipperControl.setCurrentStyleCode('historic');

    map.addControl(new NavigationControl(), 'top-left');
    map.addControl(new FullscreenControl(), 'top-left');
    map.addControl(styleFlipperControl, 'bottom-left');

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