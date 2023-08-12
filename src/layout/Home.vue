<template>
    <div class="wrapper">
        <main>
            <div class="banner">
                <div class="contaner">
                    <div class="banner__content">
                        <div class="banner__content__top">
                            <div class="banner__content__top__item">
                                <p>Courses à faire</p>
                                <h1>20</h1>
                            </div>
                            <div class="banner__content__top__item">
                                <p>Courses completées</p>
                                <h1>4</h1>
                            </div>
                            <div class="banner__content__top__item">
                                <p>Courses restantes</p>
                                <h1>16</h1>
                            </div>
                            <div class="banner__content__top__item">
                               <p>Courses importantes</p>
                               <h1>6</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
main{
    width: 100%;
}
.contaner{
    padding: 0 2rem;
    margin: 0 auto;
}
.banner__content{
    padding: 1rem 0;
}
.banner__content__top{
    display: grid;
    grid-template-columns: repeat(4, 220px);
    justify-content: space-between;
}
.banner__content__top__item{
    border: 1px solid #e7c57d;
    height: 6rem;
    padding-left: 1rem;
    border-radius: 10px;
}
.banner__content__top__item h1{
    color: #31374f;
}
.banner__content__top__item::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: .5rem;
    background-color: #e7c57d;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
</style>