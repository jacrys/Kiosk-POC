<script lang="ts">
import { ref, computed } from 'vue';
import { MapboxMap } from 'vue-mapbox-ts';
import 'mapbox-gl/dist/mapbox-gl.css';

const accessToken ='pk.eyJ1Ijoia2NsZXdpcyIsImEiOiJ0MkF4dTV3In0.x4ialkeBLyILvKlWOLxNzQ';
const style = '../assets/streets-v12.json';

const mbMap = ref<MapboxMap | null>(null);
const map = computed(() => mbMap.value?.map);

export default {
    components: {
        MapboxMap,
    },
    props: {
        accessToken: {
            type: String,
            default: accessToken,
        },
        style: {
            type: String,
            default: style,
        },
        map: {
            type: Object,
            default: map,
        },
    },
};

</script>

<template>
  <MapboxMap
    ref="mbMap"
    class="censusMap"
    :accessToken="accessToken"
    :style="style"
    :center="[-95.9872222, 36.1619444]"
    :zoom="16"
  />
</template>