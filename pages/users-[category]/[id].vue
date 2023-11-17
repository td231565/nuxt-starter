<template>
  <div class="p-3">
    <p>This is: {{ $route.params.category }}</p>
    <p>and id: {{ $route.params.id }}</p>
    <p v-if="isAdmin" class="font-bold text-red-500">Is Admin</p>
  </div>
</template>

<script setup lang="ts">
const isAdmin = ref(false)
const route = useRoute()
if (route.params.category === 'admin') {
  isAdmin.value = true
}
</script>
