<template>
    <div class="container " style="height: auto !important; transform: none;">
        <div class="row" style="height: auto !important; transform: none;">
            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 single-content">
                <div class="entry-header entry-header-style-1 mb-30">
                    <h1 class="entry-title mb-30 font-weight-500">{{ articleDetail.a_name }}</h1>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="entry-meta align-items-center meta-2 font-small color-muted">
                                <p class="mb-5">
                                    <a class="author-avatar" href="">
                                        <img class="img-circle" src="https://static.toidicode.com/upload/images/users/taivt.jpg" alt="Vũ Thanh Tài"></a>
                                    By <a href=""><span class="author-name font-weight-bold">{{ (articleDetail && articleDetail.auth) ? articleDetail.auth.name : '' }}</span>
                                </a>
                                </p>
                                <span class="mr-10"> {{ articleDetail.created_at }}</span>
                                <span class="has-dot"> 14 phút đọc</span>
                            </div>
                        </div>
                        <div class="col-lg-6 text-right">
                            <div class="single-tools">
                                <div class="entry-meta align-items-center meta-2 font-small color-muted">
                                    <span>
                                    <span class="mr-2">Font size</span>
                                    <i class="fonts-size-zoom-in ti-zoom-in mr-2"></i>
                                    <i class="fonts-size-zoom-out ti-zoom-out"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <article class="entry-wraper mb-50">
                    <div class="entry-left-col d-none d-md-block">
                        <div class="social-sticky">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftoidicode.com%2Fxu-ly-so-hoc-voi-module-math-trong-python-371.html"><i class="ti-facebook"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftoidicode.com%2Fxu-ly-so-hoc-voi-module-math-trong-python-371.html"><i class="ti-twitter"></i></a>
                            <a href="mailto:?subject=Xử lý số học với module math trong Python&amp;body=Check out this site https://toidicode.com/xu-ly-so-hoc-voi-module-math-trong-python-371.html."><i class="ti-email"></i></a>
                            <a href="javascript:" class="btn-like-post" data-id="371"><i class="ti-heart"></i></a>
                        </div>
                    </div>
                    <div class="entry-main-content">
                        <div class="content dropcap">
                            {{ articleDetail.a_content }}
                        </div>
                        <div class="text-right font-italic mb-5"></div>
                        <div class="border-radius-5 mb-50 border p-30 wow fadeIn animated">
                            <div class="row justify-content-between">
                                <div class="col-md-5 mb-2 mb-md-0">
                                    <h5 class="font-weight-bold secondfont mb-30 mt-0">Đăng ký nhận tin.</h5>
                                    <p class="font-small">Chúng tôi chỉ gửi tối đa 2 lần trên 1 tháng. Tuyên bố không spam mail!</p>
                                </div>
                                <div class="col-md-7">
                                    <form method="POST" action="https://toidicode.com/mail/subscribe">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <input type="hidden" name="_token" value="2EjnANYqQaTVYrueNT5OWcfa3SFPdhoQSxgAXlKM"> <input type="text" name="email" class="form-control" placeholder="Nhập địa chỉ mail" required="" maxlength="150">
                                            </div>
                                            <div class="col-md-12 mt-2">
                                                <button type="submit" class="btn btn-info btn-block">Đăng Ký</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="entry-bottom mt-50 mb-30">
                        <div class="row">
                            <div class="col-xs-12 col-sm-8">
                                <div class="tags">
                                    <a href="https://toidicode.com/python-co-ban" rel="tag">PYTHON CƠ BẢN</a>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 text-right">
                                <router-link v-if="articlePrev" class="" :to="{ name : 'page.article', params: { 'slug' : articlePrev.a_slug,'id' : articlePrev.id }}">
                                    <span class="text-danger"><i class="ti-angle-double-left"></i>Bài trước</span>
                                </router-link>

                                <span class="mr-1 ml-1 border-color-1" style="border-left: 1px solid #dddddd"></span>
                                <router-link v-if="articleNext" class="" :to="{ name : 'page.article', params: { 'slug' : articleNext.a_slug,'id' : articleNext.id }}">
                                    &nbsp;<span class="text-danger">Bài sau <i class="ti-angle-double-right"></i></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="bt-1 border-color-1 mt-30 mb-30"></div>
                    <div class="single-social-share clearfix">
                        <div class="entry-meta meta-1 font-small color-grey float-left mt-10">
                            <span class="hit-count mr-15"><i class="ti-comment mr-2"></i>3 comments</span>
                            <span class="hit-count mr-15"><i class="ti-heart mr-2"></i>660 likes</span>
                        </div>
                        <ul class="d-inline-block list-inline float-md-right mt-md-0 mt-4">
                            <li class="list-inline-item"><a class="social-icon facebook-icon text-xs-center" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftoidicode.com%2Fxu-ly-so-hoc-voi-module-math-trong-python-371.html"><i class="ti-facebook"></i></a></li>
                            <li class="list-inline-item"><a class="social-icon twitter-icon text-xs-center" rel="noopener noreferrer" target="_blank" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftoidicode.com%2Fxu-ly-so-hoc-voi-module-math-trong-python-371.html"><i class="ti-twitter-alt"></i></a></li>
                            <li class="list-inline-item"><a class="social-icon pinterest-icon text-xs-center" href="mailto:?subject=Xử lý số học với module math trong Python&amp;body=Check out this site https://toidicode.com/xu-ly-so-hoc-voi-module-math-trong-python-371.html."><i class="ti-email"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:" class="btn-like-post" data-id="371"><i class="ti-heart"></i></a></li>
                        </ul>
                    </div>
                    <div class="bt-1 border-color-1 mt-30 mb-30"></div>
                        <div class="author-bio">
                            <div class="author-image mb-30">
                                <a href=""><img src="https://static.toidicode.com/upload/images/users/taivt.jpg" alt="Vũ Thanh Tài" class="avatar"></a>
                            </div>
                            <div class="author-info">
                                <h3><span class="vcard author"><span class="fn"><a href="" title="Vũ Thanh Tài" rel="author">Vũ Thanh Tài</a></span></span></h3>
                                <h5>About author</h5>
                                <div class="author-description">The best way to learn is to share</div>
                                <a href="" class="author-bio-link mb-md-0 mb-3">Xem tất cả bài đăng</a>
                                <div class="author-social">
                                    <ul class="author-social-icons">
                                        <li class="author-social-link-facebook"><a href="#" target="_blank"><i class="ti-facebook"></i></a></li>
                                        <li class="author-social-link-twitter"><a href="#" target="_blank"><i class="ti-twitter-alt"></i></a></li>
                                        <li class="author-social-link-pinterest"><a href="#" target="_blank"><i class="ti-github"></i></a></li>
                                        <li class="author-social-link-instagram"><a href="#" target="_blank"><i class="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    <div class="single-more-articles">
                        <h6 class="widget-title mb-30 font-weight-bold text">Bài Viết Mới
                            <span class="float-right ti-close" onclick="if (!window.__cfRLUnblockHandlers) return false; document.querySelector('.single-more-articles').style.display = 'none'"></span>
                        </h6>
                        <div class="post-block-list post-module-1 post-module-5">
                            <ul class="list-post">
                                <li class="mb-15">
                                    <div class="d-flex">
                                        <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <a class="color-white" href="https://toidicode.com/zyro-nen-tang-thiet-ke-website-voi-chi-phi-thap-423.html">
                                                <img src="https://static.toidicode.com/uploads/photos/1/reviews/zyro.jpg" alt="Zyro nền tảng thiết kế website với chi phí thấp">
                                            </a>
                                        </div>
                                        <div class="post-content media-body">
                                            <h6 class="post-title mb-10 text-limit-2-row"><a href="https://toidicode.com/zyro-nen-tang-thiet-ke-website-voi-chi-phi-thap-423.html">Zyro nền tảng thiết kế website với chi phí thấp</a></h6>
                                            <div class="entry-meta meta-1 font-x-small color-grey">
                                                <span class="post-on">2 tuần trước</span>
                                                <span class="hit-count has-dot">0 Comment</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-15">
                                    <div class="d-flex">
                                        <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <a class="color-white" href="https://toidicode.com/7-thu-thuat-co-the-front-end-developer-con-chua-biet-den-422.html">
                                                <img src="https://static.toidicode.com/uploads/photos/1/blogs/frontend-tips-and-tricks.jpg" alt="7 Thủ thuật có thể front-end developer còn chưa biết đến">
                                            </a>
                                        </div>
                                        <div class="post-content media-body">
                                            <h6 class="post-title mb-10 text-limit-2-row"><a href="https://toidicode.com/7-thu-thuat-co-the-front-end-developer-con-chua-biet-den-422.html">7 Thủ thuật có thể front-end developer còn chưa biết đến</a></h6>
                                            <div class="entry-meta meta-1 font-x-small color-grey">
                                                <span class="post-on">1 tháng trước</span>
                                                <span class="hit-count has-dot">0 Comment</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-15">
                                    <div class="d-flex">
                                        <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <a class="color-white" href="https://toidicode.com/toan-tu-trong-java-421.html">
                                                <img src="https://static.toidicode.com/uploads/photos/1/java/toan-tu-trong-java.jpg" alt="Bài 6: Toán tử trong java">
                                            </a>
                                        </div>
                                        <div class="post-content media-body">
                                            <h6 class="post-title mb-10 text-limit-2-row"><a href="https://toidicode.com/toan-tu-trong-java-421.html">Bài 6: Toán tử trong java</a></h6>
                                            <div class="entry-meta meta-1 font-x-small color-grey">
                                                <span class="post-on">2 tháng trước</span>
                                                <span class="hit-count has-dot">0 Comment</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-15">
                                    <div class="d-flex">
                                        <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <a class="color-white" href="https://toidicode.com/cac-kieu-du-lieu-trong-java-420.html">
                                                <img src="https://static.toidicode.com/uploads/photos/1/java/bien-hang-kieu-du-lieu.jpg" alt="Bài 5: Các kiểu dữ liệu trong Java">
                                            </a>
                                        </div>
                                        <div class="post-content media-body">
                                            <h6 class="post-title mb-10 text-limit-2-row"><a href="https://toidicode.com/cac-kieu-du-lieu-trong-java-420.html">Bài 5: Các kiểu dữ liệu trong Java</a></h6>
                                            <div class="entry-meta meta-1 font-x-small color-grey">
                                                <span class="post-on">2 tháng trước</span>
                                                <span class="hit-count has-dot">0 Comment</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 primary-sidebar sticky-sidebar" style="height: auto !important; min-height: 1px; position: relative; overflow: visible; box-sizing: border-box;">
                <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none; top: 0px; left: 1221px;">
                    <div class="widget-area mb-5">
                        <div class="sidebar-widget widget_newsletter wow fadeIn animated">
                            <h6 class="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-2 pb-2">
                                <span>BÀI VIẾT CÙNG CHUYÊN MỤC</span>
                            </h6>
                        </div>
                        <div class="same-post">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/tong-quan-ve-python-161.html">Bài 1: Tổng quan về Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/khai-bao-bien-trong-python-342.html">Bài 2: Khai báo biến trong python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/ham-print-trong-python-343.html">Bài 3: Hàm print trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/chuoi-trong-python-344.html">Bài 4: Chuỗi trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/so-trong-python-345.html">Bài 5: Số trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/list-trong-python-346.html">Bài 6: List trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/tuple-trong-python-347.html">Bài 7: Tuple trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/dictionary-trong-python-348.html">Bài 8: Dictionary trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/cac-toan-tu-co-ban-trong-python-349.html">Bài 9: Các toán tử cơ bản trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/cau-lenh-re-nhanh-trong-python-350.html">Bài 10: Câu lệnh rẽ nhánh trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/vong-lap-trong-python-351.html">Bài 11: Vòng lặp trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/ham-trong-python-352.html">Bài 12: Hàm trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/input-va-doc-ghi-file-trong-python-353.html">Bài 13: Input và Đọc ghi file trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/modules-trong-python-354.html">Bài 14: Modules trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/packages-trong-python-355.html">Bài 15: Packages trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/exception-trong-python-356.html">Bài 16: Exception trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/cac-ham-xu-ly-chuoi-trong-python-368.html">Bài 17: Các hàm xử lý chuỗi trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/cac-ham-xu-ly-list-trong-python-369.html">Bài 18: Các hàm xử lý list trong Python</a>
                                </li>
                                <li class="list-group-item  list-group-item-dark  pl-1 pr-0 ">
                                    Bài 19: Xử lý số học với module math trong Python
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/ham-an-danh-lambda-trong-python-395.html">Bài 20: Hàm ẩn danh Lambda trong Python</a>
                                </li>
                                <li class="list-group-item  pl-1 pr-0 ">
                                    <a href="https://toidicode.com/map-filter-trong-python-396.html">Bài 21: map, filter trong Python</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget-area mb-5" style="height: auto !important;">
                        <div class="sidebar-widget widget-latest-posts mb-30 mt-0 wow fadeIn animated" style="height: auto !important;">
                            <h6 class="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-2 pb-2">
                                <span>Quảng cáo</span>
                            </h6>
                            <div class="author-content text-center" style="width: 100%;overflow: hidden">
                                <ins class="adsbygoogle" style="display: block; height: 600px;" data-ad-client="ca-pub-8768260344279113" data-ad-slot="4493528180" data-ad-format="auto" data-full-width-responsive="true" data-adsbygoogle-status="done"><ins id="aswift_0_expand" style="display:inline-table;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:280px;background-color:transparent;"><ins id="aswift_0_anchor" style="display: block; border: none; height: 600px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 280px; background-color: transparent; overflow: visible;"><iframe id="aswift_0" name="aswift_0" style="left:0;position:absolute;top:0;border:0;width:280px;height:600px;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="280" height="600" frameborder="0" src="https://googleads.g.doubleclick.net/pagead/ads?guci=2.2.0.0.2.2.0.0&amp;client=ca-pub-8768260344279113&amp;output=html&amp;h=600&amp;slotname=4493528180&amp;adk=1106646993&amp;adf=147477220&amp;pi=t.ma~as.4493528180&amp;w=280&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1606114641&amp;rafmt=1&amp;psa=1&amp;format=280x600&amp;url=https%3A%2F%2Ftoidicode.com%2Fxu-ly-so-hoc-voi-module-math-trong-python-371.html&amp;flash=0&amp;fwr=0&amp;fwrattr=true&amp;rpe=1&amp;resp_fmts=4&amp;wgl=1&amp;uach=WyJNYWMgT1MgWCIsIjEwXzE1XzciLCJ4ODYiLCIiLCI4Ny4wLjQyODAuNjciLFtdXQ..&amp;tt_state=W3siaXNzdWVyT3JpZ2luIjoiaHR0cHM6Ly9hZHNlcnZpY2UuZ29vZ2xlLmNvbSIsInN0YXRlIjowfSx7Imlzc3Vlck9yaWdpbiI6Imh0dHBzOi8vYXR0ZXN0YXRpb24uYW5kcm9pZC5jb20iLCJzdGF0ZSI6MH1d&amp;dt=1606114641817&amp;bpp=3&amp;bdt=292&amp;idt=38&amp;shv=r20201112&amp;cbv=r20190131&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D24f8ef096f3f64d8-22addccfdec400ef%3AT%3D1606113801%3ART%3D1606113801%3AS%3DALNI_MYx1RkVZRP9LWR6RBc0MoYo0HAUAA&amp;correlator=5239577600609&amp;frm=20&amp;pv=2&amp;ga_vid=32282882.1604908568&amp;ga_sid=1606114642&amp;ga_hid=745040531&amp;ga_fc=1&amp;iag=0&amp;icsg=41955119&amp;dssz=15&amp;mdo=0&amp;mso=0&amp;u_tz=420&amp;u_his=11&amp;u_java=0&amp;u_h=1120&amp;u_w=1792&amp;u_ah=1052&amp;u_aw=1792&amp;u_cd=30&amp;u_nplug=3&amp;u_nmime=4&amp;adx=1221&amp;ady=840&amp;biw=1792&amp;bih=973&amp;scr_x=0&amp;scr_y=0&amp;eid=21068084&amp;oid=3&amp;pvsid=1138552558617990&amp;pem=497&amp;ref=https%3A%2F%2Ftoidicode.com%2Fpython-co-ban&amp;rx=0&amp;eae=0&amp;fc=896&amp;brdim=0%2C23%2C0%2C23%2C1792%2C23%2C1792%2C1052%2C1792%2C973&amp;vis=1&amp;rsz=%7C%7CpeoE%7C&amp;abl=CS&amp;pfx=0&amp;fu=8320&amp;bc=31&amp;ifi=1&amp;uci=a!1&amp;fsb=1&amp;xpc=R2t1wIn2UX&amp;p=https%3A//toidicode.com&amp;dtd=48" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" data-google-container-id="a!1" data-google-query-id="CLXfzKWLmO0CFVZklgodLjAD-g" data-load-complete="true"></iframe></ins></ins></ins>
                            </div>
                        </div>
                        <div class="sidebar-widget widget_newsletter wow fadeIn animated">
                            <h6 class="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-2 pb-2">
                                <span>Đăng ký nhận tin</span>
                            </h6>
                            <div class="newsletter">
                                <p class="">Chúng tôi chỉ gửi tối đa 2 lần trên 1 tháng. Tuyên bố không spam mail!</p>
                                <form action="https://toidicode.com/mail/subscribe" method="POST" class="subscribe_form relative mail_part">
                                    <div class="form-newsletter-cover">
                                        <div class="form-newsletter">
                                            <label for="subscribe_form_email"></label>
                                            <input type="hidden" name="_token" value="2EjnANYqQaTVYrueNT5OWcfa3SFPdhoQSxgAXlKM"> <input type="email" id="subscribe_form_email" name="email" placeholder="Nhập địa chỉ mail" required="" maxlength="150">
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Article",
    data : () => ({
        articleDetail : {
            a_name : '',
            created_at : '',
            a_content : ''
        },
        articleNext : {},
        articlePrev : {},
    }),
    watch: {
        "$route.params.id": {
            handler: function () {
                this.getArticleByID()
            },
            deep: true
        }
    },
    methods : {
        async getArticleByID()
        {
            let id = this.$route.params.id
            if (id) {
                let response = await this.axios.get(`/api/articles/${id}`)
                if(response.status === 200)
                {
                    this.articleDetail =  response.data.article
                    this.articleNext =  response.data.articleNext
                    this.articlePrev =  response.data.articlePrev
                    document.title = response.data.article.a_name
                }
            }else {
                console.log("Cannot ID article")
            }
        }
    },
    mounted() {
        this.getArticleByID()
    }
}
</script>

<style scoped>

</style>
