<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0 0 144rpx 0","position":"relative","background":"url(http://codegen.caihongy.cn/20221018/6b04e4b2331b4f3d85b1103feff37414.jpg)","height":"100%"}'>
		<form :style='{"width":"100%","padding":"24rpx","background":"none","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">菜品编号</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)","flex":"1"}' class="right-input">
					{{ruleForm.caipinbianhao}}
				</view>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">菜品名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.caipinmingcheng" v-model="ruleForm.caipinmingcheng" placeholder="菜品名称"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">菜品分类</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="caipinfenleiChange" :value="caipinfenleiIndex"  :range="caipinfenleiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(255, 170, 51)"}' class="uni-input">{{ruleForm.caipinfenlei?ruleForm.caipinfenlei:"请选择菜品分类"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">菜品标签</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="caipinbiaoqianChange" :value="caipinbiaoqianIndex"  :range="caipinbiaoqianOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(255, 170, 51)"}' class="uni-input">{{ruleForm.caipinbiaoqian?ruleForm.caipinbiaoqian:"请选择菜品标签"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">图片</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">口味</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="kouweiChange" :value="kouweiIndex"  :range="kouweiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(255, 170, 51)"}' class="uni-input">{{ruleForm.kouwei?ruleForm.kouwei:"请选择口味"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">单限</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.onelimittimes" v-model="ruleForm.onelimittimes" placeholder="单限"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">库存</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.alllimittimes" v-model="ruleForm.alllimittimes" placeholder="库存"></input>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">价格</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.price" v-model="ruleForm.price" placeholder="价格"></input>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">配菜</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-model="ruleForm.peicai" placeholder="配菜"></textarea>
			</view>
			<view :style='{"padding":"4rpx 0","margin":"0 0 8rpx 0","borderColor":"#e8e8e8","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 2rpx 0","background":"-webkit-linear-gradient(top,#eee,#fff)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">营养成分</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-model="ruleForm.yingyangchengfen" placeholder="营养成分"></textarea>
			</view>
			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 2rpx 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","fontWeight":"500"}' class="title">菜品详情</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","border":"2rpx solid #efefef","width":"100%","height":"auto"}' v-model="ruleForm.caipinxiangqing" placeholder="菜品详情" @editorChange="caipinxiangqingChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","margin":"32rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"2rpx solid #ffaa33","padding":"0px","boxShadow":"2rpx 4rpx 8rpx #a86b15,inset 0px 0px 112rpx 0px #ffaa33","margin":"0 5% 0 0","color":"rgb(255, 255, 255)","borderRadius":"16rpx","background":"#ffe6c3","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="clicktimeConfirm" ref="clicktime" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				caipinbianhao: this.getUUID(),
				caipinmingcheng: '',
				caipinfenlei: '',
				caipinbiaoqian: '',
				tupian: '',
				kouwei: '',
				peicai: '',
				yingyangchengfen: '',
				caipinxiangqing: '',
			        onelimittimes: '-1',
			        alllimittimes: '-1',
				price: '',
				},
				caipinfenleiOptions: [],
				caipinfenleiIndex: 0,
				caipinbiaoqianOptions: [],
				caipinbiaoqianIndex: 0,
				kouweiOptions: [],
				kouweiIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   caipinbianhao : false,
                   caipinmingcheng : false,
                   caipinfenlei : false,
                   caipinbiaoqian : false,
                   tupian : false,
                   kouwei : false,
                   peicai : false,
                   yingyangchengfen : false,
                   caipinxiangqing : false,
                   onelimittimes : false,
                   alllimittimes : false,
                   clicktime : false,
                   clicknum : false,
                   price : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`caipinfenlei`,`caipinfenlei`,{});
			this.caipinfenleiOptions = res.data;
            this.caipinfenleiOptions.unshift("请选择菜品分类");
			// 下拉框
			res = await this.$api.option(`biaoqian`,`biaoqian`,{});
			this.caipinbiaoqianOptions = res.data;
            this.caipinbiaoqianOptions.unshift("请选择菜品标签");
			// 自定义下拉框值
			this.kouweiOptions = "清淡,微辣,酸辣,麻辣".split(',')

			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`caipinxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='caipinbianhao'){
					this.ruleForm.caipinbianhao = obj[o];
					this.ro.caipinbianhao = true;
					continue;
					}
					if(o=='caipinmingcheng'){
					this.ruleForm.caipinmingcheng = obj[o];
					this.ro.caipinmingcheng = true;
					continue;
					}
					if(o=='caipinfenlei'){
					this.ruleForm.caipinfenlei = obj[o];
					this.ro.caipinfenlei = true;
					continue;
					}
					if(o=='caipinbiaoqian'){
					this.ruleForm.caipinbiaoqian = obj[o];
					this.ro.caipinbiaoqian = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='kouwei'){
					this.ruleForm.kouwei = obj[o];
					this.ro.kouwei = true;
					continue;
					}
					if(o=='peicai'){
					this.ruleForm.peicai = obj[o];
					this.ro.peicai = true;
					continue;
					}
					if(o=='yingyangchengfen'){
					this.ruleForm.yingyangchengfen = obj[o];
					this.ro.yingyangchengfen = true;
					continue;
					}
					if(o=='caipinxiangqing'){
					this.ruleForm.caipinxiangqing = obj[o];
					this.ro.caipinxiangqing = true;
					continue;
					}
					if(o=='onelimittimes'){
					this.ruleForm.onelimittimes = obj[o];
					this.ro.onelimittimes = true;
					continue;
					}
					if(o=='alllimittimes'){
					this.ruleForm.alllimittimes = obj[o];
					this.ro.alllimittimes = true;
					continue;
					}
					if(o=='clicktime'){
					this.ruleForm.clicktime = obj[o];
					this.ro.clicktime = true;
					continue;
					}
					if(o=='clicknum'){
					this.ruleForm.clicknum = obj[o];
					this.ro.clicknum = true;
					continue;
					}
					if(o=='price'){
					this.ruleForm.price = obj[o];
					this.ro.price = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            caipinxiangqingChange(e) {
                this.ruleForm.caipinxiangqing = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			clicktimeConfirm(val) {
				console.log(val)
				this.ruleForm.clicktime = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			caipinfenleiChange(e) {
				this.caipinfenleiIndex = e.target.value
				this.ruleForm.caipinfenlei = this.caipinfenleiOptions[this.caipinfenleiIndex]
			},
			// 下拉变化
			caipinbiaoqianChange(e) {
				this.caipinbiaoqianIndex = e.target.value
				this.ruleForm.caipinbiaoqian = this.caipinbiaoqianOptions[this.caipinbiaoqianIndex]
			},
			// 下拉变化
			kouweiChange(e) {
				this.kouweiIndex = e.target.value
				this.ruleForm.kouwei = this.kouweiOptions[this.kouweiIndex]
			},

			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {





























//跨表计算判断
				var obj;
				if(this.ruleForm.onelimittimes&&(!this.$validate.isIntNumer(this.ruleForm.onelimittimes))){
					this.$utils.msg(`单限应输入整数`);
					return
				}
				if(this.ruleForm.alllimittimes&&(!this.$validate.isIntNumer(this.ruleForm.alllimittimes))){
					this.$utils.msg(`库存应输入整数`);
					return
				}
				if(this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
					this.$utils.msg(`点击次数应输入整数`);
					return
				}
				if((!this.ruleForm.price)){
					this.$utils.msg(`价格不能为空`);
					return
				}
				if(this.ruleForm.price&&(!this.$validate.isNumber(this.ruleForm.price))){
					this.$utils.msg(`价格应输入数字`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`caipinxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`caipinxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`caipinxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`caipinxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`caipinxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
