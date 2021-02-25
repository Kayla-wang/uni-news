<template>
	<view class="weatherIndex">
		<view class="weatherIndexToday">
		   <view class="location"><text class="locationIcon">&#xe681;</text>{{address}}<text class="locationIcon">&#xe634;</text></view>
		</view>
		<view class="weatherIndexfiveDays">
		</view>
		<view class="weatherIndexLife">
		</view>
	</view>
</template>

<script>
	import { simpleWeatherquery } from './api.js'; 
	import urls from '../../baseUrl.js'; 
	var QQMapWX = require('../../static/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js');
	export default {
		data() {
			return {
				address:''
			}
		},
		methods: {
		   async getsimpleWeatherquery(city) {
			 const params = {
			   city: city,
			   key: urls.key
			 };
			 const {
			   data: { result , error_code },
			 } = await simpleWeatherquery(params);
			   console.log(result);
			   console.log(error_code);
		   },
		   getLocation(){
			 //腾讯地图的使用key密钥：
			 var qqmapsdk = new QQMapWX({
			   key: 'PGDBZ-OJJWS-U5MOO-6ZDFG-LVPFE-MBBB5'
			 });
			 var _this = this;
			 //获取经纬度
			 uni.getLocation({
			     type: 'wgs84',
			     success: function (res) {
			 		//逆向解析地址
			 		qqmapsdk.reverseGeocoder({
			 			location:{
			 				latitude: res.latitude,
			 				longitude: res.longitude
			 			},
			 			success(res){
							_this.address = res.result.address;
							_this.city =  res.result.address_component.city;
							if(_this.city.indexOf('市')!==-1){
								_this.city = _this.city.replace("市","");
							}
							_this.getsimpleWeatherquery(_this.city);
			 			}
			 		})
			     }
			 });
		   }
		},
        created(){
			this.getLocation();
		}
	}
</script>

<style lang="scss">
	.weatherIndex {
		.weatherIndexToday{
			height: 500rpx;
			background: #e6e6e6;
			padding-top:20rpx;
			.location{
				text-align: center;
				font-size: 30rpx;
				font-weight: bold;
				.locationIcon {
					font-family: iconfont;
				}
			}
		}
	}
</style>
