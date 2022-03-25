<template>
  <div>
    <n-data-table :columns="columns" :data="data" :bordered="false" />
  </div>
</template>

<script>
import { NDataTable } from "naive-ui";

export default {
  name: "DropDownTable",
  props: {
    columns: Array,
    data: Array,
  },
  components: {
    NDataTable,
  },
};
</script>
<style lang=""></style>
