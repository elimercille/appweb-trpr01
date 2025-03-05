<script setup lang="ts">
import { ref, defineEmits } from "vue";

const searchProduct = ref("");
const emit = defineEmits<{
  (e: "search", query: string): void;
}>();

function searchProductByName() {
  emit("search", searchProduct.value);
}
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchProduct"
      @input="searchProductByName"
      placeholder="Rechercher un produit..."
    />
  </div>
</template>

<style scoped>
.search-bar {
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
