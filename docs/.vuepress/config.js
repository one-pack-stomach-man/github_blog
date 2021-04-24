module.exports = {
    title: 'luke chan\'s blog',
    theme: '@vuepress/blog',
    themeConfig: {
        // 请参考文档来查看所有可用的选项。
        nav: [
            { text: 'front-end', link: 'https://google.com', target:'_self', rel:'' },
            { text: '区块链', link: '/guide/', target:'_blank' }
        ]
    },
    description: 'Just playing around',
    base: '/github_blog/',
    dest: 'public'
}