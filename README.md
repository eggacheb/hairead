# hairead

## 在vercel中填入环境变量

要在 Vercel 上设置这些环境变量，请按照以下步骤操作：

1. 进入 Vercel 仪表板并选择您的项目。
2. 点击 "Settings" 标签。
3. 在左侧边栏中，点击 "Environment Variables"。
4. 添加以下环境变量：
   - Key: `KEY_1`, Value: (粘贴您的第一个密钥)
   - Key: `KEY_2`, Value: (粘贴您的第二个密钥)
   - Key: `KEY_3`, Value: (粘贴您的第三个密钥)
   - Key: `API_URL`，Value: (粘贴您的 API URL)
5. 如果您有更多的密钥，可以继续添加 `KEY_4`, `KEY_5` 等。
6. 点击 "Save" 来应用这些更改。
**记得在设置环境变量后重新部署您的项目，以使更改生效。**

- Key为你获取到的token，API_URL为你海螺接口地址，填写示例为https://hailuoxxxxxx.onrender.com/v1/audio/speech

- 海螺接口地址请参考https://linux.do/t/topic/108401进行部署

- 在阅读中的填写示例https://xxxxxx.vercel.app/?text={{speakText}}&speed={{speakSpeed/10}}&voice=YaeMiko_hailuo
- 由于vercel自带的域名被墙，可以绑自己的域名来避免被墙
- voice为发音人

#### voice

```
male-botong 思远 [兼容 tts-1 alloy]
Podcast_girl 心悦 [兼容 tts-1 echo]
boyan_new_hailuo 子轩 [兼容 tts-1 fable]
female-shaonv 灵儿 [兼容 tts-1 onyx]
YaeMiko_hailuo 语嫣 [兼容 tts-1 nova]
xiaoyi_mix_hailuo 少泽 [兼容 tts-1 shimmer]
xiaomo_sft 芷溪 [兼容 tts-1-hd alloy]
cove_test2_hailuo 浩翔（英文）
scarlett_hailuo 雅涵（英文）
Leishen2_hailuo 模仿雷电将军 [兼容 tts-1-hd echo]
Zhongli_hailuo 模仿钟离 [兼容 tts-1-hd fable]
Paimeng_hailuo 模仿派蒙 [兼容 tts-1-hd onyx]
keli_hailuo 模仿可莉 [兼容 tts-1-hd nova]
Hutao_hailuo 模仿胡桃 [兼容 tts-1-hd shimmer]
Xionger_hailuo 模仿熊二
Haimian_hailuo 模仿海绵宝宝
Robot_hunter_hailuo 模仿变形金刚
Linzhiling_hailuo 小玲玲
huafei_hailuo 拽妃
lingfeng_hailuo 东北er
male_dongbei_hailuo 老铁
Beijing_hailuo 北京er
JayChou_hailuo JayJay
Daniel_hailuo 潇然
Bingjiao_zongcai_hailuo 沉韵
female-yaoyao-hd 瑶瑶
murong_sft 晨曦
shangshen_sft 沐珊
kongchen_sft 祁辰
shenteng2_hailuo 夏洛特
Guodegang_hailuo 郭嘚嘚
yueyue_hailuo 小月月
```
