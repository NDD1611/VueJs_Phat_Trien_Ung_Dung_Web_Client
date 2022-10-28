

<script>
import Inputsearch from "./Inputsearch.vue"
import ContactList from "./ContactList.vue"
import ContactCard from "./ContactCard.vue"
import CreateModal from "./CreateModal.vue"
import HeaderCom from "./HeaderCom.vue"
//  import CardNot from "./CardNot.vue"
import { getDataContactList, deleteAllContact } from "../service/CRUDService.js"
export default {
    components: {
        Inputsearch,
        ContactList,
        ContactCard,
        CreateModal,
        HeaderCom
    },
    data() {
        return {
            listContacts: [
            ],
            indexSelect: 0,
            isShowModalCreate: false,
            rerender: true
        }
    },
    async created() {
        if (this.listContacts.length == 0) {
            let res = await getDataContactList()
            if (res.data.length != 0) {
                this.listContacts = res.data;
            }
        }

    },
    mounted() {
        console.log("render Book")
    },
    updated() {
    },
    methods: {
        handleEmit(index) {
            this.indexSelect = index;
        },
        async handleDeleteAll() {
            let res = await deleteAllContact();
            if (res.data.errCode === 0) {
                alert(res.data.mes)
            }
        },
        showCreateModal() {
            this.isShowModalCreate = true
        },
        closeCreateModal() {
            this.isShowModalCreate = false
        },
        async refreshPage() {
            let res = await getDataContactList()
            this.listContacts = res.data;
            this.rerender = false
            this.$nextTick(() => {
                this.rerender = true
            })
        }
    }
}
</script>

<template>
    <div id="ContactBook">
        <HeaderCom />
        <CreateModal v-if="this.isShowModalCreate" @emitCloseCreateModal="closeCreateModal()" />
        <div class="content">
            <Inputsearch />
            <div class="container">
                <div class="left">
                    <p>
                        Danh BẠ
                        <i class="fa-solid fa-address-book"></i>
                    </p>

                    <ContactList v-if="this.rerender" @emitIndex="(index) => { handleEmit(index) }"
                        :list="this.listContacts" :indexSelect="this.indexSelect" />
                    <div class="list-btn">
                        <button class="refresh" @click="refreshPage()">
                            <i class="fa-solid fa-arrow-rotate-right"></i>
                            Làm mới
                        </button>
                        <button class="add" @click="showCreateModal()">
                            <i class=" fa-solid fa-plus"></i>Thêm
                        </button>
                        <button class="delete" @click="handleDeleteAll()">
                            <i class="fa-solid fa-trash"></i>
                            Xóa tất cả
                        </button>
                    </div>
                </div>
                <div class="right">
                    <p>
                        Chi Tiết Liên Hê:
                        <i class="fa-solid fa-address-card"></i>
                    </p>
                    <ContactCard :contact="this.listContacts[this.indexSelect]" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#ContactBook {
    border: 1px solid #ccc;
    width: 50%;
    margin: 0 auto;
    padding: 10px;

    .content {
        width: 100%;

        .container {
            display: flex;
            gap: 20px;
            padding: 10px 0;

            .left {
                flex: 1;

                .list-btn {
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;

                    button {
                        i {
                            padding: 0 5px;
                        }
                    }

                    .refresh {
                        padding: 8px 10px;
                        cursor: pointer;
                        border-radius: 5px;
                        border: none;
                        color: #fff;
                        background-color: #27c3ea;
                    }

                    .add {
                        padding: 8px 10px;
                        cursor: pointer;
                        border-radius: 5px;
                        border: none;
                        color: #fff;
                        background-color: #19b719;
                    }

                    .delete {
                        padding: 8px 10px;
                        cursor: pointer;
                        border-radius: 5px;
                        border: none;
                        color: #fff;
                        background-color: #e81414;
                    }
                }
            }

            .right {
                border: 1px solid #ccc;
                flex: 1;
            }
        }
    }
}
</style>
