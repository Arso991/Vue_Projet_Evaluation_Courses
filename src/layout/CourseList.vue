<template>
    <div class="wrapper">
        <main>
            <div class="course__list">
                <p>Liste des courses</p>
                <div class="table__container">
                    <CourseListTable/>
                </div>
            </div>
            <CourseForm />
        </main>     
    </div>
</template>

<script setup lang="ts">
import CourseForm from '@/components/CourseForm.vue';
import CourseListTable from '@/components/CourseListTable.vue'




</script>

<style scoped>
main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    max-height: calc(100vh - 80px);
    overflow-y: hidden;
}
.course__list{
    width: calc(100% - 22rem);
}
.course__list p{
    font-size: 1.5rem;
}

.table__container{
    height: calc(100vh - 120px);
    overflow-y: scroll;
}
.table__container::-webkit-scrollbar{
    width: 5px;
}

.table__container::-webkit-scrollbar-thumb{
    background-color: #e7c57d;
    border-radius: 5px;
}
</style>