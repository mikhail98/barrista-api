let news1 = {
    title: 'Тестовая новость. Спасибо, что вы с нами',
    text: 'Зацените сайт, который для товарища сделал. По ссылке перейти надо.',
    photoUrl: 'https://adindex.ru/files/292751/%D0%B4%D0%B5%D0%B42.png',
    url: 'https://rds-bim.com'
}


let news = [
    news1, news1, news1
]

export const getNews = (req, res) => {
    res.status(200).json(news)
}