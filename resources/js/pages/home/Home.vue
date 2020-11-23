<template>
    <div class="container ">
        <section class="recent-news mb-30">
            <div class="row vertical-divider">
                <div class="col-lg-9 col-md-12">
                    <h5 class="font-weight-bold widget-header widget-header-style-3 mb-20">
                        <span class="d-inline-block block mb-10 widget-title font-family-normal"># Bài Viết Mới</span>
                        <span class="line-dots"></span>
                    </h5>
                    <div class="loop-grid-3">
                        <div class="row vertical-divider">
                            <div class="col-md-8">
                                <article class="row" v-for="article in articlesNew.data" :key="article.id">
                                    <div class="col-md-4">
                                        <router-link class="" :to="{ name : 'page.article', params: { 'slug' : article.a_slug,'id' : article.id }}">
                                            <figure class="mb-md-0 mb-sm-3">
                                                <img class="lzi" src="/images/article_detail.png" :alt="article.a_name">
                                            </figure>
                                        </router-link>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="entry-meta meta-0 mb-10 font-small">
                                            <a href=""><span class="post-cat position-relative"># TIN TỨC &amp; REVIEW CÔNG NGHỆ</span></a>
                                        </div>
                                        <h6 class="post-title mb-10 font-weight-bold">
                                            <router-link class="" :to="{ name : 'page.article', params: { 'slug' : article.a_slug,'id' : article.id }}">
                                                {{ article.a_name }}
                                            </router-link>
                                        </h6>
                                        <p class="excerpt mb-1">{{ article.a_description}}</p>
                                        <div>
                                            <span class="ti-user"> {{ article.auth.name }}</span>
                                            <span class="ml-2"><span class="ti-comment-alt"> {{ article.a_total_comment}} comment</span></span>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="horizontal-divider mt-15 mb-15"></div>
                                    </div>
                                </article>

                            </div>
                            <div class="col-md-4">
                                <article class="wow" v-for="article in articlesHot" :key="article.id">
                                    <figure class="mb-15">
                                        <router-link class="" :to="{ name : 'page.article', params: { 'slug' : article.a_slug,'id' : article.id }}">
                                            <img class="lzi" src="/images/article_detail.png" :alt="article.a_name">
                                        </router-link>
                                    </figure>
                                    <h6 class="post-title font-weight-bold mb-10">
                                        <router-link class="" :to="{ name : 'page.article', params: { 'slug' : article.a_slug,'id' : article.id }}">
                                            {{ article.a_name }}
                                        </router-link>
                                    </h6>
                                    <div>
                                        <span class="ti-user"> {{ article.auth.name }} </span>
                                        <span class="ml-2"><span class="ti-comment-alt"> {{ article.a_total_comment}} comment</span></span>
                                    </div>
                                    <p class="excerpt">{{ article.a_description }}</p>
                                    <div class="horizontal-divider mt-15 mb-15"></div>
                                </article>
                                <div class="overflow-hidden">

                                </div>
                                <div class="row">
                                    <div class="col-12 mt-15">
                                        <a href="" target="_blank"
                                           rel="noreferrer noopener" class="btn btn-block btn-warning"
                                           style="white-space: pre-wrap">Hãy tham gia group facebook để cùng giao lưu
                                            chia sẻ kiến thức!</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pagination-area pt-30 border-top-2 mt-30 font-heading wow fadeIn animated">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12">
<!--                                        <PaginateCustomer  :dataPaginate="articlesNew" />-->
                                        <v-pagination v-model="currentPage"
                                                      :page-count="totalPages"
                                                      :classes="bootstrapPaginationClasses"
                                                      :labels="paginationAnchorTexts"></v-pagination>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <BookRight />
            </div>
        </section>
    </div>
</template>

<script>
import BookRight from './../../components/BookRight'
// import PaginateCustomer from "../../components/PaginateCustomer";
import vPagination from 'vue-plain-pagination'
export default {
    name: "Home",
    data : () => ({
        articlesNew : [],
        articlesHot : [],
        currentPage: 1,
        totalPages: 30,
        bootstrapPaginationClasses: {
            ul: 'pagination',
            li: 'page-item',
            liActive: 'active',
            liDisable: 'disabled',
            button: 'page-link'
        },
        paginationAnchorTexts: {
            first: 'First',
            prev: 'Previous',
            next: 'Next',
            last: 'Last'
        }
    }),
    components : {
        BookRight,
        vPagination
    },
    methods : {
        async getNewArticles()
        {
            let response = await this.axios.get(`api/articles?page=${this.currentPage}`)
            if (response.status === 200) {
                this.articlesNew = response.data
                this.totalPages = response.data.last_page
            }
        },
        async getArticlesHot()
        {
            let response = await this.axios.get(`api/articles/hot`)
            if (response.status === 200) this.articlesHot = response.data
        }
    },

    watch: {
        currentPage() {
            this.getNewArticles()
        }
    },
    beforeCreate() {
        document.title = 'Trang chủ'
    },
    mounted() {
        this.getNewArticles()
        this.getArticlesHot()
    }
}
</script>

<style scoped>

</style>
