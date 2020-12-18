<template>
  <SongDisplay :data="getTop2000Songs()" />
</template>

<script>
import SongDisplay from '../components/SongDisplay.vue';
import list2019 from '../data/2019.json';

export default {
  name: 'List2019',
  components: { SongDisplay },
  methods: {
    getTop2000Songs() {
      return list2019;
    },
  },
};
</script>
