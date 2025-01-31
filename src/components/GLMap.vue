<script lang="ts">
import { ref, computed, onMounted } from 'vue';
import { MapboxMap } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const accessToken ='pk.eyJ1Ijoia2NsZXdpcyIsImEiOiJ0MkF4dTV3In0.x4ialkeBLyILvKlWOLxNzQ';
const style = 'mapbox://styles/mapbox/streets-v11';

const mbMap = ref();
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
    },
};

</script>

<template>
  <MapboxMap
    ref="mbMap"
    class="censusMap"
    :access-Token="accessToken"
    :map-style="style"
    :center="[-95.9872222, 36.1619444]"
    :zoom="16"
  />
</template>
