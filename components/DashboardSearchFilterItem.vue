<template>
    <div class="search-filter-item">
        <button
            type="button"
            class="btn-close d-flex align-center caption"
            @click="$emit('remove')"
        >
            <slot></slot>
            <v-icon small right dark>mdi-close-circle</v-icon>
        </button>
    </div>
</template>

<script>
export default {
    name: "SearchFilterItem"
};
</script>

<style lang="scss" scoped>
.btn-close {
    border-radius: 20px;
    padding: 0.25rem 0.8rem;
    background: #000;
    color: #fff;

    &:hover {
        background: #c80000 !important;
        transition: 0.2s;
    }
}
</style>