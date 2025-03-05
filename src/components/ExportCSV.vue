<script setup lang="ts">
import { defineProps } from "vue";
import { type Product } from "../scripts/Product";

const props = defineProps<{
  products: Product[];
}>();

// Référence pour exporter en CSV: https://www.youtube.com/watch?v=uxK1UVcMOOo

function convertToCSV(data: any[]) {
  const header = Object.keys(data[0]).filter((key) => key !== "image");
  const rows = data.map((row) =>
    header.map((key) => (row[key] ? row[key] : "")).join(",")
  );
  return [header.join(","), ...rows].join("\n");
}

function exportToCSV() {
  const csvContent = convertToCSV(props.products);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "produits.csv");
  link.click();
  URL.revokeObjectURL(url);
}
</script>

<template>
  <div>
    <button class="btn btn-primary" @click="exportToCSV">
      Exporter en CSV
    </button>
  </div>
</template>

<style></style>
