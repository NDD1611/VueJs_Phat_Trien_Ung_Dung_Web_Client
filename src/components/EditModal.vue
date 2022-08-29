

<script>

import { updateContact } from "../service/CRUDService.js"
export default {
    props: {
        contact: {
            type: Object
        }
    },
    mounted() {
        console.log("render")
    },
    methods: {
        async handleSaveContact() {
            let res = await updateContact(this.contact)
            if (res) {
                if (res.mes) {
                    alert(res.mes)
                }
                if (res.errCode === 0) {
                    this.$emit("emitCloseModal")
                }
            }
        }
    }
}
</script>

<template>
    <div id="EditModal">
        <div class="opacity"></div>
        <div class="main">
            <div class="top">
                Hiệu chỉnh Contact
                <div class="btn_close" @click="() => { this.$emit('emitCloseModal') }">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="content">
                <div>
                    <label for="name">Tên:</label>
                    <input v-model="this.contact.name" type="text" name="" id="name">
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input v-model="this.contact.email" type="text" name="" id="email">
                </div>
                <div>
                    <label for="address">Địa chỉ:</label>
                    <input v-model="this.contact.address" type="text" name="" id="address">
                </div>
                <div>
                    <label for="phone">Số điện thoại:</label>
                    <input v-model="this.contact.phone" type="text" name="" id="phone">
                </div>
                <div class="checkbox">
                    <input v-model="this.contact.favorite" type="checkbox" name="" id="" class="input_check">
                    <span>Liên hệ yêu thích</span>
                </div>
            </div>
            <div class="bottom">
                <button class="save" @click="handleSaveContact()">
                    <i class="fa-solid fa-floppy-disk"></i>
                    Lưu
                </button>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                    xóa
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#EditModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: 1px solid blue;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    .opacity {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.2;
    }

    .main {
        background-color: #fff;
        position: relative;
        z-index: 10;
        width: 300px;

        .top {
            font-size: 25px;
            padding: 10px 10px;

            .btn_close {
                position: absolute;
                right: 10px;
                top: 10px;
            }
        }

        .content {
            padding: 10px;

            label {
                display: block;
                padding: 10px 0 5px 0;
            }

            input {
                width: 100%;
                padding: 5px;
            }

            .checkbox {
                padding: 10px 0;

                .input_check {
                    width: 20px;
                    padding: 10px;
                }
            }
        }

        .bottom {
            button {
                margin: 0 10px 10px;
                padding: 8px 20px;
                border: none;
                border-radius: 5px;
                color: #fff;
                font-size: 15px;
            }

            .save {
                background-color: #27c3ea;
            }

            .delete {
                background-color: #e81414;
            }
        }
    }
}
</style>
