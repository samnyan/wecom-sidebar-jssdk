type OnMenuShareAppMessageParams = WxFnCommonParams & ShareContent & {
  success?: () => void; // 用户确认分享后执行的回调函数
  cancel?: () => void; // 用户取消分享后执行的回调函数
};

type OnMenuShareWechat = WxFnCommonParams & ShareContent & {
  success?: () => void; // 用户确认分享后执行的回调函数
  cancel?: () => void; // 用户取消分享后执行的回调函数
};

type onMenuShareTimeline = WxFnCommonParams & Omit<ShareContent, 'desc'> & {
  success?: () => void; // 用户确认分享后执行的回调函数
  cancel?: () => void; // 用户取消分享后执行的回调函数
};

// 批量隐藏功能按钮接口
type MenuItem =
  'menuItem:setFont'
  | 'menuItem:refresh'
  | 'menuItem:share:appMessage'
  | 'menuItem:share:wechat'
  | 'menuItem:favorite'
  | 'menuItem:copyUrl'
  | 'menuItem:openWithSafari'
  | 'menuItem:share:email'

type HideMenuItemsParams = {
  menuList: MenuItem[]; // 要隐藏的菜单项
}

type ShowMenuItemParams = {
  menuList: MenuItem[] // 要显示的菜单项
}

type ScanQRCodeParams = WxFnCommonParams & {
  desc: string,
  needResult: 0 | 1, // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
  scanType: string[], // 可以指定扫二维码还是条形码（一维码），默认二者都有
}

type ChooseInvoiceParams = {
  timestamp: string, // 卡券签名时间戳
  nonceStr: string, // 卡券签名随机串
  signType: string, // 签名方式，默认 'SHA1'
  cardSign: string, // 卡券签名
}

type ChooseInvoiceRes = {
  choose_invoice_info: {
    card_id: string;
    encrypt_code: string;
    app_id: string;
  }
}

type LaunchMiniprogramParams = {
  appid: string, // 需跳转的小程序appid
  path?: string, // 所需跳转的小程序内页面路径及参数。非必填
}

type OpenDefaultBrowserParams = {
  url: string; // 在默认浏览器打开redirect_uri，并附加code参数；也可以直接指定要打开的url，此时不会附带上code参数。
}