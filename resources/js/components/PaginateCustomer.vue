<template>
    <Paginate  :page-count="dataPaginate.page_count"
               :prev-text=" 'Trang trước' "
               :next-text=" 'Trang Sau' "
               :container-class="'className'"/>
</template>

<script>
    import Paginate from 'vuejs-paginate'

    export default {
        props : {
            dataPaginate : {
                page_count : 0
            }
        },
        name: "PaginateCustomer",
        components: {
            Paginate
        },
        mounted() {
            console.log(this.articles)
        }
    }
</script>

<style scoped>

</style>
