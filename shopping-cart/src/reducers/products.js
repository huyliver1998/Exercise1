var initialState = [
    {
        id : 1,
        name : 'Giày thể thao sneaker nam SACAS cao 3cm SC053 Xám',
        image : 'https://image.yes24.vn/Upload/ProductImage/HUONGDUONG2018/1991377_L.jpg',
        description : 'Sản phẩm mới nhất',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Giày thể thao ABC( lưu ý size in trên mặt giày là để trang trí )',
        image : 'https://cf.shopee.vn/file/a7c893d688c8430db3f118c00319fc9a',
        description : 'Sản phẩm mới nhất',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Giày thể thao nữ',
        image : 'https://media3.scdn.vn/img2/2018/11_29/cWVizs_simg_de2fe0_500x500_maxb.jpg',
        description : 'Sản phẩm mới nhất',
        price : 450,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;