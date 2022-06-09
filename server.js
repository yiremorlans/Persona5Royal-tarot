const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const PORT = 3001

const arcana = {
    'fool': {
        'confidant': 'Igor',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/1/16/Persona_5_Confidant_Guides_Icon_%28Fool%29_-_Igor.png',
        'number': '0',
        'tarot' : 'https://static.wikia.nocookie.net/megamitensei/images/0/0b/P5_Fool_arcana_cooperation.png/'
    },
    'magician': {
        'confidant': 'Morgana',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/5/57/Persona_5_Confidant_Guides_Icon_%28Magician%29_-_Morgana.png',
        'number': 'I',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/e/e6/P5_Magician_arcana_cooperation.png'
    },
    'priestess': {
        'confidant': 'Makoto Nijima',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/e/e0/Persona_5_Confidant_Guides_Icon_%28Priestess%29_-_Makoto_Niijima.png',
        'number': 'II',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/c/c2/P5_Priestess_arcana_cooperation.png'
    },
    'empress': {
        'confidant': 'Haru Okumura',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/1/11/Persona_5_Confidant_Guides_Icon_%28Empress%29_-_Haru_Okumura.png',
        'number': 'III',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/5/52/P5_Empress_arcana_cooperation.png'
    },
    'emperor': {
        'confidant': 'Yusuke Kitagawa',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/6/6a/Persona_5_Confidant_Guides_Icon_%28Emperor%29_-_Yusuke_Kitagawa.png',
        'number': 'IV',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/8/86/P5_Emperor_arcana_cooperation.png'
    },
    'hierophant': {
        'confidant': 'Sojiro Sakura',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/c/c9/Persona_5_Confidant_Guides_Icon_%28Hierophant%29_-_Sojiro_Sakura.png',
        'number': 'V',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/d/d8/P5_Hierophant_Arcana.png'
    },
    'lovers': {
        'confidant': 'Ann Takamaki',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/5/5b/Persona_5_Confidant_Guides_Icon_%28Lovers%29_-_Ann_Takamaki.png',
        'number': 'VI',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/4/4b/P5_Lover_arcana_cooperation.png'
    },
    'chariot': {
        'confidant': 'Ryuji Sakamoto',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/b/b2/Persona_5_Confidant_Guides_Icon_%28Chariot%29_-_Ryuji_Sakamoto.png',
        'number': 'VII',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/e/eb/P5_Chariot_arcana_cooperation.png'
    },
    'justice': {
        'confidant': 'Goro Akechi',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/1/1c/Persona_5_Confidant_Guides_Icon_%28Justice%29_-_Goro_Akechi.png',
        'number': 'VIII',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/2/26/P5_Justice_Arcana.png'
    },
    'hermit': {
        'confidant': 'Futaba Sakura',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/c/c3/Persona_5_Confidant_Guides_Icon_%28Hermit%29_-_Futaba_Sakura.png',
        'number': 'IX',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/5/57/P5_Hermit_Arcana.png'
    },
    'fortune': {
        'confidant': 'Chihaya Mifune',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/0/07/Persona_5_Confidant_Guides_Icon_%28Fortune%29_-_Chihaya_Mifune.png',
        'number': 'X',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/6/6a/P5_Wheel_of_Fortune_Arcana.png'
    },
    'strength': {
        'confidant': 'Caroline & Justine',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/5/52/Persona_5_Confidant_Guides_Icon_%28Strength%29_-_Caroline_and_Justine.png',
        'number': 'XI',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/0/02/P5_Strength_Arcana.png'
    },
    'hanged man': {
        'confidant': 'Munehisa Iwai',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/2/2a/Persona_5_Confidant_Guides_Icon_%28Hanged-Man%29_-_Munehisa_Iwai.png',
        'number': 'XII',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/a/a1/P5_Hanged-Man_Arcana.png'
    },
    'death': {
        'confidant': 'Tae Takemi',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/4/44/Persona_5_Confidant_Guides_Icon_%28Death%29_-_Tae_Takemi.png',
        'number': 'XIII',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/a/a2/P5_Death_Arcana.png'
    },
    'temperance': {
        'confidant': 'Sadayo Kawakami',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/5/5e/Persona_5_Confidant_Guides_Icon_%28Temperance%29_-_Sadayo_Kawakami.png',
        'number': 'XIV',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/f/f4/P5_Temperance_Arcana.png'
    },
    'devil': {
        'confidant': 'Ichiko Ohya',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/8/87/Persona_5_Confidant_Guides_Icon_%28Devil%29_-_Ichiko_Ohya.png',
        'number': 'XV',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/5/55/P5_Devil_Arcana.png'
    },
    'tower': {
        'confidant': 'Shinya Oda',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/4/4c/Persona_5_Confidant_Guides_Icon_%28Tower%29_-_Shinya_Oda.png',
        'number': 'XVI',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/3/3e/P5_Tower_Arcana.png'
    },
    'star': {
        'confidant': 'Hifumi Togo',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/0/04/Persona_5_Confidant_Guides_Icon_%28Star%29_-_Hifumi_Togo.png',
        'number': 'XVII',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/f/f0/P5_Star_Arcana.png'
    },
    'moon': {
        'confidant': 'Yuuki Mishima',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/6/68/Persona_5_Confidant_Guides_Icon_%28Moon%29_-_Yuuki_Mishima.png',
        'number': 'XVIII',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/3/3d/P5_Moon_Arcana.png'
    },
    'sun': {
        'confidant': 'Toranosuke Yoshida',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/6/69/Persona_5_Confidant_Guides_Icon_%28Sun%29_-_Toranosuke_Yoshida.png',
        'number': 'XIX',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/3/38/P5_Sun_Arcana.png'
    },
    'judgment': {
        'confidant': 'Sae Nijima',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/b/b8/Persona_5_Confidant_Guides_Icon_%28Judgment%29_-_Sae_Niijima.png',
        'number': 'XX',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/a/ab/P5_Judgement_Arcana.png'
    },
    'faith': {
        'confidant': 'Kasumi Yoshizawa',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/b/bf/Persona_5_Confidant_Guides_Icon_%28Faith%29_-_Kasumi_Yoshizawa.png',
        'number': '',
        'tarot': 'https://https://static.wikia.nocookie.net/megamitensei/images/7/7f/FaithArcana.png',
        'tarot_reverse': 'https://static.wikia.nocookie.net/megamitensei/images/e/e6/Faith.png'

    },
    'councillor': {
        'confidant': 'Takuto Marukii',
        'confidant_url': 'https://static.wikia.nocookie.net/megamitensei/images/8/80/Persona_5_Confidant_Guides_Icon_%28Councillor%29_-_Takuto_Maruki.png',
        'number': '',
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/5/5b/P5_Royal_Consultant_Arcana.png'
    },
    'world': {
        'tarot': 'https://static.wikia.nocookie.net/megamitensei/images/2/2b/P5_World_Arcana.png'
    }
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

