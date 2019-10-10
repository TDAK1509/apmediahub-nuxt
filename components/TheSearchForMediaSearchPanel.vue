<template>
    <div class="search-panel d-flex flex-column justify-center">
        <div class="search-panel-block d-flex justify-start align-center flex-wrap">
            <SearchFilterItem
                class="mr-2 mb-2"
                v-for="(f, index) in countries"
                :key="`countryFilter${index}`"
                @remove="$emit('removeCountry', f)"
            >{{f}}</SearchFilterItem>
        </div>

        <div class="search-panel-block d-flex justify-start flex-wrap">
            <SearchFilterItem
                class="mr-2 mb-2"
                v-for="(f, index) in media"
                :key="`mediaFilter${index}`"
                @remove="$emit('removeMedia', f.value)"
            >{{f.text}}</SearchFilterItem>
        </div>

        <div class="search-panel-block d-flex justify-start flex-wrap">
            <SearchFilterItem
                class="mr-2 mb-2"
                v-for="(f, index) in segments"
                :key="`segmentFilter${index}`"
                @remove="$emit('removeSegment', f.value)"
            >{{f.text}}</SearchFilterItem>
        </div>
    </div>
</template>

<script>
import SearchFilterItem from "@/components/DashboardSearchFilterItem";

export default {
    name: "TheSearchForMediaSearchPanel",
    props: {
        countries: Array,
        media: Array,
        segments: Array
    },
    components: {
        SearchFilterItem
    }
};
</script>