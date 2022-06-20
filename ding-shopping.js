/* eslint-disable */
// ==UserScript==
// @name         淘宝、天猫、聚划算、京东、苏宁、唯品会、华为、耐克、魅族、联想、华硕、小米有品抢购助手
// @namespace    Rongding
// @author      Rongding
// @version      0.1.107
// @description  淘宝、天猫、聚划算、京东、苏宁、唯品会、华为、耐克、魅族、小米有品自动抢购工具，支持淘宝、天猫、聚划算、京东、苏宁易购、苏宁香港、唯品会、华为、耐克、魅族、联想、华硕、小米有品的商品页面抢购、购物车抢购，在非抢购页面支持淘宝、天猫、京东、苏宁易购隐藏优惠券领取及历史价格查看。
// @include     */item.taobao.com/*
// @include     *://chaoshi.tmall.com/*
// @include     *://chaoshi.detail.tmall.com/*
// @include     *://detail.tmall.com/*
// @include     *://detail.tmall.hk/*
// @include     *://buy.tmall.com/order/*
// @include     *://buy.taobao.com/*
// @include     *://cart.tmall.com/*
// @include     *://cart.taobao.com/*
// @include     *://s.click.taobao.com*
// @include     *://buy.tmall.com/order/confirmOrderWap.htm*
// @include     *://buy.taobao.com/auction/order/confirm_order.htm*
// @include     *://buy.tmall.com/auction/order/confirm_order.htm*
// @include     *://buy.liangxinyao.com/order/confirm_order.htm*
// @include     *://detail.liangxinyao.com/*
// @include     https://cart.jd.com/*
// @include     */item.jd.com/*
// @include     *//item.jd.hk/*
// @include     *//i-item.jd.com/*
// @include     *//npcitem.jd.hk/*
// @include     https://trade.jd.com/shopping/order/*
// @include     https://trade.jd.hk/shopping/order/*
// @include     https://plogin.m.jd.com*
// @include     https://m.jd.com/*
// @include     https://wqdeal.jd.com*
// @include     https://wqs.jd.com*
// @include     https://wq.jd.com/*
// @include     https://marathon.jd.com*
// @include     https://union-click.jd.com*
// @include     https://item.yiyaojd.com/*
// @include     */product.suning.com/*
// @include     https://shopping.suning.com/cart.do*
// @include     https://shopping.suning.com/order.do*
// @include     https://shopping.hksuning.com*
// @include     https://product.hksuning.com*
// @include     https://detail.meizu.com/item*
// @include     https://ordercenter.meizu.com/order/*
// @include     https://*.lenovo.com.cn/product/*
// @include     https://buy.lenovo.com.cn/checkout/*
// @include     https://www.asus.com.cn/store/product*
// @include     https://www.asus.com.cn/store/checkout/*
// @include     https://detail.vip.com/*
// @include     https://cart.vip.com/*
// @include     https://checkout.vip.com/*
// @include     https://www.nike.com/*
// @include     https://www.nike.com/cn/t/*
// @include     https://www.nike.com/cn/zh-Hans/cart*
// @include     https://www.nike.com/cn/checkout*
// @include     https://www.vmall.com/product/*
// @include     https://www.vmall.com/order/nowConfirmcart*
// @include     https://www.vmall.com/cart2*
// @include     https://m.vmall.com/order/confirm*
// @include     https://buy.vmall.com/submit_order.html*
// @include     https://www.fliggy.com/*
// @include     https://www.xiaomiyoupin.com/detail*
// @include     https://trade.xiaomiyoupin.com/tr/checkout*
// @include     *you.163.com/item/detail*
// @include     *www.adidas.com.cn/item*
// @include     */item.gome.com.cn/*
// @require     http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require     https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @require     https://cdn.bootcdn.net/ajax/libs/qrcodejs/1.0.0/qrcode.min.js
// @antifeature referral-link 【应GreasyFork代码规范要求：含有优惠券查询功能的脚本必须添加此提示！在此感谢大家的理解...】
// @grant       GM_xmlhttpRequest
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       unsafeWindow
// @connect     gwdang.com
// @connect     ubja.vip
// @connect     alicdn.com
// @connect     api.m.taobao.com
// @connect     jd.com
// @connect     quan.suning.com
// @connect     sapi.k780.com
// @connect     tp.hd.mi.com
// @connect     buy.vmall.com
// @connect     sale.vmall.com
// @connect     pinduoduo.com


// ==/UserScript==
(function () {
  'use strict';
  var myCon =
        '<div id="AiceQgscp"><dl><dt>&nbsp;</dt></dl><dd><a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AicePrice">历史价格</a>&nbsp;&nbsp;<input id="QgMode" type="checkbox" />强制开启抢购模式&nbsp;&nbsp;<dd></dl><dl id="AicePm"><dd>开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:180px;"/>&nbsp;&nbsp;提前&nbsp;&nbsp;<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms</dd><dd><input id="AiceSycTime" type="checkbox" checked=true>采用服务器时间</dd><dd><input id="AiceQxd" type="checkbox" checked=false>强制下单(勾选后会刷新如果没登录会跳转登录)<a id="AiceQxda" href=""></a></dd><dd> &nbsp;&nbsp;</dd><dd> <input id="AiceOsm" type="checkbox">自动下单&nbsp;&nbsp;下单频率&nbsp;&nbsp;<input type="number" id="AiceCyce" style="width:55px;" value="500"/>ms</dd></dl><dl>搜索微信小程序“优比价” 扫描下方二维码可以领券哦！</dl><dl><dt id="AicePQcode"><iframe id="fname" sandbox="allow-modals allow-forms allow-popups allow-top-navigation allow-scripts allow-same-origin" src="https://xcx.ubja.vip/myweb/tgtj.html?tk=' +
        new Date().getTime() +
        '" width="0" height="0" scrolling="no" /></dt></dl><dd></dl></div>';
  var myConSN =
        '<div id="AiceQgscp"><dl><dt>&nbsp;</dt></dl><dd><a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AicePrice">历史价格</a>&nbsp;&nbsp;<input id="QgMode" type="checkbox" />强制开启抢购模式&nbsp;&nbsp;</dd><dl><dt>&nbsp;</dt></dl><dd><dl id="AicePm">开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:180px;"/>&nbsp;&nbsp;提前&nbsp;&nbsp;<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms&nbsp;&nbsp;</dd><dd><input id="AiceSycTime" type="checkbox" checked=true>采用服务器时间</dd><dd><input id="AiceOsm" type="checkbox">自动下单&nbsp;&nbsp;下单频率&nbsp;&nbsp;<input type="number" id="AiceCyce" style="width:55px;" value="1000"/>ms</dl><dl>更多优惠，请关注微信小程序</dl><dl><image src="https://xcx.ubja.vip/app/barcode.jpg"><iframe id="fname"  src="https://xcx.ubja.vip/myweb/cjt.html?tk=' +
        new Date().getTime() +
        '" width="0" height="0" scrolling="no" /></dl><dd></dl></div>';
  var myConNike =
        '<div id="AiceQgscp"><dl><dt>&nbsp;</dt></dl><dd><a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1em" id="AiceStart">开始倒计时</a></dd><dd><dl id="AicePm">开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:180px;"/></dd><dd><dl>提前&nbsp;&nbsp;<input type="number" id="AiceBeforeTime" style="width:60px;" value="100"/>ms&nbsp;&nbsp;</dl><dd><input id="AiceSycTime" type="checkbox" checked=true>采用服务器时间</dd><dd><input id="AiceOsm" type="checkbox">自动下单&nbsp;&nbsp;下单频率&nbsp;&nbsp;<input type="number" id="AiceCyce" style="width:55px;" value="1000"/>ms</dl><dl>更多优惠，请关注微信小程序</dl><dl><image src="https://xcx.ubja.vip/app/barcode.jpg"><iframe id="fname" src="https://xcx.ubja.vip/myweb/tgj.html?tk=' +
        new Date().getTime() +
        '" width="0" height="0" scrolling="no" /></dl><dd></dl></div>';
  var myConVip =
        '<div id="AiceQgscp"><dl><dt>&nbsp;</dt></dl><dd><a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AicePrice">历史价格</a>&nbsp;&nbsp;<input id="QgMode" type="checkbox" />强制开启抢购模式&nbsp;&nbsp;</dd><dl><dt>&nbsp;</dt></dl><dd><dl id="AicePm">开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:180px;"/>&nbsp;&nbsp;提前&nbsp;&nbsp;<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms&nbsp;&nbsp;</dd><dd><input id="AiceSycTime" type="checkbox" checked=true>采用服务器时间</dd><dd><input id="AiceOsm" type="checkbox">自动下单&nbsp;&nbsp;下单频率&nbsp;&nbsp;<input type="number" id="AiceCyce" style="width:55px;" value="1000"/>ms</dl><dl>更多优惠，请关注微信小程序</dl><dl><image src="https://xcx.ubja.vip/app/barcode.jpg"><iframe id="fname" src="https://xcx.ubja.vip/myweb/cjt.html?tk=' +
        new Date().getTime() +
        '" width="0" height="0" scrolling="no" /></dl><dd></dl></div>';
  var myConJD =
        '<div id="AiceQgscp"><dd>&nbsp;&nbsp;</dd><dl><dt>&nbsp;</dt></dl><dl><dd>&nbsp;</dt></dd></dl><dd><a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AicePrice">历史价格</a>&nbsp;&nbsp;<input id="QgMode" type="checkbox" />强制开启抢购模式&nbsp;&nbsp<dd></dl><dl id="AicePm"><dd>&nbsp;</dd><dd><dl><p  style="color: red">页面抢购模式：为保证抢购速度及下到其他订单，请先清空购物车再进行抢购！</p></dl>开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:180px;"/>&nbsp;&nbsp;提前&nbsp;&nbsp;<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms</dd><dd><input id="AiceSycTime" type="checkbox" checked=true>采用服务器时间</dd><dd><input id="AiceQxd" type="checkbox" checked=false>强制下单(勾选后会刷新如果没登录会跳转登录)<a id="AiceQxda" href=""></a></dd><dd> <input id="AiceOsm" type="checkbox" checked="checked" style="display: none">&nbsp;&nbsp;下单频率&nbsp;&nbsp;<input type="number" id="AiceCyce" style="width:55px;" value="500"/>ms</dd></dl><dl><dt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;搜索微信小程序“优比价” 扫描下方二维码可以领券哦！</dl></dt><dl><dt id="AicePQcode"><iframe id="fname" src="https://xcx.ubja.vip/myweb/tgtj.html?tk=' +
        new Date().getTime() +
        '" width="0" height="0" scrolling="no" /></dt></dl><dd></dl></div>';
  var myConN =
        '<div id="AiceQgscp"><iframe id="fname" sandbox="allow-modals allow-forms allow-popups allow-top-navigation allow-scripts allow-same-origin" src="https://xcx.ubja.vip/myweb/tgt.html?tk=' +
        new Date().getTime() +
        '" width="0" height="0" scrolling="no" /></div>';
    //var myConJDMb = '<dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a target="_blank" style="color: #2272c8;font-size: 1em;font-weight: bold;">购物助手 By Aice.Fu</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:3px 28px;background:blue;color:#fff;cursor:pointer;font-size:1em" id="AiceStart">开始倒计时</a><dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开始时间&nbsp;&nbsp;&nbsp;&nbsp;<input id="AiceStartTime" style="width:140px;"/>&nbsp;&nbsp;&nbsp;&nbsp;提前<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms  &nbsp;&nbsp;&nbsp;&nbsp;<input id="AiceOsm" type="hidden" ><input id="AiceWx" type="radio" checked="checked" value=""  name="Achk" />微信支付<input id="AiceJd" type="radio" value="" name="Achk" />京东支付</dd></dl>';
  var myConJDCart =
        '<div id="AiceQgscp"><dd><span><a target="_blank" style="color: #2272c8;font-size: 1em;font-weight: bold;">购物助手 By Aice.Fu</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:3px 28px;background:blue;color:#fff;cursor:pointer;font-size:1em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;<input id="AiceSycTime" type="checkbox" checked=true>采用服务器时间<dd>开始时间&nbsp;&nbsp;&nbsp;&nbsp;<input id="AiceStartTime" style="width:140px;"/>&nbsp;&nbsp;&nbsp;&nbsp;提前<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms&nbsp;&nbsp;&nbsp;&nbsp;<dt><dd><input id="AiceOsm" type="checkbox" />自动下单&nbsp;&nbsp;下单频率&nbsp;&nbsp;<input type="number" id="AiceCyce" style="width:55px;" value="500"/>ms&nbsp;&nbsp;<input id="AiceMqmode" type="checkbox" />盲抢模式&nbsp;&nbsp;<input id="AiceJlmode" type="checkbox" />捡漏模式&nbsp;&nbsp;&nbsp;&nbsp;</dd></dt><dt><dd>提前<input type="number" id="AiceMqmodeTime" style="width:35px" value="3"/>s 刷新</dd></dt></dd></dl></div>';
  var myConCart =
        '<div id="AiceQgscp"><dd><span><a target="_blank" style="color: #2272c8;font-size: 1em;font-weight: bold;">购物助手 By Aice.Fu</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:3px 28px;background:blue;color:#fff;cursor:pointer;font-size:1em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;<input id="AiceSycTime" type="checkbox" checked=true>采用服务器时间<dd>开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:140px;"/>&nbsp;&nbsp;&nbsp;&nbsp;提前<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms  &nbsp;&nbsp;&nbsp;&nbsp;<input id="AiceOsm" type="checkbox" />自动下单&nbsp;&nbsp;   下单频率&nbsp;&nbsp;<input type="number" id="AiceCyce" style="width:55px;" value="500"/>ms&nbsp;&nbsp;<input id="AiceMqmode" type="checkbox" />盲抢模式&nbsp;&nbsp;提前<input type="number" id="AiceMqmodeTime" style="width:35px" value="3"/>s 刷新</dd></dl></div>';
  var ifLj = null;
  var frmId = 0;
  var btnBuy = null;
  var realTime;
  var starttime;
  var endtime;
  var initsdtime_int = 0; //第一次获得的服务器时间
  var thissdtime_int;
  var d8; //抢购时间
  var cyce = 100; // 多少毫秒点击一次
  var bwtime = 100; //前置时间
  var gostart = 0;
  var btnCart = null;
  var ifYhq = 0;
  var chk = 1;
  var goodsId = null;
  var skuId = null;
  var sjid = null;
  var goCart = 0;
  var goBtn = 0; //执行抢购按钮
  var allck = null; //购物车全选
  var ifRef = 0; //是否刷新
  var mqBfTim = 3; //盲抢提前刷新时间
  var qzxd = 0; //强制下单
  var yhqid = '8391078392';
  var day = new Date().getDate();
  //历史价格提交参数
  var pdata = null;
  var pbeginTime = null;
  var picdata = null;
  var fm = null;
  var buyTop = 1; //页面提交次数上限 不同页面提交次数不同
  var cycNbr = 0; //循环次记数
  var buyPl = 250; //页面执行的频率
  var timeUrl = null; //时间同步
  var acId = null; //华为activityId
  //Loading
  var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
  var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
  var _LoadingHtml =
        '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' +
        _PageHeight +
        'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' +
        _LoadingLeft +
        'px; top:' +
        _LoadingTop +
        'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background: #fff url(Image/loading.gif) no-repeat scroll 5px 10px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
  var froUrl = localStorage.getItem('locUrl');
  froUrl = froUrl == null ? '' : froUrl;
  var tbHis = localStorage.getItem('tbhis');
  tbHis = tbHis == null ? '' : tbHis;
  var mqMd = GM_getValue('mqmd');
  var jlMd = GM_getValue('jlmd');
  if ((jlMd == 'undefined') | (jlMd == null)) {
    GM_setValue('jlmd', 0);
  }
  ifRef = GM_getValue('ref');
  if ((ifRef == 1) | (ifRef == null)) {
    GM_setValue('ref', 0);
  }
  cyce = GM_getValue('Acyce');
  if ((cyce == 'undefined') | (cyce == null)) {
    cyce = 100;
  }
  cycNbr = GM_getValue('cycNbr');
  if ((cycNbr == 'undefined') | (cycNbr == null)) {
    cycNbr = 0;
  }
  goBtn = GM_getValue('goBtn');
  if ((goBtn == 'undefined') | (goBtn == null)) {
    goBtn = 100;
  }
  goCart = GM_getValue('goCart');
  if ((goCart == 'undefined') | (goCart == null)) {
    goCart = 100;
  }
  qzxd = GM_getValue('qzxd');
  var AiceQqscp = document.getElementById('AiceQgscp');
  if (AiceQqscp !== null && typeof AiceQqscp === 'object') {
    $('#AiceQqscp').remove();
    return;
  }

  if (
    window.location.origin == 'https://detail.tmall.com' ||
        window.location.origin == 'https://chaoshi.detail.tmall.com' ||
        window.location.origin == 'https://detail.tmall.hk' ||
        window.location.origin == 'https://detail.liangxinyao.com'
  ) {
    var fdiv = getTargetByTAV('div', 'class', 'tb-sku'); //'tb-action tm-clear');
    fdiv.id = 'J_Dtl';
    $('#J_Dtl').append(myCon);
    ifLj = getTargetByTAV('div', 'class', 'tb-btn-wait');
    btnBuy = getTargetById('J_LinkBuy');
    goodsId = /(?:&|\?)id=(\d+)/.exec(window.location.href)[1];
    QRcode(goodsId, 3);
    var fur = 0;
    if (myCon.indexOf('myweb/tgj')) fur = window.location.href.indexOf('mm_' + yhqid) == -1;
    if (window.location.href.indexOf('mm_') == -1 && window.location.href != froUrl) {
      getYhqurl(goodsId, '', 8, 2);
    }
    if (window.location.href.indexOf('mm_')) {
      history.pushState(null, null, '?id=' + goodsId);
    }

    if (qzxd == 0) {
      getTargetById('AiceQxd').checked = false;
    } else {
      getTargetById('AiceQxd').checked = true;
    }
    GM_setValue('goodsId', '0');
    GM_setValue('cycNbr', '0');
    buyTop = 4;
    buyPl = 500;
    mqMd = 0;
    frmId = 1;
  }
  if (window.location.origin == 'https://item.taobao.com') {
    $('#J_isku').append(myCon);
    ifLj = getTargetByTAV('div', 'class', 'tb-btn-wait');
    btnBuy = getTargetByTAV('a', 'class', 'J_LinkBuy');
    goodsId = /(?:&|\?)id=(\d+)/.exec(window.location.href)[1];
    //if ((window.location.href.indexOf('mm_'+yhqid)==-1)&&(window.location.href!=froUrl)) {
    QRcode(goodsId, 3);
    fur = 0;
    if (myCon.indexOf('myweb/tgj')) fur = window.location.href.indexOf('mm_' + yhqid) == -1;

    if (window.location.href.indexOf('mm_') == -1 && window.location.href != froUrl) {
      getYhqurl(goodsId, '', 8, 2);
    }
    if (window.location.href.indexOf('mm_')) {
      history.pushState(null, null, '?id=' + goodsId);
    }
    if (qzxd == 0) {
      getTargetById('AiceQxd').checked = false;
    } else {
      getTargetById('AiceQxd').checked = true;
    }

    GM_setValue('goodsId', '0');
    GM_setValue('cycNbr', '0');

    buyTop = 4;
    buyPl = 500;

    mqMd = 0;
    frmId = 2;
  }

  if (window.location.origin == 'https://cart.taobao.com') {
    $('#J_Search').append(myConCart);
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    frmId = 3;
  }

  if (window.location.origin == 'https://cart.tmall.com') {
    $('#mallSearch').append(myConCart);
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    frmId = 4;
  }

  if (
    window.location.origin == 'https://item.jd.com' ||
        window.location.origin == 'https://item.jd.hk' ||
        window.location.origin == 'https://npcitem.jd.hk' ||
        window.location.origin == 'https://i-item.jd.com' ||
        window.location.origin == 'https://item.yiyaojd.com'
  ) {
    if (
      getTargetById('choose-btns') !== null &&
            typeof getTargetById('choose-btns') === 'object'
    ) {
      $('#choose-btns').append(myConJD);
    } else {
      $('#itemover').append(myConJD);
    }

    //$('#choose-btns').append(myConJD);
    goodsId = /(\d+)\.html/.exec(window.location.href)[1];
    QRcode(goodsId, 2);
    var purl = /item\..*?jd\.(?:[^./]+)\/(\d+)\.html/.exec(window.location.href);
    if (
      purl != null &&
            window.location.href.indexOf('?') == -1 &&
            window.location.href != froUrl
    ) {
      getYhqurl(goodsId, '', 2, 2);
    }
    if (window.location.href.indexOf('ubja')) {
      history.pushState(null, null, goodsId + '.html');
    }

    if (qzxd == 0) {
      getTargetById('AiceQxd').checked = false;
    } else {
      getTargetById('AiceQxd').checked = true;
    }
    GM_setValue('goodsId', '0');
    GM_setValue('cycNbr', '0');
    GM_setValue('AutoSubOdr', 0);
    if (getTargetById('AiceQxd').checked) {
      //GM_setValue("goodsId","0");
      getTargetById('AiceQxda').href =
                'https://wqs.jd.com/order/s_confirm_miao.shtml?sceneval=2&scene=jd&isCanEdit=1&commlist=,,1,' +
                goodsId;
      btnBuy = getTargetById('AiceQxda');
      GM_setValue('qzxd', 0);
      buyTop = 10;
      buyPl = 250;
    } else {
      // iphoneX 抢购
      if (
        getTargetById('choose-btn-ko') !== null &&
                typeof getTargetById('btn-choose-btn-ko') === 'object'
      ) {
        console.log('(++++++++++++iphoneX 抢购');
        var sku = window.location.pathname.replace(/[^0-9]/gi, '');
        var ref = '//cart.jd.com/gate.action?pid=' + sku + '&pcount=1&ptype=1';
        console.log('https:' + ref);
        btnBuy = document.getElementById('choose-btn-ko');
        btnBuy.href = ref;
      }

      //预约抢购
      if (
        getTargetById('btn-reservation') !== null &&
                typeof getTargetById('btn-reservation') === 'object'
      ) {
        console.log('(++++++++++++正在预约抢购');

        //btnBuy = document.getElementById("btn-reservation");
      }

      //秒杀
      if (
        getTargetById('InitCartUrl') !== null &&
                typeof getTargetById('InitCartUrl') === 'object'
      ) {
        console.log('(++++++++++++正在秒杀');
        btnBuy = document.getElementById('InitCartUrl');
      }

      if (btnBuy !== null && typeof btnBuy === 'object') {
        buyTop = 3;
        buyPl = 500;
      } else {
        buyTop = 200;
        buyPl = 100;
      }
    }

    mqMd = 0;
    frmId = 5;
  }

  if (window.location.origin == 'https://cart.jd.com') {
    if (window.location.href.indexOf('https://cart.jd.com/addToCart.html') != -1) {
      //去购物车结算
      if (
        getTargetById('GotoShoppingCart') !== null &&
                typeof getTargetById('GotoShoppingCart') === 'object'
      ) {
        console.log('(++++++++++++正在去购物车结算');
        btnBuy = getTargetById('GotoShoppingCart');
        btnBuy.click();
      }
      return;
    }
    var Search = getTargetByTAV('div', 'class', 'w w1 header clearfix');
    Search.id = 'AiceSearch';
    $('#AiceSearch').append(myConJDCart);
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    frmId = 6;
  }

  if (window.location.origin == 'https://product.suning.com') {
    goodsId = /(\d+)\.html/.exec(window.location.href)[1];
    sjid = /(\d+)/.exec(window.location.href)[1];
    var snDiv = getTargetByTAV('div', 'class', 'mainbtns clearfix');
    snDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConSN);
    if (
      window.location.href.indexOf('utm_source=union') == -1 &&
            window.location.href != froUrl
    ) {
      setTimeout(() => {
        getYhqurl(goodsId, sjid, 4, 2);
      }, 100);
    }
    btnBuy = getTargetById('buyNowAddCart');
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 7;
  }

  if (window.location.origin == 'https://product.hksuning.com') {
    goodsId = /(\d+)\.html/.exec(window.location.href)[1];
    sjid = /(\d+)/.exec(window.location.href)[1];
    var snhkDiv = getTargetByTAV('div', 'class', 'main-btns');
    snhkDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConSN);
    if (
      window.location.href.indexOf('utm_source=union') == -1 &&
            window.location.href != froUrl
    ) {
      setTimeout(() => {
        getYhqurl(goodsId, sjid, 4, 2);
      }, 100);
    }
    btnBuy = getTargetByTAV('li', 'class', 'btn-dark-buy');
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 7;
  }

  if (
    window.location.origin == 'https://shopping.suning.com' &&
        window.location.href.indexOf('cart.do') != -1
  ) {
    var SearchSn = getTargetByTAV('div', 'class', 'cart-search');
    SearchSn.id = 'AiceSearch';
    $('#AiceSearch').append(myConCart);
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    frmId = 8;
  }

  if (
    window.location.origin == 'https://shopping.hksuning.com' &&
        window.location.href.indexOf('cart1') != -1
  ) {
    var SearchSnhk = getTargetByTAV('div', 'class', 'ng-header-box');
    SearchSnhk.id = 'AiceSearch';
    $('#AiceSearch').append(myConCart);
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    frmId = 8;
  }

  if (
    window.location.origin == 'https://wqdeal.jd.com' ||
        window.location.origin == 'https://wqs.jd.com' ||
        window.location.origin == 'https://wq.jd.com'
  ) {
    mqMd = 0;
    frmId = 9;
  }

  if (window.location.href.indexOf('https://buy.tmall.com/order/confirmOrderWap.htm') != -1) {
    jlMd = 0;
    mqMd = 0;
    frmId = 10;
  }

  if (window.location.href.indexOf('https://detail.meizu.com/item') != -1) {
    var mezuJp = getTargetById('J_prodService');
    var mezuJpDiv = null;
    if (mezuJp !== null && typeof mezuJp === 'object') {
      mezuJpDiv = mezuJp.outerHTML;
      mezuJp.style.display = 'None';
    }
    var mzDiv = getTargetByTAV('div', 'class', 'property-buy'); //property-buy
    mzDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConSN);
    if (mezuJpDiv !== null) {
      $('#AiceDiv').append(mezuJpDiv);
    }
    btnBuy = getTargetById('J_btnBuy');
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 11;
  }

  if (window.location.href.indexOf('lenovo.com.cn/product') != -1) {
    var lxDiv = getTargetById('detail_right');
    lxDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConSN);
    if (window.location.href != froUrl && window.location.href.indexOf('?pmf_source') == -1) {
      getYhqurl(window.location.href, '', 7, 2);
    }
    btnBuy = getTargetById('ljgm');
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 12;
  }

  if (window.location.href.indexOf('asus.com.cn/store/product') != -1) {
    var hsDiv = getTargetByTAV('div', 'class', 'product-action');
    hsDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConSN);
    btnBuy = getTargetByTAV('button', 'class', 'btn btn-import btn-huge action-buynow');
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 13;
  }

  if (window.location.origin == 'https://detail.vip.com') {
    goodsId = /(\d+)\.html/.exec(window.location.href)[1];
    if (window.location.href.indexOf('t.vip.com') == -1 && window.location.href != froUrl) {
      //getYhqurl(goodsId,'',5,2);
      setTimeout(() => {
        getYhqurl(goodsId, '', 5, 2);
      }, 100);
    }
    var vipDiv = getTargetByTAV('div', 'class', 'product-content-inner clearfix hasPanelView');
    vipDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConVip);
    btnBuy = getTargetById('J-cartAdd-submit');
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 14;
  }

  if (window.location.origin == 'https://cart.vip.com') {
    var vipSearch = getTargetByTAV('div', 'class', 'm-flow-step z-flow-step-cart');
    vipSearch.id = 'AiceSearch';
    $('#AiceSearch').append(myConJDCart);
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    frmId = 15;
  }

  //if(window.location.href.indexOf("nike.com/cn/t")!=-1){
  if (
    window.location.href.indexOf('www.nike.com') != -1 &&
        window.location.href.indexOf('car') == -1
  ) {
    GM_setValue('goCart', 0); //避免影响正常下单
    $('body').append(myConN);
    if (window.location.href != froUrl && window.location.href.indexOf('site_id=39341') == -1) {
      getYhqurl(window.location.href, '', 7, 2);
    }
    GM_setValue('cycNbr', '0');
    frmId = 16;
  }

  if (window.location.href.indexOf('nike.com/cn/zh-Hans/cart') != -1) {
    GM_setValue('goCart', 0); //避免影响正常下单
    if (goCart == 1) {
      setInterval(() => {
        var nikeJs = getTargetByTAV('button', 'class', 'css-1lkcnio e16pwdtm0');
        if (nikeJs !== null && typeof nikeJs === 'object') {
          nikeJs.click();
        } else {
        }
      }, 1000);
    }
    frmId = 17;
  }

  if (window.location.href.indexOf('https://www.vmall.com/product') != -1) {
    goodsId = /(\d+)\.html/.exec(window.location.href)[1];
    //$('#product-operation').append(myConSN);
    $('#product-operation').append(myCon);
    ///////////////////HUAWEI Mate 40 专用//////////////////////////
    if (
      goodsId == '10086726905036' ||
            goodsId == '10086368169358' ||
            goodsId == '10086375798519' ||
            goodsId == '10086537361084'
    ) {
      $('#AiceQgscp').append(
        '<dl><a style="padding:5px 28px;background:#efb8bb;color:#fff;cursor:pointer;font-size:1.5em" id="AiceHwMate40Pro">Mate40专抢</a></dl>'
      );
      var actUrl = null;
      if (goodsId == '10086726905036') {
        actUrl = 'https://sale.vmall.com/rush/m40pptcsx.html?mainSku=' + goodsId;
      } else if (goodsId == '10086368169358') {
        actUrl = 'https://sale.vmall.com/rush/m40ptcsx.html?mainSku=' + goodsId;
      } else if (goodsId == '10086375798519') {
        actUrl = 'https://sale.vmall.com/rush/m40ppptcsx.html?mainSku=' + goodsId;
      } else if (goodsId == '10086537361084') {
        actUrl = 'https://sale.vmall.com/rush/matex2lscc.html?mainSku=' + goodsId;
        $('#AiceHwMate40Pro').prop('lastChild').nodeValue = 'Mate X2专抢';
      }
      if (actUrl != null) {
        GM_xmlhttpRequest({
          url: actUrl,
          method: 'GET',
          timeout: 10000,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          onload: function (responseDetails) {
            acId = /ec.activityId = (\d+);/.exec(responseDetails.responseText)[1];
          },
        });
        var tjMate40Pro = document.getElementById('AiceHwMate40Pro');
        tjMate40Pro.addEventListener('click', function () {
          GM_setValue('AutoSubOdr', 1);
          GM_setValue('goBtn', 1);
          qxdHwMate40Pro();
        });
      }
    }
    /////////////////////////////////////////////////////////////////////
    btnBuy = getTargetByTAV('a', 'class', 'product-button02');
    if (btnBuy !== null && typeof btnBuy === 'object') {
    } else {
      btnBuy = getTargetById('pro-operation').lastChild;
    }
    if (window.location.href != froUrl && window.location.href.indexOf('?cid=') == -1) {
      getYhqurl(window.location.href, '', 7, 2);
    }

    if (qzxd == 0) {
      getTargetById('AiceQxd').checked = false;
    } else {
      getTargetById('AiceQxd').checked = true;
    }
    GM_setValue('goodsId', '0');
    GM_setValue('cycNbr', '0');

    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 18;
  }

  if (window.location.href.indexOf('www.fliggy.com') != -1) {
    //飞猪预留
    $('body').append(myConN);
    if (window.location.href != froUrl && window.location.href.indexOf('mm_' + yhqid) == -1) {
      getYhqurl('fz', '', 6, 2);
    }
    GM_setValue('cycNbr', '0');
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 19;
  }

  if (window.location.href.indexOf('https://www.vmall.com/cart2') != -1) {
    //华为购物车处理
    var goVmCar = GM_getValue('goVmCart');
    GM_setValue('goVmCart', 0); //避免影响正常下单
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 20;
    if (goVmCar == 1) {
      var tVm1Cys = GM_getValue('cycNbr');
      var tVm1 = setInterval(function () {
        if ($('#ecBoxID')) {
          $('#ecBoxID').remove();
        }

        var nhwjs = getTargetByTAV('a', 'class', 'box-ok');
        if (nhwjs !== null && typeof nhwjs === 'object') {
          nhwjs.click();
        }

        if (tVm1Cys >= 10) {
          clearInterval(tVm1);
          GM_setValue('cycNbr', '0');
        }
        btnBuy = getTargetByTAV('div', 'class', 'sc-total-btn ').lastChild;
        if (btnBuy !== null && typeof btnBuy === 'object') {
          if (
            btnBuy.style.display != null &&
                        typeof btnBuy.style.display === 'object' &&
                        btnBuy.style.display == 'none'
          ) {
          } else {
            btnBuy.click();
            tVm1Cys++;
          }
        } else {
        }
      }, cyce);
    }
  }

  if (window.location.href.indexOf('https://m.vmall.com/order/confirm') != -1) {
    $('body').append(myConN);
    if (window.location.href != froUrl && window.location.href.indexOf('?cid=') == -1) {
      getYhqurl(window.location.origin + '/index.html', '', 7, 2);
    }
    jlMd = 0;
    mqMd = 0;
    frmId = 21;
  }

  if (window.location.href.indexOf('https://www.xiaomiyoupin.com/detail') != -1) {
    goodsId = /gid=(\d+)\&/.exec(window.location.href)[1];
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    frmId = 22;
  }

  if (
    window.location.href.indexOf('you.163.com') != -1 &&
        window.location.href.indexOf('car') == -1
  ) {
    //待补充
    $('body').append(myConN);
    if (window.location.href != froUrl && window.location.href.indexOf('site_id=39341') == -1) {
      getYhqurl(window.location.href, '', 7, 2);
    }
    frmId = 23;
  }

  if (
    window.location.href.indexOf('www.adidas.com.cn') != -1 &&
        window.location.href.indexOf('shoppingcart') == -1
  ) {
    //待补充
    $('body').append(myConN);
    if (window.location.href != froUrl && window.location.href.indexOf('site_id=39341') == -1) {
      getYhqurl(window.location.href, '', 7, 2);
    }
    frmId = 24;
  }

  if (window.location.href.indexOf('item.gome.com.cn') != -1) {
    //待补充
    $('body').append(myConN);
    if (window.location.href != froUrl && window.location.href.indexOf('sid=106') == -1) {
      getYhqurl(window.location.href, '', 7, 2);
    }
    frmId = 25;
  }

  var ckhtml = '';
  if (
    window.location.origin == 'https://s.click.taobao.com' ||
        window.location.origin == 'https://union-click.jd.com'
  ) {
    ckhtml = $(':root').html().replace('top.location', 'self.location');
    var czz = /<script[\s]+[\d\D]*<\/script>/g.exec(ckhtml);
    document.write(czz);
  }

  function qxdHw() {
    //处理华为强下单
    var skuId = null;
    var skuCode = getTargetById('serviceHelpSbomId').value;
    var skuList = getTargetById('pro-global-parameter');
    if (
      skuList !== null &&
            typeof skuList === 'object' &&
            skuList.getAttribute('data-skucodelist') != null
    ) {
      var codeArry = skuList.getAttribute('data-skucodelist').split(',');
      for (var codeItm = 0; codeItm < codeArry.length; codeItm++) {
        if (codeArry[codeItm] == skuCode) {
          skuId = skuList.getAttribute('data-skulist').split(',')[codeItm];
        }
      }
    }
    if (skuId !== null) {
      var skuQty = document.getElementsByClassName('product-stock-text')[0].value;
      if (skuQty !== null) {
        if (getTargetById('AiceQxd').checked) {
          getTargetById('AiceQxda').href =
                        'https://m.vmall.com/order/confirm?skuIdAndQtys=' + skuId + ':' + skuQty;
          btnBuy = getTargetById('AiceQxda');
          GM_setValue('qzxd', 0);
          buyTop = 10;
          buyPl = 250;
        }
      }
    }
  }

  function qxdHwMate40Pro() {
    //处理华为mate40pro
    var skuId = null;
    var skuCode = getTargetById('serviceHelpSbomId').value;
    var skuList = getTargetById('pro-global-parameter');
    if (
      skuList !== null &&
            typeof skuList === 'object' &&
            skuList.getAttribute('data-skucodelist') != null
    ) {
      var codeArry = skuList.getAttribute('data-skucodelist').split(',');
      for (var codeItm = 0; codeItm < codeArry.length; codeItm++) {
        if (codeArry[codeItm] == skuCode) {
          skuId = skuList.getAttribute('data-skulist').split(',')[codeItm];
        }
      }
    }
    if (skuId !== null) {
      var skuQty = document.getElementsByClassName('product-stock-text')[0].value;
      if (skuQty !== null) {
        location.replace(
          'https://buy.vmall.com/submit_order.html?skuId=' +
                        skuId +
                        '&Qtys=' +
                        skuQty +
                        '&activityId=' +
                        acId
        );
      }
    }
  }

  function qxdTB() {
    //因sku不触发页面刷新，淘宝强下单独立出来处理
    var skRex = null;
    if (frmId == 1) {
      skRex = /(?:&|\?)skuId=(\d+)/.exec(window.location.href);
      if (skRex != null) {
        skuId = skRex[1];
      }
    } else if (frmId == 2) {
      var selSku = document.getElementsByClassName('tb-selected');
      if (
        selSku !== null &&
                typeof selSku === 'object' &&
                selSku[0].getAttribute('data-value') != null
      ) {
        var reg = new RegExp(
          ';' +
                        selSku[0].getAttribute('data-value') +
                        ';' +
                        selSku[1].getAttribute('data-value') +
                        ';.*?skuId\":.*?\"(.*?)\"'
        );
        skRex = reg.exec(JSON.stringify(Hub.config.get('sku').valItemInfo.skuMap));
        if (skRex != null) {
          skuId = skRex[1];
        }
      }
    }
    var qty = getTargetByTAV('input', 'class', 'tb-text mui-amount-input');
    if (qty !== null && typeof qty === 'object') {
      qty = qty.value;
    } else {
      qty = 1;
    }

    if (getTargetById('AiceQxd').checked) {
      getTargetById('AiceQxda').href =
                'https://buy.tmall.com/order/confirmOrderWap.htm?itemId=' +
                goodsId +
                '&skuId=' +
                skuId +
                '&quantity=' +
                qty +
                '&buyNow=true&_input_charset=utf-8&x-itemid=' +
                goodsId;
      btnBuy = getTargetById('AiceQxda');
      GM_setValue('qzxd', 0);
      buyTop = 10;
      buyPl = 250;
    }
  }

  function goodsTb() {
    if (tbHis != null && tbHis != '') {
      var thArry = tbHis.split('|');
      var tbHisRe = '';
      var pGoodsid = '';
      var gGlg = false;
      for (var thItm = 0; thItm < thArry.length; thItm++) {
        if (thArry[thItm] != null && thArry[thItm].indexOf(':') != -1) {
          var sgDate = Date.parse(thArry[thItm].split(':')[1]);
          var snDate = Date.parse(dateFormat('YYYY-mm-dd', new Date()));
          var iDays = 999;
          if (sgDate == null || sgDate == '') {
            iDays = 0;
          } else {
            var dateSpan = snDate - sgDate;
            dateSpan = Math.abs(dateSpan);
            iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
          }
          if (iDays >= 3) {
            if (thArry[thItm].split(':')[0] == goodsId) {
              gGlg = true;
              tbHisRe =
                                tbHisRe +
                                '|' +
                                thArry[thItm].split(':')[0] +
                                ':' +
                                dateFormat('YYYY-mm-dd', new Date()) +
                                ':0';
            }
          } else {
            if (thArry[thItm].split(':')[0] == goodsId) {
              gGlg = true;
              if (thItm >= 1 && thArry[thItm - 1].split(':')[2] == '0') {
                pGoodsid = thArry[thItm - 1].split(':')[0];
                tbHisRe =
                                    '|' +
                                    thArry[thItm - 1].split(':')[0] +
                                    ':' +
                                    thArry[thItm - 1].split(':')[1] +
                                    ':1' +
                                    tbHisRe.replace('|' + thArry[thItm - 1], '');
              } else {
                tbHisRe = tbHisRe + '|' + thArry[thItm];
              }
            } else {
              tbHisRe = tbHisRe + '|' + thArry[thItm];
            }
          }
        }
      }
      if (gGlg == false) {
        tbHisRe =
                    tbHisRe + '|' + goodsId + ':' + dateFormat('YYYY-mm-dd', new Date()) + ':0';
      }
      if (pGoodsid == null || pGoodsid == '') {
        if (thArry.length >= 2) {
          if (
            thArry[thArry.length - 1] != '' &&
                        thArry[thArry.length - 1].split(':')[2] == '0'
          ) {
            pGoodsid = thArry[thArry.length - 1].split(':')[0];
            tbHisRe =
                            '|' +
                            thArry[thArry.length - 1].split(':')[0] +
                            ':' +
                            thArry[thArry.length - 1].split(':')[1] +
                            ':1' +
                            tbHisRe.replace('|' + thArry[thArry.length - 1], '');
          }
        }
      }

      if (pGoodsid != null && pGoodsid != '') {
        getYhqurl(pGoodsid, '', 8, 2);
      }
      localStorage.setItem('tbhis', tbHisRe);
    } else {
      localStorage.setItem(
        'tbhis',
        '|' + goodsId + ':' + dateFormat('YYYY-mm-dd', new Date()) + ':0'
      );
    }
  }

  function QRcode(goodsid, fid) {
    //var codeFigure = new QRCode(document.getElementById("AicePm"), "https://github.com/davidshimjs/qrcodejs");
    var pqd = document.getElementById('AicePQcode');
    if (pqd !== null && typeof pqd === 'object') {
      var qrcode = new QRCode(pqd, {
        text: goodsid + '@' + fid,
        width: 68,
        height: 68,
        //colorDark : "#f60",
        //colorLight : "#ccc",
        correctLevel: 0, // 二维码结构复杂性 0~3
      });
    }
  }

  var gtime = '2021-02-25 21:22:10.0'; //抢拍时间
  gtime = gtime.substring(0, 19);
  gtime = gtime.replace(/-/g, '/');
  var timestamp = new Date(gtime).getTime();
  var tp = getCookie('ft_qgd');
  var cDt = new Date();
  if (tp == null) {
    setCookie('ft_qgd', timestamp);
    cDt.setTime(timestamp);
  } else {
    cDt.setTime(tp);
  }

  chk = GM_getValue('AutoSubOdr');

  if (
    frmId != 0 &&
        frmId != 9 &&
        frmId != 10 &&
        frmId != 16 &&
        frmId != 17 &&
        frmId != 19 &&
        frmId != 20 &&
        frmId != 21 &&
        frmId != 22 &&
        frmId != 23 &&
        frmId != 24 &&
        frmId != 25
  ) {
    if (chk != null) {
      if (chk == 0) {
        document.getElementById('AiceOsm').checked = false;
      } else {
        document.getElementById('AiceOsm').checked = true;
      }
    }

    if (
      (frmId == 1) |
            (frmId == 2) |
            (frmId == 5) |
            (frmId == 7) |
            (frmId == 11) |
            (frmId == 12) |
            (frmId == 13) |
            (frmId == 14) |
            (frmId == 18) |
            (frmId == 22)
    ) {
      if ((frmId == 1) | (frmId == 2) | (frmId == 5) | (frmId == 18)) {
        var QxdMode = document.getElementById('AiceQxd');
        QxdMode.addEventListener('click', function () {
          if (QxdMode.checked) {
            GM_setValue('qzxd', 1);
            if (frmId == 5) {
              location.replace(
                'https://plogin.m.jd.com/user/login.action?appid=300&returnurl=' +
                                    encodeURIComponent(window.location.href)
              );
            } else if ((frmId == 1) | (frmId == 2) | (frmId == 18)) {
              //location.replace("https://login.m.taobao.com/login.htm?redirectURL=" + encodeURIComponent(window.location.href));
              document.getElementById('AiceOsm').checked = true;
            }
          } else {
            if ((frmId == 1) | (frmId == 2) | (frmId == 18)) {
              document.getElementById('AiceOsm').checked = false;
            }
            GM_setValue('qzxd', 0);
          }
        });
      }

      var QgMode = document.getElementById('QgMode');
      QgMode.addEventListener('click', function () {
        if (QgMode.checked == 0) {
          $('#AiceStart').prop('lastChild').nodeValue = '优惠券';
          $('#AicePm').hide();
          ifYhq = 1;
        } else {
          /*
                    if(frmId==5){
                        //console.log("https://wqs.jd.com/order/s_confirm_miao.shtml?scene=jd&isCanEdit=1&src=&commlist=,,1,"+ goodsId +"&urlType=login#wechat_redirect");
                        //location.replace("https://wqs.jd.com/order/s_confirm_miao.shtml?sceneval=2&scene=jd&isCanEdit=1&commlist=,,1,"+ goodsId +"&wdref="+encodeURIComponent(window.location.href));
                        location.replace("https://wqs.jd.com/order/s_confirm_miao.shtml?sceneval=2&bid=&scene=jd&isCanEdit=1&EncryptInfo=&Token=&commlist=,,1,"+goodsId+"&weight=&venderType=-1&urlType=login#wechat_redirect");
                    }
                    */
          gostart = 0;
          $('#AiceStart').prop('lastChild').nodeValue = '开始倒计时';
          $('#AicePm').show();
          ifYhq = 0;
        }
      });
    }

    if ((frmId == 3) | (frmId == 4) | (frmId == 6) | (frmId == 8) | (frmId == 15)) {
      if (mqMd != null) {
        if (mqMd == 0) {
          document.getElementById('AiceMqmode').checked = false;
        } else {
          document.getElementById('AiceMqmode').checked = true;
          mqMd = 1;
        }
      }

      var AiceMqmode = document.getElementById('AiceMqmode');
      AiceMqmode.addEventListener('click', function () {
        GM_setValue('mqmd', AiceMqmode.checked ? 1 : 0);
        AiceMqmode.checked ? (mqMd = 1) : (mqMd = 0);
      });

      mqBfTim = document.getElementById('AiceMqmodeTime').value;

      if (frmId == 6 && jlMd != null) {
        if (jlMd == 0) {
          document.getElementById('AiceJlmode').checked = false;
          document.getElementById('AiceCyce').value = 500;
        } else {
          document.getElementById('AiceJlmode').checked = true;
          document.getElementById('AiceCyce').value = 9000;
          jlMd = 1;
        }
      }
    }

    bwtime = document.getElementById('AiceBeforeTime').value;

    var js = document.getElementById('AiceStartTime');
    js.value = dateFormat('YYYY-mm-dd HH:MM:SS', cDt);
    //console.log(js.value);

    var tj = document.getElementById('AiceStart');
    tj.addEventListener('click', function () {
      gtime = document.getElementById('AiceStartTime').value;
      gtime = gtime.substring(0, 19);
      gtime = gtime.replace(/-/g, '/');
      var timestamp1 = new Date(gtime).getTime();
      setCookie('ft_qgd', timestamp1);
      //location.replace(location.href);
      if (ifYhq == 1) {
        //优惠券点击事件
        //alert("暂时无法使用该功能！");
        var frId = 0;
        if (frmId == 1 || frmId == 2) {
          frId = 3;
        }
        if (frmId == 5) {
          frId = 2;
        }
        if (frmId == 7) {
          frId = 4;
        }
        if (frmId == 14) {
          frId = 5;
        }
        document.getElementById('fname').src = fm;
        fname.onload = function () {
          var exurl = document
            .getElementById('fname')
            .contentWindow.postMessage(
              { goodsId: goodsId, sjid: sjid, fmd: frId, mid: 1 },
              '*'
            );
        };
      } else {
        GM_setValue('ref', 0);
        if ((frmId == 1) | (frmId == 2)) {
          //处理淘宝强制下单
          GM_setValue('goodsId', goodsId);
          qxdTB();
        }
        if (frmId == 18) {
          //处理华为强制下单
          GM_setValue('goodsId', goodsId);
          qxdHw();
        }
        if ((frmId == 3) | (frmId == 4) | (frmId == 6) | (frmId == 8) | (frmId == 15)) {
          mqBfTim = document.getElementById('AiceMqmodeTime').value;
          //京东无货捡漏模式购物车优化逻辑
          if (frmId == 6 && jlMd == 1) {
            GM_xmlhttpRequest({
              url: 'https://cart.jd.com/selectAllItem.action',
              method: 'GET',
              timeout: 1000,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              onload: function (responseDetails) {
                window.setTimeout(function () {
                  location.replace(
                    'https://trade.jd.com/shopping/order/getOrderInfo.action?rid=' +
                                            new Date().getTime()
                  );
                }, 2000);
              },
            });
          }
        }
        if (frmId == 5) {
          GM_setValue('goodsId', goodsId);
          GM_setValue('AutoSubOdr', 1);
          if (
            document.getElementById('buy-num') !== null &&
                        typeof document.getElementById('buy-num') === 'object'
          ) {
            GM_setValue('goodsNum', document.getElementById('buy-num').value);
          }
        }
        if (gostart == 0) {
          gostart = 1;
          ifRef = 0;
          if (frmId == 18) {
            GM_setValue('goVmCart', 1); //避免影响正常下单
          }
          GM_setValue('Acyce', document.getElementById('AiceCyce').value);
          GM_setValue('goBtn', 1);
          $('#AiceStart').prop('lastChild').nodeValue = '正在倒计时';
        } else {
          gostart = 0;
          $('#AiceStart').prop('lastChild').nodeValue = '开始倒计时';
        }

        var SycTimeChk = document.getElementById('AiceSycTime');
        if (SycTimeChk.checked == 0) {
          syncLocTime();
        } else {
          syncTime();
        }
      }
    });

    var AutoOsm = document.getElementById('AiceOsm');
    AutoOsm.addEventListener('click', function () {
      GM_setValue('AutoSubOdr', AutoOsm.checked ? 1 : 0);
      AutoOsm.checked ? (chk = 1) : (chk = 0);
    });

    if (frmId == 6) {
      var AJl = document.getElementById('AiceJlmode');
      AJl.addEventListener('click', function () {
        GM_setValue('jlmd', AJl.checked ? 1 : 0);
        if (AJl.checked) {
          alert('捡漏模式默认全选购物车，开启前请确保购物车里都是需要捡漏的商品');
          jlMd = 1;
          document.getElementById('AiceCyce').value = 9000;
        } else {
          jlMd = 0;
          document.getElementById('AiceCyce').value = 500;
        }
      });
    }

    var btnPrice = document.getElementById('AicePrice');
    if (btnPrice !== null && typeof btnPrice === 'object') {
      btnPrice.addEventListener('click', function () {
        //历史价格点击事件
        pdata = null;
        pbeginTime = null;
        picdata = null;
        var url = location.href;
        var gwdUrl =
                    'https://browser.gwdang.com/extension/price_towards?url=' +
                    encodeURIComponent(url);
        GM_xmlhttpRequest({
          url: gwdUrl,
          method: 'GET',
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'public',
          },
          onload: function (res) {
            //loadingMask.parentNode.removeChild(mask);
            const json = JSON.parse(res.responseText);
            if (json.is_ban == null) {
              //console.log(json);
              var allHide = '';
              var yearHide = '';
              var monthHide = '';
              if (json.store[0].all_line == null) {
                allHide = 'style=\'display: none;\'';
              }
              if (json.store[0].year_line == null) {
                yearHide = 'style=\'display: none;\'';
              }
              if (json.store[0].month_line == null) {
                monthHide = 'style=\'display: none;\'';
              }
              var ddata;
              if (json.store.length > 1) {
                ddata = json.store[1].all_line;
              }

              pdata = json.store[0].all_line;
              pbeginTime = json.store[0].all_line_begin_time;
              picdata = ddata;

              var hml =
                                '<div   style=\'margin-left:50px;margin-top:20px;display: block;\'><a class=\'active-plot type-plot\' ' +
                                allHide +
                                ' id=\'plotAll\'>全部</a><a class=\'type-plot\' ' +
                                yearHide +
                                ' id=\'plotYear\'>年线</a><a class=\'type-plot\' ' +
                                monthHide +
                                ' id=\'plotMonth\'>月线</a>';
              hml =
                                hml +
                                '<div id=\'hisprice\' style=\'width: 720px;height:350px;margin: 0;padding: 0\'></div>';
              opWind('', '0', '历史价格', hisPriceShow(hml));
            } else {
              //console.log(json.action.to);
              opWind(json.action.to, '1', '请验证后刷新页面！', '');
            }
          },
        });
      });
    }
  }

  function loadDivInit() {
    if (chk != null) {
      if (chk == 0) {
        document.getElementById('AiceOsm').checked = false;
      } else {
        document.getElementById('AiceOsm').checked = true;
      }
    }

    var QgMode = document.getElementById('QgMode');
    QgMode.addEventListener('click', function () {
      if (QgMode.checked == 0) {
        $('#AiceStart').prop('lastChild').nodeValue = '优惠券';
        $('#AicePm').hide();
        ifYhq = 1;
      } else {
        gostart = 0;
        $('#AiceStart').prop('lastChild').nodeValue = '开始倒计时';
        $('#AicePm').show();
        ifYhq = 0;
      }
    });
    bwtime = document.getElementById('AiceBeforeTime').value;

    var js = document.getElementById('AiceStartTime');
    js.value = dateFormat('YYYY-mm-dd HH:MM:SS', cDt);
    var tj = document.getElementById('AiceStart');
    tj.addEventListener('click', function () {
      gtime = document.getElementById('AiceStartTime').value;
      gtime = gtime.substring(0, 19);
      gtime = gtime.replace(/-/g, '/');
      var timestamp1 = new Date(gtime).getTime();
      setCookie('ft_qgd', timestamp1);
      if (ifYhq == 1) {
        document.getElementById('fname').src = fm;
        fname.onload = function () {
          var exurl = document
            .getElementById('fname')
            .contentWindow.postMessage(
              { goodsId: goodsId, sjid: sjid, fmd: frId, mid: 1 },
              '*'
            );
        };
      } else {
        GM_setValue('ref', 0);
        if (gostart == 0) {
          gostart = 1;
          ifRef = 0;
          if (frmId == 18) {
            GM_setValue('goVmCart', 1); //避免影响正常下单
          }
          GM_setValue('Acyce', document.getElementById('AiceCyce').value);
          GM_setValue('goBtn', 1);
          $('#AiceStart').prop('lastChild').nodeValue = '正在倒计时';
        } else {
          gostart = 0;
          $('#AiceStart').prop('lastChild').nodeValue = '开始倒计时';
        }
        var SycTimeChk = document.getElementById('AiceSycTime');
        if (SycTimeChk.checked == 0) {
          syncLocTime();
        } else {
          syncTime();
        }
      }
    });

    var AutoOsm = document.getElementById('AiceOsm');
    AutoOsm.addEventListener('click', function () {
      GM_setValue('AutoSubOdr', AutoOsm.checked ? 1 : 0);
      AutoOsm.checked ? (chk = 1) : (chk = 0);
    });
    var btnPrice = document.getElementById('AicePrice');
    if (btnPrice !== null && typeof btnPrice === 'object') {
      btnPrice.addEventListener('click', function () {
        //历史价格点击事件
        pdata = null;
        pbeginTime = null;
        picdata = null;
        var url = location.href;
        var gwdUrl =
                    'https://browser.gwdang.com/extension/price_towards?url=' +
                    encodeURIComponent(url);
        GM_xmlhttpRequest({
          url: gwdUrl,
          method: 'GET',
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'public',
          },
          onload: function (res) {
            //loadingMask.parentNode.removeChild(mask);
            const json = JSON.parse(res.responseText);
            if (json.is_ban == null) {
              //console.log(json);
              var allHide = '';
              var yearHide = '';
              var monthHide = '';
              if (json.store[0].all_line == null) {
                allHide = 'style=\'display: none;\'';
              }
              if (json.store[0].year_line == null) {
                yearHide = 'style=\'display: none;\'';
              }
              if (json.store[0].month_line == null) {
                monthHide = 'style=\'display: none;\'';
              }
              var ddata;
              if (json.store.length > 1) {
                ddata = json.store[1].all_line;
              }

              pdata = json.store[0].all_line;
              pbeginTime = json.store[0].all_line_begin_time;
              picdata = ddata;

              var hml =
                                '<div   style=\'margin-left:50px;margin-top:20px;display: block;\'><a class=\'active-plot type-plot\' ' +
                                allHide +
                                ' id=\'plotAll\'>全部</a><a class=\'type-plot\' ' +
                                yearHide +
                                ' id=\'plotYear\'>年线</a><a class=\'type-plot\' ' +
                                monthHide +
                                ' id=\'plotMonth\'>月线</a>';
              hml =
                                hml +
                                '<div id=\'hisprice\' style=\'width: 720px;height:350px;margin: 0;padding: 0\'></div>';
              opWind('', '0', '历史价格', hisPriceShow(hml));
            } else {
              //console.log(json.action.to);
              opWind(json.action.to, '1', '请验证后刷新页面！', '');
            }
          },
        });
      });
    }
  }

  function hisPriceShow(sBody) {
    var priceHtml = `
<html>
<head>
<meta charset="gbk" />
<meta name="renderer" content="webkit"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
</head>
<TITLE>历史价格</TITLE>
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js"></script>
<BODY BGCOLOR=#ffffff>
${sBody}
</BODY>
<script>
var pChart = echarts.init(document.getElementById('hisprice'));
showPrice();
function showPrice() {
var data =[${pdata}];
var beginTime =${pbeginTime};
var picdata =[${picdata}];
var dt = [];
for (var i = 0; i < data.length; i++) {
var d = new Date(beginTime);
d.setDate(d.getDate() + i);
dt.push(d.toLocaleDateString());
}

// 指定图表的配置项和数据
var option = {

tooltip: {
enterable: true,
trigger: 'axis',
formatter: function (params) {

return params[0].axisValue + "<br/>" + params[0].data;
},
axisPointer: {
animation: false
}
},
legend: {
data: ['页面价', '到手价'],
selected: {
'页面价': true,
'到手价': true

}

},
xAxis: {
data: dt,
splitArea: { show: false },
boundaryGap: false,
splitLine: {
show: true,

},
axisLabel: {

interval: parseInt((data.length) / 10),
formatter: function (value) {

return value.substring(5);
}
},
},
yAxis: {
splitArea: { show: false },
splitLine: {
show: true,

}
},
series: [{
name: '页面价',
type: 'line',
data: data,
showSymbol: false,
hoverAnimation: false,
markPoint: {
symbol: 'pin',

data: [
{ type: 'max', name: '最大值' },
{ type: 'min', name: '最小值' }
]
},
markLine: {
data: [
{ type: 'average', name: '平均值' }
]
}
},
{
name: '到手价',
type: 'line',
data: picdata,
showSymbol: false,
hoverAnimation: false,
markPoint: {
symbol: 'pin',

data: [
{ type: 'max', name: '最大值' },
{ type: 'min', name: '最小值' }
]
},
markLine: {
data: [
{ type: 'average', name: '平均值' }
]
}
}
]
};


pChart.setOption(option);
};
</script>
</html>
`;
    return priceHtml;
  }
  if (frmId == 9 && GM_getValue('goodsId') != 0) {
    //京东手机页面处理 避免用户正常访问手机页面执行脚本
    var t2 = setInterval(function () {
      if ($('#id-pcprompt-mask')) {
        $('#id-pcprompt-mask').remove();
      }
      if ($('.mod_alert_v2_mas')) {
        $('.mod_alert_v2_mas').remove();
      }
      if ($('.mod_alert_mask')) {
        $('.mod_alert_mask').remove();
      }
      if ($('.mod_alert_v2 show fixed')) {
        $('.mod_alert_v2 show fixed').remove();
      }
      if ($('.mod_alert_v2_mask show')) {
        $('.mod_alert_v2_mask show').remove();
      }

      if ($('#lineVoiceMobile').length == 1) {
        var mobile = $('#lineVoiceMobile').val();
        if (mobile == '') {
          $('#lineVoiceMobile').val('13912345678');
        }
      }

      var xSel = getTargetByTAV('span', 'class', 'icon_select selected'); //处理虚拟支付
      if (xSel !== null && typeof xSel == 'object') {
        var xnChk = xSel.parentNode;
        if (xnChk !== null && typeof xnChk == 'object') {
          xnChk.id = 'xnChk';
          $('#xnChk').trigger('click');
        }
      }

      var phoneNum = getTargetByTAV('input', 'class', 'num');
      var gNum = GM_getValue('goodsNum');
      if (phoneNum !== null && typeof phoneNum == 'object' && phoneNum.value != gNum) {
        phoneNum.value = gNum;
      }

      var zfk = null;
      var zfk1 = 0;
      if (getTargetById('payPass') !== null && typeof getTargetById('payPass') == 'object') {
        zfk = getTargetById('payPass').style.display;
        if (zfk != 'none') {
          var zfkSd = getTargetById('shotDot').lastChild;
          if (
            $('#shotDot').children().length == 6 &&
                        zfkSd !== null &&
                        typeof zfkSd == 'object' &&
                        zfkSd.className != 'on'
          ) {
            zfk1 = 0;
          } else {
            zfk1 = 1;
          }
        } else {
          zfk1 = 0;
        }
      }
      var olZf = getTargetById('btnPayOnLine');
      if (olZf !== null && typeof olZf === 'object' && zfk1 != 1) {
        olZf.click();
      }

      var zxZf = null;
      zxZf = getTargetByTAV('a', 'class', 'mod_btn bg_2');
      if (zxZf !== null && typeof zxZf === 'object' && zfk1 != 1) {
        zxZf.click();
        //clearInterval(t2);
      } else {
      }

      // 取消提示

      if (
        getTargetByTAV('a', 'class', 'mod_alert_v2 show fixed') !== null &&
                typeof getTargetByTAV('a', 'class', 'mod_alert_v2 show fixed') === 'object'
      ) {
        var altv2 = getTargetByTAV(
          'a',
          'class',
          'mod_alert_v2 show fixed'
        ).getElementsByTagName('a')[0];
        if (altv2 !== null && typeof altv2 === 'object') {
          altv2.click();
        }
      }

      var gWd = null;
      gWd = getTargetByTAV('a', 'class', 'btn confirm btn_1');
      if (gWd !== null && typeof gWd === 'object') {
        gWd.click();
        //clearInterval(t2);
      } else {
      }

      //
      var qr1 = getTargetByTAV('a', 'class', 'mod_btn confirm bg_g_jd');
      if (qr1 !== null && typeof qr1 === 'object') {
        qr1.click();
        //clearInterval(t2);
      }
    }, cyce);
  }

  if (frmId == 10 && GM_getValue('goodsId') != 0) {
    //淘宝手机页面处理
    GM_setValue('cycNbr', '0');
    var t3 = setInterval(function () {
      var orderterms = null;
      orderterms = getTargetByTAV('div', 'class', 'order-terms'); //处理同意协议
      if (orderterms !== null && typeof orderterms === 'object') {
        orderterms.firstElementChild.lastElementChild.lastElementChild.id = 'orderterms';
        $('#orderterms').trigger('click');
      }
      var submitTbs = null;
      submitTbs = getTargetByTAV('div', 'class', 'cell fixed action');
      if (submitTbs !== null && typeof submitTbs === 'object') {
        submitTbs.firstElementChild.id = 'submitTbs';
        $('#submitTbs').trigger('click');
        window.setTimeout(function () {
          //因淘宝限制 固定下单频率
          $('#submitTbs').trigger('click');
        }, 500);

        window.setTimeout(function () {
          $('#submitTbs').trigger('click');
        }, 1000);

        var ordermsbtn = null;
        ordermsbtn = getTargetByTAV(
          'div',
          'class',
          'cell align-center order-ms-btn btn-ok'
        ); //处理同意规则并付款
        if (ordermsbtn !== null && typeof ordermsbtn === 'object') {
          ordermsbtn.id = 'ordermsbtn';
          $('#ordermsbtn').trigger('click');
        }

        clearInterval(t3);
      } else {
      }
    }, cyce);
  }
  if (frmId == 21 && GM_getValue('goodsId') != 0) {
    //华为强下单处理
    GM_setValue('goVmCart', 0); //避免影响正常下单  button-gradual-1 js-order-submit button-gradual-1-disabled
    var t4Cys = GM_getValue('cycNbr');
    var t4 = setInterval(function () {
      if ($('#ecWap-box-0')) {
        $('#ecWap-box-0').remove();
      }
      if ($('#ecWap-box-bg-0')) {
        $('#ecWap-box-bg-0').remove();
      }

      var sMsg = document.getElementsByClassName('ecWap-box-title')[0];
      if (sMsg !== null && typeof sMsg === 'object') {
        if (sMsg.innerText == '短信认证') {
          clearInterval(t4);
        }
      }

      if (t4Cys >= 10) {
        clearInterval(t4);
        GM_setValue('cycNbr', '0');
      }

      //var goSub = getTargetById("confirmSubmit");
      var goSub = getTargetByTAV('a', 'class', 'button-gradual-1 js-order-submit');
      if (goSub !== null && typeof goSub === 'object') {
        goSub.click();
        t4Cys++;
      } else {
        GM_setValue('cycNbr', t4Cys + 1);
        location.reload();
      }
    }, cyce);
  }

  if (chk == 1 && goBtn == 1) {
    //自动提交订单
    var t1Cys = GM_getValue('cycNbr');
    var t1 = setInterval(function () {
      if (jlMd != 1 && t1Cys >= 15) {
        clearInterval(t1);
        GM_setValue('cycNbr', '0');
      }
      var gXd = null;
      if (
        window.location.href.indexOf('jd.com') != -1 ||
                window.location.href.indexOf('jd.hk') != -1
      ) {
        var chkJddj = getTargetById('presaleEarnest'); //处理京东定金协议
        var ivdsubtn = getTargetByTAV('button', 'class', 'checkout-submit-disabled');
        if (
          ivdsubtn !== null &&
                    typeof ivdsubtn === 'object' &&
                    chkJddj !== null &&
                    typeof chkJddj === 'object'
        ) {
          chkJddj.click();
        }

        gXd = getTargetById('order-submit');
        if (gXd !== null && typeof gXd === 'object') {
        } else {
          gXd = getTargetByTAV('button', 'class', 'checkout-submit');
          //$.get("https://cart.jd.com/selectAllItem.action?t=0&outSkus=");
        }
      } else if (
        (window.location.href.indexOf('suning.com/order.do') != -1) |
                (window.location.href.indexOf('shopping.hksuning.com/cart') != -1)
      ) {
        if (
          getTargetByTAV('div', 'class', 'choose-list') !== null &&
                    typeof getTargetByTAV('div', 'class', 'choose-list') === 'object' &&
                    getTargetByTAV('div', 'class', 'choose-list').children[0].children[0]
                      .className != 'choose-item checked'
        ) {
          getTargetByTAV('div', 'class', 'choose-list').children[0].children[0].click();
        } //--- 苏宁香港
        gXd = getTargetByTAV('a', 'class', 'checkout-submit-btn cart-btn l');
      } else if (window.location.href.indexOf('meizu.com/order') != -1) {
        //--魅族
        gXd = getTargetById('submitForm');
      } else if (window.location.href.indexOf('buy.lenovo.com.cn') != -1) {
        //--联想
        gXd = getTargetByTAV('span', 'class', 'fr submitBtn');
      } else if (window.location.href.indexOf('asus.com.cn/store/checkout') != -1) {
        //--华硕
        gXd = getTargetByTAV(
          'button',
          'class',
          'btn btn-import btn-big action-submit-order ga-checkout'
        );
      } else if (window.location.href.indexOf('checkout.vip.com') != -1) {
        //--唯品会
        gXd = getTargetByTAV(
          'a',
          'class',
          'ui-btn-large ui-btn-primary ui-btn-loading J_order_submit_btn'
        );
      } else if (window.location.href.indexOf('nike.com/cn/checkout') != -1) {
        //--nike
        gXd = getTargetByTAV(
          'button',
          'class',
          'js-next-step continuePaymentBtn mod-ncss-btn ncss-btn-accent ncss-brand mod-button-width pt3-sm prl5-sm pb3-sm pt2-lg pb2-lg u-md-ib u-uppercase u-rounded fs14-sm'
        );
        if (gXd !== null && typeof gXd === 'object') {
        } else {
          gXd = getTargetByTAV(
            'a',
            'class',
            'ncss-btn-accent pt3-sm prl5-sm pb3-sm pt2-lg pb2-lg d-lg-ib d-sm-b u-rounded u-bold'
          );
        }
      } else if (window.location.href.indexOf('www.vmall.com/order/nowConfirmcart') != -1) {
        //--华为商城
        gXd = getTargetById('checkoutSubmit');
      } else if (
        window.location.href.indexOf('buy.vmall.com/submit_order.html?skuId=') != -1
      ) {
        //--华为商城activity下单页面处理
        var tMate40Pro = setInterval(function () {
          var dAddr = getTargetByTAV('div', 'class', 'defaultAddr');
          if (dAddr !== null && typeof dAddr === 'object') {
            var gXd = getTargetById('submit_order_button');
            if (gXd !== null && typeof gXd === 'object') {
              gXd.click();
              clearInterval(tMate40Pro);
            }
          }
        }, 100);
      } else if (window.location.href.indexOf('trade.xiaomiyoupin.com/tr/checkout') != -1) {
        //--小米有品
        gXd = getTargetByTAV('a', 'class', 'm-btns m-btn-middle m-btn-brown');
      } else {
        var chkdj = getTargetByTAV('label', 'class', 'pre-agree'); //处理定金协议
        if (chkdj !== null && typeof chkdj === 'object') {
          chkdj.firstElementChild.id = 'chkdj';
          $('#chkdj').trigger('click');
        }
        gXd = getTargetByTAV('a', 'class', 'go-btn');
      }
      if (gXd !== null && typeof gXd === 'object') {
        gXd.click();
        t1Cys++;
        if (jlMd == 1) {
          //这里需要设置一个捡漏标志 不用这种方法判断
          GM_setValue('goBtn', 0);
          if (
            window.location.href.indexOf('jd.com') != -1 ||
                        window.location.href.indexOf('jd.hk') != -1
          ) {
            GM_xmlhttpRequest({
              url: 'https://cart.jd.com/selectAllItem.action?t=0&outSkus=', //这里需要验证 可能会把购物车所有商品都结算
              method: 'GET',
              timeout: 10000,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              onload: function (responseDetails) {},
            });
            $('.ui-dialog').remove();
            $('.ui-mask').remove();
            $('.ui-dialog,.ui-mask').remove();
          }
        } else {
          //clearInterval(t1);
        }
      } else {
      }
    }, cyce);
  }

  window.onload = function () {
    //document.getElementById("btn-reservation").className='btn-special1 btn-lg';
    if (
      document.getElementById('fname') !== null &&
            typeof document.getElementById('fname') === 'object'
    ) {
      fm = document.getElementById('fname').src;
    }
    if ((frmId == 1) | (frmId == 2) | (frmId == 7) | (frmId == 14) | (frmId == 18)) {
      if (frmId == 1) {
        ifLj = getTargetByTAV('div', 'class', 'tb-btn-wait');
      } else if (frmId == 2) {
        ifLj = getTargetByTAV('div', 'class', 'tb-tqg');
      } else if (frmId == 7) {
        ifLj = null;
      } else if (frmId == 14) {
        ifLj = null;
      } else if (frmId == 18) {
        ifLj = null;
      }
      if (ifLj == null) {
        //var nuLj = getTargetByTAV('div','class','tb-btn-buy tb-btn-sku tb-hidden');
        //if (nuLj!=null){}else{
        $('#AiceStart').prop('lastChild').nodeValue = '优惠券';
        $('#AicePm').hide();
        ifYhq = 1;
        //}
      }
      GM_setValue('goBtn', 0);
    }
    if ((frmId == 3) | (frmId == 4)) {
      allck = getTargetById('J_SelectAll1');
      btnCart = getTargetById('J_Go');
      if (btnCart !== null && typeof btnCart === 'object') {
        btnBuy = btnCart;
      } else {
        setTimeout(function () {
          btnBuy = getTargetById('J_Go');
        }, 1000);
      }
      if (ifRef == 1 && mqMd == 1) {
        mqMode();
      }
    }
    if (frmId == 5) {
      $('#AiceStart').prop('lastChild').nodeValue = '优惠券';
      $('#AicePm').hide();
      GM_setValue('goBtn', 0);
      ifYhq = 1;
    }
    if (frmId == 6) {
      allck = getTargetByTAV('input', 'class', 'jdcheckbox');
      if (allck == null || typeof allck == 'undefined') {
        //location.replace(location.href);
        if (ifRef == 1 && mqMd == 1) {
          location.reload();
        }
      }
      btnCart = getTargetByTAV('a', 'class', 'submit-btn');
      if (btnCart !== null && typeof btnCart === 'object') {
        btnBuy = btnCart;
      } else {
        btnCart = getTargetByTAV('a', 'class', 'common-submit-btn');
        if (btnCart !== null && typeof btnCart === 'object') {
          btnBuy = btnCart;
        } else {
          setTimeout(function () {
            btnBuy = getTargetByTAV('a', 'class', 'submit-btn');
            if (btnBuy !== null && typeof btnBuy === 'object') {
            } else {
              btnBuy = getTargetByTAV('a', 'class', 'common-submit-btn');
            }
          }, 1000);
        }
      }
      if (GM_getValue('goodsId') != 0) {
        var cGoodsId = GM_getValue('goodsId');
        GM_setValue('goodsId', 0);
        GM_setValue('AutoSubOdr', 1);
        //                 var chks = document.getElementById('cart-list').getElementsByTagName('input');
        //                 for(var ii=0; ii<chks.length;ii++){
        //                     if(chks[ii].name == 'checkItem'){
        //                         if (chks[ii].checked==1){
        //                             chks[ii].click();
        //                         }
        //                     }
        //                 }
        /*
                 if (allck.checked==1){
                    allck.click();
                 }else{
                     allck.click();
                     setTimeout( function (){allck.click();document.getElementById('product_'+cGoodsId).getElementsByTagName('input')[0].click;btnBuy.click(); return}, 1000);
                 }
                 document.getElementById('product_'+cGoodsId).getElementsByTagName('input')[0].click;
                 */
        btnBuy.click();
      }

      if (ifRef == 1 && mqMd == 1) {
        mqMode();
      }
    }

    if (frmId == 8) {
      allck = getTargetById('chooseAllCheckBox');
      btnCart = getTargetByTAV('a', 'class', 'checkout cart-btn');
      if (btnCart !== null && typeof btnCart === 'object') {
        btnBuy = btnCart;
      } else {
        btnCart = getTargetByTAV('a', 'class', 'checkout'); //香港苏宁
        if (btnCart !== null && typeof btnCart === 'object') {
          btnBuy = btnCart;
        }
      }

      if (ifRef == 1 && mqMd == 1) {
        mqMode();
      }
    }

    if (frmId == 15) {
      allck = getTargetById('J_cart_list'); //唯品会没有全选 随便点一下
      btnCart = getTargetByTAV('a', 'mars_sead', 'cart_checkout_btn');
      if (btnCart !== null && typeof btnCart === 'object') {
        btnBuy = btnCart;
      } else {
        setTimeout(function () {
          btnBuy = getTargetByTAV('a', 'mars_sead', 'cart_checkout_btn');
        }, 1000);
      }
      if (ifRef == 1 && mqMd == 1) {
        mqMode();
      }
    }

    if (frmId == 16) {
      nikeBuy();
    }

    if (frmId == 22) {
      //小米有品页面特殊
      var loadXmypDIv = setInterval(function () {
        var xmypDiv = getTargetByTAV('div', 'class', 'sku-container');
        if (xmypDiv !== null && typeof xmypDiv === 'object') {
          xmypDiv.id = 'AiceDiv';
          $('#AiceDiv').append(myConSN);
          btnBuy = getTargetByTAV('a', 'class', 'm-btns m-btn-middle m-btn-gradient');
          if (btnBuy !== null && typeof btnBuy === 'object') {
          } else {
            btnBuy = getTargetByTAV(
              'a',
              'class',
              'm-btns m-btn-middle m-btn-brown-stroke'
            );
          }
          GM_setValue('cycNbr', '0');

          loadDivInit();
          if (window.location.href.indexOf('site_id=39341') == -1) {
            getYhqurl(window.location.href, '', 7, 2);
          }
          clearInterval(loadXmypDIv);
        }
      }, 100);
    }
  };

  function getStyle(element, attr) {
    if (element.currentStyle) {
      return element.currentStyle[attr];
    } else {
      return window.getComputedStyle(element, null)[attr];
    }
  }

  function dateFormat(fmt, date) {
    let ret;
    let opt = {
      'Y+': date.getFullYear().toString(), // 年
      'm+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'H+': date.getHours().toString(), // 时
      'M+': date.getMinutes().toString(), // 分
      'S+': date.getSeconds().toString(), // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };

    if (/(Y+)/.exec(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length == 1 ? opt[k] : ('00' + opt[k]).substr(('' + opt[k]).length)
        );
      }
    }

    return fmt;
  }

  function getTargetById(t_id) {
    var target = document.getElementById(t_id);
    return target;
  }

  function getTargetByTAV(t_tag, t_attr, t_value) {
    var target = document.getElementsByTagName(t_tag);
    for (var i = 0; i < target.length; i++) {
      if (target[i].getAttribute(t_attr) == t_value) {
        return target[i];
      }
    }
  }

  function trim(str) {
    str = str.replace(/(^\s*)|(\s*$)/g, '');
    return str;
  }

  //写cookies
  function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
  }

  function getCookie(name) {
    var arr,
      reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }

  function opWind(purl, pisweb, pname, phml) {
    var url = purl;
    var name = pname;
    var iWidth = 800;
    var iHeight = 450;
    var iTop = (window.screen.height - 30 - iHeight) / 2;
    var iLeft = (window.screen.width - 10 - iWidth) / 2;
    var OpenWindow = window.open(
      url,
      name,
      'height=' +
                iHeight +
                ',,innerHeight=' +
                iHeight +
                ',width=' +
                iWidth +
                ',innerWidth=' +
                iWidth +
                ',top=' +
                iTop +
                ',left=' +
                iLeft +
                ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no'
    );
    if (pisweb == 0) {
      OpenWindow.document.write(phml);
      OpenWindow.document.close();
      OpenWindow.focus();
    }
  }

  function getYhqurl(vGoods, vSjid, vfid, vmid) {
    var onLoadCk = false;
    var tfm = setInterval(function () {
      var fname = document.getElementById('fname');
      if (fname !== null && typeof fname === 'object') {
        if (onLoadCk) {
          localStorage.setItem('locUrl', window.top.location.href);
          var exurl = fname.contentWindow.postMessage(
            { goodsId: vGoods, sjid: vSjid, fmd: vfid, mid: vmid },
            '*'
          );
          clearInterval(tfm);
        }
        onLoadCk = true;
      }
    }, 100);
  }

  var strJosn = null;
  unsafeWindow.fff = (d) => {
    strJosn = d;
  };

  const mqN = 0;
  function mqMode() {
    console.log('开始盲抢');
    if (mqN >= 60) return; //避免影响用户正常使用
    var divSel = null;
    if (
      (window.location.href.indexOf('jd.com') != -1) |
            (window.location.href.indexOf('suning.com') != -1)
    ) {
      if (allck !== null && typeof allck === 'object') {
        if (allck.checked == 0) {
          allck.click();
        }
      } else {
        mqN++;
        mqMode();
        return;
      }
    } else {
      divSel = getTargetByTAV('div', 'class', 'select-all J_SelectAll');

      if (allck !== null && typeof allck === 'object') {
        if (divSel !== null && typeof divSel === 'object') {
          allck.click();
        } else {
          mqN++;
          mqMode();
          return;
        }
      } else {
        mqN++;
        mqMode();
        return;
      }
    }

    $('#AiceStart').prop('lastChild').nodeValue = '等待抢购';

    window.setTimeout(function () {
      if (btnBuy !== null && typeof btnBuy === 'object') {
        btnBuy.click();
      } else {
      }
    }, 500);
  }

  function nikeBuy() {
    var nkDiv = getTargetById('floating-atc-wrapper');
    if (nkDiv !== null && typeof nkDiv === 'object') {
    } else {
      nkDiv = getTargetByTAV('div', 'class', 'mt8-lg');
      if (nkDiv !== null && typeof nkDiv === 'object') {
      } else {
        nkDiv = getTargetByTAV('div', 'class', 'ncss-col-sm-12');
      }
    }
    nkDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConNike);
    btnBuy = getTargetByTAV(
      'button',
      'class',
      'ncss-btn-primary-dark btn-lg css-y0myut add-to-cart-btn'
    );
    GM_setValue('goBtn', 0);
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    if (chk != null) {
      if (chk == 0) {
        document.getElementById('AiceOsm').checked = false;
      } else {
        document.getElementById('AiceOsm').checked = true;
      }
    }

    bwtime = document.getElementById('AiceBeforeTime').value;

    var js = document.getElementById('AiceStartTime');
    js.value = dateFormat('YYYY-mm-dd HH:MM:SS', cDt);

    var tj = document.getElementById('AiceStart');
    tj.addEventListener('click', function () {
      gtime = document.getElementById('AiceStartTime').value;
      gtime = gtime.substring(0, 19);
      gtime = gtime.replace(/-/g, '/');
      var timestamp1 = new Date(gtime).getTime();
      setCookie('ft_qgd', timestamp1);
      if (gostart == 0) {
        gostart = 1;
        ifRef = 0;
        GM_setValue('Acyce', document.getElementById('AiceCyce').value);
        GM_setValue('goBtn', 1);
        GM_setValue('goCart', 1);
        $('#AiceStart').prop('lastChild').nodeValue = '正在倒计时';
      } else {
        gostart = 0;
        GM_setValue('goBtn', 0);
        GM_setValue('goCart', 0);
        $('#AiceStart').prop('lastChild').nodeValue = '开始倒计时';
      }

      var SycTimeChk = document.getElementById('AiceSycTime');
      if (SycTimeChk.checked == 0) {
        syncLocTime();
      } else {
        syncTime();
      }
    });

    var AutoOsm = document.getElementById('AiceOsm');
    AutoOsm.addEventListener('click', function () {
      GM_setValue('AutoSubOdr', AutoOsm.checked ? 1 : 0);
      AutoOsm.checked ? (chk = 1) : (chk = 0);
    });
  }

  function xmypBuy() {
    var nkDiv = getTargetById('floating-atc-wrapper');
    if (nkDiv !== null && typeof nkDiv === 'object') {
    } else {
      nkDiv = getTargetByTAV('div', 'class', 'mt8-lg');
    }
    nkDiv.id = 'AiceDiv';
    $('#AiceDiv').append(myConNike);
    btnBuy = getTargetByTAV(
      'button',
      'class',
      'ncss-btn-primary-dark btn-lg css-y0myut add-to-cart-btn'
    );
    GM_setValue('goBtn', 0);
    buyTop = 1;
    buyPl = 500;
    mqMd = 0;
    if (chk != null) {
      if (chk == 0) {
        document.getElementById('AiceOsm').checked = false;
      } else {
        document.getElementById('AiceOsm').checked = true;
      }
    }

    bwtime = document.getElementById('AiceBeforeTime').value;

    var js = document.getElementById('AiceStartTime');
    js.value = dateFormat('YYYY-mm-dd HH:MM:SS', cDt);

    var tj = document.getElementById('AiceStart');
    tj.addEventListener('click', function () {
      gtime = document.getElementById('AiceStartTime').value;
      gtime = gtime.substring(0, 19);
      gtime = gtime.replace(/-/g, '/');
      var timestamp1 = new Date(gtime).getTime();
      setCookie('ft_qgd', timestamp1);
      if (gostart == 0) {
        gostart = 1;
        ifRef = 0;
        GM_setValue('Acyce', document.getElementById('AiceCyce').value);
        GM_setValue('goBtn', 1);
        GM_setValue('goCart', 1);
        $('#AiceStart').prop('lastChild').nodeValue = '正在倒计时';
      } else {
        gostart = 0;
        GM_setValue('goBtn', 0);
        GM_setValue('goCart', 0);
        $('#AiceStart').prop('lastChild').nodeValue = '开始倒计时';
      }

      var SycTimeChk = document.getElementById('AiceSycTime');
      if (SycTimeChk.checked == 0) {
        syncLocTime();
      } else {
        syncTime();
      }
    });

    var AutoOsm = document.getElementById('AiceOsm');
    AutoOsm.addEventListener('click', function () {
      GM_setValue('AutoSubOdr', AutoOsm.checked ? 1 : 0);
      AutoOsm.checked ? (chk = 1) : (chk = 0);
    });
  }

  //https://api.uukit.com/time
  var timeFlg = 0;
  if ((frmId == 1) | (frmId == 2) | (frmId == 3) | (frmId == 4) | (frmId == 10)) {
    timeFlg = 1;
    timeUrl = 'https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp';
  } else if ((frmId == 5) | (frmId == 6) || frmId == 9) {
    timeFlg = 2;
    //timeUrl=`https://a.jd.com//ajax/queryServerData.html`;
    timeUrl = 'http://api.pinduoduo.com/api/server/_stm';
  } else if ((frmId == 7) | (frmId == 8)) {
    timeFlg = 3;
    timeUrl = 'https://quan.suning.com/getSysTime.do';
  } else if (frmId == 999999999) {
    timeFlg = 4;
    timeUrl =
            'https://sapi.k780.com/?app=life.time&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json';
  } else if (frmId == 18) {
    timeFlg = 5;
    timeUrl = 'https://buy.vmall.com/getSkuRushbuyInfo.json';
  } else if (frmId == 22) {
    timeFlg = 6;
    timeUrl = 'https://tp.hd.mi.com/gettimestamp';
  } else {
    timeFlg = 0;
    timeUrl = 'https://t.alicdn.com/t/gettime?callback=fff';
  }

  function syncLocTime() {
    if (gostart == 0) return;
    var timestamp = getCookie('ft_qgd');
    d8 = new Date();
    d8.setTime(timestamp); //读取抢拍时间
    var curtime = new Date().getTime();

    var sd = new Date();
    sd = curtime;

    var ttx = d8 - sd;
    if (ttx < 0) {
      //已过1
      alert('时间已过');
      if (ttx > -2000) {
        //避免重复刷页面
        location.reload();
      }
    } else if (ttx > 60 * 1000 * 2) {
      //2分钟才同步
      console.log('距离抢购还有一段时间');
      setTimeout(() => {
        syncLocTime();
      }, 30 * 1000); //10*1000 改为30S 避免太频繁导致服务器卡顿
    } else if (ttx > 0) {
      if (ttx <= mqBfTim * 1000 * 1 && mqMd == 1) {
        if (ifRef == 0) {
          GM_setValue('ref', 1);
          location.reload();
        }
      }

      $('#AiceStart').prop('lastChild').nodeValue =
                '正在倒计时（' + parseInt(ttx / 1000) + 'S）';
      if (d8 - sd <= 2000) {
        console.log('等待抢购');
        $('#AiceStart').prop('lastChild').nodeValue = '等待抢购';
        window.setTimeout(function () {
          var buyCyce = 0; //当前页面提交次数 避免多次提交
          var t3 = setInterval(() => {
            console.log('xxxxx' + btnBuy);
            if (buyCyce >= buyTop) {
              $('#AiceStart').prop('lastChild').nodeValue = '开始倒计时';
              clearInterval(t3);
              return;
            }
            if (btnBuy !== null && typeof btnBuy === 'object') {
              if (
                btnBuy.style.display != null &&
                                typeof btnBuy.style.display === 'object' &&
                                btnBuy.style.display == 'none'
              ) {
              } else {
                btnBuy.click();
                if (frmId == 16) {
                  window.setTimeout(function () {
                    location.replace('https://www.nike.com/cn/zh-Hans/cart'); //nike不直接调整购物车 需要多执行一步
                  }, 2000);
                }
                buyCyce++;
              }
            } else {
              if (frmId == 5) {
                if (
                  getTargetById('InitCartUrl') !== null &&
                                    typeof getTargetById('InitCartUrl') === 'object'
                ) {
                  btnBuy = document.getElementById('InitCartUrl');
                } else {
                  if (buyCyce >= 8) {
                    clearInterval(t3);
                    location.replace(
                      'https://cart.jd.com/gate.action?pid=' +
                                                goodsId +
                                                '&pcount=' +
                                                GM_getValue('goodsNum') +
                                                '&ptype=1'
                    );
                  }
                }
                buyCyce++;
              }
            }
          }, buyPl);
        }, d8 - sd - bwtime);
      } else {
        setTimeout(() => {
          syncLocTime();
        }, 200);
      }
    }
  }

  function syncTime() {
    if (gostart == 0) return;
    var timestamp = getCookie('ft_qgd');
    d8 = new Date();
    d8.setTime(timestamp); //读取抢拍时间
    starttime = new Date().getTime();

    var curtime = new Date().getTime();
    var sld = new Date();
    sld = curtime;
    var tld = d8 - sld;
    if (tld <= 60 * 1000 * 5) {
      //5分钟才同步
      GM_xmlhttpRequest({
        //url: "https://t.alicdn.com/t/gettime?callback=fff",
        url: timeUrl,
        method: 'GET',
        timeout: 10000,
        headers: {
          // 'Content-Type': 'application/jsonp',
          // 'Accept': 'application/jsonp',
          // 'Cache-Control': 'public'
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        onload: function (responseDetails) {
          //console.log(responseDetails.finalUrl);
          if (responseDetails.status == 200) {
            //console.log(responseDetails.responseText);
            //eval( responseDetails.responseText);
            var result = null;
            if (timeFlg == 6) {
              result = responseDetails.responseText.replace('var servertime=', '');
            } else {
              var strJosn = JSON.parse(
                responseDetails.responseText.replace('fff(', '').replace(')', '')
              );
              //console.log(strJosn);
              result = strJosn;
            }
            endtime = new Date().getTime();
            //服务器时间
            var sd = new Date();
            //sd.setTime(result.time * 1000); //10位时间戳
            //sd.setTime(result.data.t); //13位时间戳 不需要*1000
            if (timeFlg == 1) {
              sd.setTime(result.data.t);
            } else if (timeFlg == 2) {
              //sd.setTime(result.serverTime);//原京东接口无法使用
              sd.setTime(result.server_time);
            } else if (timeFlg == 3) {
              sd = new Date(result.sysTime2);
            } else if (timeFlg == 4) {
              sd.setTime(result.result.timestamp * 1000);
            } else if (timeFlg == 5) {
              sd.setTime(result.currentTime);
            } else if (timeFlg == 6) {
              sd.setTime(result * 1000);
            } else {
              sd.setTime(result.time * 1000); //10位时间戳
            }
            var ttx = d8 - sd;
            if (ttx < 0) {
              //已过1
              alert('时间已过');
              if (ttx > -2000) {
                //避免重复刷页面
                //location.replace(location.href);
                location.reload();
              }
            } else if (ttx > 60 * 1000 * 2) {
              //2分钟才同步
              console.log('距离抢购还有一段时间');
              setTimeout(() => {
                //location.replace(location.href);
                syncTime();
              }, 30 * 1000); //10*1000 改为30S 避免太频繁导致服务器卡顿
            } else if (ttx > 0) {
              if (ttx <= mqBfTim * 1000 * 1 && mqMd == 1) {
                if (ifRef == 0) {
                  GM_setValue('ref', 1);
                  //location.replace(location.href);
                  location.reload();
                }
              }

              $('#AiceStart').prop('lastChild').nodeValue =
                                '正在倒计时（' + parseInt(ttx / 1000) + 'S）';
              if (initsdtime_int == 0) {
                //initsdtime_int = parseInt(result.data.t/1000)//parseInt(result.time);
                if (timeFlg == 1) {
                  initsdtime_int = parseInt(result.data.t / 1000);
                } else if (timeFlg == 2) {
                  //initsdtime_int = parseInt(result.serverTime);
                  initsdtime_int = parseInt(result.server_time);
                } else if (timeFlg == 3) {
                  var snTime = result.sysTime2.substring(0, 19);
                  snTime = snTime.replace(/-/g, '/');
                  initsdtime_int = parseInt(new Date(snTime).getTime());
                } else if (timeFlg == 4) {
                  initsdtime_int = parseInt(result.result.timestamp);
                } else if (timeFlg == 5) {
                  initsdtime_int = parseInt(result.currentTime);
                } else if (timeFlg == 6) {
                  initsdtime_int = parseInt(result);
                } else {
                  initsdtime_int = parseInt(result.time);
                }
              }
              if (d8 - sd <= 2000) {
                console.log('等待抢购');
                $('#AiceStart').prop('lastChild').nodeValue = '等待抢购';
                window.setTimeout(function () {
                  var buyCyce = 0; //当前页面提交次数 避免多次提交
                  // if(frmId==1 || frmId==2 || frmId==7){
                  //     buyTop=10;
                  // }else{
                  //     buyTop=1;
                  // }
                  var t3 = setInterval(() => {
                    console.log('xxxxx' + btnBuy);
                    if (buyCyce >= buyTop) {
                      $('#AiceStart').prop('lastChild').nodeValue =
                                                '开始倒计时';
                      clearInterval(t3);
                      return;
                    }
                    if (btnBuy !== null && typeof btnBuy === 'object') {
                      if (
                        btnBuy.style.display != null &&
                                                typeof btnBuy.style.display === 'object' &&
                                                btnBuy.style.display == 'none'
                      ) {
                      } else {
                        btnBuy.click();
                        if (frmId == 16) {
                          window.setTimeout(function () {
                            location.replace(
                              'https://www.nike.com/cn/zh-Hans/cart'
                            ); //nike不直接调整购物车 需要多执行一步
                          }, 2000);
                        }
                        buyCyce++;
                      }
                    } else {
                      if (frmId == 5) {
                        if (
                          getTargetById('InitCartUrl') !== null &&
                                                    typeof getTargetById('InitCartUrl') === 'object'
                        ) {
                          btnBuy = document.getElementById('InitCartUrl');
                        } else {
                          if (buyCyce >= 8) {
                            clearInterval(t3);
                            location.replace(
                              'https://cart.jd.com/gate.action?pid=' +
                                                                goodsId +
                                                                '&pcount=' +
                                                                GM_getValue('goodsNum') +
                                                                '&ptype=1'
                            );
                          }
                        }
                        buyCyce++;
                      }
                    }
                  }, buyPl);
                }, d8 - sd - bwtime);
              } else {
                setTimeout(() => {
                  syncTime();
                }, 200);
              }
            }
          }
        },
      });
    } else {
      //按本地时间执行
      setTimeout(() => {
        syncTime();
      }, 1000);
    }
  }
})();
