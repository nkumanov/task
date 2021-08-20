
export function template(data) {

    let contentTemplate =
        `<div class="container">
        <div class="left-container">
            <div class="container-images">
                <img src="./flags/eu.svg" alt="" class="first-image">
                <img src="./flags/${data.info.image}" alt="" class="second-image">
            </div>
            <div class="content">
                <p>euro${data.sign}</p>
                <p>euro / ${data.info.message}</p>
            </div>
        </div>
        <div class="right-container">
            <span class="value" id="value">${data.value.toFixed(4)}</span>
        </div>
    </div>`;

    return contentTemplate;
}






export function generateTemplate(data) {
    let pairs = {
        'AUD': {
            'image': 'au.svg',
            'message': 'Australian Dollar'
        },
        'BGN': {
            'image': 'bg.svg',
            'message': 'Bulgarian Lev'
        },
        'GBP': {
            'image': 'gb.svg',
            'message': 'Pound sterling'
        },
        'USD': {
            'image': 'us.svg',
            'message': 'United States Dollar'
        },
        'UYU': {
            'image': 'uy.svg',
            'message': 'Uruguayan Peso'
        },
        'UZS': {
            'image': 'uz.svg',
            'message': 'Uzbekistani Som'
        },
        'VEF': {
            'image': 've.svg',
            'message': 'Venezuelan Bolívar'
        } ,
        'VND': {
            'image': 'vn.svg',
            'message': 'Vietnamese dong'
        } ,
        'VUV': {
            'image': 've.svg',
            'message': 'Vanuatu vatu'
        } ,
        'WST': {
            'image': 'ws.svg',
            'message': 'Samoan Tālā'
        } ,
        'XAG': {
            'image': 'hrum-remix-silver.png',
            'message': 'Silver Ounce'
        } ,
        'XAU': {
            'image': 'gold-svgrepo-com.svg', 
            'message': 'Gold Ounce'
        } ,
        'XCD': {
            'image': 'bq.svg',
            'message': 'East Caribbean Dollar'
        } ,
        'XDR': {
            'image': 'xdr.png',
            'message': 'IMF Special Drawing Rights'
        } 
    };

    let mainContent = document.getElementById('currency-container');
    let example = '';
    Object.entries(data).map(e => {

        let item = {
            'sign': e[0],
            'value': e[1],
            'info': pairs[e[0]]
        }
        
        example += template(item);

    })
    mainContent.innerHTML = example;
}

