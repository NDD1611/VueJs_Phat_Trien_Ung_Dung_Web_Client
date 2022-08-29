
<script>
export default {
    props: {
        list: {
            type: Array
        },
        indexSelect: {
            type: Number
        }
    },
    data() {
        return {
            isShowNotData: true
        }
    },
    methods: {
        handleClickLi(index) {
            this.$emit('emitIndex', index)
        }
    }
}
</script>

<template>
    <div id="ContactList">
        <ul v-if="this.list.length != 0">
            <li v-for="(contact, index) in this.list" :class="index"
                :style="index == this.indexSelect ? { 'backgroundColor': '#27c3ea' } : {}"
                @click="handleClickLi(index)">
                {{ contact.name }}
            </li>
        </ul>
        <div v-else="this.list.length == 0">Không có dữ liệu</div>
    </div>
</template>

<style lang="scss" scoped>
#ContactList {
    width: 100%;
    border: 1px solid #ccc;

    ul {
        width: 100%;
        height: 150px;
        margin: 0;
        padding: 0;
        overflow: auto;

        li {
            padding: 10px;
            list-style-type: none;
            border: 1px solid #ccc;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>