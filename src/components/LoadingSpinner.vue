<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading-spinner {
  margin: 1.875rem auto auto;
  width: 5rem;
  height: 5rem;
}

.spinner::after {
  content: ' ';
  display: block;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  border-radius: 50%;
  border: 0.375rem solid var(--primary);
  border-color: var(--primary) transparent var(--primary) transparent;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
