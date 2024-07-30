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

Key为你获取到的token，API_URL为你海螺接口地址，填写示例为https://hailuoxxxxxx.onrender.com/v1/audio/speech
