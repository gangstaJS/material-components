<template>
    <div class="mdl-dialog__custom-container">
        <div class="mdl-dialog">
            <div class="mdl-dialog__content">
                <p>
                    Allow this site to collect usage data to improve your experience?
                </p>
            </div>
            <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                <button type="button" class="mdl-button">Agree</button>
                <button type="button" class="mdl-button close">Disagree</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .mdl-dialog {
        background: #fff;

        &__custom-container {
            position: fixed;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content:center;
            align-items: center;
            top:0;
            left: 0;
            z-index: 999;
            background: rgba(0,0,0,0.3);
        }
    }
</style>

<script>
    export default{
        data(){
            return {}
        }
    }
</script>
