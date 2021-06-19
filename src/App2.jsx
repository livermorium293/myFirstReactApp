/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';

export const App2 = () => {

  const [num, setNum] = useState(0); //numは変数、setNumは更新関数
  const [ahoahoShowFlag, setAhoahoShowFrag] = useState(false);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [marker, setMarker] = useState(null);
  const [center, setCenter] = useState({ lat: "", lng: "" });
  const [currentPosition, setCurrentPosition] = useState();
  const TestKey = "";

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwithShowFlag = () => {
    setAhoahoShowFrag(!ahoahoShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        ahoahoShowFlag || setAhoahoShowFrag(true);
      } else {
        ahoahoShowFlag && setAhoahoShowFrag(false);
      }
    }
  }, [num]);//第二引数に与えた関数に関心を持つ関数となる。


  // 初期表示地点
  const success = data => {
    const currentPosition = {
      lat: data.coords.latitude,
      lng: data.coords.longitude
    };
    setCurrentPosition(currentPosition);
    setCenter(currentPosition);
  };
  //geolocation使えない場合の値を返す
  const error = data => {
    const currentPosition = {
      lat: 34.673542,
      lng: 135.433338
    };
    setCurrentPosition(currentPosition);
    setCenter(currentPosition);
    alert("現在地を読み取れませんでした")
  };

  //初期読み込み時のみgeolocationを動かす
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  // クリックした点の読み取り
  // map, maps で受け取ると変数が被るので object で受け取っています
  const handleApiLoaded = (object) => {
    setMap(object.map);
    setMaps(object.maps);
  };

  const setLatLng = ({ lat, lng }) => {
    if (marker) {
      marker.setMap(null);
    }
    const latLng = {
      lat,
      lng,
    };
    setMarker(new maps.Marker({ map, position: latLng, }));
    // map.panTo(latLng);クリック地点をセンターにする
  };

  return (
    <>
      <h1 style={{ color: "black" }}>Google Map API Test</h1>

      <div className="map-area">
        <GoogleMapReact
        //  {alert}
          // bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
          bootstrapURLKeys={{key:TestKey}}
          defaultCenter={center}
          defaultZoom={16}
          onClick={setLatLng}
          onGoogleApiLoaded={handleApiLoaded}
        />
        

      </div>
      {/* <ColorfulMessage color="black"> お元気ですよね?</ColorfulMessage>  */}
      {/* <ColorfulMessage color="pink"> 元気です</ColorfulMessage> */}
      {/* <button onClick={onClickButton}>カウントアップ</button>
      <button onClick={onClickSwithShowFlag}>on/off</button>
      <p>{num}</p>
      {ahoahoShowFlag && <p>あほあほ</p>}
      <p>あほあほ</p> */}

    </>
  )

};

