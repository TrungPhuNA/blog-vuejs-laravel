<template>
    <div class="col-lg-3 col-md-12 primary-sidebar sticky-sidebar">
        <div class="widget-area mb-5">
            <div class="sidebar-widget widget-latest-posts mb-30 mt-0 wow fadeIn animated">
                <h6 class="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-2 pb-2">
                    <span>Quảng cáo</span>
                </h6>
                <div class="author-content text-center" style="width: 100%;overflow: hidden">

                </div>
            </div>
            <div class="sidebar-widget widget_newsletter wow fadeIn animated">
                <h6 class="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-2 pb-2">
                    <span>Đăng ký nhận tin</span>
                </h6>
                <div class="newsletter">
                    <p class="">Chúng tôi chỉ gửi tối đa 2 lần trên 1 tháng. Tuyên bố không spam mail!</p>
                    <form action="https://toidicode.com/mail/subscribe" method="POST"
                          class="subscribe_form relative mail_part">
                        <div class="form-newsletter-cover">
                            <div class="form-newsletter">
                                <label for="subscribe_form_email"></label>
                                <input type="hidden" name="_token"
                                       value="y40eb7y64VK7ImetyuPJxdXOr91F7l1Q2I5oyOz7">
                                <input type="email"
                                                                                                id="subscribe_form_email"
                                                                                                name="email"
                                                                                                placeholder="Nhập địa chỉ mail"
                                                                                                required
                                                                                                maxlength="150">
                                <button type="submit">
                                    <span class="long-arrow long-arrow-right"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookRight"
}
</script>

<style scoped>

</style>
