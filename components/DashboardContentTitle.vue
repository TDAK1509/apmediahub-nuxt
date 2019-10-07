<template>
    <v-card-title class="d-flex">
        <div class="flex-grow-1 pb-3 text-capitalize title-container">
            <slot></slot>
        </div>
    </v-card-title>
</template>

<script>
export default {
    name: "DashboardContentTitle"
};
</script>

<style lang="scss" scoped>
.title-container {
    border-bottom: 4px solid #e0e0e0;
}
</style>