<template>
    <footer class="customFooter">
        <span> Base <strong>Site </strong>2023 </span>
    </footer>
</template>

<script>
export default {
    name: "customFooter"
}
</script>

<style>
    .customFooter {
        grid-area: customFooter;
        background-color: #DDD;
        color: #333;

        display: center;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
