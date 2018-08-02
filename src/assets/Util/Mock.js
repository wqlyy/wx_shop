import Mock from 'mockjs'


// Mock商品列表数据
Mock.mock('goods_list.json', {
  retcode: 1,
  retmsg: '查询成功',
  data: {
    'total': 1,
    'records': 10,
    'page': 1,
    'list|15': [{
      'id|+1': 1,
      'sid|+1': 1,
      'remainmember': '@natural(100, 1000)',
      'joinedmember': '@natural(100, 1000)',
      'totalmember': '@natural(100, 1000)',
      'title': '@title(6, 50)',
      'cover': '@image(190x200, #B5E3EE, GoodsImages)'
    }]
  }
})
//Mock轮播图列表
Mock.mock('banner_list.json', function () {
  return {
    retcode: 1,
    retmsg: '查询成功',
    data: [
      {
        url: 'javascript:;',
        img: 'https://img20.360buyimg.com/mcoss/jfs/t23728/50/902830340/59547/7b3dbfab/5b485727N6f602b78.png',
        title: '送你一朵fua'
      }, {
        url: 'javascript:;',
        img: 'https://img10.360buyimg.com/mcoss/jfs/t24385/343/1101977399/63593/b7bd41cb/5b5177ddN984f99ab.jpg',
        title: '送你一次旅行',
        fallbackImg: ''
      }, {
        url: 'javascript:;',
        img: 'https://img13.360buyimg.com/mcoss/jfs/t23251/236/1113140151/60832/6627cd22/5b517406N965d0b4a.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:;',
        img: 'https://img1.360buyimg.com/da/s750x366_jfs/t24556/120/1048702098/197464/88130084/5b4f153cN998ac1ea.jpg!cc_750x366.dpg',
        title: '送你一朵fua'
      }
    ]
  }
})


//购物车数据
Mock.mock('cartlist.json', {
  retcode: 1,
  retmsg: '查询成功',
  data: {
    'total': 1,
    'records': 10,
    'page': 1,
    'ishopList|4': [{
      'id|+1': 1,
      'mid|+1': 1,
      'shopid|+1': 1,
      'sid|+1': 1,
      'productid': 100,
      'price': '@integer(60, 600)',
      'buycount': '@integer(60, 1000)',
      'standard': null,
      'totalmember': '@integer(600, 10000)',
      'remainmember': '@integer(600, 10000)',
      'period|+10': 100000001,
      'itemno': null,
      'providers': null,
      'shopname': '@title(20, 100)',
      'shopimg': '@image(200x200, #0cf, Cart)'
    }]
  }
})

//推荐数据
Mock.mock('recommend.json',function () {
  return {
    retcode: 1,
    retmsg: '查询成功',
    data: [
      {
        id:1,
        productId:1001,
        url: 'http://p0.qhimg.com/t01ca793f68d025a256.jpg',
        desc:'三叶指尖陀螺(颜色随机)',
        title: '三叶指尖陀螺(颜色随机)',
        money:99,
        people:543
      },
      {
        id:2,
        productId:1003,
        url: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg',
        desc:'便携式多功能垫(颜色随机)',
        title: '便携式多功能垫(颜色随机)',
        money:9998,
        people:2018
      },
      {
        id:3,
        productId:1021,
        url: 'http://p0.qhimg.com/t0181d071d026492266.jpg',
        desc:'盛纳庄园干红葡萄酒70元优惠券',
        title: '盛纳庄园干红葡萄酒70元优惠券',
        money:199,
        people:1314
      },
      {
        id:4,
        productId:2134,
        url: 'http://p0.qhimg.com/t013e7edbab89fefa25.jpg',
        desc:'手工青柑普洱茶50元优惠券',
        title: '手工青柑普洱茶50元优惠券',
        money:899,
        people:520
      }
    ]
  }
});


//列表数据
Mock.mock('category.json',function () {
  return {
    retcode: 1,
    retmsg: '查询成功',
    data: [
      {
        id:1,
        productId:1001,
        url: 'http://p0.qhimg.com/t01ca793f68d025a256.jpg',
        desc:'三叶指尖陀螺(颜色随机)',
        title: '三叶指尖陀螺(颜色随机)',
        money:99,
        people:543
      },
      {
        id:2,
        productId:1003,
        url: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg',
        desc:'便携式多功能垫(颜色随机)',
        title: '便携式多功能垫(颜色随机)',
        money:9998,
        people:2018
      },
      {
        id:3,
        productId:1021,
        url: 'http://p0.qhimg.com/t0181d071d026492266.jpg',
        desc:'盛纳庄园干红葡萄酒70元优惠券',
        title: '盛纳庄园干红葡萄酒70元优惠券',
        money:199,
        people:1314
      },
      {
        id:4,
        productId:2134,
        url: 'http://p0.qhimg.com/t013e7edbab89fefa25.jpg',
        desc:'手工青柑普洱茶50元优惠券',
        title: '手工青柑普洱茶50元优惠券',
        money:899,
        people:520
      },
      {
        id:1,
        productId:1001,
        url: 'http://p0.qhimg.com/t01ca793f68d025a256.jpg',
        desc:'三叶指尖陀螺(颜色随机)',
        title: '三叶指尖陀螺(颜色随机)',
        money:99,
        people:543
      },
      {
        id:2,
        productId:1003,
        url: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg',
        desc:'便携式多功能垫(颜色随机)',
        title: '便携式多功能垫(颜色随机)',
        money:9998,
        people:2018
      },
      {
        id:3,
        productId:1021,
        url: 'http://p0.qhimg.com/t0181d071d026492266.jpg',
        desc:'盛纳庄园干红葡萄酒70元优惠券',
        title: '盛纳庄园干红葡萄酒70元优惠券',
        money:199,
        people:1314
      },
      {
        id:4,
        productId:2134,
        url: 'http://p0.qhimg.com/t013e7edbab89fefa25.jpg',
        desc:'手工青柑普洱茶50元优惠券',
        title: '手工青柑普洱茶50元优惠券',
        money:899,
        people:520
      },
      {
        id:1,
        productId:1001,
        url: 'http://p0.qhimg.com/t01ca793f68d025a256.jpg',
        desc:'三叶指尖陀螺(颜色随机)',
        title: '三叶指尖陀螺(颜色随机)',
        money:99,
        people:543
      },
      {
        id:2,
        productId:1003,
        url: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg',
        desc:'便携式多功能垫(颜色随机)',
        title: '便携式多功能垫(颜色随机)',
        money:9998,
        people:2018
      },
      {
        id:3,
        productId:1021,
        url: 'http://p0.qhimg.com/t0181d071d026492266.jpg',
        desc:'盛纳庄园干红葡萄酒70元优惠券',
        title: '盛纳庄园干红葡萄酒70元优惠券',
        money:199,
        people:1314
      },
      {
        id:4,
        productId:2134,
        url: 'http://p0.qhimg.com/t013e7edbab89fefa25.jpg',
        desc:'手工青柑普洱茶50元优惠券',
        title: '手工青柑普洱茶50元优惠券',
        money:899,
        people:520
      },{
        id:1,
        productId:1001,
        url: 'http://p0.qhimg.com/t01ca793f68d025a256.jpg',
        desc:'三叶指尖陀螺(颜色随机)',
        title: '三叶指尖陀螺(颜色随机)',
        money:99,
        people:543
      },
      {
        id:2,
        productId:1003,
        url: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg',
        desc:'便携式多功能垫(颜色随机)',
        title: '便携式多功能垫(颜色随机)',
        money:9998,
        people:2018
      },
      {
        id:3,
        productId:1021,
        url: 'http://p0.qhimg.com/t0181d071d026492266.jpg',
        desc:'盛纳庄园干红葡萄酒70元优惠券',
        title: '盛纳庄园干红葡萄酒70元优惠券',
        money:199,
        people:1314
      },
      {
        id:4,
        productId:2134,
        url: 'http://p0.qhimg.com/t013e7edbab89fefa25.jpg',
        desc:'手工青柑普洱茶50元优惠券',
        title: '手工青柑普洱茶50元优惠券',
        money:899,
        people:520
      },{
        id:1,
        productId:1001,
        url: 'http://p0.qhimg.com/t01ca793f68d025a256.jpg',
        desc:'三叶指尖陀螺(颜色随机)',
        title: '三叶指尖陀螺(颜色随机)',
        money:99,
        people:543
      },
      {
        id:2,
        productId:1003,
        url: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg',
        desc:'便携式多功能垫(颜色随机)',
        title: '便携式多功能垫(颜色随机)',
        money:9998,
        people:2018
      },
      {
        id:3,
        productId:1021,
        url: 'http://p0.qhimg.com/t0181d071d026492266.jpg',
        desc:'盛纳庄园干红葡萄酒70元优惠券',
        title: '盛纳庄园干红葡萄酒70元优惠券',
        money:199,
        people:1314
      },
      {
        id:4,
        productId:2134,
        url: 'http://p0.qhimg.com/t013e7edbab89fefa25.jpg',
        desc:'手工青柑普洱茶50元优惠券',
        title: '手工青柑普洱茶50元优惠券',
        money:899,
        people:520
      }
    ]
  }
});