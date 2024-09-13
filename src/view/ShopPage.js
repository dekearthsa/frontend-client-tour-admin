import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ComponentCardShop from '../component/ComponentShop/ComponentCardShop';
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';

const ShopPage = () => {
    const demoDataListRegion = [
        {
            "reigon": "Northern",
            "data": [
                "All",
                "Chiang_Mai",
                "Chiang_Rai",
                "Lampang",
                "Lamphun",
                "Mae_Hong_Son",
                "Nan",
                "Phayao",
                "Phrae",
                "Uttaradit"
            ],
        },
        {
            "reigon": "Northeastern",
            "data": [
                "All",
                "Amnat_Charoen",
                "Bueng_Kan",
                "Buriram",
                "Chaiyaphum",
                "Kalasin",
                "Khon_Kaen",
                "Loei",
                "Maha_Sarakham",
                "Mukdahan",
                "Nakhon_Phanom",
                "Nakhon_Ratchasima",
                "Nong_Bua_Lamphu",
                "Nong_Khai",
                "Roi_Et",
                "Sakon_Nakhon",
                "Si_Sa_Ket",
                "Surin",
                "Ubon_Ratchathani",
                "Udon_Thani",
                "Yasothon"
            ],
        },
        {
            "reigon": "Central",
            "data": [
                "All",
                "Ang_Thong",
                "Ayutthaya",
                "Bangkok",
                "Chai_Nat",
                "Lopburi",
                "Nakhon_Nayok",
                "Nakhon_Pathom",
                "Nonthaburi",
                "Pathum_Thani",
                "Phetchabun",
                "Phra_Nakhon_Si_Ayutthaya",
                "Phichit",
                "Phitsanulok",
                "Saraburi",
                "Sing_Buri",
                "Suphan_Buri",
                "Uthai_Thani"
            ],
        },
        {
            "reigon": "Eastern",
            "data": [
                "All",
                "Chachoengsao",
                "Chanthaburi",
                "Chonburi",
                "Prachin_Buri",
                "Rayong",
                "Sa_Kaeo",
                "Trat"
            ],
        },
        {
            "reigon": "Western",
            "data": [
                "All",
                "Kanchanaburi",
                "Phetchaburi",
                "Prachuap_Khiri_Khan",
                "Ratchaburi",
                "Tak"
            ],
        },
        {
            "reigon": "Southern",
            "data": [
                "All",
                "Chumphon",
                "Krabi",
                "Nakhon_Si_Thammarat",
                "Narathiwat",
                "Pattani",
                "Phang_Nga",
                "Phatthalung",
                "Phuket",
                "Ranong",
                "Satun",
                "Songkhla",
                "Surat_Thani",
                "Trang",
                "Yala"
            ]
        },
    ];

    const demoProductData = [
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test1",
            province: "Chiang_Mai",
            region: "Northern",
            ord: 5,
            rate: 5,
            intro: "1111",
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test2",
            province: "Chiang_Mai",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test3",
            province: "Lampang",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test4",
            province: "Lampang",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test5",
            province: "Lamphun",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test6",
            province: "Lamphun",
            region: "Northern",
            intro: "22222",
            ord: 4,
            rate: 4,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test11",
            province: "Bangkok",
            region: "Central",
            ord: 5,
            rate: 5,
            intro: "1111",
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test21",
            province: "Bangkok",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test31",
            province: "Bangkok",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test41",
            province: "Ang_Thong",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test51",
            province: "Ayutthaya",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test61",
            province: "Ayutthaya",
            region: "Central",
            intro: "22222",
            ord: 4,
            rate: 4,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc","image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
    ]
    const location = useLocation();
    // const navigate = useNavigate();
    const { locationStateProvince, locationStateRegion } = location.state || {};

    const [isOpen, setIsOpen] = useState(false);
    const [isListRegion, setListReigon] = useState([]);
    const [listProvince, setListProvince] = useState([]);
    const [isSelectRegion, setSelectRegion] = useState("Northern");
    const [isProvince, setProvince] = useState("All");
    const [isProduct, setProduct] = useState([]);
    const [isShowProduct, setShowProduct] = useState([]);
    // const [isLoadingProduct, setLoadingProduct] = useState([]);
    const [animate, setAnimate] = useState(true);

    const [isPhoneScreen, setIsphoneScreen] = useState();
    // const [isCSSPhone, setCSSPhone] = useState();
    // const [isCssScreen, setCssScreen] = useState();

    // const handleNavigation = (path) => navigate(path);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickRegion = () => {
        // Toggle the animate state to force re-render and re-trigger the animation
        setAnimate(false);
        setTimeout(() => setAnimate(true), 10);
    };

    const funcMod3 = async (funcType, arrayRegion) => {
        let setArray = [];
        const mod3Array = [];
        arrayRegion.forEach((region, i) => {
            setArray.push(funcType === "region" ? region.reigon : region);
            if ((i + 1) % 2 === 0 || i === arrayRegion.length - 1) {
                mod3Array.push(setArray);
                setArray = [];
            }
        });
        return mod3Array;
    };

    const haddleFetchProduct = async (isLocationStateProvince) => {
        // setLoadingProduct(true);
        setProduct(demoProductData);
        // console.log(demoProductData, isSelectRegion, isProvince, isLocationStateProvince)
        haddleFilterProduct(isSelectRegion, isLocationStateProvince || isProvince, demoProductData);
        // setLoadingProduct(false);
    };

    const haddleFilterProduct = async (region, province, productData) => {
        // setLoadingProduct(true);
        const filteredProducts = productData.filter((product) =>
            province === "All" ? product.region === region : product.region === region && product.province === province
        );
        setShowProduct(filteredProducts);
        // setLoadingProduct(false);
    };

    const handleFetchListRegion = async () => {
        const listRegion = await funcMod3("region", demoDataListRegion);
        setListReigon(listRegion);
    };

    const haddleFetchListProvince = async (regionIn) => {
        setSelectRegion(regionIn);
        const ProvinceList = demoDataListRegion.find((region) => region.reigon === regionIn)?.data || [];
        const list3ModProvince = await funcMod3("province", ProvinceList);
        setListProvince(list3ModProvince);
    };

    const haddleWindowScreenCss = async () => {
        const screen = window.innerWidth;
        if (screen <= 800) {
            await setIsphoneScreen(true)
            // await setCSSPhone("relative z-10");
            // await setCssScreen("");
        } else {
            await setIsphoneScreen(false)
            // await setCSSPhone("relative z-10 hidden");
            // await setCssScreen();
        }
    }

    const funcInit = async () => {
        await handleFetchListRegion();
        if (locationStateProvince) {
            setProvince(locationStateProvince);
            await haddleFetchListProvince(locationStateRegion);
            await haddleFetchProduct(locationStateProvince);
        } else {
            await haddleFetchListProvince("Northern");
            await haddleFetchProduct();
        }
    };

    useEffect(() => {
        haddleWindowScreenCss();
        funcInit();
    }, []);


    if (isPhoneScreen) {
        return (
            <div
                className="relative bg-cover bg-[rgb(250,250,250)] bg-gradient-to-tl from-[rgba(250,250,250,1)] to-[rgba(67,89,96,1)] text-gray-800"
            // style={{
            //     backgroundImage: `url(https://img.goodfon.com/original/2048x1128/b/40/bangkok-thailand-bangkok-tailand-gorod-krasota-noch.jpg)`,
            // }}

            >
                {/* <header className="flex justify-between p-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl ">
                    <button onClick={() => handleNavigation("/")} className="text-2xl font-bold">
                        LOGO
                    </button>
                    <nav className="flex space-x-8 text-lg">
                        <button onClick={() => handleNavigation("/shop")} className="hover:text-gray-400">
                            Tour
                        </button>
                        <button onClick={() => handleNavigation("/about")} className="hover:text-gray-400">
                            About
                        </button>
                        <a href="#c-bottom-bar">
                            <button className="hover:text-gray-400">Contact</button>
                        </a>
                    </nav>
                </header> */}
                <div className="text-white h-[90px] bg-gradient-to-r from-gray-900 to-gray-800 opacity-80 pt-10 font-bold w-[100%] z-10">
                    <ComponentHomeNavbar />
                </div>
                <div className='h-[100vh]  overflow-y-auto '>
                    <div className='fixed translate-y-[30px] translate-x-[20px] z-10'>
                        <button
                            onClick={toggleSidebar}
                            className="p-2 w-10 h-10  text-white bg-gray-400 rounded-full animate-bounce shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                            </svg>
                        </button>
                    </div>

                    <main className="flex flex-col md:flex-row mt-10 px-6 md:px-20 space-y-10 md:space-y-0">
                        <div className="relative z-10">
                            <div
                                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                                    } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
                            >
                                <div className="flex items-center justify-between p-4 text-xl font-bold border-b border-gray-700">
                                    Selection
                                    <button onClick={toggleSidebar} className="md:hidden">
                                        ✕
                                    </button>
                                </div>
                                <nav className="p-4 space-y-4">
                                    <h3 className="text-xl font-semibold text-white">Region</h3>
                                    <div className="mt-4 space-y-3">
                                        {isListRegion.map((array, idx) => (
                                            <div className="flex space-x-2" key={idx}>
                                                {array.map((el, idx2) => (
                                                    <button
                                                        key={idx2}
                                                        className={`p-2 text-[11px] text-center py-2 rounded-lg   transition-all ${el === isSelectRegion
                                                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                            : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200'
                                                            }`}
                                                        onClick={() => {
                                                            setProvince("All");
                                                            haddleFetchListProvince(el);
                                                            haddleFilterProduct(el, isProvince, isProduct);
                                                        }}
                                                    >
                                                        {el}
                                                    </button>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mt-6">Province</h3>
                                    <div className="mt-4 space-y-3">
                                        {listProvince.map((array, idx) => (
                                            <div className="flex space-x-2" key={idx}>
                                                {array.map((el, idx2) => (
                                                    <button
                                                        key={idx2}
                                                        className={`p-2 text-[11px] text-center py-2 rounded-lg  transition-all ${el === isProvince
                                                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                            : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200'
                                                            }`}
                                                        onClick={() => {
                                                            setProvince(el);
                                                            haddleFilterProduct(isSelectRegion, el, isProduct);
                                                        }}
                                                    >
                                                        {el}
                                                    </button>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <section className="lg:ml-10 md:w-3/4">
                            <h2 className="text-2xl font-semibold text-white mb-6">{isSelectRegion} : <span className='text-[24px]'>{isProvince}</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {isShowProduct.map((product, idx) => (
                                    <ComponentCardShop key={idx} {...product} />
                                ))}
                            </div>
                        </section>
                    </main>
                    
                </div>
                <div className='mt-[70px] opacity-80'>
                    <ComponentBottonBar />
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="relative h-[100vh] bg-cover bg-[rgb(250,250,250)] bg-gradient-to-tl from-[rgba(250,250,250,1)] to-[rgba(67,89,96,1)] text-gray-800"
            // style={{
            //     backgroundImage: `url(https://img.goodfon.com/original/2048x1128/b/40/bangkok-thailand-bangkok-tailand-gorod-krasota-noch.jpg)`,
            // }}
            >
                {/* <header className="flex justify-between p-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl ">
                    <button onClick={() => handleNavigation("/")} className="text-2xl font-bold">
                        LOGO
                    </button>
                    <nav className="flex space-x-8 text-lg">
                        <button onClick={() => handleNavigation("/shop")} className="hover:text-gray-400">
                            Tour
                        </button>
                        <button onClick={() => handleNavigation("/about")} className="hover:text-gray-400">
                            About
                        </button>
                        <a href="#c-bottom-bar">
                            <button className="hover:text-gray-400">Contact</button>
                        </a>
                    </nav>
                </header> */}
                <div className="text-white h-[110px]  bg-gradient-to-r from-gray-900 to-gray-800  pt-10 font-bold w-[100%] z-10 opacity-80">
                    <ComponentHomeNavbar />
                </div>
                <main className=" flex flex-col md:flex-row mt-[75px] px-6 md:px-20 space-y-10 md:space-y-0">
                    <aside className="md:w-1/4 bg-white p-6 shadow-lg rounded-lg border border-gray-300 ">
                        <h3 className="text-xl font-semibold text-gray-900">Region</h3>
                        <div className="mt-4 space-y-3">
                            {isListRegion.map((array, idx) => (
                                <div className="flex space-x-2" key={idx}>
                                    {array.map((el, idx2) => (
                                        <button
                                            key={idx2}
                                            className={`w-full text-center py-2 rounded-lg font-semibold transition-all ${el === isSelectRegion
                                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200'
                                                }`}
                                            onClick={() => {
                                                handleClickRegion();
                                                setProvince("All");
                                                haddleFetchListProvince(el);
                                                haddleFilterProduct(el, isProvince, isProduct);
                                            }}
                                        >
                                            {el}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-6">Province</h3>
                        <div className="mt-4 space-y-3">
                            {listProvince.map((array, idx) => (
                                <div className="flex space-x-2" key={idx}>
                                    {array.map((el, idx2) => (
                                        <button
                                            key={idx2}
                                            className={`w-full text-center py-2 rounded-lg font-semibold transition-all ${el === isProvince
                                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200'
                                                }`}
                                            onClick={() => {
                                                setProvince(el);
                                                haddleFilterProduct(isSelectRegion, el, isProduct);
                                            }}
                                        >
                                            {el}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </aside>
                    <section className="lg:ml-10 md:w-3/4">

                        <h2 className={animate ? "text-2xl font-semibold text-gray-700 lg:text-white mb-6 slide-in-right" : ""}>{isSelectRegion} : <span className='text-[24px]'>{isProvince}</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {isShowProduct.map((product, idx) => (
                                <ComponentCardShop key={idx} {...product} />
                            ))}
                        </div>
                    </section>
                </main>
                <div className='lg:absolute w-[100%] bottom-0 opacity-80'>
                    <ComponentBottonBar />
                </div>
            </div>
        );
    }

};

export default ShopPage;
