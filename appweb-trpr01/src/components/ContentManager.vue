<script setup lang="ts">
import { ref } from "vue";
import AddProduct from "./AddProduct.vue";
import ProductList from "./ProductList.vue";
import { type Product } from "../scripts/Product";

const products = ref<Product[]>([
  {
    id: 1,
    name: "Hello Kitty",
    description:
      "Adorable peluche Hello Kitty en tissu doux et moelleux, parfaite pour les câlins. Avec son nœud iconique sur l'oreille et son expression charmante, elle apportera une touche de douceur et de réconfort à tous les fans du célèbre personnage.",
    price: 25.99,
    quantity: 30,
    image: "/hellokitty.jpg",
  },
  {
    id: 2,
    name: "My Melody",
    description:
      "Douce peluche My Melody en velours moelleux, avec son adorable capuchon rose et son sourire tendre. Parfaite pour les câlins, elle apportera une touche de douceur et de réconfort aux fans de l'univers Sanrio.",
    price: 23.99,
    quantity: 10,
    image: "/mymelody.jpg",
  },
  {
    id: 3,
    name: "Kuromi",
    description:
      "Peluche Kuromi toute douce, avec son capuchon noir orné d'un adorable crâne rose et son expression malicieuse. Parfaite pour les fans de Sanrio, elle ajoute une touche de fun et d'espièglerie à toute collection.",
    price: 24.99,
    quantity: 20,
    image: "/kuromi.jpg",
  },
  {
    id: 4,
    name: "Cinnamoroll",
    description:
      "Adorable peluche Cinnamoroll en velours tout doux, avec ses longues oreilles moelleuses et son sourire tendre. Parfaite pour les câlins, elle apportera une touche de douceur et de magie aux fans de Sanrio.",
    price: 25.99,
    quantity: 5,
    image: "/cinnamoroll.jpg",
  },
]);

// Fonction pour ajouter un produit
const handleAddProduct = (newProduct: Product) => {
  products.value.push(newProduct);
};
</script>

<template>
  <div class="container">
    <AddProduct
      @add-product="handleAddProduct"
      :productCount="products.length"
    />
    <ProductList :products="products" />
  </div>
</template>

<style scoped></style>
