<script setup lang="ts">
import { type Product } from "../scripts/Product";
defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="card mb-3 shadow-sm">
    <div class="card-body d-flex justify-content-between align-items-center">
      <span class="fw-bold"
        >{{ product.name }}
        <img
          :src="product.image"
          alt="Image du produit"
          style="max-width: 100px"
      /></span>
      <span>{{ product.price }}$</span>
      <span>{{ product.quantity }} en stock</span>
      <span>
        <button
          type="button"
          class="btn custom-hover-btn custom-details-hover-btn"
        >
          <i class="bi bi-three-dots"></i>
        </button>
        <button
          type="button"
          class="btn custom-hover-btn custom-copy-hover-btn"
        >
          <i class="bi bi-files"></i>
        </button>
        <button
          type="button"
          class="btn custom-hover-btn custom-delete-hover-btn"
        >
          <i class="bi bi-trash"></i>
        </button>
        <!-- <i class="bi bi-floppy"></i>
        <i class="bi bi-trash-fill"></i> -->
      </span>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
}

.custom-delete-hover-btn {
  transition: background-color 0.3s, border-color 0.3s;
}

.custom-delete-hover-btn:hover {
  background-color: #ff645a;
  border-color: #ff645a;
}

.custom-copy-hover-btn {
  transition: background-color 0.3s, border-color 0.3s;
}

.custom-copy-hover-btn:hover {
  background-color: #7fc2fd;
  border-color: #7fc2fd;
}

.custom-details-hover-btn {
  transition: background-color 0.3s, border-color 0.3s;
}

.custom-details-hover-btn:hover {
  background-color: #adadad;
  border-color: #adadad;
}
.custom-hover-btn:hover .icon-default {
  display: none;
}

.custom-hover-btn:hover .icon-hover {
  display: inline-block !important;
}

.custom-hover-btn:hover i {
  transform: scale(1.2);
  transition: transform 0.3s;
}
</style>
