<script setup lang="ts">
import { type Product } from "../scripts/Product";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="card mt-2 shadow-sm">
    <div class="card-body">
      <h5 class="card-title text-center mb-3">Détails du produit</h5>
      <div class="row">
        <div class="col-md-4 text-center">
          <img
            :src="product.image"
            :alt="product.name"
            class="img-thumbnail"
            style="max-height: 200px"
          />
        </div>
        <div class="col-md-8">
          <div class="mb-2"><strong>Nom :</strong> {{ product.name }}</div>
          <div class="mb-2">
            <strong>Description :</strong> {{ product.description }}
          </div>
          <div class="mb-2"><strong>Prix :</strong> {{ product.price }}$</div>
          <div class="mb-2">
            <strong>Quantité en stock :</strong> {{ product.quantity }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
