type OpenEnterpriseChatParams = WxFnCommonParams & {
  // 注意：userIds和externalUserIds至少选填一个。内部群最多2000人；外部群最多500人；如果有微信联系人，最多40人
  userIds: string; //参与会话的企业成员列表，格式为userid1;userid2;...，用分号隔开。
  externalUserIds: string; // 参与会话的外部联系人列表，格式为userId1;userId2;…，用分号隔开。
  groupName: string; // 会话名称。单聊时该参数传入空字符串""即可。
  chatId: string; // 若要打开已有会话，需指定此参数。如果是新建会话，chatId必须为空串
  success?: WxInvokeCallback<{ chatId: string }>;
};

type UpdateEnterpriseChatParams = {
  chatId: string; // 通过企业微信创建群聊接口返回的chatId
  userIdsToAdd: string; // 参与会话的企业成员列表，格式为userid1;userid2;...，用分号隔开。
};

type HideChatAttachmentMenuParams = {
  menuList: string[]; // 要隐藏的菜单项,sendMessage。即附件栏底部发送按钮。
};

// 分享消息到当前会话
// 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94354
interface SendChatMessageCommonParams {
  enterChat: boolean; // 为true时表示发送完成之后顺便进入会话，仅移动端3.1.10及以上版本支持该字段
}

type SendChatMessageParams =
  | (TextMessage & SendChatMessageCommonParams)
  | (ImageMessage & SendChatMessageCommonParams)
  | (VideoMessage & SendChatMessageCommonParams)
  | (FileMessage & SendChatMessageCommonParams)
  | (NewsMessage & SendChatMessageCommonParams)
  | (MiniProgramMessage & SendChatMessageCommonParams);

type CreateChatWithMsgParams = {
  selectedOpenUserIds?: string[];
  selectedTickets?: string[];
  chatName?: string;
  msg: LinkMessage;
};

type CreateChatWithMsgRes = {
  chatId: string; // 新建的会话ID，当会话为单聊时不返回此字段
};

type OpenExistedChatWithMsgParams = {
  chatId: string;
  msg?: LinkMessage;
};

type SetShareAttrParams = {
  withShareTicket?: boolean;
  state?: string;
};

type GetShareInfoParams = {
  shareTicket: string;
};

type GetShareInfoRes = {
  encryptedData: string; // 转发信息的加密数据
  iv: string; //	加密算法的初始向量
};

type CreateCorpGroupChatParams = {
  groupName: string; // 必填，会话名称。单聊时该参数传入空字符串""即可。
  userIds?: string[]; //参与会话的企业成员列表，仅自建应用使用，第三方应用会忽略该字段
  openUserIds?: string[]; // 参与会话的企业成员列表，仅第三方应用使用，自建应用会忽略该字段
  corpGroupUserIds?: CorpGroupUserId[]; // 非必填， 参与会话的互联企业成员列表
};

type UpdateCorpGroupChatParams = {
  chatId: string; //通过企业微信创建群聊接口返回的chatId
  userIdsToAdd?: string[]; //新增的企业成员列表，仅自建应用使用，第三方应用会忽略该字段
  openUserIdsToAdd?: string[]; // 新增的企业成员列表，仅第三方应用使用，自建应用会忽略该字段
  corpGroupUserIdsToAdd?: CorpGroupUserId[]; // 非必填， 参与会话的互联企业成员列表
};

// 分享内容
interface ShareContent {
  title: string; // 分享标题
  desc: string; // 分享描述
  link: string; // 分享链接
  imgUrl: string; // 分享封面
}

type ShareAppMessageParams = ShareContent;
type ShareWechatMessageParams = ShareContent;
