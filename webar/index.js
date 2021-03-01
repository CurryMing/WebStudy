

  var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom: 11,
    center: [113.218478, 23.403277]
    // center: [116.218478, 26.403277]

});
 //初始化定位
 map.plugin('AMap.Geolocation', function () {
  geolocation = new AMap.Geolocation({
      enableHighAccuracy: true,//是否使用高精度定位，默认:true
      timeout: 10000,          //超过10秒后停止定位，默认：无穷大
      maximumAge: 0,           //定位结果缓存0毫秒，默认：0
      convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      showButton: true,        //显示定位按钮，默认：true
      buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
      buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
      showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
      panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
      zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
  });
  map.addControl(geolocation);
  geolocation.getCurrentPosition();
  AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
  AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
});
function onComplete(obj){
//   var res = '经纬度：' + obj.position +
//       '\n精度范围：' + obj.accuracy +
//       '米\n定位结果的来源：' + obj.location_type +
//       '\n状态信息：' + obj.info +
//       '\n地址：' + obj.formattedAddress +
//       '\n地址信息：' + JSON.stringify(obj.addressComponent, null, 4);
//   console.log("当前位置信息"+res);
  // 高德地图查询周边
  function aMapSearchNearBy(centerPoint, city) {
    AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({
            pageSize: 20,    // 每页10条
            pageIndex: 1,    // 获取第一页
            city: city      // 指定城市名(如果你获取不到城市名称，这个参数也可以不传，注释掉)
        });

        // 第一个参数是关键字，这里传入的空表示不需要根据关键字过滤
        // 第二个参数是经纬度，数组类型
        // 第三个参数是半径，周边的范围
        // 第四个参数为回调函数
        placeSearch.searchNearBy('', centerPoint, 1000, function(status, result) {
            if(result.info === 'OK') {
                console.log(result);
                var locationList = result.poiList.pois; // 周边地标建筑列表
                const scene = document.querySelector('a-scene');
              //   locationList.forEach((place) => {
              //     const latitude = place.location.lat;
              //     const longitude = place.location.lng;

              //     // add place name
              //     const text = document.createElement('a-link');
              //     text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
              //     text.setAttribute('title', place.name);
              //     text.setAttribute('href', 'http://www.baidu.com/');
              //     text.setAttribute('scale', '20 20 20');

              //     text.addEventListener('loaded', () => {
              //         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
              //     });

              //     scene.appendChild(text);
              // });
            //-------------------------------------------------------------
            locationList.forEach((place) => {
                const latitude = place.location.lat;
                const longitude = place.location.lng;

                // add place icon
                const icon = document.createElement('a-image');
                icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                icon.setAttribute('name', place.name);
                icon.setAttribute('src', 'assets/map-marker.png');

                // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                icon.setAttribute('scale', '20, 20');
                // const desc = document.createElement('a-text');
                // desc.setAttribute('value',place.name)
                // desc.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                // desc.setAttribute('look-at','[gps-camera]')
              
                // scene.appendChild(desc)
                // desc.innerHTML=place.name
                icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

                const clickListener = function(ev) {
                    ev.stopPropagation();
                    ev.preventDefault();

                    const name = ev.target.getAttribute('name');

                    const el = ev.detail.intersection && ev.detail.intersection.object.el;

                    if (el && el === ev.target) {
                        const label = document.createElement('span');
                        const container = document.createElement('div');
                        container.setAttribute('id', 'place-label');
                        label.innerText = name;
                        container.appendChild(label);
                        document.body.appendChild(container);

                        setTimeout(() => {
                            container.parentElement.removeChild(container);
                        }, 1500);
                    }
                };

                icon.addEventListener('click', clickListener);
                
                scene.appendChild(icon);
            });
            //-------------------------------------------------------------
                // 生成地址列表html　　　　　　　　　 createLocationHtml(locationList);
            } else {
                console.log('获取位置信息失败!');
            }
        });
    });
}
aMapSearchNearBy(obj.position, '');


}

function onError(obj) {
  // alert(obj.info + ',,,,' + obj.message);
  console.log(obj);
}



