<template>
    <div class="wrap_head">
        <top-component></top-component>
        <gnb-component></gnb-component>
    </div>
</template>

<script>
    import TopComponent from './Top.vue';
    import GnbComponent from './Gnb.vue';

    export default {
        name : 'Head',
        components : {
            TopComponent, GnbComponent
        }
    }
</script>