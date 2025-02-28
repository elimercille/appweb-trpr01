<script setup lang="ts">
import { ref, computed } from "vue";
import { type Product } from "../scripts/Product";

// Définir les props et émetteurs
const props = defineProps<{
  productCount: number;
}>();

const emit = defineEmits<{
  (e: "add-product", product: Product): void;
}>();

const newProductName = ref<string>("");
const newProductDescription = ref<string>("");
const newProductPrice = ref<number>(0);
const newProductQuantity = ref<number>(0);
const newProductImage = ref<string>("/no-image.jpg");

const nextProductId = computed(() => {
  return props.productCount + 1;
});

function addProduct() {
  // Ajout des nouvelles valeurs au produit
  const newProduct: Product = {
    id: nextProductId.value,
    name: newProductName.value,
    description: newProductDescription.value,
    price: newProductPrice.value,
    quantity: newProductQuantity.value,
    image: newProductImage.value,
  };

  emit("add-product", newProduct);

  // Réinitialiser les champs
  newProductName.value = "";
  newProductDescription.value = "";
  newProductPrice.value = 0;
  newProductQuantity.value = 0;
  newProductImage.value = "/no-image.jpg";
}
</script>

<template>
  <div class="container mt-4">
    <div class="card shadow-sm p-4">
      <h2 class="text-center mb-4 text-custom fw-bold">Ajouter un produit</h2>
      <form @submit.prevent="addProduct">
        <div class="row g-3">
          <!-- Nom produit -->
          <div class="col-12 mb-3">
            <label for="name" class="form-label">Nom du produit</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="newProductName"
              required
            />
          </div>

          <!-- Description produit -->
          <div class="col-12 mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              class="form-control"
              v-model="newProductDescription"
              required
              rows="4"
            ></textarea>
          </div>

          <!-- Prix produit -->
          <div class="col-12 mb-3">
            <label for="price" class="form-label">Prix ($)</label>
            <input
              type="number"
              id="price"
              class="form-control"
              v-model="newProductPrice"
              required
              min="0"
              step="0.01"
            />
          </div>

          <!-- Quantité produit -->
          <div class="col-12 mb-3">
            <label for="quantity" class="form-label">Quantité</label>
            <input
              type="number"
              id="quantity"
              class="form-control"
              v-model="newProductQuantity"
              required
              min="1"
            />
          </div>

          <!-- Image produit -->
          <div class="col-12 mb-3">
            <label for="image" class="form-label">Image</label>
            <select id="image" class="form-select" v-model="newProductImage">
              <option value="/no-image.jpg">Non disponible</option>
            </select>
          </div>

          <!-- Aperçu de l'image sélectionnée -->
          <div class="col-12 mb-3 text-center">
            <div class="card p-3 shadow-sm">
              <img
                :src="newProductImage"
                alt="Aperçu"
                class="img-thumbnail mx-auto d-block"
                style="max-width: 150px"
              />
              <p class="mt-2 text-muted">Aperçu de l'image</p>
            </div>
          </div>
        </div>

        <!-- Bouton formulaire -->
        <div class="d-grid mt-4">
          <button type="submit" class="btn btn-primary btn-lg">
            Ajouter le produit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.text-custom {
  color: #a8fa8a;
}
</style>
