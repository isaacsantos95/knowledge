<template>
    <div class="customContent">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'customContent'
}
</script>

<style>
    .customContent {
        grid-area: content;
        background-color: #efefef;
        padding: 10px;
    }
</style>
