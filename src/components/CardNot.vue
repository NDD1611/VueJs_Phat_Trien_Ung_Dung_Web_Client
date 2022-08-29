<script>
import EditModal from "./EditModal.vue"
export default {
    components: {
        EditModal
    },
    data() {
        return {
            isShowModal: false
        }
    },
    props: {
        indexSelect: {
            type: Number,
            default: 0
        },
        list: {
            type: Array,
            default: []
        }
    },
    mounted() {
        console.log("ContactCard render")
    },
    methods: {
        handleEmitCloseModal() {
            this.isShowModal = false
        }
    }
}
</script>

<template>
    <div id="ContactCard">
        <EditModal v-if="this.isShowModal" :contact="this.list[this.indexSelect]"
            @emitCloseModal="handleEmitCloseModal()" />
        <div class="contact-div">
            Tên:
            <span></span>
        </div>
        <div class="contact-div">
            E-mail:
            <span></span>
        </div>
        <div class="contact-div">
            Địa chỉ:
            <span></span>
        </div>
        <div class="contact-div">
            Điện thoại:
            <span></span>
        </div>
        <div class="contact-div">
            Liên hệ yêu thích:
            <span>
                <i v-show="this.list[this.indexSelect].favorite" class="fa-solid fa-check"></i>
                <i v-show="!this.list[this.indexSelect].favorite" class="fa-solid fa-ban"></i>
            </span>
        </div>
        <button class="button_show_modal" @click="this.isShowModal = !this.isShowModal">
            Hiệu chỉnh
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
    </div>
</template>

<style lang="scss" scoped>
#ContactCard {
    display: flex;
    flex-direction: column;
    position: relative;

    .contact-div {
        padding: 10px 10px;
        height: 20%;
    }

    .button_show_modal {
        width: 150px;
        padding: 5px 10px;
        background-color: #f9e50e;
        border: none;
        border-radius: 5px;
        color: #fff;
    }
}
</style>