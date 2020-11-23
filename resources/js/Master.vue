<template>
    <div>
        <div class="scroll-progress bg-dark"></div>
        <Header/>
        <Aside/>
        <main class="mt-30">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
export default {
    name: "Master",
    components : {
        Header, Aside, Footer
    }
}
</script>

<style scoped>

</style>
