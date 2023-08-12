<template>
    <div class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__content__right">
                    <div class="header__content__right__logo">
                        <a href="#">Le courseur</a>
                    </div>
                </div>
                <ul class="header__content__left">
                    <li><a href="/signup">Inscription</a></li>
                    <li><a href="/login">Connexion</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 0 5rem;
    margin: 0 auto;
}

.header__content {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__content__right__logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #e7c57d;
    text-transform: uppercase;
}

.header__content__right__logo a::after {
    content: '';
    position: absolute;
    bottom: -.5rem;
    left: -.5rem;
    height: 1.5rem;
    width: 2rem;
    border-bottom: 2px dashed #e7c57d;
    border-left: 2px dashed #e7c57d;
    border-radius: 5px;
}

.header__content__right__logo a::before {
    content: '';
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    height: 1.5rem;
    width: 2rem;
    border-top: 2px dashed #e7c57d;
    border-right: 2px dashed #e7c57d;
    border-radius: 5px;
}

.header__content__left {
    display: flex;
    gap: 3rem;
}

.header__content__left li a {
    padding: .5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #252538;
}
</style>