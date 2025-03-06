<script setup lang="ts">
import { ref, computed, watch, defineProps, defineEmits } from "vue";
import { type Product } from "../scripts/Product";
import DetailProduct from "./DetailProduct.vue";
import ModifyProduct from "./ModifyProduct.vue";

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: "deleteProduct", productId: number): void;
  (e: "duplicateProduct", product: Product): void;
  (e: "modifyProduct", product: Product): void;
}>();

const showDetails = ref<boolean>(false);
const isModifying = ref<boolean>(false);
const showOutOfStock = ref<boolean>(false);

function handleDeleteProduct() {
  emit("deleteProduct", props.product.id);
}

function handleDuplicateProduct() {
  emit("duplicateProduct", props.product);
}

function toggleDetails() {
  showDetails.value = !showDetails.value;
}

function startModifying() {
  isModifying.value = true;
}

function handleModifyProduct(modifiedProduct: Product) {
  emit("modifyProduct", modifiedProduct);
  isModifying.value = false;
}

function cancelModify() {
  isModifying.value = false;
}

const quantityClass = computed(() => {
  if (props.product.quantity === 0) return "out-of-stock";
  if (props.product.quantity <= 5) return "out-of-stock";
  if (props.product.quantity <= 10) return "low-stock";
  return "high-stock";
});

watch(
  () => props.product.quantity,
  (newQuantity) => {
    if (newQuantity === 0) {
      showOutOfStock.value = true;
    }
  }
);
</script>

<template>
  <div>
    <div class="card mb-3 shadow-sm">
      <div class="card-body d-flex justify-content-between align-items-center">
        <span class="fw-bold">
          {{ product.name }}
          <img
            :src="product.image"
            alt="Image du produit"
            style="max-width: 100px"
          />
        </span>
        <span>{{ product.price }}$</span>
        <span :class="quantityClass">{{ product.quantity }} en stock</span>
        <span>
          <!-- Bouton détails -->
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm me-1"
            @click="toggleDetails"
          >
            <i class="bi bi-three-dots"></i>
          </button>
          <!-- Bouton modification -->
          <button
            type="button"
            class="btn btn-outline-warning btn-sm me-1"
            @click="startModifying"
          >
            <i class="bi bi-pencil"></i>
          </button>
          <!-- Bouton dupliquer -->
          <button
            type="button"
            class="btn btn-outline-info btn-sm me-1"
            @click="handleDuplicateProduct"
          >
            <i class="bi bi-files"></i>
          </button>
          <!-- Bouton supprimer -->
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="handleDeleteProduct"
          >
            <i class="bi bi-trash"></i>
          </button>
        </span>
      </div>
    </div>
    <ModifyProduct
      v-if="isModifying"
      :product="product"
      @modify-product="handleModifyProduct"
      @cancel-modify="cancelModify"
    />
    <DetailProduct v-if="showDetails" :product="product" />

    <!-- Popup lorsqu'épuisement de stock -->
    <div
      class="modal fade show"
      v-if="showOutOfStock"
      style="display: block; background: rgba(0, 0, 0, 0.5)"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="bi bi-exclamation-triangle-fill text-warning"></i> Stock
              épuisé !
            </h5>
            <button
              type="button"
              class="btn-close"
              @click="showOutOfStock = false"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              Le produit <strong>{{ product.name }}</strong> est en rupture de
              stock.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              @click="showOutOfStock = false"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.out-of-stock {
  color: red;
  font-weight: bold;
}

.low-stock {
  color: #ffc107;
  font-weight: bold;
}

.high-stock {
  color: green;
  font-weight: bold;
}
</style>
