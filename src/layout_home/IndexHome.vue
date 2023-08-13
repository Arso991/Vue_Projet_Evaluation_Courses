<template>
    <div class="banner">
        <div class="container">
            <div class="banner__content">
                <div class="banner__content__left">
                    <h1 class="banner__content__title">Les courses</h1>
                    <p class="banner__content__text">Exécution facile et ordonnée de vos courses désormais.
                        Lorem
                        ipsum
                        dolor sit amet, consectetur adipisicing elit. Ex ut exercitationem nihil quasi
                        voluptatum
                        deserunt
                        iure corrupti modi, earum soluta reiciendis, distinctio similique quibusdam quidem iusto
                        numquam
                        vero omnis? Illuum?</p>
                </div>
                <div class="banner__content__right">
                    <img src="../assets/list_img.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
img {
    width: 100%;
    height: auto;
}

/* ceci concerne le corps */

.banner__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.container {
    padding: 0 5rem;
    margin: 0 auto;
}

.banner__content__left {
    width: calc(100% - 30rem);
}

.banner__content__right {
    width: 25rem;
}

.banner__content__title {
    font-size: 2.5rem;
    text-transform: uppercase;
    color: black;
}

.banner__content__title::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2rem;
    width: 8rem;
    border-bottom: 2px solid #252538;
}

.banner__content__text {
    font-size: 1.2rem;
    color: #252538;
}
</style>