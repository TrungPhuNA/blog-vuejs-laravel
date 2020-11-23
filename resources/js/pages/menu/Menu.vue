<template>
    <div class="container">
        <div class="archive-header">
            <h2 class="font-weight-bold"><span class="font-family-normal">{{  menu.m_name }}</span></h2>
<!--            <ul class="sub-category list-inline font-x-small text-uppercase">-->
<!--                <li class="list-inline-item"><a href="nodejs-co-ban" title="Học Lập Trình Nodejs Cơ Bản">Node.js CƠ-->
<!--                    BẢN</a></li>-->
<!--                <li class="list-inline-item"><a href="express-framework"-->
<!--                                                title="Học Express Framework - Học Lập Trình Node.js">EXPRESS-->
<!--                    FRAMEWORK</a></li>-->
<!--                <li class="list-inline-item"><a href="nodejs-mysql"-->
<!--                                                title="Học Node.js &amp; MySql - Học Lập Trình Node.js">NODE.JS &amp;-->
<!--                    MYSQL</a></li>-->
<!--                <li class="list-inline-item"><a href="nodejs-mongodb"-->
<!--                                                title="Học Node.js &amp; MongoDB - Học Lập Trình Node.js">NODE.JS &amp;-->
<!--                    MONGODB</a></li>-->
<!--            </ul>-->
<!--            <span class="line-dots mt-20 mb-20"></span>-->
        </div>
        <section class="recent-news mb-30">
            <div class="row vertical-divider">
                <div class="col-lg-9 col-md-12">
                    <h6 class="font-weight-bold widget-header widget-header-style-5 mb-10">
                        <span class="d-inline-block block mb-10 widget-title font-family-normal">Bài Viết Mới</span>
                    </h6>
                    <div class="loop-grid-3">
                        <article class="row" v-for="article in articles.data" :key=" article.id">
                            <div class="col-md-4">
                                <router-link class="" :to="{ name : 'page.article', params: { 'slug' : article.a_slug,'id' : article.id }}">
                                    <figure class="mb-md-0 mb-sm-3">
                                        <img class="lzi" src="/images/article_detail.png" :alt="article.a_name">
                                    </figure>
                                </router-link>
                            </div>
                            <div class="col-md-8">
                                <div class="entry-meta meta-0 mb-10 font-small">
                                    <a href="nodejs-co-ban"><span
                                        class="post-cat position-relative"># {{ article.menu.m_name }}</span></a>
                                </div>
                                <h6 class="post-title mb-10 font-weight-bold">
                                    <a href="">{{ article.a_name}}</a>
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
                        <div class="pagination-area pt-15 border-top-2 mt-30 font-heading wow fadeIn  animated">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BookRight/>
            </div>
        </section>
        <section class="editor-picked mb-30">
            <h6 class="font-weight-bold widget-header widget-header-style-3 mb-20">
                <span class="d-inline-block block mb-10 widget-title font-family-normal"># Có Thể Bạn Sẽ Thích</span>
                <span class="line-dots"></span>
            </h6>
            <div class="loop-grid-3 row vertical-divider">
                <div class="col-lg-7 col-md-12">
                    <div class="row vertical-divider">
                        <article class="col-md-6 wow fadeIn animated">
                            <figure class="mb-15">
                                <a href="221">
                                    <img class="lzi" src="images/default.gif"
                                         data-src="https://static.toidicode.com/upload/images/css-3/selector-trong-css3.png"
                                         alt="Các đơn vị đo trong CSS">
                                </a>
                            </figure>
                            <h6 class="post-title font-weight-bold mb-10">
                                <a href="221">Các đơn vị đo trong CSS</a>
                            </h6>
                            <p class="excerpt">Trong CSS có hỗ trợ cho chúng ta rất nhiều các đơn vị đo độ dài để áp
                                dụng vào...</p>
                            <div class="entry-meta meta-0 mb-15 font-small">
                                <a href="uncategorized"><span class="post-cat position-relative"># UnCategorized</span></a>
                            </div>
                        </article>
                        <article class="col-md-6 wow fadeIn animated">
                            <figure class="mb-15">
                                <a href="thuc-thi-query-mysql-voi-node-js-264.html">
                                    <img class="lzi" src="images/default.gif"
                                         data-src="https://static.toidicode.com/upload/images/nodejs-mysql/node_js-va-mysql.png"
                                         alt="Thực thi query MySQL với Node.js">
                                </a>
                            </figure>
                            <h6 class="post-title font-weight-bold mb-10">
                                <a href="thuc-thi-query-mysql-voi-node-js-264.html">Bài 2: Thực thi query MySQL với
                                    Node.js</a>
                            </h6>
                            <p class="excerpt">Ở bài trước mình đã giới thiệu với mọi người về cách kết nối Node.js đến
                                mysql rồi. Bài này...</p>
                            <div class="entry-meta meta-0 mb-15 font-small">
                                <a href="nodejs-mysql"><span
                                    class="post-cat position-relative"># NODE.JS &amp; MYSQL</span></a>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 d-none d-lg-block">
                    <article class="row border-bottom-1 ">
                        <div class="col-md-6">
                            <div class="entry-meta meta-0 mb-15 font-small">
                                <a href="php-design-patterns"><span
                                    class="post-cat position-relative"># DESIGN PATTERNS</span></a>
                            </div>
                            <h6 class="post-title mb-20 font-weight-bold">
                                <a href="designe-patterns-la-gi-130.html">Bài 1: Designe patterns là gì?</a>
                            </h6>
                            <p class="excerpt mb-0">Trong thế giới lập trình của chúng ta, luôn tồn tại một khái niệm
                                bất hủ đó là design patterns....</p>
                        </div>
                        <div class="col-md-6">
                            <figure class="mb-0">
                                <img class="lzi" src="images/default.gif"
                                     data-src="https://static.toidicode.com/upload/images/php-design-patterns/design-patterns-la-gi.png"
                                     alt="">
                            </figure>
                        </div>
                    </article>
                    <article class="row border-bottom-1 mt-2">
                        <div class="col-md-6">
                            <div class="entry-meta meta-0 mb-15 font-small">
                                <a href="hoc-laravel"><span class="post-cat position-relative"># Laravel</span></a>
                            </div>
                            <h6 class="post-title mb-20 font-weight-bold">
                                <a href="schema-buider-trong-laravel-16.html">Bài 15: Schema Buider trong Laravel</a>
                            </h6>
                            <p class="excerpt mb-0">Ở các bài trước mình đã giới thiệu với mọi người cách truy xuất dữ
                                liệu trong Laravel Với Query...</p>
                        </div>
                        <div class="col-md-6">
                            <figure class="mb-0">
                                <img class="lzi" src="images/default.gif"
                                     data-src="https://static.toidicode.com/upload/images/laraveldefault.png" alt="">
                            </figure>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BookRight from './../../components/BookRight'
export default {
    name: "Menu",
    data : () => ({
        menu : {
            m_name: ''
        },
        articles : []
    }),
    components : {
        BookRight
    },
    watch: {
      "$route.params.id": {
          handler: function () {
              this.getMenuByID()
              this.getListArticleByMenuID()
          },
          deep: true
      }
    },
    methods : {
        async getListArticleByMenuID()
        {
            let id = this.$route.params.id
            if (id) {
                let response = await this.axios.get(`/api/articles`, {
                    params : {
                        menuID : id
                    }
                })
                if(response.status === 200)
                {
                    console.log(response.data)
                    this.articles =  response.data
                }
            }else {

            }
        },
        async getMenuByID()
        {
            let id = this.$route.params.id
            if (id) {
                let response = await this.axios.get(`/api/menus/${id}`)
                if(response.status === 200)
                {
                    this.menu =  response.data
                    document.title = response.data.m_name
                }
            }else {

            }
        }
    },
    mounted() {
        this.getMenuByID()
        this.getListArticleByMenuID()
    }
}
</script>

<style scoped>

</style>
