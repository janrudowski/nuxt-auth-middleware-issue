<template>
  <div>im protected</div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>
