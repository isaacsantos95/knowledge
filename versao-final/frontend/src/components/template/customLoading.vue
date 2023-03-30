<template>
    <div class="customLoading">
        <img src="@/assets/loading.gif" alt="customLoading">
    </div>
</template>

<script>
export default {
    name: 'customLoading'
}
</script>

<style>
    .customLoading {
        grid-area: content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
