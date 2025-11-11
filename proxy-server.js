const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

// 启用CORS
app.use(cors());

// 代理API请求
app.get('/api/news', async (req, res) => {
    try {
        const response = await fetch('http://183.6.90.61:8081/news/keyin/get');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('代理请求失败:', error);
        res.status(500).json({ error: '获取数据失败' });
    }
});

app.listen(PORT, () => {
    console.log(`代理服务器运行在 http://localhost:${PORT}`);
    console.log('API代理地址: http://localhost:3001/api/news');
});
