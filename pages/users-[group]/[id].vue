<script setup lang="ts">
const route = useRoute()

const isAdmin = ref(false)
if (route.params.group === 'admin') {
  isAdmin.value = true
}

useSeoMeta({
  title: 'User Page',
  description: 'user info page'
})
</script>

<template>
  <div class="p-3">
    <p>This is: {{ $route.params.group }}</p>
    <p>and id: {{ $route.params.id }}</p>
    <p v-if="isAdmin" class="font-bold text-red-500">Is Admin</p>
  </div>
</template>
