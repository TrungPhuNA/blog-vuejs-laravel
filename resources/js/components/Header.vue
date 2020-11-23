<template>
    <header class="main-header header-style-2 header-sticky">
        <div class="container pt-30 pb-30 position-relative text-center header-top">
            <div class="mobile_menu d-lg-none d-block"></div>

            <div class="header-tools position-absolute position-absolute-center">
                <ul class="header-social-network d-inline-block list-inline mr-10">
                    <li class="list-inline-item"><a class="social-icon facebook-icon text-xs-center color-grey"
                                                    rel="noopener noreferrer" target="_blank"
                                                    href="https://www.facebook.com/toidicode"><i
                        class="ti-facebook"></i></a></li>
                    <li class="list-inline-item"><a class="social-icon twitter-icon text-xs-center color-grey"
                                                    rel="noopener noreferrer" target="_blank"
                                                    href="https://twitter.com/vthanhtai"><i class="ti-twitter"></i></a>
                    </li>
                    <li class="list-inline-item"><a class="social-icon twitter-icon text-xs-center color-grey"
                                                    rel="noopener noreferrer" target="_blank"
                                                    href="https://github.com/toidicode"><i class="ti-github"></i></a>
                    </li>
                </ul>
            </div>

            <div class="logo-text">
                <h1 class="logo text-uppercase d-md-inline d-none">
                    <router-link class="" to="/">
                        <img src="/images/logo.png" alt="Logo"
                         width="150px">
                    </router-link>
                </h1>
                <h1 class="logo logo-mobile text-uppercase d-inline d-md-none">
                    <router-link to="/">
                        <img src="/images/logo.png" alt="Logo" width="100px">
                    </router-link>
                </h1>
                <p class="head-line font-heading text-muted d-none d-lg-block">BASIC TO ADVANCE</p>
            </div>

            <div
                class="position-absolute-center font-small d-block position-absolute position-right mr-10 z-index-9000">
                <ul class="list-inline text-right">
                    <li class="list-inline-item mr-0">
                        <button type="submit" class="search search-icon search-btn mr-15">
                            <i class="ti-close"></i>
                            <i class="ti-search"></i>
                        </button>
                    </li>
                    <li class="list-inline-item mr-15">
                        <div class="off-canvas-toggle-cover d-inline-block">
                            <div class="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle">
                                <span></span>
                                <p class="font-small d-none d-lg-inline font-weight-bold offcanvas-more-text">MORE</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-navigation text-center text-uppercase font-heading">
            <div class="container">
                <div class="horizontal-divider-black"></div>
            </div>
            <div class="main-nav d-none d-lg-block">
                <nav>

                    <ul class="main-menu d-none d-lg-inline">
                        <li>
                            <router-link class="" to="/">Trang chủ</router-link>
                        </li>
                        <li class="" v-for="menu in menus" :key="menu.id">
                            <router-link class=""
                                         :to="{ name : 'page.menu', params: { 'slug' : menu.m_slug,'id' : menu.id }}">
                                {{ menu.m_name }}
                            </router-link>
                        </li>
                        <li>
                            <router-link class="" :to="{name : 'about'}">Giới thiệu</router-link>
                        </li>
                    </ul>

                    <ul id="mobile-menu" class="d-block d-lg-none">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="tu-hoc-php">PHP</a>
                            <ul class="col-md-2">
                                <li><a href="php-co-ban">PHP CƠ BẢN</a></li>
                                <li><a href="php-huong-doi-tuong">PHP HƯỚNG ĐỐI TƯỢNG</a></li>
                                <li><a href="php-standards">PHP STANDARDS</a></li>
                                <li><a href="hoc-laravel">LARAVEL</a></li>
                                <li><a href="php-mysql">PHP&MYSQL</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="hoc-python">PYTHON</a>
                            <ul class="col-md-2">
                                <li><a href="python-co-ban">PYTHON CƠ BẢN</a></li>
                                <li><a href="hoc-python-nang-cao">PYTHON NÂNG CAO</a></li>
                                <li><a href="python-mysql">PYTHON & MYSQL</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="hoc-javascript">JAVASCRIPT</a>
                            <ul class="col-md-2">
                                <li><a href="hoc-javascript-co-ban">JAVASCRIPT CƠ BẢN</a></li>
                                <li><a href="hoc-jquery-js">JQUERY JS</a></li>
                                <li><a href="hoc-vuejs-co-ban">VUE.JS</a></li>
                                <li><a href="hoc-ecmascript">ECMASCRIPT</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="hoc-nodejs">NODE.JS</a>
                            <ul class="col-md-2">
                                <li><a href="nodejs-co-ban">NODE.JS CƠ BẢN</a></li>
                                <li><a href="express-framework">EXPRESS FRAMEWORK</a></li>
                                <li><a href="nodejs-mysql">NODE.JS & MYSQL</a></li>
                                <li><a href="nodejs-mongodb">NODE.JS & MONGODB</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="index.html#">MORE</a>
                            <ul class="col-md-2">
                                <li><a href="hoc-java-core">JAVA CORE</a></li>
                                <li><a href="hoc-sql">SQL</a></li>
                                <li><a href="hoc-mongodb">MONGO DB</a></li>
                                <li><a href="hoc-html">HTML</a></li>
                                <li><a href="hoc-css">CSS</a></li>
                            </ul>
                        </li>
                        <li><a href="job">TIN TUYỂN DỤNG</a></li>
                        <li><a href="lien-he">Liên Hệ</a></li>
                    </ul>
                </nav>
            </div>
            <div class="container">
                <div class="horizontal-divider-black mb-1px"></div>
            </div>
            <div class="container">
                <div class="horizontal-divider-black"></div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data: () => ({
        menus: []
    }),
    methods: {
        async getListMenus() {
            let response = await this.axios.get("/api/menus");
            if (response.status === 200) {
                this.menus = response.data
            } else {
                console.log({message: "Get menu error:", response})
            }
        }
    },
    mounted() {
        this.getListMenus()
    }
}
</script>

<style scoped>
    a.router-link-exact-active {
        color: #df4a2c;
    }
</style>
