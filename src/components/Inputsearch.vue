

<script>
</script>

<template>
    <div id="Input">
        <div class="content">
            <input placeholder="Nhập thông tin cần tìm..." />
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
                Tìm kiếm
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#Input {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;

    .content {
        width: 100%;

        input {
            width: 80%;
        }

        button {
            border: 1px solid #ccc;
        }
    }
}
</style>
