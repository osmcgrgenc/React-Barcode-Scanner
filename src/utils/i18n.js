'use strict';

import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    name: 'Portakal Sudoku',
    continue: 'Continue ',
    restart: 'Restart  ',
    newgame: 'New Game ',
    weekrank: 'Week Rank',
    norecord: 'No records yet',
    onlinerank: 'Online Rank',
    rank: 'You are at %{rank}',

    ok: 'Got it',
    congrats: 'Congrats',
    nosolve: 'No solve after this move',
    success: 'You solve this game in\n',
    fail: 'You lose this game for more then 3 wrong moves',
    errormove: 'Wrong move for %{error} times, you will lose for more than 3 times',
    newrecord: 'New record! You solve this game in\n',

    uploadrecord: 'Send you record to the server?',
    uploadmessage: 'You have to upload your record to view the online rank',
    reject: 'Reject',
    grant: 'Grant',
    loading: 'loading……',
    error: 'Error',
    uplaoderror: 'Upload failed',
    queryerror: 'Query failed',

    share: 'Share',
    sharemessage: 'Portakal Sudoku - for pure sudoku pleasure',
    sharefailed: 'Share faild',

    rate: 'Rate this app',
    ratemessage: 'I developed this app for fun, your rate is my great hornor',
    cancel: 'Cancel',
    confirm: 'Confrim',
  },
  tr: {
    name: 'Portakal Sudoku',
    continue: 'Devam ',
    restart: 'Tekrar  ',
    newgame: 'Yeni Oyun ',
    weekrank: 'Haftalık Sıralama',
    norecord: 'Kayıt yok',
    onlinerank: 'Online Sıralama',
    rank: 'Süreniz %{rank}',

    ok: 'Tamam',
    congrats: 'Tebrikler',
    nosolve: 'Son hareket',
    success: 'Başardınız\n',
    fail: '3 yanlış hamle hakkını doldurunuz',
    errormove: '%{error} kez yanlış hamle, 3 yanlış hareket başını yakar',
    newrecord: 'Yeni rekor\n',

    uploadrecord: 'Henüz rekoru kaydedemiyoruz',
    uploadmessage: 'Online sıralama henüz hazır değil',
    reject: 'Reddet',
    grant: 'Grant',
    loading: 'yükleniyor..',
    error: 'Hata',
    uplaoderror: 'Yükleme hatası',
    queryerror: 'İşlem hatası',

    share: 'Paylaş',
    sharemessage: 'Portakal Sudoku',
    sharefailed: 'Paylaşım hatası',

    rate: 'Uygulamayı oyla',
    ratemessage: 'Oylayın, durumu bilelim geliştirelim.',
    cancel: 'İptal',
    confirm: 'Kabul',
  },
  zh: {
    name: '数独大师',
    continue: '继续游戏',
    restart: '重新开始',
    newgame: '新的游戏',
    weekrank: '本周排行',
    norecord: '还没有任何记录',
    onlinerank: '在线排行',
    rank: '您位于第 %{rank} 名',

    ok: '知道了',
    congrats: '恭喜您',
    nosolve: '这一步之后将无解',
    success: '成功解决本题\n用时 ',
    fail: '您已失误超过 3 次，本次成绩无效',
    errormove: '您已失误 %{error} 次, 超过 3 次成绩将无效',
    newrecord: '新的解题记录\n 用时 ',

    uploadrecord: '是否提交成绩？',
    uploadmessage: '您必须先提交自己的最好成绩才能查看在线排行',
    reject: '不提交',
    grant: '提交',
    loading: '正在加载中……',
    error: '出错了',
    uploaderror: '成绩上传失败',
    queryerror: '数据查询失败',

    share: '分享',
    sharemessage: '数独大师 - 重拾纯粹数独的乐趣',
    sharefailed: '分享失败',

    rate: '应用评价',
    ratemessage: '该应用为业余时间开发，您的好评是对我的最大支持',
    cancel: '取消',
    confirm: '确定',
  },
};

export default I18n;