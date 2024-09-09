import React from 'react';
import { useState, useEffect } from 'react';

import axios from "axios"



const ComponentListRegion = async () => {

    const [isListRegion, setListReigon] = useState([]);
    
    const demoDataListRegion = [
        {
            "Northern": [
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
            "Northeastern": [
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
            "Central": [
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
            "Eastern": [
                "Chachoengsao",
                "Chanthaburi",
                "Chonburi",
                "Prachin_Buri",
                "Rayong",
                "Sa_Kaeo",
                "Trat"
            ],
            "Western": [
                "Kanchanaburi",
                "Phetchaburi",
                "Prachuap_Khiri_Khan",
                "Ratchaburi",
                "Tak"
            ],
            "Southern": [
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
        }

    ]


    return (
        <>
        </>
    )
}