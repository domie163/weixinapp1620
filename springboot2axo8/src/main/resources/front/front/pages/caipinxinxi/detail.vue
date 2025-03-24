
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"width":"100%","padding":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20221018/6b04e4b2331b4f3d85b1103feff37414.jpg)","height":"auto"}'>
						<swiper :style='{"width":"100%","background":"#fff","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='false' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"auto","margin":"0 auto","display":"block","height":"100%"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"auto","margin":"0 auto","display":"block","height":"100%"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
									            <view :style='{"width":"100%","padding":"24rpx 16rpx","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}' class="detail-content">
				<view :style='{"padding":"0 16rpx","margin":"0 0px 20rpx 0px","borderColor":"#20aa9a","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#98e6dd,#20aa9a)","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}' class="detail-list-item price priceFavor">
					<view :style='{"padding":"0 16rpx","margin":"8rpx 0 -2rpx 0","borderRadius":"16rpx 16rpx 0 0","background":"-webkit-linear-gradient(top,#fff,#ddd)","display":"flex"}' class="text">
						<view :style='{"color":"red","lineHeight":"80rpx","fontSize":"36rpx"}'>￥</view>
						<view :style='{"color":"red","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.price}}</view>
					</view>
					<view :style='{"lineHeight":"80rpx","fontSize":"48rpx","color":"#faac03","textShadow":"2rpx 4rpx 6rpx #ad7a0b","display":"block"}' v-if="storeupFlag==1" class="cuIcon-favorfill" @click="shoucang"></view>
					<view :style='{"lineHeight":"80rpx","fontSize":"48rpx","color":"#faac03","textShadow":"2rpx 4rpx 6rpx #ad7a0b","display":"block"}' v-if="storeupFlag==0" class="cuIcon-favor" @click="shoucang"></view>
				</view>

				<view :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}' class="lable">菜品名称：</view>
					<view :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.caipinmingcheng}}</view>
				</view>
				<view :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}' class="lable">菜品分类：</view>
					<view :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.caipinfenlei}}</view>
				</view>

				<view class="detail-list-item" :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>菜品编号：</view>
					<view  class="text" :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.caipinbianhao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>菜品标签：</view>
					<view  class="text" :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.caipinbiaoqian}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>口味：</view>
					<view  class="text" :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.kouwei}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>库存：</view>
					<view  class="text" :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.alllimittimes}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>点击次数：</view>
					<view  class="text" :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.clicknum}}</view>
				</view>



				<view class="detail-list-item" :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>配菜</view>
					<view class="text" :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.peicai}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0px 20rpx 0px","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>营养成分</view>
					<view class="text" :style='{"padding":"16rpx 20rpx 0 0","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.yingyangchengfen}}</view>
				</view>


				<view class="detail-list-item rich" :style='{"boxShadow":"2rpx 6rpx 6rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#e8e8e8","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#fff,#eee)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 8rpx","color":"#333","borderRadius":"16rpx 0 0 16rpx","textAlign":"right","background":"none","width":"208rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>菜品详情</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","padding":"18rpx 8rpx 24rpx 16rpx","margin":"0","borderRadius":"0px 16rpx 16rpx 0px","color":"#666","background":"none","fontSize":"28rpx"}'>
						<rich-text :nodes="detail.caipinxiangqing"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"10rpx 0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221018/6b04e4b2331b4f3d85b1103feff37414.jpg)","display":"flex","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="detail.alllimittimes>0" @tap="onCartTap" class="cu-btn bg-orange round shadow-blur" >加入购物车</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="detail.alllimittimes>0" @tap="onBuyTap">立即购买</button>
				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				storeupFlag: 0,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','caipinxinxi');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'caipinxinxi',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'caipinxinxi',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.caipinmingcheng,
                                inteltype: _this.detail.caipinfenlei,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'caipinxinxi',
                                type: 1
							});
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				uni.setStorageSync('crossTable','caipinxinxi');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('caipinxinxi', this.id);
				this.detail = res.data;
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
				//修改富文本的图片样式
				this.detail.caipinxiangqing = this.detail.caipinxiangqing.replace(/img src/gi,"img style=\"width:100%;\" src");
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },

            async onCartTap() {
				if (uni.getStorageSync(`cart${this.detail.id}${this.user.id}`)) {
					this.$utils.msg('该商品已添加到购物车')
					return
				}
				await this.$api.add('cart', {
					tablename: 'caipinxinxi',
					goodid: this.detail.id,
					goodname: this.detail.caipinmingcheng,
					goodtype: this.detail.caipinfenlei,
					picture: this.swiperList[0],
					buynumber: 1,
					userid: this.user.id,
					price: this.detail.price,
					discountprice: this.detail.vipprice
				});
				uni.setStorageSync(`cart${this.detail.id}${this.user.id}`, true);
				this.$utils.msg('添加到购物车成功')
			},
            onBuyTap() {
				uni.setStorageSync('orderGoods', [{
					tablename: 'caipinxinxi',
					goodid: this.detail.id,
					goodname: this.detail.caipinmingcheng,
					goodtype: this.detail.caipinfenlei,
					picture: this.swiperList[0],
					buynumber: 1,
					price: this.detail.price,
					discountprice: this.detail.vipprice
				}])
				this.$utils.jump('../shop-order-confirm/shop-order-confirm?type=1');
			},


			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
                let params = {
                    page: 1,
                    limit: 1,
					status: '已完成',
					goodid: this.detail.id
                }
                let res = await this.$api.page('orders', params);
                if (res.data.list.length == 0) {
                this.$utils.msg('请完成订单后再评论');
					return;
				}
				this.$utils.jump(`../discusscaipinxinxi/add-or-update?refid=${this.id}`)
			},
			onSHTap() {
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>
