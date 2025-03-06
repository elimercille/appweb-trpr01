<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { type Product } from "../scripts/Product";

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: "modifyProduct", product: Product): void;
  (e: "cancelModify"): void;
}>();

const modifiedName = ref(props.product.name);
const modifiedDescription = ref(props.product.description);
const modifiedPrice = ref(props.product.price);
const modifiedQuantity = ref(props.product.quantity);
const modifiedImage = ref(props.product.image);

function saveModifications() {
  const modifiedProduct: Product = {
    id: props.product.id,
    name: modifiedName.value,
    description: modifiedDescription.value,
    price: modifiedPrice.value,
    quantity: modifiedQuantity.value,
    image: modifiedImage.value,
  };

  emit("modifyProduct", modifiedProduct);
}

function cancelModifications() {
  emit("cancelModify");
}
</script>

<template>
  <div class="card shadow-sm mt-3">
    <div class="card-body p-3">
      <h2 class="text-center mb-3 text-custom fw-bold">Modifier le produit</h2>
      <form @submit.prevent="saveModifications">
        <div class="row g-2">
          <!-- Nom produit -->
          <div class="col-12">
            <label for="name" class="form-label small-label"
              >Nom du produit</label
            >
            <input
              type="text"
              id="name"
              class="form-control form-control-sm"
              v-model="modifiedName"
              required
            />
          </div>

          <!-- Description produit -->
          <div class="col-12">
            <label for="description" class="form-label small-label"
              >Description</label
            >
            <textarea
              id="description"
              class="form-control form-control-sm"
              v-model="modifiedDescription"
              required
              rows="2"
            ></textarea>
          </div>

          <!-- Prix et Quantité -->
          <div class="col-6">
            <label for="price" class="form-label small-label">Prix ($)</label>
            <input
              type="number"
              id="price"
              class="form-control form-control-sm"
              v-model="modifiedPrice"
              required
              min="0"
              step="0.01"
            />
          </div>
          <div class="col-6">
            <label for="quantity" class="form-label small-label"
              >Quantité</label
            >
            <input
              type="number"
              id="quantity"
              class="form-control form-control-sm"
              v-model="modifiedQuantity"
              required
              min="0"
            />
          </div>

          <!-- Image produit -->
          <div class="col-12">
            <label for="image" class="form-label small-label">Image</label>
            <select
              id="image"
              class="form-select form-select-sm"
              v-model="modifiedImage"
            >
              <option value="/appweb-trpr01/no-image.jpg">
                Non disponible
              </option>
            </select>
          </div>

          <!-- Aperçu de l'image -->
          <div class="col-12 text-center mt-2">
            <img
              :src="modifiedImage"
              alt="Aperçu"
              class="img-thumbnail"
              style="max-width: 100px"
            />
          </div>
        </div>

        <!-- Boutons Enregistrer et Annuler -->
        <div class="d-grid mt-3 d-md-flex justify-content-md-between">
          <button type="submit" class="btn btn-primary btn-sm me-md-2">
            Enregistrer les modifications
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="cancelModifications"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
