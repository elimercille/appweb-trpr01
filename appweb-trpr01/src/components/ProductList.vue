<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import { type Product } from "../scripts/Product";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="container mt-4">
    <div class="card shadow-sm p-4">
      <div class="mt-4">
        <h3 class="text-center">Liste des produits</h3>
        <div
          v-if="products.length === 0"
          class="alert alert-warning text-center"
        >
          Vous n'avez aucun produit pour le moment.
        </div>
        <div v-else class="row">
          <!-- Remplacer col-md-6 par col-12 pour occuper toute la largeur -->
          <div
            class="col-12 mb-3"
            v-for="product in products"
            :key="product.id"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
