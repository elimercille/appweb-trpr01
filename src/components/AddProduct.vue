<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";
import { type Product } from "../scripts/Product";

const props = defineProps<{
  productCount: number;
}>();

const emit = defineEmits<{
  (e: "addProduct", product: Product): void;
}>();

const showForm = ref<boolean>(false);

const newProductName = ref<string>("");
const newProductDescription = ref<string>("");
const newProductPrice = ref<number>(0);
const newProductQuantity = ref<number>(0);
const newProductImage = ref<string>("/appweb-trpr01/no-image.jpg");

const nextProductId = computed(() => {
  return props.productCount + 1;
});

const showRequiredField = ref<boolean>(false);

function addProduct() {
  if (
    newProductName.value === "" ||
    newProductPrice.value === 0 ||
    newProductQuantity.value === 0
  ) {
    showRequiredField.value = true;
    return;
  }
  const newProduct: Product = {
    id: nextProductId.value,
    name: newProductName.value,
    description: newProductDescription.value,
    price: newProductPrice.value,
    quantity: newProductQuantity.value,
    image: newProductImage.value,
  };

  emit("addProduct", newProduct);

  newProductName.value = "";
  newProductDescription.value = "";
  newProductPrice.value = 0;
  newProductQuantity.value = 0;
  newProductImage.value = "/no-image.jpg";
}

function toggleForm() {
  showForm.value = !showForm.value;
}
</script>

<template>
  <div class="container">
    <div class="text-center mb-3" v-if="!showForm">
      <button class="btn btn-success btn-sm" @click="toggleForm">
        <i class="bi bi-plus-circle me-2"></i>
        Ajouter un nouveau produit
      </button>
    </div>

    <div v-if="showForm" class="card shadow-sm">
      <div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="text-custom fw-bold m-0">Ajouter un produit</h2>
          <button class="btn btn-sm btn-outline-secondary" @click="toggleForm">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <form @submit.prevent="addProduct">
          <div class="row g-2">
            <!-- Nom produit -->
            <div class="col-12">
              <label for="name" class="form-label small-label"
                >Nom du produit <span class="text-danger">*</span></label
              >
              <input
                type="text"
                id="name"
                class="form-control form-control-sm"
                v-model="newProductName"
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
                v-model="newProductDescription"
                rows="2"
              ></textarea>
            </div>
            <!-- Prix et Quantité -->
            <div class="col-6">
              <label for="price" class="form-label small-label"
                >Prix ($) <span class="text-danger">*</span></label
              >
              <input
                type="number"
                id="price"
                class="form-control form-control-sm"
                v-model="newProductPrice"
                min="0"
                step="0.01"
              />
            </div>
            <div class="col-6">
              <label for="quantity" class="form-label small-label"
                >Quantité<span class="text-danger">*</span></label
              >
              <input
                type="number"
                id="quantity"
                class="form-control form-control-sm"
                v-model="newProductQuantity"
                min="0"
                step="1"
              />
            </div>
            <!-- Image produit -->
            <div class="col-12">
              <label for="image" class="form-label small-label">Image</label>
              <select
                id="image"
                class="form-select form-select-sm"
                v-model="newProductImage"
              >
                <option value="/appweb-trpr01/no-image.jpg" selected>
                  Non disponible
                </option>
              </select>
            </div>
            <!-- Aperçu de l'image -->
            <div class="col-12 text-center mt-2">
              <img
                :src="newProductImage"
                alt="Aperçu"
                class="img-thumbnail"
                style="max-width: 100px"
              />
            </div>
          </div>
          <!-- Bouton formulaire -->
          <div class="d-grid mt-3">
            <button type="submit" class="btn btn-primary btn-sm">
              Ajouter le produit
            </button>
          </div>
        </form>
      </div>
      <div
        v-if="showRequiredField"
        class="modal fade show"
        style="display: block; background: rgba(0, 0, 0, 0.5)"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <i class="bi bi-exclamation-triangle-fill text-warning"></i>
                Champs requis
              </h5>
              <button
                type="button"
                class="btn-close"
                @click="showRequiredField = false"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                Veuillez remplir tous les champs requis avant d'ajouter un
                produit.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                @click="showRequiredField = false"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
