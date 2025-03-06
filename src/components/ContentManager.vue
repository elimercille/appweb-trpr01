<script setup lang="ts">
import { ref, computed } from "vue";
import AddProduct from "./AddProduct.vue";
import ProductList from "./ProductList.vue";
import SearchProduct from "./SearchProduct.vue";
import { type Product } from "../scripts/Product";

const products = ref<Product[]>([
  {
    id: 1,
    name: "Hello Kitty",
    description:
      "Adorable peluche Hello Kitty en tissu doux et moelleux, parfaite pour les câlins. Avec son nœud iconique sur l'oreille et son expression charmante, elle apportera une touche de douceur et de réconfort à tous les fans du célèbre personnage.",
    price: 25.99,
    quantity: 30,
    image: "/appweb-trpr01/hellokitty.jpg",
  },
  {
    id: 2,
    name: "My Melody",
    description:
      "Douce peluche My Melody en velours moelleux, avec son adorable capuchon rose et son sourire tendre. Parfaite pour les câlins, elle apportera une touche de douceur et de réconfort aux fans de l'univers Sanrio.",
    price: 23.99,
    quantity: 10,
    image: "/appweb-trpr01/mymelody.jpg",
  },
  {
    id: 3,
    name: "Kuromi",
    description:
      "Peluche Kuromi toute douce, avec son capuchon noir orné d'un adorable crâne rose et son expression malicieuse. Parfaite pour les fans de Sanrio, elle ajoute une touche de fun et d'espièglerie à toute collection.",
    price: 24.99,
    quantity: 20,
    image: "/appweb-trpr01/kuromi.jpg",
  },
  {
    id: 4,
    name: "Cinnamoroll",
    description:
      "Adorable peluche Cinnamoroll en velours tout doux, avec ses longues oreilles moelleuses et son sourire tendre. Parfaite pour les câlins, elle apportera une touche de douceur et de magie aux fans de Sanrio.",
    price: 25.99,
    quantity: 5,
    image: "/appweb-trpr01/cinnamoroll.jpg",
  },
]);

const searchProduct = ref("");

function addProduct(newProduct: Product) {
  products.value.push(newProduct);
}

function deleteProduct(id: number) {
  products.value = products.value.filter((product) => product.id !== id);
}

function duplicateProduct(product: Product) {
  const newProduct: Product = {
    // Référence de l'opérateur spread pour copier l'objet au complet sauf l'id: https://www.geeksforgeeks.org/how-to-use-spread-operator-in-typescript/
    ...product,
    id: products.value.length + 1,
  };

  products.value.push(newProduct);
}

function modifyProduct(modifiedProduct: Product) {
  products.value = products.value.map((product) =>
    product.id === modifiedProduct.id ? { ...modifiedProduct } : product
  );
}

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.value.toLowerCase())
  );
});

function handleSearch(query: string) {
  searchProduct.value = query;
}
</script>

<template>
  <div class="container">
    <SearchProduct @search="handleSearch" />

    <AddProduct
      v-if="!searchProduct"
      @add-product="addProduct"
      :productCount="products.length"
    />

    <ProductList
      :products="searchProduct ? filteredProducts : products"
      @delete-product="deleteProduct"
      @duplicate-product="duplicateProduct"
      @modify-product="modifyProduct"
    />
  </div>
</template>

<style scoped></style>
