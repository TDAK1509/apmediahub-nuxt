<template>
    <div class="search-filter-item">
        <button type="button" :class="classNames" @click="$emit('remove')">
            <slot></slot>
            <v-icon small right dark>mdi-close-circle</v-icon>
        </button>
    </div>
</template>

<script>
export default {
    name: "SearchFilterItem",

    props: {
        colorIndex: Number
    },

    data() {
        return {
            colorList: ["black", "orange", "blue", "grey", "green", "brown"]
        };
    },

    computed: {
        classNames() {
            return this.defaultClasses + " " + this.color;
        },

        defaultClasses() {
            return "btn-close d-flex align-center caption";
        },

        color() {
            return this.colorList[this.colorIndex];
        }
    }
};
</script>

<style lang="scss" scoped>
.btn-close {
    border-radius: 20px;
    padding: 0.25rem 0.8rem;
    color: #fff;

    &:hover {
        transition: 0.2s;
        background: #c80000 !important;
        color: #fff;
    }

    .black {
        background: #000;
    }

    .blue {
        background: #1565c0;
    }

    .orange {
        background: #ffb74d;
    }

    .grey {
        background: #7f7f7f;
        color: #000;
    }

    .green {
        background: #9ccc65;
    }

    .brown {
        background: #a1887f;
    }
}
</style>