const faker = require("faker"); 

const folders = {
    path: '/api/folders',
    method: 'GET',
    template: [{
        id: params => faker.datatype.uuid(),
        img: () => "https://live.staticflickr.com/65535/51272113725_214a399919_o_d.jpg",
        alt: "a bird"
    }]
};

const folder = {
    path: '/api/folder/:id',
    method: 'GET',
    template: [{
        id: params => faker.datatype.uuid(),
        img: () => "https://live.staticflickr.com/65535/51272113725_214a399919_o_d.jpg",
        alt: "a bird"
    }]
};

module.exports = { folders, folder };