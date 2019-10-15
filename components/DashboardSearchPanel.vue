<template>
    <div class="search-panel d-flex justify-start flex-wrap">
        <template v-for="(item, key, i) in items">
            <SearchFilterItem
                class="mr-2 mb-4"
                v-for="(child, j) in item"
                :key="`${key}-${j}`"
                :colorIndex="i"
                @remove="$emit('remove', { key: key, value: child.value})"
            >{{child.text}}</SearchFilterItem>
        </template>
    </div>
</template>

<script>
import SearchFilterItem from "@/components/DashboardSearchFilterItem";

export default {
    name: "DashboardSearchPanel",

    props: {
        items: Object
    },

    components: {
        SearchFilterItem
    }
};
</script>