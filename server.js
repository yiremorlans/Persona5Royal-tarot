const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const PORT = 3001

const arcana = {
    'fool': {
        'confidant': 'Joker',
        'number': '0',
        'tarot' : 'url'
    },
    'magician': {
        'confidant': 'Morgana',
        'number': 'I',
        'tarot': 'url'
    },
    'priestess': {
        'confidant': 'Makoto Nijima',
        'number': 'II',
        'tarot': 'url'
    },
    'empress': {
        'confidant': 'Haru Okumura',
        'number': 'III',
        'tarot': 'url'
    },
    'emperor': {
        'confidant': 'Yusuke Kitagawa',
        'number': 'IV',
        'tarot': 'url'
    },
    'hierophant': {
        'confidant': 'Sojiro Sakura',
        'number': 'V',
        'tarot': 'url'
    },
    'lovers': {
        'confidant': 'Ann Takamaki',
        'number': 'VI',
        'tarot': 'url'
    },
    'chariot': {
        'confidant': 'Ryuji Sakamoto',
        'number': 'VII',
        'tarot': 'url'
    },
    'justice': {
        'confidant': 'Goro Akechi',
        'number': 'VIII',
        'tarot': 'url'
    },
    'hermit': {
        'confidant': 'Futaba Sakura',
        'number': 'IX',
        'tarot': 'url'
    },
    'fortune': {
        'confidant': 'Chihaya Mifune',
        'number': 'X',
        'tarot': 'url'
    },
    'strength': {
        'confidant': 'Caroline & Justine',
        'number': 'XI',
        'tarot': 'url'
    },
    'hanged man': {
        'confidant': 'Munehisa Iwai',
        'number': 'XII',
        'tarot': 'url'
    },
    'death': {
        'confidant': 'Tae Takemi',
        'number': 'XIII',
        'tarot': 'url'
    },
    'temperance': {
        'confidant': 'Sadayo Kawakami',
        'number': 'XIV',
        'tarot': 'url'
    },
    'devil': {
        'confidant': 'Ichiko Ohya',
        'number': 'XV',
        'tarot': 'url'
    },
    'tower': {
        'confidant': 'Shinya Oda',
        'number': 'XVI',
        'tarot': 'url'
    },
    'star': {
        'confidant': 'Hifumi Togo',
        'number': 'XVII',
        'tarot': 'url'
    },
    'moon': {
        'confidant': 'Yuuki Mishima',
        'number': 'XVIII',
        'tarot': 'url'
    },
    'sun': {
        'confidant': 'Toranosuke Yoshida',
        'number': 'XIX',
        'tarot': 'url'
    },
    'judgment': {
        'confidant': 'Sae Nijima',
        'number': 'XX',
        'tarot': 'url'
    },
    'faith': {
        'confidant': 'Kasumi Yoshizawa',
        'number': '',
        'tarot': 'url'
    },
    'councillor': {
        'confidant': 'Takuto Marukii',
        'number': '',
        'tarot': 'url'
    },
    'world': {}
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:arcana', (req, res) => {
    const tarot = req.params.arcana.toLowerCase()
    if (arcana[tarot]) {
        res.json(arcana[tarot])
     } else {
        res.status(404).end()
        //res.redirect('https://http.dog/404.jpg')
     }    
})

app.get('/api/', (req, res) => {
    res.json(arcana)
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`)   
})

