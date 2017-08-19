
export default (app) => {

    app.get('/test/user', (req, res, next) => {
        res.json({
            "code": 1,
            "data": {
                username: "Test name",
                is_login: 1
            }
        })
    })

    app.get('/test/list', (req, res, next) => {
        res.json({
            "code": 1,
            "msg": "成功",
            "data": [
                {
                    "day": "20170818",
                    "week": "5",
                    "games": [
                        {
                            "id": "429",
                            "title": "南昌站-S3-006",
                            "game_status": "4",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/18 19:30:00",
                            "time_start": "1503055800",
                            "division_name": "南昌站",
                            "division_logo": "http://w3.hoopchina.com.cn/87/7f/4a/877f4a1e7e8bab98ddfbba6453317076002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10983"
                        }
                    ]
                },
                {
                    "day": "20170819",
                    "week": "6",
                    "games": [
                        {
                            "id": "430",
                            "title": "长沙站-S3-007",
                            "game_status": "4",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/19 19:30:00",
                            "time_start": "1503142200",
                            "division_name": "长沙站",
                            "division_logo": "http://w4.hoopchina.com.cn/8e/be/58/8ebe58f55634d1ba44c0737e91e1000d002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10993"
                        }
                    ]
                },
                {
                    "day": "20170820",
                    "week": "0",
                    "games": [
                        {
                            "id": "431",
                            "title": "南京站-S3-008",
                            "game_status": "3",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/20 19:30:00",
                            "time_start": "1503228600",
                            "division_name": "南京站",
                            "division_logo": "http://w4.hoopchina.com.cn/a0/49/f2/a049f2d4610ff325e65ff4e5fa3154f0002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10897"
                        }
                    ]
                },
                {
                    "day": "20170821",
                    "week": "1",
                    "games": [
                        {
                            "id": "432",
                            "title": "沈阳站-S3-009",
                            "game_status": "3",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/21 19:30:00",
                            "time_start": "1503315000",
                            "division_name": "沈阳站",
                            "division_logo": "http://w3.hoopchina.com.cn/a2/d1/8b/a2d18b8b80833b929d1efd3834b6be1c002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10957"
                        }
                    ]
                },
                {
                    "day": "20170822",
                    "week": "2",
                    "games": [
                        {
                            "id": "433",
                            "title": "杭州站-S3-010",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/22 19:30:00",
                            "time_start": "1503401400",
                            "division_name": "杭州站",
                            "division_logo": "http://w4.hoopchina.com.cn/07/ac/f1/07acf1b041ff6bb33ff56d9f26bbbad2002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10946"
                        }
                    ]
                },
                {
                    "day": "20170823",
                    "week": "3",
                    "games": [
                        {
                            "id": "434",
                            "title": "东莞站-S3-011",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/23 19:30:00",
                            "time_start": "1503487800",
                            "division_name": "东莞站",
                            "division_logo": "http://w1.hoopchina.com.cn/95/2d/36/952d36a08681934128f26905dacc41f8002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10988"
                        }
                    ]
                },
                {
                    "day": "20170824",
                    "week": "4",
                    "games": [
                        {
                            "id": "435",
                            "title": "成都站-S3-012",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/24 19:30:00",
                            "time_start": "1503574200",
                            "division_name": "成都站",
                            "division_logo": "http://w4.hoopchina.com.cn/53/b5/6b/53b56ba5554a28ed309fae59579eb734002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10986"
                        }
                    ]
                },
                {
                    "day": "20170825",
                    "week": "5",
                    "games": [
                        {
                            "id": "436",
                            "title": "太原站-S3-013",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/25 19:30:00",
                            "time_start": "1503660600",
                            "division_name": "太原站",
                            "division_logo": "http://w2.hoopchina.com.cn/76/9a/13/769a137c373ca454bcaaea5b176df15a002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10969"
                        }
                    ]
                },
                {
                    "day": "20170826",
                    "week": "6",
                    "games": [
                        {
                            "id": "437",
                            "title": "深圳站-S3-014",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/26 19:30:00",
                            "time_start": "1503747000",
                            "division_name": "深圳站",
                            "division_logo": "http://w2.hoopchina.com.cn/56/dd/64/56dd64951c3211b5622dcd216a092800002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10985"
                        }
                    ]
                },
                {
                    "day": "20170827",
                    "week": "0",
                    "games": [
                        {
                            "id": "438",
                            "title": "长春站-S3-015",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/27 19:30:00",
                            "time_start": "1503833400",
                            "division_name": "长春站",
                            "division_logo": "http://w2.hoopchina.com.cn/aa/5d/1d/aa5d1d71e72d237cbb89326b2d50151f002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "11007"
                        }
                    ]
                },
                {
                    "day": "20170828",
                    "week": "1",
                    "games": [
                        {
                            "id": "439",
                            "title": "西安站-S3-016",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/28 19:30:00",
                            "time_start": "1503919800",
                            "division_name": "西安站",
                            "division_logo": "http://w4.hoopchina.com.cn/2d/46/cd/2d46cd61da0a98ef032f587aa27953b5002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10960"
                        }
                    ]
                },
                {
                    "day": "20170829",
                    "week": "2",
                    "games": [
                        {
                            "id": "440",
                            "title": "郑州站-S3-017",
                            "game_status": "0",
                            "summary": "",
                            "awards": "欧文三实战球鞋",
                            "game_start": "2017/08/29 19:30:00",
                            "time_start": "1504006200",
                            "division_name": "郑州站",
                            "division_logo": "",
                            "champion": [],
                            "video": [],
                            "room_id": "10964"
                        }
                    ]
                },
                {
                    "day": "20170830",
                    "week": "3",
                    "games": [
                        {
                            "id": "441",
                            "title": "合肥站-S3-018",
                            "game_status": "0",
                            "summary": "",
                            "awards": "",
                            "game_start": "2017/08/30 19:30:00",
                            "time_start": "1504092600",
                            "division_name": "合肥站",
                            "division_logo": "http://w4.hoopchina.com.cn/a8/24/f3/a824f360e321aefad60aa530cc7d1731002.png",
                            "champion": [],
                            "video": [],
                            "room_id": "10913"
                        }
                    ]
                }
            ]
        })
    })
}