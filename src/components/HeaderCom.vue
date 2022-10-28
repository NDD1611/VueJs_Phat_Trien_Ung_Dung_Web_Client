<template>
    <div id="Header">
        Ứng dụng quản lý danh bạ
        <span>
            danh Bạ
            <i class="fa-solid fa-address-book"></i>
        </span>
    </div>
</template>
<style lang="scss">
#Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: black;
    height: 50px;
    color: #fff;
    padding: 0 10px;

    span {
        margin-left: 20px;
    }

    .nav {
        a {
            padding: 10px;
            color: #fff;
            text-decoration: none;
        }
    }

}
</style>