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
                v-for="(f, index) in cities"
                :key="`cityFilter${index}`"
                @remove="$emit('removeCity', f)"
            >{{f}}</SearchFilterItem>
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
    name: "TheSearchForJournalistSearchPanel",
    props: {
        countries: Array,
        cities: Array,
        segments: Array,
        mediaTypes: Array
    },
    components: {
        SearchFilterItem
    }
};
</script>