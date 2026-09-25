/* Caelus Studio 商店 多语言切换：简体中文 / 繁體中文 / English */
(function () {
  var DICT = {
    'Caelus Studio 商店': ['Caelus Studio 商店', 'Caelus Studio 商店', 'Caelus Studio Shop'],
    'Caelus Studio 钥匙扣 - Caelus Studio 商店': ['Caelus Studio 钥匙扣 - Caelus Studio 商店', 'Caelus Studio 鑰匙扣 - Caelus Studio 商店', 'Caelus Studio Keychain - Caelus Studio Shop'],
    '✦ 官方周边商店': ['✦ 官方周边商店', '✦ 官方周邊商店', '✦ Official Merch Store'],
    '把热爱挂在身上。': ['把热爱挂在身上。', '把熱愛掛在身上。', 'Wear your passion.'],
    '搜索商品…': ['搜索商品…', '搜尋商品…', 'Search products…'],
    '没有找到相关商品。': ['没有找到相关商品。', '沒有找到相關商品。', 'No matching products.'],
    '全部商品': ['全部商品', '全部商品', 'All products'],
    'Caelus Studio 钥匙扣': ['Caelus Studio 钥匙扣', 'Caelus Studio 鑰匙扣', 'Caelus Studio Keychain'],
    '透明亚克力精工切割，Caelus Studio Logo 细节清晰，适合挂在钥匙串、书包或工作包上。': ['透明亚克力精工切割，Caelus Studio Logo 细节清晰，适合挂在钥匙串、书包或工作包上。', '透明壓克力精工切割，Caelus Studio Logo 細節清晰，適合掛在鑰匙圈、書包或工作包上。', 'Precision-cut transparent acrylic with a crisp Caelus Studio logo — perfect for your keyring, backpack or work bag.'],
    'Caelus Studio 官方钥匙扣，透明亚克力精工切割，适合挂在钥匙串、书包或工作包上。': ['Caelus Studio 官方钥匙扣，透明亚克力精工切割，适合挂在钥匙串、书包或工作包上。', 'Caelus Studio 官方鑰匙扣，透明壓克力精工切割，適合掛在鑰匙圈、書包或工作包上。', 'The official Caelus Studio keychain — precision-cut transparent acrylic, perfect for your keyring, backpack or work bag.'],
    '￥9.9/个': ['￥9.9/个', '￥9.9/個', '￥9.9 each'],
    '查看详情 →': ['查看详情 →', '查看詳情 →', 'View details →'],
    'Caelus Studio 吧唧': ['Caelus Studio 吧唧', 'Caelus Studio 吧唧', 'Caelus Studio Badge'],
    '高清印刷覆膜徽章，色彩饱满不易褪色，可别在包袋、衣领或帽檐上，也适合收进收纳盒慢慢收藏。': ['高清印刷覆膜徽章，色彩饱满不易褪色，可别在包袋、衣领或帽檐上，也适合收进收纳盒慢慢收藏。', '高清印刷覆膜徽章，色彩飽滿不易褪色，可別在包袋、衣領或帽簷上，也適合收進收納盒慢慢收藏。', 'High-definition laminated badge printing — rich, fade-resistant colours. Pin it to your bag, collar or hat brim, or keep it in a case as part of your collection.'],
    '敬请期待': ['敬请期待', '敬請期待', 'Coming soon'],
    '尚未发售': ['尚未发售', '尚未發售', 'Not yet on sale'],
    '预计12月30日开始发售': ['预计12月30日开始发售', '預計12月30日開始發售', 'Expected on sale Dec 30'],
    '赞助': ['赞助', '贊助', 'Sponsor'],
    '支持我们。': ['支持我们。', '支持我們。', 'Support us.'],
    '激励 Caelus Studio': ['激励 Caelus Studio', '激勵 Caelus Studio', 'Back Caelus Studio'],
    '喜欢我们的作品？你的每一份支持都是我们持续创作的动力。': ['喜欢我们的作品？你的每一份支持都是我们持续创作的动力。', '喜歡我們的作品？你的每一份支持都是我們持續創作的動力。', 'Enjoy our work? Every bit of your support fuels what we create next.'],
    '支持 Caelus Studio 的持续维护与更新。': ['支持 Caelus Studio 的持续维护与更新。', '支持 Caelus Studio 的持續維護與更新。', 'Support the ongoing maintenance and updates of Caelus Studio.'],
    'Caelus Studio 赞助': ['Caelus Studio 赞助', 'Caelus Studio 贊助', 'Sponsor Caelus Studio'],
    '立即购买': ['立即购买', '立即購買', 'Buy now'],
    '主站': ['主站', '主站', 'Main site'],
    '联系': ['联系', '聯絡', 'Contact'],
    '本站': ['本站', '本站', 'This site'],
    '商店': ['商店', '商店', 'Shop'],
    '导航': ['导航', '導覽', 'Nav'],
    '新闻中心': ['新闻中心', '新聞中心', 'News'],
    'Caelus Studio 首页': ['Caelus Studio 首页', 'Caelus Studio 首頁', 'Caelus Studio Home'],
    '← 返回商店': ['← 返回商店', '← 返回商店', '← Back to shop'],
    '返回商店': ['返回商店', '返回商店', 'Back to shop'],
    '订购': ['订购', '訂購', 'Order'],
    '填写收货信息。': ['填写收货信息。', '填寫收貨資訊。', 'Fill in your delivery details.'],
    '收件人': ['收件人', '收件人', 'Recipient'],
    '联系电话': ['联系电话', '聯絡電話', 'Phone'],
    '电子邮箱': ['电子邮箱', '電子郵箱', 'Email'],
    '收货地址': ['收货地址', '收貨地址', 'Delivery address'],
    'QQ 号': ['QQ 号', 'QQ 號', 'QQ number'],
    '数量': ['数量', '數量', 'Quantity'],
    '备注': ['备注', '備註', 'Note'],
    '提交订单': ['提交订单', '提交訂單', 'Place order'],
    '填写收货信息即可预订，发货前另行确认': ['填写收货信息即可预订，发货前另行确认', '填寫收貨資訊即可預訂，發貨前另行確認', 'Reserve by filling in your delivery details; we will confirm before shipping'],
    '数量有限，先到先得': ['数量有限，先到先得', '數量有限，先到先得', 'Limited stock, first come first served'],
    '元': ['元', '元', 'CNY'],
    '/个': ['/个', '/個', ' / pc'],
    '我们将在 15 个工作日内联系你并发货。购买即代表你同意': ['我们将在 15 个工作日内联系你并发货。购买即代表你同意', '我們將在 15 個工作天內聯絡你並發貨。購買即代表你同意', 'We will contact you and ship within 15 business days. By purchasing you agree to '],
    '《Caelus Studio 周边产品发放及购买协议》及相关协议和政策': ['《Caelus Studio 周边产品发放及购买协议》及相关协议和政策', '《Caelus Studio 週邊產品發放及購買協議》及相關協議和政策', 'the Caelus Studio Merchandise Fulfillment & Purchase Agreement and related policies'],
    '姓名': ['姓名', '姓名', 'Full name'],
    '手机号或固定电话': ['手机号或固定电话', '手機號或固定電話', 'Phone number'],
    '5-12 位 QQ 号': ['5-12 位 QQ 号', '5-12 位 QQ 號', '5-12 digit QQ number'],
    '省 / 市 / 区 + 详细地址': ['省 / 市 / 区 + 详细地址', '省 / 市 / 區 + 詳細地址', 'Province / City / District + Address'],
    '选填': ['选填', '選填', 'Optional'],
    '网页由人工智能辅助生成': ['网页由人工智能辅助生成', '網頁由人工智慧輔助生成', 'This website was created with AI assistance'],
    '扫码支付': ['扫码支付', '掃碼支付', 'Scan to pay'],
    '支付宝': ['支付宝', '支付寶', 'Alipay'],
    '微信支付': ['微信支付', '微信支付', 'WeChat Pay'],
    '转账时请在备注里填写你的称呼，便于核对': ['转账时请在备注里填写你的称呼，便于核对', '轉帳時請在備註裡填寫你的稱呼，便於核對', 'Please include your name in the transfer note so we can match your order.'],
    '付款完成后点击下方按钮填写收货信息': ['付款完成后点击下方按钮填写收货信息', '付款完成後點擊下方按鈕填寫收貨資訊', 'After paying, tap the button below to fill in your shipping details.'],
    '我已支付': ['我已支付', '我已付款', 'I have paid'],
    '遇到问题？联系我们 hi@caelus.top': ['遇到问题？联系我们 hi@caelus.top', '遇到問題？聯絡我們 hi@caelus.top', 'Questions? Contact us at hi@caelus.top'],
    '填写订单信息': ['填写订单信息', '填寫訂單資訊', 'Order details'],
    '称呼': ['称呼', '稱呼', 'Name'],
    '怎么称呼你': ['怎么称呼你', '怎麼稱呼你', 'Your name'],
    '联系方式': ['联系方式', '聯絡方式', 'Contact'],
    '微信号 / QQ / 手机号': ['微信号 / QQ / 手机号', '微信號 / QQ / 手機號', 'WeChat / QQ / phone'],
    '数量': ['数量', '數量', 'Quantity'],
    '1 个': ['1 个', '1 個', '1 pc'],
    '2 个': ['2 个', '2 個', '2 pcs'],
    '3 个': ['3 个', '3 個', '3 pcs'],
    '4 个': ['4 个', '4 個', '4 pcs'],
    '5 个': ['5 个', '5 個', '5 pcs'],
    '收货地址': ['收货地址', '收貨地址', 'Shipping address'],
    '省市区 + 详细地址': ['省市区 + 详细地址', '省市區 + 詳細地址', 'Region + street address'],
    '留言（选填）': ['留言（选填）', '留言（選填）', 'Note (optional)'],
    '想对我们说的话': ['想对我们说的话', '想對我們說的話', 'Anything you want to tell us'],
    '应付总额：': ['应付总额：', '應付總額：', 'Total: '],
    '提交订单': ['提交订单', '提交訂單', 'Submit order'],
    '← 返回付款': ['← 返回付款', '← 返回付款', '← Back to payment'],
    '谢谢': ['谢谢', '謝謝', 'Thank you'],
    '我们将在 15 个工作日内核实，并按照你提供的联系方式与你联系。': ['我们将在 15 个工作日内核实，并按照你提供的联系方式与你联系。', '我們將在 15 個工作日內核實，並按照你提供的聯絡方式與你聯絡。', 'We will verify your payment within 15 business days and reach you via the contact details you provided.'],
    '关闭': ['关闭', '關閉', 'Close'],
    '请填写称呼、联系方式和收货地址。': ['请填写称呼、联系方式和收货地址。', '請填寫稱呼、聯絡方式和收貨地址。', 'Please fill in your name, contact and shipping address.'],
    '提交失败，请检查网络后重试。': ['提交失败，请检查网络后重试。', '提交失敗，請檢查網絡後重試。', 'Submission failed — please check your network and retry.'],
  };

  var LABEL = { 'zh-CN': '简', 'zh-TW': '繁', 'en': 'EN' };
  var HTMLLANG = { 'zh-CN': 'zh-CN', 'zh-TW': 'zh-Hant', 'en': 'en' };

  function cur() { try { return localStorage.getItem('caelus_lang') || 'zh-CN'; } catch (e) { return 'zh-CN'; } }
  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  var IDX = { 'zh-CN': 0, 'zh-TW': 1, 'en': 2 };
  function tr(s) { var e = DICT[norm(s)]; if (!e) return null; var v = e[IDX[cur()]]; return v === undefined ? null : v; }

  var obs = null;
  var ORIG_N = new WeakMap(), ORIG_P = new WeakMap(), ORIG_T = null;
  function apply() {
    if (obs) obs.disconnect();
    try {
      if (!document.body) return;
      var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: function (node) { var p = node.parentNode; return (p && (p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } }), n, nodes = [];
      while ((n = w.nextNode())) nodes.push(n);
      for (var i = 0; i < nodes.length; i++) {
        if (!ORIG_N.has(nodes[i])) ORIG_N.set(nodes[i], norm(nodes[i].nodeValue));
        var key = ORIG_N.get(nodes[i]);
        if (!key) continue;
        var t = tr(key);
        if (t !== null && t !== nodes[i].nodeValue) nodes[i].nodeValue = t;
      }
      var els = document.querySelectorAll('input[placeholder], textarea[placeholder]');
      for (var j = 0; j < els.length; j++) {
        if (!ORIG_P.has(els[j])) ORIG_P.set(els[j], norm(els[j].getAttribute('placeholder')));
        var tp = tr(ORIG_P.get(els[j]));
        if (tp !== null) els[j].setAttribute('placeholder', tp);
      }
      if (ORIG_T === null) ORIG_T = document.title;
      var tt = tr(ORIG_T);
      if (tt !== null) document.title = tt;
      document.documentElement.setAttribute('lang', HTMLLANG[cur()]);
      var btn = document.getElementById('langToggle');
      if (btn) btn.textContent = LABEL[cur()];
    } finally {
      if (obs) obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  }

  function inject() {
    if (document.getElementById('langToggle')) return;
    var mount = document.querySelector('.nav-right') || document.querySelector('.site-nav') || document.body;
    var btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.className = 'theme-toggle lang-toggle';
    btn.type = 'button';
    btn.title = '简 / 繁 / EN';
    btn.textContent = LABEL[cur()];
    var tt = document.getElementById('themeToggle');
    if (tt && tt.parentNode === mount) mount.insertBefore(btn, tt); else mount.appendChild(btn);
    btn.addEventListener('click', function () {
      var order = ['zh-CN', 'zh-TW', 'en'];
      setLang(order[(order.indexOf(cur()) + 1) % 3]);
      apply();
    });
  }

  function setLang(l) { try { localStorage.setItem('caelus_lang', l); } catch (e) {} }

  var style = document.createElement('style');
  style.textContent = '.lang-toggle{font-size:12px;font-weight:600;line-height:1;display:flex;align-items:center;justify-content:center;letter-spacing:.02em;}';
  document.head.appendChild(style);

  inject();
  apply();
  obs = new MutationObserver(function () { clearTimeout(apply._t); apply._t = setTimeout(apply, 120); });
  obs.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
