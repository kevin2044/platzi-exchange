<template>
  <div class="flex-col container px-5 sm:px-20 py-20 flex justify-center">
    <div class="flex justify-center">
      <bounce-loader :loading="isLoading" :color="'#68D391'" :size="100" />
    </div>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "../components/PxAssetsTable";
export default {
  name: "Home",
  components: {
    PxAssetsTable,
  },
  data() {
    return {
      assets: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
