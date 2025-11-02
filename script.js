const product =[
    {
        id: 101,
        title: "ម៉ូទ័ទម្លាក់អណ្តូង 1សេស",
        description: "ម៉ាក Veichi 1សេស",
        imgSrc: "image/veichi_1hp.jpg",
        Info: [
            {
                brand: "",
                model: "ម៉ាក: Veichi 1HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 750w",
                dc: "ភ្លើងចូល DC: 80v-380v",
                ac: "ភ្លើងចូល AC: 80v-280v",
                heigh: "កម្ពស់ទឹក: 65m",
                amountwater: "ចំនួនទឹក: 5.5m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 3 សន្លឹក"
            }
        ]
    },
    {
        id: 102,
        title: "ម៉ូទ័ទម្លាក់អណ្តូង",
        description: "ម៉ាក Flieben 2សេស",
        imgSrc: "image/flieben_2hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Flieben 2HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 110v-210v",
                ac: "ភ្លើងចូល AC:",
                heigh: "កម្ពស់ទឹក: 52m",
                amountwater: "ចំនួនទឹក: 12m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 4 សន្លឹក",
            }
        ]
    },
    {
        id: 104,
        title: "ម៉ូទ័ទម្លាក់អណ្តូង",
        description: "ម៉ាក Veichi 0.5សេស",
        imgSrc: "image/veichi_0_5.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 0.5HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 300w",
                dc: "ភ្លើងចូល DC: 20v-55v",
                ac: "ភ្លើងចូល AC:",
                heigh: "កម្ពស់ទឹក: 35m",
                amountwater: "ចំនួនទឹក: 3m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 150 វ៉ាត់ ចំនួន 1 សន្លឹក",
            }
        ]
    },    

]
const listProduct =[
    {
        id: 1,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 3សេស",
        imgSrc: "image/hippo_3_hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 3HP",
                size: "ទំហំ: 144mm",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 80v-280v",
                heigh: "កម្ពស់ទឹក: 32m",
                amountwater: "ចំនួនទឹក: 52m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 558 វ៉ាត់​ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 2,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 3សេស",
        imgSrc: "image/hippo_3hp_2.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 3HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 80v-280v",
                heigh: "កម្ពស់ទឹក: 45m",
                amountwater: "ចំនួនទឹក: 36m³",
                solarpanel: "ប្រ់ផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 3,
        title: "ម៉ាកទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 5.5សេស",
        imgSrc: "image/hippo_5_5_hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 5.5HP",
                size: "ទំហំ: 130mm",
                horsepower: "កម្លាំងសេស: 4000w",
                dc: "ភ្លើងចូល DC: 200v-780v",
                ac: "ភ្លើងចូល AC: 260v-480v",
                heigh: "កម្ពស់ទឹក: 40m",
                amountwater: "ចំនូនទឹក: 65m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 14 សន្លឹក",
            }
        ]
    },
    {
        id: 4,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 7.5សេស",
        imgSrc: "image/hippo_7_5hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 7.5HP",
                size: "ទំហំ: 130mm",
                horsepower: "កម្លាំងសេស: 5500w",
                dc: "ភ្លើងចូល DC: 200v-780v",
                ac: "ភ្លើងចូល AC: 260v-480v",
                heigh: "កម្ពស់ទឹក: 60m",
                amountwater: "ចំនួនទឹក: 65m³",
                solarpanel: "ប្រយផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 22 សន្លឹក",
            }
        ]
    },
    {
        id: 5,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 7.5សេស",
        imgSrc: "image/hippo_7_5hp_2.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 7.5HP",
                size: "ទំហំ: 144mm",
                horsepower: "កម្លាំងសេស: 5500w",
                dc: "ភ្លើងចូល DC: 200v-780v",
                ac: "ភ្លើងចូល AC: 260v-480v",
                heigh: "កម្ពស់ទឹក: 43m",
                amountwater: "ចំនួនទឹក: 90m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 22 សន្លឹក",
            }
        ]
    },
    {
        id: 6,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 10សេស",
        imgSrc: "image/hippo_10hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 10HP",
                size: "ទំហំ: 144mm",
                horsepower: "កម្លាំងសេស: 7500w",
                dc: "ភ្លើងចូល DC: 200v-780v",
                ac: "ភ្លើងចូល AC: 260v-480v",
                heigh: "កម្ពស់ទឹក:​ 65m",
                amountwater: "ចំនួនទឹក: 95m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 30 សន្លឹក",
            }
        ]
    },
    {
        id: 7,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 15សេស",
        imgSrc: "image/hippo_15hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 15HP",
                size: "ទំហំ: 144mm",
                horsepower: "កម្លាំងសេស: 11000w",
                dc: "ភ្លើងចូល DC: 200v-780v",
                ac: "ភ្លើងចូល AC: 260v-480v",
                heigh: "កម្ពស់ទឹក:​ 85m",
                amountwater: "ចំនួនទឹក: 95m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 42 សន្លឹក",
            }
        ]
    },
    {
        id: 8,
        title: "ម៉ូរទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Hippo 20សេស",
        imgSrc: "image/hipp_20hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Hippo 20HP",
                size: "ទំហំ: 144mm",
                horsepower: "កម្លាំងសេស: 11000w",
                dc: "ភ្លើងចូល DC: 200v-780v",
                ac: "ភលើងចូល AC: 260v-480v",
                heigh: "កម្ពសើទឹក:​ 125m​",
                amountwater: "ចំនួនទឹក: 95m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 56 សន្លឹក",
            }
        ]
    },
    {
        id: 9,
        title: "ម៉ូរទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 1សេស",
        imgSrc: "image/veichi_1hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 1HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 750w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 85v-300v",
                heigh: "កម្ពសស់ទឹក: 65m",
                amountwater: "ចំនួនទឹក: 5.5m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 3 សន្លឹក",
            }
        ]
    },
    {
        id: 10,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 2សេស",
        imgSrc: "image/veichi_2hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 2HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 85v-300v",
                heigh: "កម្ពស់ទឹក: 60m",
                amountwater: "ចំនួនទឹក: 11m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 6 សន្លឹក",
            }
        ]
    },
    {
        id: 11,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        description: "ម៉ាក Veichi 3សេស",
        model: "",
        imgSrc: "image/veichi_3hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 2HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 85v-300v",
                heigh: "កម្ពស់ទឹក: 60m",
                amountwater: "ចំនួនទឹក: 19m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 12,
        title: "ម៉ូរទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 3សេស",
        imgSrc: "image/veichi_3hp_2.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 3HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្ល ើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 85v-300v",
                heigh: "កម្ពស់ទឹក: 70m ស្លាបជ័រ",
                amountwater: "ចំនួនទឹក: 22m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 558 វ៉ាត់​ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 13,
        title: "ម៉ូរទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 3សេស",
        imgSrc: "image/veichi_3hp_3.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 3HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 85v-300v",
                heigh: "កម្ពសស់ទឹក: 95m ស្លាបជ័រ",
                amountwater: "ចំនួនទឹក: 17m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 558 វ៉ាត់​ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 14,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 3សេស",
        imgSrc: "image/veichi_3hp_4.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 3HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 85v-300v",
                heigh: "កម្ពសស់ទឹក: 145mm",
                amountwater: "ចំនួនទឹក: 10.8m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 558 វ៉ាត់​ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 15,
        title: "ម៉ូទ័របឺតទឹកអណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 1សេស",
        imgSrc: "image/veichi_1hp_2.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 1HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 750w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC: 85v-300v",
                heigh: "កម្ពសស់ទឹក: 65m",
                amountwater: "ចំនួនទឹក: 3m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 3 សន្លឹក",
            }
        ]
    },
    {
        id: 16,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 0.5សេស",
        imgSrc: "image/veichi_0_5.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 0.5HP",
                size: "ទំហំ: 75mm",
                horsepower: "កម្លាំងសេស: 300w",
                dc: "ភ្លើងចូល DC: 20v-55v",
                ac: "ភ្លើងចូល AC:",
                heigh: "កម្ពស់ទឹក: 35m",
                amountwater: "ចំនួនទឹក: 3m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 1 សន្លឹក",
            }
        ]
    },
    {
        id: 17,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 1សេស",
        imgSrc: "image/veichi_1hp_3.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 1HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 750w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "ភ្លើងចូល AC",
                heigh: "កម្ពសស់ទឹក: 65m",
                amountwater: "ចំនួនទឹក: 7.5m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 3 សន្លឹក",
            }
        ]
    },
    {
        id: 18,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 2សេស",
        imgSrc: "image/veivhi_2hp_2.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 2HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 80v-210v",
                ac: "ភ្លើងចូល AC: ",
                heigh: "កម្ពស់ទឹក: 65m",
                amountwater: "ចំនួនទឹក: 15m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន 6 សន្លឹក",
            }
        ]
    },
    {
        id: 19,
        title: "ម៉ូរទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Veichi 1សេស",
        imgSrc: "image/veichi_1hp_3.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Veichi 1HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 750w",
                dc: "ភ្លើងចូល DC: 80v-210v",
                ac: "ភ្លើងចូល AC: ",
                heigh: "កម្ពស់ទឹក: 65m",
                amountwater: "ចំនួនទឹក: 5.5m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន​ 3 សន្លឹក",
            }
        ]
    },


    {
     id: 20,
        title: "ម៉ូរទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក​ Flieben 2សេស",
        imgSrc: "image/flieben_2hp.jpg",   
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Flieben 2HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 110v-210v",
                ac: "ភ្លើងចូល AC: ",
                heigh: "កម្ពស់ទឹក: 52m",
                amountwater: "ចំនួនទឹក: 12m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន 4 សន្លឹក",
            }
        ]
    },
    {
        id: 21,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Flieben 2សេស",
        imgSrc: "image/flieben_2hp_2.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Flieben 2HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 110v-210v",
                ac: "ភ្លើងចូល AC: ",
                heigh: "កម្ពស់ទឹក: 70m",
                amountwater: "ចំនួនទឹក: 12m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន 4 សន្លឹក",
            }
        ]
    },
    {
        id: 22,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Flieben 2សេស",
        imgSrc: "image/fleiben_2hp_3.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Flieben 2HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 110v-210v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 100m",
                amountwater: "ចំនួនទឹក: 08m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន 4 សន្លឹក",
            }
        ]
    },
    {
        id: 23,
        title: "ម៉ូទ័រទម្លាក់អណ្តូង",
        model: "",
        description: "ម៉ាក Flieben 3សេស",
        imgSrc: "image/fleiben_3hp.jpg",
        Info:[
            {
                brand: "",
                model: "ម៉ាក: Flieben 3HP",
                size: "ទំហំ: 96mm",
                horsepower: "កម្លាំងសេស: 2300w",
                dc: "ភ្លើងចូល DC: 120v-450v",
                ac: "ភ្លើងចូល AC: 220v-240v",
                heigh: "កម្ពស់ទឹក: 70m",
                amountwater: "ចំនួនទឹក: 10m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន 7 សន្លឹក",
            }
        ]
    },
    //ម៉ូទ័រទឹកស្រះ
    {
        id: 24,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក LV Topsun 1សេស",
        imgSrc: "image/lvtopsun_1hp.jpg",
        Info:[
            {
                brand: "Code: DCPM21-14-750w",
                model: "ម៉ាក: LV Topsun 1HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 750w",
                dc: "ភ្លើងចូល DC: 72v-160v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 14m",
                amountwater: "ចំនួនទឹក: 21m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 3 សន្លឹក",
            }
        ]
    },
    {
        id: 25,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក LV Topsun 2សេស",
        imgSrc: "image/lv_topsun_2hp.jpg",
        Info:[
            {
                brand: "Code: DCPM50-17-1500w",
                model: "ម៉ាក: LV Topsun 2HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 110v-210v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 17m",
                amountwater: "ចំនួនទឹក: 50m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 6 សន្លឹក",
            }
        ]
    },
    {
        id: 26,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក LV Topsun 3សេស",
        imgSrc: "image/lvtopsun_3hp.jpg",
        Info:[
            {
                brand: "Code: DCPM60-20-300-2200w-A/D",
                model: "ម៉ាក: LV Topsun 3HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្លើងចូល DC: 80v-420v",
                ac: "ភ្លើងចូល AC: 85v-280v",
                heigh: "កម្ពស់ទឹក: 20m",
                amountwater: "ចំនួនទឹក: 60m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 27,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក Flieben 3សេស",
        imgSrc: "image/just_now1.jpg",
        Info:[
            {
                brand: "Code: SSF60-26-2200w",
                model: "ម៉ាក: Flieben 3HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 2200w",
                dc: "ភ្លើងចូល DC: 80v-420v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 26m",
                amountwater: "ចំនួនទឹក: 60m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 8 សន្លឹក",
            }
        ]
    },
    {
        id: 28,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក Flieben 2សេស",
        imgSrc: "image/just_now2.jpg",
        Info:[
            {
                brand: "Code: SSF50-21-1500w",
                model: "ម៉ាក: Flieben 2HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 1500w",
                dc: "ភ្លើងចូល DC: 80v-300v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 21m",
                amountwater: "ចំនួនទឹក: 50m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 6 សន្លឹក",
            }
        ]
    },
    {
        id: 29,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក Flieben 1.5សេស",
        imgSrc: "image/flieben_1_5hp.jpg",
        Info:[
            {
                brand: "Code: SSF22-28-1200w",
                model: "ម៉ាក: Fleiben 1.5HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 1200w",
                dc: "ភ្លើងចូល DC: 72v-110v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 28m",
                amountwater: "ចំនួនទឹក: 22m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580 វ៉ាត់ ចំនួន 3 សន្លឹក",
            }
        ]
    },
    {
        id: 30,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក Flieben 5.5សេស",
        imgSrc: "image/flieben_5_5_hp.jpg",
        Info:[
            {
                brand: "Code: SSF135-20-4000w",
                model: "ម៉ាក: Flieben 5.5HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 4000w",
                dc: "ភ្លើងចូល DC: 80v-430v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 20m",
                amountwater: "ចំនួនទឹក: 135m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន 14 សន្លឹក",
            }
        ]
    },
    {
        id: 31,
        title: "ម៉ូទ័រទឹកស្រះ",
        model: "",
        description: "ម៉ាក Flieben 4សេស",
        imgSrc: "image/flieben_4hp.jpg",
        Info:[
            {
                brand: "Code: SSF85-17-2800w",
                model: "ម៉ាក: Flieben 4HP",
                size: "ទំហំ: លើគោក",
                horsepower: "កម្លាំងសេស: 2800w",
                dc: "ភ្លើងចូល DC: 150v-480v",
                ac: "",
                heigh: "កម្ពស់ទឹក: 17m",
                amountwater: "ចំនួនទឹក: 85m³",
                solarpanel: "ប្រើផ្ទាំងសូឡា 580w ចំនួន​ 10 សន្លឹក",
            }
        ]
    },
    {
        id: 32,
        title: "Solis Inverter",
        model: "on grid single phase",
        description: "S6-GR1P-5K-S",
        imgSrc: "image/S6_GR1P_5K_S(9).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate Power 5Kw, WiFi, Meter,PV input 2 Strings",
                size: "Zero export method: Meter",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 580",
            }
        ]
    },
    {
        id: 33,
        title: "Solis Inverter",
        model: "on grid single phase",
        description: "S5-GR1P-10K",
        imgSrc: "image/S5_GR1P_10K(5).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate Power 10Kw, WiFi, Meter,PV input 3 Strings",
                size: "Zero export method: Meter",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,200",
            }
        ]
    },
    {
        id: 34,
        title: "Solis Inverter",
        model: "on grid 3 phase",
        description: "S5-GR3P-10K",
        imgSrc: "image/on_grid_3phase.jpg",
        Info:[
            {
                brand: "ម៉ាក: Solid",
                model: "Description: Rate Power 10Kw, WiFi, Meter, PV input 2 Strings",
                size: "Zero export method: Meter",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,200",
            }
        ]
    },
    {
        id: 35,
        title: "Solis Inverter",
        model: "on grid 3 phase",
        description: "S5-GC-30K",
        imgSrc: "image/S5_GC_30K(3).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate Power 15Kw, WiFi, Meter, PV input 4 Strings",
                size: "Zero export method: Meter",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,350",
            }
        ]
    },
    {
        id: 36,
        title: "Solis Inverter",
        model: "on grid 3 phase",
        description: "S5-GR3P-15K",
        imgSrc: "Image/S5_GR1P_10K(5).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate Power 20Kw, WiFi, Meter, PV input 4 Strings",
                size: "Zero export method: Meter",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,450",
            }
        ]
    },
    {
        id: 37,
        title: "Solid Inverter",
        model: "on grid 3 phase",
        description: "S5-GC-60K",
        imgSrc: "image/S5_GC_60K(4).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate Power 30Kw, WiFi, Meter, PV input 6 Strings",
                size: "Zero export method: Meter",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 2,050",
            }
        ]
    },
    {
        id: 38,
        title: "Solis Inverter",
        model: "on grid 3 phase",
        description: "S5-GR3P-20K",
        imgSrc: "Image/S5_GR1P_10K(5).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate Power 60Kw, WiFi,Meter, PV input 12 Strings",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 3,000",
            }
        ]
    },
    {
        id: 39,
        title: "Solis Inverter",
        model: "on grid 3 phase",
        description: "Solis-110K-5G",
        imgSrc: "image/Solis_110K_5G(10).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate Power 110Kw, WiFi, Meter, PV input 20 Strings",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 4,300",
            }
        ]
    },
    {
        id: 40,
        title: "On grid Accessories",
        model: "on grid 3 phase",
        description: "EPM 1P",
        imgSrc: "image/EPM_3P_5G_Plus(1).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Single phase, តម្លើងចាប់ពី 2 inverters",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 450",
            }
        ]
    },
    {
        id: 41,
        title: "On grid Accessories",
        model: "",
        description: "EMP 3P 5G Plus",
        imgSrc: "image/EPM_3P_5G_Plus(1).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: 3 phase, តម្លើងចាប់ពី 2 inverters",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 550",
            }
        ]
    },
    {
        id: 43,
        title: "Solis Inverter",
        model: "Hybrid Inverter",
        description: "S6-EH3P-10KH-EU",
        imgSrc: "image/S6_EH3P_10KH_EU(8).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate 10Kw 3phase, Battery 120-600V,    PV input 16KW, 1000V (mppt 200-850V), 4 string , WiFi",
                size: "Zero export method: Meter",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 2,250",
            }
        ]
    },
    {
        id: 44,
        title: "Solis Inverter",
        model: "Hybrid Inverter",
        description: "S6-EH1P-6K-L-PRO",
        imgSrc: "image/S6_EH1P_6K_LPRO(6).jpg",
        Info:[
            {
                brand: "solar pump",
                model: "Description: Rate 6Kw 1phase, Battery 42-58V, PV input 9.6KW, 600V (mppt 90-520V), 2 string , WiFi,CT(Zero Export)",
                size: "Zero export method: CT",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 950",
            }
        ]
        
    },
    {
        id: 45,
        title: "Solid Inverter",
        model: "Hybrid Inverter",
        description: "S6_EH1P_8K_L_Pro",
        imgSrc: "image/S6_EH1P_8K_LPro(7).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate 8Kw 1phase, Battery 42-60V, PV input 12.8KW, 600V (mppt 90-500V), 3 string , WiFi, Bluetooth, CT",
                size: "Zero export method: CT",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,500",
            }
        ]
    },
    {
        id: 46,
        title: "Solis Inverter",
        model: "off grid inverter",
        description: "S5-EO1P5K-48",
        imgSrc: "image/S5_EO1P5K_48(2).jpg",
        Info:[
            {
                brand: "ម៉ាក: Solis",
                model: "Description: Rate 5Kw 1phase, Battery 42-58V, PV input 5.5KW, 500V (mppt 90-480V), 2 string , WiFi",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 450",
            }
        ]
    },
    {
        id: 47,
        title: "Lithium Battery",
        model: "UNIV3800W",
        description: "Low Voltage 25.6V",
        imgSrc: "image/UNIV3800W.jpg",
        Info:[
            {
                brand: "Low Voltage 25.6V",
                model: "Model: UNIV3800W",
                size: "Description: LiFePO4 Lithium Battery 25.6V 150Ah,BMS",
                horsepower: "Rate power: 3.8Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 480",
            }
        ]
    },
    {
        id: 48,
        title: "Lithium Battery",
        model: "UNIV-5200-Rack",
        description: "Low Volatage 51.2V",
        imgSrc: "image/UNIV_5200_Rack.jpg",
        Info:[
            {
                brand: "Low Voltage 51.2V",
                model: "Model: UNIV-5200-Rack",
                size: "Description: UNIV-5200(R), 5.22kwh(51.2v102ah)Lithium Battery with BMS",
                horsepower: "Rate power: 5.22Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 750",
            }
        ]
    },
    {
        id: 49,
        title: "Lithium Battery",
        model: "UNIV-10KWh-Rack",
        description: "Low Voltage 51.2V",
        imgSrc: "image/UNIV_10KWh_Rack.jpg",
        Info:[
            {
                brand: "Low Voltage 51.2V",
                model: "Model: UNIV-10KWh-Rack",
                size: "Description: UNIV-10kWh/LV(R), 10.2kwh(51.2V200Ah)Lithium Battery with BMS",
                horsepower: "Rate power: 10.2Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: No stock",
            }
        ]
    },
    {
        id: 50,
        title: "Lithium Battery",
        model: "UNIV-14.3KWh-Rack",
        description: "Low Voltage 51.2V",
        imgSrc: "image/UNIV_14_3KWh_Rack.jpg",
        Info:[
            {
                brand: "Low Voltage 51.2V",
                model: "Model: UNIV-14.3KWh-Rack",
                size: "Description: UNIV-14.3kWh/LV(R) ,14.3kwh(51.2V280Ah)Lithium Battery with BMS",
                horsepower: "Rate power: 14.3Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: No stock",
            }
        ]
    },
    {
        id: 51,
        title: "Lithium Battery",
        model: "UNIV-10kWhFS",
        description: "Low Voltage 51.2V",
        imgSrc: "image/UNIV_10kWhFS.jpg",
        Info:[
            {
                brand: "Low Voltage 51.2V",
                model: "Model: UNIV-10kWhFS",
                size: "Description: UNIV-10kWhFS /LV(W), 10.2kwh(51.2V200Ah) Lithium Battery with BMS",
                horsepower: "Rate power: 10.2KWh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,250",
            }
        ]
    },
    {
        id: 52,
        title: "Lithium Battery",
        model: "UNIV-16.2kWhFS",
        description: "Low Voltage 51.2V",
        imgSrc: "image/UNIV_16_2kWhFS.jpg",

        Info:[
            {
                brand: "Low Voltage 51.2V",
                model: "Model: UNIV-16.2kWhFS",
                size: "Description: UNIV-16.2kWhFS /LV(W), 16.2kwh(51.2V315Ah)Lithium Battery with BMS",
                horsepower: "Rate power: 16.2KWh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,750",
            }
        ]
    },
    {
        id: 53,
        title: "Lithium Battery",
        model: "UNIV-HV ST31K",
        description: "High Voltage",
        imgSrc: "image/UNIV_HV_ST31K.jpg",
        Info:[
            {
                brand: "High Voltage",
                model: "Model: UNIV-HV ST31K",
                size: "Description: 76.8V100Ah Per Module 4 Pcs of 7.6kwh LiFePO4",
                horsepower: "Rate power: 31Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 4,250",
            }
        ]
    },
    {
        id: 54,
        title: "Lithium Battery",
        model: "UNIV-HV ST61K",
        description: "High Voltage",
        imgSrc: "image/UNIV_HV_ST61K.jpg",
        Info:[
            {
                brand: "High Voltage",
                model: "Model: UNIV-HV ST61K",
                size: "Description: 76.8V100Ah Per Module 8 Pcs of 7.6kwh LiFePO4 Lithium Battery as 61kWh",
                horsepower: "Rate power: 61Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 7,500",
            }
        ]
    },
    {
        id: 55,
        title: "Lithium Battery",
        model: "100Kwh",
        description: "High Voltage",
        imgSrc: "image/100Kwh.jpg",
        Info:[
            {
                brand: "High Voltage",
                model: "Model: 100Kwh",
                size: "Description: 51.2v 280Ah per Pack 7 Packs in Series as 100Kw 358V",
                horsepower: "Rate power: 100Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 1,1000",
            }
        ]
    },
    {
        id: 56,
        title: "Lithium Battery",
        model: "200Kwh",
        description: "High Voltage",
        imgSrc: "image/200kwh.png",
        Info:[
            {
                brand: "High Voltage",
                model: "Model: 200Kwh",
                size: "Description: 51.2v 280Ah per Pack 14 Packs in Series as 200Kwh 716V",
                horsepower: "Rate power: 200Kwh",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: 20,500$",
            }
        ]
    },
    {
        id: 57,
        title: "Solar Panel",
        model: "",
        description: "LV Topsun 620w (2glass)",
        imgSrc: "image/solar_panel.png",
        Info:[
            {
                brand: "ម៉ាក: LV Topsun",
                model: "កម្រិតភ្លើង: 620W",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "កញ្ចក់សងខាង",
            }
        ]
    },
    {
        id: 58,
        title: "Solar Panel",
        model: "",
        description: "LV Topsun 550W",
        imgSrc: "image/solar_panel.png",
        Info:[
            {
                brand: "ម៉ាក: LV Topsun",
                model: "កម្រិតភ្លើង: 550W",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "កញ្ចក់មួយខាង",
            }
        ]
    },
    {
        id: 59,
        title: "Solar Panel",
        model: "",
        description: "LV Topsun 340w",
        imgSrc: "image/solar_panel.png",
        Info:[
            {
                brand: "ម៉ាក: LV Topsun",
                model: "កម្រិតភ្លើង: 340W",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "កញ្ចក់មួយខាង",
            }
        ]
    },
    {
        id: 60,
        title: "Solar Panel",
        model: "",
        description: "Longi 585W (2glass)",
        imgSrc: "image/solar_panel.png",
        Info:[
            {
                brand: "ម៉ាក: Long gi",
                model: "កម្រិតភ្លើង: 585W",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "កញ្ចក់សងខាង",
            }
        ]
    },
    {
        id: 61,
        title: "Solar Panel",
        model: "",
        description: "Sunova 550W",
        imgSrc: "image/solar_panel.png",
        Info:[
            {
                brand: "ម៉ាក: Sunova",
                model: "កម្រិតភ្លើង: 550W",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "កញ្ចក់មួយខាង",
            }
        ]
    },
    {
        id: 62,
        title: "Solar Panel",
        model: "",
        description: "Dahai 585W",
        imgSrc: "image/solar_panel.png",
        Info:[
            {
                brand: "ម៉ាក: Dahai",
                model: "កម្រិតភ្លើង: 585W",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "កញ្ខក់មួយខាង",
            }
        ]
    },
    {
        id: 63,
        title: "Solar Panel",
        model: "",
        description: "Dahai 585W (2 glass)",
        imgSrc: "image/solar_panel.png",
        Info:[
            {
                brand: "ម៉ាក: Dahai 585W",
                model: "កម្រិតភ្លើង: 585W",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "កញ្ចក់សងខាង",
            }
        ]
    },
    {
        id: 64,
        title: "Solar Charger Controller",
        model: "",
        description: "Sky Dream Serial",
        imgSrc: "image/sky_dream_serial(1).jpg",
        Info:[
            {
                brand: "Model: Sky Dream Serial",
                model: "Spec: 30A/12V-24V USB",
                size: "Description: PWM,With current display, 32-bit imported chip,Light and Timer control，Lithium battery support",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $20.0",
                solarpanel: "លក់រាយ:  $30.0",
            }
        ]
    },
    {
        id: 81,
        title: "Solar Charger Controller",
        model: "",
        description: "Sky Dream Serial",
        imgSrc: "image/sky_dream_serial(1).jpg",
        Info:[
            {
                brand: "Model: Sky Dream Serial",
                model: "Spec: 40A/12V-24V USB",
                size: "Description: PWM,With current display, 32-bit imported chip,Light and Timer control，Lithium battery support",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $30.0",
                solarpanel: "លក់រាយ:  $40.0",
            }
        ]
    },
    {
        id: 65,
        title: "Solar Charger Controller",
        model: "",
        description: "Sky Dream Serial",
        imgSrc: "image/sky_dream_serial(2).jpg",
        Info:[
            {
                brand: "Model: Sky Dream Serial",
                model: "Spec: 60A/24-48V",
                size: "Description: PWM,With current display, 32-bit imported chip,Light and Timer control，Lithium battery support",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $45.0",
                solarpanel: "លក់រាយ: $60.0",
            }
        ]
    },
    {
        id: 66,
        title: "Solar Charger Controller",
        model: "",
        description: "Sky Dream Series",
        imgSrc: "image/sky_dream_serial(3).jpg",
        Info:[
            {
                brand: "Model: Sky Dream Serial",
                model: "Spec: 20A/12V-24V USB*2",
                size: "Description: PWM,Without current display, 32-bits imported chip,Large terminal,Light and Timer control，Lithium battery support",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $15.0",
                solarpanel: "លក់រាយ: $25.0",
            }
        ]
    },
    {
        id: 67,
        title: "Solar Charger Controller",
        model: "",
        description: "Tracer Dream Series",
        imgSrc: "image/Tracer_dream_serial.jpg",
        Info:[
            {
                brand: "Model: Tracer Dream Serial",
                model: "Spec: 20A/12V-24V Max.75V Solar Input.USB 2A 5V*2",
                size: "Description: MPPT,Common positive. Adopt Synchronous Rectifier Technology，Tracking accuracy 99.5%，Efficiency 98%.Red and Black terminal，LCD Display and working LED Design",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $50.0",
                solarpanel: "លក់រាយ: $60.0",
            }
        ]
    },
    {
        id: 68,
        title: "Solar Charger Controller",
        model: "",
        description: "Tracer Dream Series",
        imgSrc: "image/Tracer_dream_serial.jpg",
        Info:[
            {
                brand: "Model: Tracer Dream Serial",
                model: "Spec: 30A/12V-24V Max.75V Solar Input.USB 2A 5V*2",
                size: "Description: MPPT,Common positive. Adopt Synchronous Rectifier Technology，Tracking accuracy 99.5%，Efficiency 98%.Red and Black terminal，LCD Display and working LED Design",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $65.0",
                solarpanel: "លក់រាយ: $80.0",
            }
        ]
    },
    {
        id: 69,
        title: "Solar Charger Controller",
        model: "",
        description: "Tracer Dream Series",
        imgSrc: "image/Tracer_dream_serial1.jpg",
        Info:[
            {
                brand: "Model: Tracer Dream Serial",
                model: "Spec: 40A/12V24V Max.Solar Input 100V",
                size: "Description: MPPT,Common positive. Adopt Synchronous Rectifier Technology，Tracking accuracy 99.5%，Efficiency 98%.Red and Black terminal，LCD Display and working LED Design",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $100.0",
                solarpanel: "លក់រាយ: $130.0",
            }
        ]
    },
    {
        id: 70,
        title: "Solar Charger Controller",
        model: "",
        description: "Tracer Dream Serial",
        imgSrc: "image/Tracer_dream_serial2.jpg",
        Info:[
            {
                brand: "Model: Tracer Dream Serial",
                model: "Spec: 60A 12v 24v 48V auto work,Max Solar input 150V",
                size: "Description: MPPT,Adoped Microchip CPU,Common Negative Design..Support Lithium battery and start from solar.Adopt synchronous rectifier techology.Tracking accuracy 99.5%, Efficiency 98%,Red and Black terminal,LCD DISPLAY,Narural cooling，Bluetooth Module standard",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $160.0",
                solarpanel: "លក់រាយ: $190.0",
            }
        ]
    },
    {
        id: 71,
        title: "Solar Charger Controller",
        model: "",
        description: "Tracer Dream Series",
        imgSrc: "image/Tracer_dream_serial3.jpg",
        Info:[
            {
                brand: "Model: Tracer Dream Serial",
                model: "Spec: 80A 12v 24v 48V auto work,Max Solar input 200V",
                size: "Description: MPPT,Adoped Microchip CPU,Common Negative Design..Support Lithium battery and start from solar.Adopt synchronous rectifier techology.Tracking accuracy 99.5%, Efficiency 98%,Red and Black terminal,LCD DISPLAY,Narural cooling，Bluetooth Module standard",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "លក់ដុំ: $220.0",
                solarpanel: "លក់រាយ: $250.0",
            }
        ]
    }, 
    {
        id: 72,
        title: "Inverter /អាំងវុិចទ័របម្លែងភ្លើង",
        model: "",
        description: "Pure since wave",
        imgSrc: "image/Hippo_500w_12v.jpg",
        Info:[
            {
                brand: "ម៉ាក: Hippo Pure since wave",
                model: "",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "spec: 500w-12v",
            }
        ]
    },
    {
        id: 73,
        title: "Inverter /អាំងវុិចទ័របម្លែងភ្លើង",
        model: "",
        description: "Modify sine wave",
        imgSrc: "image/Hippo_1000w_12v.jpg",
        Info:[
            {
                brand: "ម៉ាក: Modify sine wave",
                model: "",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "Spec: 1000w-12v",
            }
        ]
    },
    {
        id: 74,
        title: "Inverter /អាំងវុិចទ័របម្លែងភ្លើង",
        model: "",
        description: "Pure since wave",
        imgSrc: "image/Hippo_1000w_12v(01).jpg",
        Info:[
            {
                brand: "ម៉ាក: Hippo pure sine wave",
                model: "",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "Spec: 1000w-12v",
            }
        ]
    },
    {
        id: 75,
        title: "Inverter /អាំងវុិចទ័របម្លែងភ្លើង",
        model: "",
        description: "Pure since wave",
        imgSrc: "image/Hippo_2000w_12v.jpg",
        Info:[
            {
                brand: "ម៉ាក: Pure since wave",
                model: "",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "Spec: 2000w-12v",
            }
        ]
    },
    {
        id: 76,
        title: "inverter /អាំងវុិចទ័របម្លែងភ្លើង",
        model: "",
        description: "Modify sine wave",
        imgSrc: "image/Hippo_3000w_12v.jpg",
        Info:[
            {
                brand: "ម៉ាក: Pure since wave",
                model: "",
                size: "",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "Spec: 3000w-12v",
            }
        ]
    },
    {
        id: 77,
        title: "Inverter / អាំងវុិចទ័រ Hippo",
        model: "",
        description: "SS1.5kW-12v",
        imgSrc: "image/hippo_inverter_01.jpg",
        Info:[
            {
                brand: "ម៉ាក: Hippo",
                model: "Model: SS1.5kW-12V",
                size: "Description: Inverter output power: 1.5Kwv, battery voltage: 12V, MPPT input  current and power: 14A/1000W, MTTP input voltage range: 18-100V, supported battery type: Gel battery, lead-acid battery, lithium battery, communication terminal: USB(WI-FI), RJ45(CAN, 485 protocol, max parallel connected: 9pcs)",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 135",
            }
        ]
    },
    {
        id: 78,
        title: "Inverter / អាំងវុិចទ័រ Hippo",
        model: "",
        description: "SS3.6kw-24v",
        imgSrc:"image/hippo_inverter_02.jpg",
        Info:[
            {
                brand: "ម៉ាក: Hippo ",
                model: "Model: SS3.6kw-24V",
                size: "Description: Inverter output power: 3.5kw, battery voltage: 24v, MPPT input current and power: 14A/1500W, MPPT input voltage range: 120-450v, supported battery types: Gel battery, lead-acid battery, lithium battery, communication terminal: USB(WI-FI) , RJ45(CAN, 485 protocol)",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 220",
            }
        ]
    },
    {
        id: 79,
        title: "Inverter / អាំងវុិចទ័រ Hippo",
        model: "",
        description: "SS5.0kw-46v",
        imgSrc:"image/hippo_inverter_03.jpg",
        Info:[
            {
                brand: "ម៉ាក: Hippo",
                model: "Model: SS5.0kw-46v",
                size: "Description: Inverter output power: 5kw, battery voltage: 48v, MPPT input current and power: 18A/6000W, MPPT input voltage range: 120v-450v, supported battery type: Gel battery, lead-acid battery, lithium battery, communication terminal: USB(WI-FI), RJ45(CAN, 485 protocol, max, parallel connected: 9pcs)",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $ 330",
            }
        ]
    },
    {
        id: 80,
        title: "Inverter / អាំងវុិចទ័រ Hippo",
        model: "",
        description: "SS6.0kw-46v",
        imgSrc:"image/hippo_inverter_04.jpg",
        Info:[
            {
                brand: "ម៉ាក: Hippo",
                model: "Model: SS6.0kw-46v",
                size: "Description: Inverter output power: 6kw, battery voltage: 48v, MPPT input current and power: 27A/9000W, MPPT input voltage range: 60-450V, supported battery types: Gel battery, lead-acid battery, lithium battery, communication terminal: USB (WI-FI), RJ45(CAN, 485 protocol)",
                horsepower: "",
                dc: "",
                ac: "",
                heigh: "",
                amountwater: "",
                solarpanel: "លក់ដុំ: $300",
            }
        ]
    }, 
]
//active btn
// Function to show product details
function showProductDetails(productId) {
    // Find the product from both arrays
    const foundProduct = [...product, ...listProduct].find(p => p.id === productId);
    if (foundProduct) {
        // Store product data in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(foundProduct));
        // Redirect to product detail page
        window.location.href = 'product-detail.html';
    }
}

const listProductcard = document.querySelector(".product-list-container");
// Function to show product details
function showProductDetails(productId) {
    const allProducts = [...product, ...listProduct];
    const selectedProduct = allProducts.find(p => p.id === productId);
    if (selectedProduct) {
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        window.location.href = 'product-detail.html';
    }
}

// Function to filter products by category
// Function to show product details
function showProductDetails(productId) {
    const allProducts = [...product, ...listProduct];
    const selectedProduct = allProducts.find(p => p.id === productId);
    if (selectedProduct) {
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        window.location.href = 'product-detail.html';
    }
}

// Function to render product list
function renderProducts(products) {
    return products.map((p) => {
        return `
            <div class="product-item" onclick="showProductDetails(${p.id})">
                <div class="product-img">
                    <img src="${p.imgSrc}" alt="${p.title}">
                </div>
                <div class="product-title">
                    <h2>${p.title}</h2>
                    ${p.model ? `<p>${p.model}</p>` : ''}
                    <p>${p.description}</p>
                </div>
            </div>`;
    }).join("");
}

// Search products by query (searches title, model, description)
function toggleMenu() {
    const navMid = document.querySelector('.nav-mid');
    navMid.classList.toggle('active');
}

function search() {
    const query = document.getElementById('searchInput').value.trim();
    // Only search if query is at least 2 characters
    if (query.length >= 2) {
        window.location.href = `product.html?search=${encodeURIComponent(query)}`;
    } else if (query.length > 0) {
        // Optional: Show a message that search term is too short
        alert('សូមវាយបញ្ចូលពាក្យស្វែងរកយ៉ាងហោចណាស់២តួអក្សរ។');
    }
}

function searchProducts(query) {
    const q = (query || '').toLowerCase().trim();
    const allProducts = [...(typeof product !== 'undefined' ? product : []), ...(Array.isArray(listProduct) ? listProduct : [])];
    if (!q) return allProducts;

    // Determine if the search is for a specific category
    let category = null;
    if (q.includes('inverter') || q.includes('អាំងវុិចទ័រ')) {
        category = 'inverter';
    } else if (q.includes('solar pump') || q.includes('ម៉ូទ័រទម្លាក់អណ្តូង') || q.includes('ម៉ូទ័ទម្លាក់អណ្តូង')) {
        category = 's_pump';
    } else if (q.includes('solar panel') || q.includes('ផ្ទាំងសូឡា')) {
        category = 'panel';
    } else if (q.includes('controller') || q.includes('កុងត្រូល័រ')) {
        category = 'controller';
    } else if (q.includes('battery') || q.includes('អាគុយ')) {
        category = 'battery';
    }

    // If a category is matched, filter by that category
    if (category) {
        return allProducts.filter(p => {
            const productCategory = getProductCategory(p);
            return productCategory === category;
        });
    }

    // Otherwise do a general text search
    return allProducts.filter(p => {
        const hay = (`${p.title || ''} ${p.model || ''} ${p.description || ''}`).toLowerCase();
        return hay.includes(q);
    });
}

// Helper function to determine product category
function getProductCategory(product) {
    const title = (product.title || '').toLowerCase();
    const desc = (product.description || '').toLowerCase();
    const imgSrc = (product.imgSrc || '').toLowerCase();

    if (imgSrc.includes('s_pump_') || title.includes('ម៉ូទ័រទម្លាក់អណ្តូង1សេស') || title.includes('ម៉ូទ័ទម្លាក់អណ្តូង')) {
        return 's_pump';
    }
     else if (title.includes('inverter') || title.includes('អាំងវុិចទ័រ')) {
        return 'inverter';
    } else if (title.includes('solar panel') || title.includes('ផ្ទាំងសូឡា')) {
        return 'panel';
    } else if (title.includes('controller') || title.includes('កុងត្រូល័រ')) {
        return 'controller';
    } else if (title.includes('battery') || title.includes('អាគុយ')) {
        return 'battery';
    }
    return null;
}

// Function to filter products by category
function filterProducts(category) {
    const allProducts = [...product, ...listProduct];
    if (category === 'all') {
        return allProducts;
    }
    
    return allProducts.filter(p => {
        const title = p.title.toLowerCase();
        const description = p.description.toLowerCase();
        
        switch(category) {
            case 'panel':
                return title.includes('solar panel') || title.includes('ផ្ទាំងសូឡា');

            case 'submersible':
                // Match a broader set of Khmer variants and short substrings to include typos/variants
                // Avoid matching 'ទឹកស្រះ' (tank) which is different
                return (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
            case 'submersible1hp':
                // Filter for 1HP submersible pumps only
                const is1HP = description.includes('1HP') || description.includes('1សេស') || 
                              title.includes('1HP') || title.includes('1សេស');
                const isSubmersible = (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
                return is1HP && isSubmersible;
                // 22222
            case 'submersible2':
                return (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
            case 'submersible2hp':
                // Filter for 1HP submersible pumps only
                const is2HP = description.includes('2HP') || description.includes('2សេស') || 
                              title.includes('2HP') || title.includes('2សេស');
                const isSubmersible2 = (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
                return is2HP && isSubmersible2;
                // 33333
                case 'submersible3':
                return (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
            case 'submersible3hp':
                // Filter for 1HP submersible pumps only
                const is3HP = description.includes('3HP') || description.includes('3សេស') || 
                              title.includes('3HP') || title.includes('3សេស');
                const isSubmersible3 = (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
                return is3HP && isSubmersible3;
                // 1010101010
                case 'submersible10':
                return (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
            case 'submersible10hp':
                // Filter for 1HP submersible pumps only
                const is10HP = description.includes('10HP') || description.includes('10សេស') || 
                              title.includes('10HP') || title.includes('10សេស');
                const isSubmersible10 = (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
                return is10HP && isSubmersible10;
                // 151515
                case 'submersible15':
                return (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
            case 'submersible15hp':
                // Filter for 1HP submersible pumps only
                const is15HP = description.includes('15HP') || description.includes('15សេស') || 
                              title.includes('15HP') || title.includes('15សេស');
                const isSubmersible15 = (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
                return is15HP && isSubmersible15;
                // 7.5 submersible
                case 'submersible7.5':
                return (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
            case 'submersible7.5hp':
                // Filter for 1HP submersible pumps only
                const is75HP = description.includes('7.5HP') || description.includes('7.5សេស') || 
                              title.includes('7.5HP') || title.includes('7.5សេស');
                const isSubmersible75 = (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
                return is75HP && isSubmersible75;
                // 20hp solarpump
                case 'submersible20':
                return (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
            case 'submersible20hp':
                // Filter for 1HP submersible pumps only
                const is20HP = description.includes('20HP') || description.includes('20សេស') || 
                              title.includes('20HP') || title.includes('20សេស');
                const isSubmersible20 = (
                    title.includes('ម៉ូទ័រទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ូទ័ទម្លាក់អណ្តូង') ||
                    title.includes('ម៉ាកទម្លាក់អណ្តូង') ||
                    title.includes('ទម្ល') ||
                    title.includes('បឺត') ||
                    description.includes('ទម្ល') ||
                    description.includes('បឺត')
                );
                return is20HP && isSubmersible20;
                
            case 'tank':
                return title.includes('ម៉ូទ័រទឹកស្រះ') || title.includes('ម៉ូទ័ទឹកស្រះ');
            case 'inverter':
                return title.includes('inverter') || description.includes('inverter');
            case 'controller':
                return title.includes('controller') || title.includes('កុងត្រូល័រ') ||
                       description.includes('controller') || description.includes('កុងត្រូល័រ');
            case 'battery':
                return title.includes('battery') || title.includes('អាគុយ') ||
                       description.includes('battery') || description.includes('អាគុយ');
            default:
                return true;
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    console.log('DOM Content Loaded');
    
    const listProductcard = document.querySelector('.product-list-container');
    if (listProductcard) {
        // Initial display of all products
        const allProducts = [...product, ...listProduct];
        listProductcard.innerHTML = renderProducts(allProducts);

        // Add click event listeners to filter buttons
        const filterButtons = document.querySelectorAll('.sidebar-item .btn');
        filterButtons.forEach(button => {
            // Use the button element directly to avoid issues when a child node is clicked
            button.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button element
                button.classList.add('active');

                // Determine category based on button text (use button.textContent)
                // Check specific/longer keywords first to avoid generic 'solar' matching too early
                let category = 'all';
                const buttonText = (button.textContent || '').toLowerCase().trim();
                console.log('Sidebar button clicked:', { buttonText, target: e.target });

                // Prefer specific Khmer/English variants
                if (/(submersible1hp|1សេស)/i.test(buttonText)) {
                    category = 'submersible1hp';
                } else if (/(submersible2hp|២សេស)/i.test(buttonText)) {
                    category = 'submersible2hp';
                }else if(/(submersible3hp|3សេស)/i.test(buttonText)){
                    category = 'submersible3hp';
                }else if(/(submersible10hp|10សេស)/i.test(buttonText)){
                    category = "submersible10hp";
                }else if(/(submersible4hp|10សេស)/i.test(buttonText)){
                    category = "submersible4hp";
                }else if(/(submersible15hp|15សេស)/i.test(buttonText)){
                    category = "submersible15hp"
                }else if(/(submersible7.5hp|7.5សេស)/i.test(buttonText)){
                    category = "submersible7.5hp"
                }else if(/(submersible20hp|20សេស)/i.test(buttonText)){
                    category = "submersible20hp";
                }
                else if (/(submersible|submersible solar pump|ម៉ូទ័រទម្លាក់អណ្តូង|ម៉ូទ័ទម្លាក់អណ្តូង|ម៉ាកទម្លាក់|ទម្លាក់)/i.test(buttonText)) {
                    category = 'submersible';
                } else if (/(tank|soalr pump|solar pump|ម៉ូទ័រទឹកស្រះ|ទឹកស្រះ|water pump)/i.test(buttonText)) {
                    category = 'tank';
                } else if (/(solar panel|ផ្ទាំងសូឡា|solar panel|ផ្ទាំង)/i.test(buttonText)) {
                    category = 'panel';
                } else if (/(inverter|អាំងវុិចទ័រ)/i.test(buttonText)) {
                    category = 'inverter';
                } else if (/(controller|កុងត្រូល័រ)/i.test(buttonText)) {
                    category = 'controller';
                } else if (/(battery|អាគុយ|lithium)/i.test(buttonText)) {
                    category = 'battery';
                }

                // Filter and display products
                console.log('Determined category:', category);
                const filteredProducts = filterProducts(category);
                console.log('Filtered products count:', filteredProducts.length);
                if (filteredProducts.length > 0) {
                    listProductcard.innerHTML = renderProducts(filteredProducts);
                } else {
                    listProductcard.innerHTML = '<div class="no-products">មិនមានផលិតផលត្រូវបានរកឃើញទេ</div>';
                }
            });
        });
        // Handle URL parameters for category or search
        try {
            const params = new URLSearchParams(window.location.search);
            const searchQuery = params.get('search');
            const requestedCategory = (params.get('category') || '').toLowerCase().trim();

            // Handle search query if present
            if (searchQuery) {
                const searchResults = searchProducts(searchQuery);
                listProductcard.innerHTML = searchResults.length > 0 
                    ? renderProducts(searchResults)
                    : '<div class="no-products">មិនមានផលិតផលត្រូវបានរកឃើញទេ</div>';
                return;
            }

            // Otherwise handle category if present
            if (requestedCategory) {
                const allowed = ['all','panel','submersible','tank','inverter','controller','battery', 'submersible1hp', 'submersible2hp'];
                const category = allowed.includes(requestedCategory) ? requestedCategory : 'all';

                // clear existing active state
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // find a matching sidebar button and mark active
                const matchBtn = Array.from(filterButtons).find(btn => {
                    const t = (btn.textContent || '').toLowerCase();
                    switch (category) {
                        case 'submersible1hp': return /submersible1hp|1សេស/i.test(t);
                        case 'submersible2hp': return /submersible2hp|២សេស/i.test(t);
                        case 'panel': return /solar panel|ផ្ទាំង|ផ្ទាំងសូឡា/.test(t);
                        case 'inverter': return /inverter|អាំងវុិចទ័រ/.test(t);
                        case 'controller': return /controller|កុងត្រូល័រ/.test(t);
                        case 'battery': return /battery|អាគុយ|lithium/.test(t);
                        case 'submersible': return /submersible|ទម្ល|ទម្លាក់|ម៉ូទ័រទម្លាក់អណ្តូង/.test(t);
                        case 'tank': return /tank|soalr pump|solar pump|ទឹកស្រះ|ម៉ូទ័រទឹកស្រះ/.test(t);
                        case 'all': default: return /all|ទាំងអស់/.test(t) || t === '';
                    }
                });

                if (matchBtn) matchBtn.classList.add('active');

                // render filtered products
                const filtered = filterProducts(category);
                const listProductcard = document.querySelector('.product-list-container');
                if (listProductcard) {
                    listProductcard.innerHTML = filtered.length ? renderProducts(filtered) : '<div class="no-products">មិនមានផលិតផលត្រូវបានរកឃើញទេ</div>';
                }
            }
        } catch (err) {
            console.error('Error applying category from URL:', err);
        }
        
        // --- Search handlers ---
        const searchInput = document.querySelector('.nav-right input');
        const searchBtn = document.querySelector('.nav-right button');
        let searchTimeout = null;

        const clearSidebarActive = () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
        };

        const doSearch = () => {
            if (!listProductcard) return;
            const q = (searchInput && searchInput.value) ? searchInput.value.toLowerCase().trim() : '';
            console.log('Search query:', q);
            clearSidebarActive();
            const results = q ? searchProducts(q) : ([...(typeof product !== 'undefined' ? product : []), ...(Array.isArray(listProduct) ? listProduct : [])]);
            console.log('Search results:', results.length);
            if (results.length > 0) {
                listProductcard.innerHTML = renderProducts(results);
            } else {
                listProductcard.innerHTML = '<div class="no-products">មិនមានផលិតផលត្រូវបានរកឃើញទេ</div>';
            }
        };

        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                doSearch();
            });
        }

        if (searchInput) {
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    doSearch();
                }
            });
            // live search with debounce
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(doSearch, 300);
            });
        }
    }

    // Handle product detail page display
    const productDetail = document.querySelector('.product-detail');
    if (productDetail) {
        console.log('Found product detail container'); // Debug log
        try {
            const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
            console.log('Selected product:', selectedProduct); // Debug log
            
            if (selectedProduct) {
                const detailHTML = `
                    <div class="back-button">
                        <button onclick="history.back()" class="btn-back">
                            <span>&#8592;</span> ត្រឡប់ក្រោយ
                        </button>
                    </div>
                    <div class="product-detail-container">
                        <div class="product-image">
                            <img src="${selectedProduct.imgSrc}" alt="${selectedProduct.title}">
                        </div>
                        <div class="product-info-detail">
                            <h2>${selectedProduct.title}</h2>
                            ${selectedProduct.model ? `<p class="model">${selectedProduct.model}</p>` : ''}
                            <p class="description">${selectedProduct.description}</p>
                            ${selectedProduct.Info ? `
                                <div class="specifications">
                                    <h3>ព័ត៍មានលម្អិត:</h3>
                                    <ul>
                                        <li> ${selectedProduct.Info[0].brand}</li>
                                        <li> ${selectedProduct.Info[0].model}</li>
                                        <li> ${selectedProduct.Info[0].size}</li>
                                        <li> ${selectedProduct.Info[0].horsepower}</li>
                                        <li> ${selectedProduct.Info[0].dc}</li>
                                        <li> ${selectedProduct.Info[0].ac}</li>
                                        <li> ${selectedProduct.Info[0].heigh}</li>
                                        <li> ${selectedProduct.Info[0].amountwater}</li>
                                        <li> ${selectedProduct.Info[0].solarpanel}</li>
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
                productDetail.innerHTML = detailHTML;
            } else {
                productDetail.innerHTML = '<p>Product not found</p>';
            }
        } catch (error) {
            console.error('Error displaying product details:', error);
            productDetail.innerHTML = '<p>Error loading product details</p>';
        }
    }
});
