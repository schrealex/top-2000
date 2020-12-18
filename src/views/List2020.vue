<template>
  <SongDisplay :data="getTop2000Songs()" />
</template>

<script>
import SongDisplay from '../components/SongDisplay.vue';
import list2020 from '../data/2020.json';

export default {
  name: 'List2020',
  components: { SongDisplay },
  methods: {
    getTop2000Songs() {
      return list2020;
    },
  },
};
</script>
