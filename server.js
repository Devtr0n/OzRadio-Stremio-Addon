const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/manifest.json', (req, res) => {
    res.json({
        id: "org.stremio.australianfm",
        version: "1.0.1",
        name: "Australian FM Radio",
        description: "Listen to live Australian FM radio stations.",
        icon: "https://cdn-1.webcatalog.io/catalog/triple-j/triple-j-icon-filled-256.png",
        resources: ["catalog", "meta", "stream"],
        types: ["music"],
        idPrefixes: ["triplej", "nova", "smoothfm", "star"],
        catalogs: [
            {
                type: "music",
                id: "australianfm",
                name: "Australian FM Radio"
            }
        ],
        addonVersion: "1.0.1",
        compatibility: { stremio: ">= 5.0" },
        community: true
    });
});

app.get('/catalog/music/australianfm.json', (req, res) => {
    res.json({
        metas: [
            {
                id: "triplej",
                type: "music",
                name: "Triple J",
                poster: "https://cdn-1.webcatalog.io/catalog/triple-j/triple-j-icon-filled-256.png"
            },
            {
                id: "nova",
                type: "music",
                name: "Nova",
                poster: "https://i0.wp.com/www.radiojinglespro.com/wp-content/uploads/2011/02/Nova_FM_logo.jpg"
            },
            {
                id: "smoothfm",
                type: "music",
                name: "Smooth FM",
                poster: "https://smooth.com.au/assets/smooth/logos/meta/smooth.jpg"
            },
            {
                id: "star",
                type: "music",
                name: "Star FM",
                poster: "https://static.wikia.nocookie.net/australianradio/images/9/97/Star_FM_logo.png"
            }
        ]
    });
});

app.get('/meta/music/:id.json', (req, res) => {
    const id = req.params.id;
    const metas = {
        "triplej": {
            id: "triplej",
            type: "music",
            name: "Triple J",
            description: "Live stream of Triple J broadcast channels",
            poster: "https://cdn-1.webcatalog.io/catalog/triple-j/triple-j-icon-filled-256.png",
            background: "https://static.mytuner.mobi/media/tvos_radios/Q82S6DFmcT.png",
            stream: [{ id: `triplej:${id}`, type: "music" }]
        },
        "nova": {
            id: "nova",
            type: "music",
            name: "Nova",
            description: "Live stream of Nova radio channels",
            poster: "https://i0.wp.com/www.radiojinglespro.com/wp-content/uploads/2011/02/Nova_FM_logo.jpg",
            background: "https://nova.com.au/assets/nova/logos/meta/nova.jpg",
            stream: [{ id: `nova:${id}`, type: "music" }]
        },
        "smoothfm": {
            id: "smoothfm",
            type: "music",
            name: "Smooth FM",
            description: "Live stream of Smooth FM radio channels",
            poster: "https://smooth.com.au/assets/smooth/logos/meta/smooth.jpg",
            background: "https://smooth.com.au/assets/smooth/logos/meta/smooth-bg.jpg",
            stream: [{ id: `smoothfm:${id}`, type: "music" }]
        },
        "star": {
            id: "star",
            type: "music",
            name: "Star FM",
            description: "Live stream of Star FM radio channels",
            poster: "https://static.wikia.nocookie.net/australianradio/images/9/97/Star_FM_logo.png",
            background: "https://static.wikia.nocookie.net/australianradio/images/9/97/Star_FM_logo.png",
            stream: [{ id: `star:${id}`, type: "music" }]
        }
    };

    if (metas[id]) {
        res.json({ meta: metas[id] });
    } else {
        res.status(404).json({ error: "Metadata not found" });
    }
});

app.get('/stream/music/:id.json', (req, res) => {
    const id = req.params.id;
    const streams = {
        "triplej": [
            {
                id: `triplej:${id}:adelaide`,
                title: "Triple J Adelaide Live FM Audio Stream",
                url: "http://live-radio01.mediahubaustralia.com/5TJW/aac/;*.mp3",
                isFree: true,
                type: "music"
            },
            {
                id: `triplej:${id}:brisbane`,
                title: "Triple J Brisbane Live FM Audio Stream",
                url: "http://live-radio01.mediahubaustralia.com/4TJW/aac/;*.mp3",
                isFree: true,
                type: "music"
            },
            {
                id: `triplej:${id}:darwin`,
                title: "Triple J Darwin Live FM Audio Stream",
                url: "http://live-radio01.mediahubaustralia.com/8TJW/aac/;*.mp3",
                isFree: true,
                type: "music"
            },
            {
                id: `triplej:${id}:perth`,
                title: "Triple J Perth Live FM Audio Stream",
                url: "http://live-radio01.mediahubaustralia.com/6TJW/aac/;*.mp3",
                isFree: true,
                type: "music"
            },
            {
                id: `triplej:${id}:sydney`,
                title: "Triple J Sydney Live FM Audio Stream",
                url: "http://live-radio01.mediahubaustralia.com/2TJW/aac/;*.mp3",
                isFree: true,
                type: "music"
            }
        ],
        "nova": [
            {
                id: `nova:${id}:adelaide`,
                title: "Nova Adelaide 91.9 FM Audio Stream",
                url: "http://streaming.novaentertainment.com.au/nova919",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:perth`,
                title: "Nova Perth 93.7 FM Audio Stream",
                url: "http://streaming.novaentertainment.com.au/nova937",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:sydney`,
                title: "Nova Sydney 96.9 FM Audio Stream",
                url: "http://streaming.novaentertainment.com.au/nova969",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:melbourne`,
                title: "Nova Melbourne 100 FM Audio Stream",
                url: "http://streaming.novaentertainment.com.au/nova100",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:brisbane`,
                title: "Nova Brisbane 106.9 FM Audio Stream",
                url: "http://streaming.novaentertainment.com.au/nova1069",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:fresh-country`,
                title: "Nova Fresh Country Audio Stream",
                url: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_POPUP1.mp3",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:nation-sydney`,
                title: "Nova Nation Sydney Audio Stream",
                url: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_NATION_SYDNEY.mp3",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:throwbacks`,
                title: "Nova Throwbacks Audio Stream",
                url: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_THROWBACK.mp3",
                isFree: true,
                type: "music"
            },
            {
                id: `nova:${id}:90s`,
                title: "Nova 90s Audio Stream",
                url: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_90S.mp3",
                isFree: true,
                type: "music"
            }
        ],
        "smoothfm": [
            {
                id: `smoothfm:${id}:sydney`,
                title: "Smooth 95.3 FM Sydney Audio Stream",
                url: "https://21413.live.streamtheworld.com/SMOOTH953_AAC48.aac",
                isFree: true,
                type: "music"
            }
        ],
        "star": [
            {
                id: `star:${id}:centralcoast`,
                title: "Star 104.5 FM Audio Stream",
                url: "https://21363.live.streamtheworld.com/STARFM_AAC48.aac",
                isFree: true,
                type: "music"
            }
        ]
    };

    if (streams[id]) {
        res.json({ streams: streams[id] });
    } else {
        res.status(404).json({ error: "Stream not found" });
    }
});

app.listen(port, () => {
    console.log(`Australian Radio Stremio add-on running at http://localhost:${port}`);
});