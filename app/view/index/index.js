/*
 * ms-duplex:双向数据绑定，viewModel中对应的值放在表单元素的value中，对表单元素绑定一些事件，
 用于监听用户的转入从而自动刷新viewModel
 取消双向同步：ms-data-duplex-observe="false" 
 */
avalon.define({
  $id: "test",
  batchNumber: "",
  enpCode: "101850063",
  profile: "",
  isSure: false,
  sizeType: "",
  packingType: [],
  airLine: "",
  harbour: [],
  gender: "female",
  isPacking: false
});