export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'head',
            title: 'Head',
            type: 'string',            
        },
        {
            name: 'body',
            title: 'Body',
            type: 'string',            
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}