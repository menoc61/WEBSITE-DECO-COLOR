export default {
    name:'carouselSlide',
    title:'CarouselSlide',
    type: 'document',
    fields:[
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'header',
            title:'Header',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        }
    ]
}