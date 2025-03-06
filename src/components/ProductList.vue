<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import ProductCard from "./ProductCard.vue";
import ExportCSV from "./ExportCSV.vue";
import { type Product } from "../scripts/Product";

defineProps<{
  products: Product[];
}>();

const emit = defineEmits<{
  (e: "deleteProduct", productId: number): void;
  (e: "duplicateProduct", product: Product): void;
  (e: "modifyProduct", product: Product): void;
}>();

function handleDeleteProduct(productId: number) {
  emit("deleteProduct", productId);
}

function handleDuplicateProduct(product: Product) {
  emit("duplicateProduct", product);
}

function handleModifyProduct(product: Product) {
  emit("modifyProduct", product);
}
</script>

<template>
  <div class="container mt-4">
    <div class="card shadow-sm p-4">
      <div class="mt-4">
        <h2 class="text-center mb-3 text-custom fw-bold">Liste des produits</h2>
        <div
          v-if="products.length === 0"
          class="alert alert-warning text-center"
        >
          Vous n'avez aucun produit pour le moment.
        </div>
        <div v-else class="row">
          <div
            class="col-12 mb-3"
            v-for="product in products"
            :key="product.id"
          >
            <ProductCard
              :product="product"
              @delete-product="handleDeleteProduct"
              @duplicate-product="handleDuplicateProduct"
              @modify-product="handleModifyProduct"
            />
          </div>
        </div>
      </div>
      <div>
        <ExportCSV :products="products" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
