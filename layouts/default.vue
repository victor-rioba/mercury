<template>
  <div class="flex w-screen h-screen">
    <PageNavbar />
    <UCard class="p-4 w-full h-screen overflow-y-auto">
      <PageBreadcrumbs v-if="useRoute().name !== 'index'" />
      <slot />
    </UCard>
  </div>
</template>
