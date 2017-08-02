<template>
  <div class="recharge">
    <div class="web-crumbs">
      <div class="crumbs">
        当前位置： <a href="">魔力游戏首页</a> > <a href="">账户充值</a>
      </div>
    </div>
    <div class="web-recharge-content">
      <div class="recharge-content">
        <div class="recharge-content-l">
          <dl class="recharge-list">
            <dt>选择充值方式</dt>
            <dd v-for="(i,index) in list" v-bind:class="'recharge-list-'+(index+1)"><p @click="checkBox(i,'listCheck')" v-bind:class="{current:i==listCheck}"><i></i>{{i}}</p></dd>
            <!--<dd class="recharge-list-2"><p @click="checkBox(2)"><i></i>网上银行</p></dd>-->
            <!--<dd class="recharge-list-3"><p @click="checkBox(3)" v-bind:class="{current:rechargeNum==3}"><i></i>支付宝</p></dd>-->
            <!--<dd class="recharge-list-4"><p @click="checkBox(4)" v-bind:class="{current:rechargeNum==4}"><i></i>微信支付</p></dd>-->
            <!--<dd class="recharge-list-5"><p @click="checkBox(5)" v-bind:class="{current:rechargeNum==5}"><i></i>手机固话充值</p></dd>-->
            <!--<dd class="recharge-list-6"><p @click="checkBox(6)" v-bind:class="{current:rechargeNum==6}"><i></i>游戏点卡充值</p></dd>-->
            <!--<dd class="recharge-list-7"><p @click="checkBox(7)" v-bind:class="{current:rechargeNum==7}"><i></i>国际信用卡</p></dd>-->
            <!--<dd class="recharge-list-8"><p @click="checkBox(8)" v-bind:class="{current:rechargeNum==8}"><i></i>短信充值</p></dd>-->
            <!--<dd class="recharge-list-9"><p @click="checkBox(9)" v-bind:class="{current:rechargeNum==9}"><i></i>转款汇款</p></dd>-->
          </dl>
          <dl class="recharge-service">
            <dt>客服电话</dt>
            <dd class="recharge-service-pho">0755-86700316</dd>
            <dd class="recharge-service-em">
              <p>传真：0755-86700316</p>
              <p class="recharge-service-em-e">邮箱：R2games@.com</p>
              <p><a href="">@在线客服</a></p>
            </dd>
          </dl>
          <a href="" class="recharge-custody">
            <i></i>未成年人<span>家长监护过程</span>
          </a>
          <a href="" class="recharge-autonym">
            <i></i><span>实名制</span>信息填补
          </a>
        </div>
        <div class="recharge-content-r">
          <div class="recharge-content-r-c">
            <dl>
              <dt>游戏：</dt>
              <dd>
                <select name="selected" class="input">
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </select>
              </dd>
            </dl>
            <dl>
              <dt>服务器：</dt>
              <dd>
                <select name="selected" class="input">
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </select>
              </dd>
            </dl>
            <dl>
              <dt>角色：</dt>
              <dd>
                <input type="text">
                <p>如果选择Pirate Empire，请输入角色ID</p>
              </dd>
            </dl>
            <dl>
              <dt>产品：</dt>
              <dd>
                <ul>
                  <li class="money" v-for="i in zy.money"><a v-bind:class="{current:zy.moneyCheck==i}" @click="checkBox(i,'zy','moneyCheck')">{{i}}元</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>描述：</dt>
              <dd>
                <div>连续30天（与至尊卡同时起效） 购买就送360钻石 每天可领100钻石、黄金宝箱</div>
              </dd>
            </dl>
            <dl>
              <dt>货币：</dt>
              <dd>
                <select name="selected" class="input">
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </select>
              </dd>
            </dl>
            <dl>
              <dt>价格：</dt>
              <dd><span></span></dd>
            </dl>
            <dl>
              <dt></dt>
              <dd><button>立即支付</button></dd>
            </dl>
          </div>
          <!--<div v-if="listCheck=='网上银行'">-->
            <!--<dl>-->
              <!--<dt>充值到：</dt>-->
              <!--<dd>-->
                <!--<div class="checkbox" v-bind:class="{current:alipay.currency ==1}" @click="checkBox(1,'alipay','currency')">R2币</div>-->
                <!--<div class="checkbox" v-bind:class="{current:alipay.currency ==2}" @click="checkBox(2,'alipay','currency')">游戏</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>充入账号：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="账号">-->
                <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>选择游戏：</dt>-->
              <!--<dd>-->
                <!--<div class="choose" @click="checkBox(true,'alipay','GameShow')">选择充值游戏</div>-->
                <!--<span class="icon-gt"></span>-->
                <!--<div class="choose" @click="checkBox(true,'alipay','GameShow')">选择充值服务器</div>-->
                <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="alipay.GameShow">-->
                  <!--<span class="jt " style="left:40px">♦</span>-->
                  <!--<span class="jt gr" style="left:150px">♦</span>-->
                  <!--<ul class="pay_layer_t" id="game_select">-->
                    <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                    <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                    <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'alipay','GameShow')">close</a></li>-->
                  <!--</ul>-->
                  <!--<div class="pay_layer_cont">-->
                    <!--<div id="game_1" class="pay_layer_sel">-->
                      <!--<ul class="layer_list" id="player_game_list">-->

                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div id="game_2" class="pay_layer_sel hide">-->
                      <!--<ul class="layer_list">-->
                        <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>角色名：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt><span>*</span>手机号码：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>-->
                <!--选择充值金额：-->
              <!--</dt>-->
              <!--<dd>-->
                <!--<ul>-->
                  <!--<li class="money" v-for="i in alipay.money"><a v-bind:class="{current:alipay.moneyCheck==i}" @click="checkBox(i,'alipay','moneyCheck')">{{i}}元</a></li>-->
                <!--</ul>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>将获得游戏币：</dt>-->
              <!--<dd>-->
                <!--<div class="getNum">-->
                  <!--<span class="getnum-gt">♦</span>-->
                  <!--<span class="getnum-box">{{alipay.moneyCheck*10}}</span>-->
                  <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<div id="pay-bor">-->
              <!--<dl>-->
                <!--<dt>选择银行卡：</dt>-->
                <!--<dd>-->
                  <!--<ul>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card1" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card1"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card2" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card2"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card3" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card3"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card4" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card4"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card5" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card5"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card6" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card6"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card7" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card7"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card8" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card8"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card9" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card9"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card10" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card10"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card11" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card11"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card12" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card12"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card13" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card13"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card14" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card14"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                  <!--</ul>-->
                <!--</dd>-->
              <!--</dl>-->
            <!--</div>-->
            <!--<dl>-->
              <!--<dt> </dt>-->
              <!--<dd>-->
                <!--<button>立即支付</button>-->
              <!--</dd>-->
            <!--</dl>-->
          <!--</div>-->
          <!--<div v-if="listCheck=='支付宝'">-->
            <!--<dl>-->
              <!--<dt>充值到：</dt>-->
              <!--<dd>-->
                <!--<div class="checkbox" v-bind:class="{current:alipay.currency ==1}" @click="checkBox(1,'alipay','currency')">R2币</div>-->
                <!--<div class="checkbox" v-bind:class="{current:alipay.currency ==2}" @click="checkBox(2,'alipay','currency')">游戏</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>充入账号：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="账号">-->
                <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>选择游戏：</dt>-->
              <!--<dd>-->
                <!--<div class="choose" @click="checkBox(true,'alipay','GameShow')">选择充值游戏</div>-->
                <!--<span class="icon-gt"></span>-->
                <!--<div class="choose" @click="checkBox(true,'alipay','GameShow')">选择充值服务器</div>-->
                <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="alipay.GameShow">-->
                  <!--<span class="jt " style="left:40px">♦</span>-->
                  <!--<span class="jt gr" style="left:150px">♦</span>-->
                  <!--<ul class="pay_layer_t" id="game_select">-->
                    <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                    <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                    <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'alipay','GameShow')">close</a></li>-->
                  <!--</ul>-->
                  <!--<div class="pay_layer_cont">-->
                    <!--<div id="game_1" class="pay_layer_sel">-->
                      <!--<ul class="layer_list" id="player_game_list">-->

                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div id="game_2" class="pay_layer_sel hide">-->
                      <!--<ul class="layer_list">-->
                        <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>角色名：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt><span>*</span>手机号码：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>-->
                <!--选择充值金额：-->
              <!--</dt>-->
              <!--<dd>-->
                <!--<ul>-->
                  <!--<li class="money" v-for="i in alipay.money"><a v-bind:class="{current:alipay.moneyCheck==i}" @click="checkBox(i,'alipay','moneyCheck')">{{i}}元</a></li>-->
                <!--</ul>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>将获得游戏币：</dt>-->
              <!--<dd>-->
                <!--<div class="getNum">-->
                  <!--<span class="getnum-gt">♦</span>-->
                  <!--<span class="getnum-box">{{alipay.moneyCheck*10}}</span>-->
                  <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
          <!--<div id="pay-bor">-->
              <!--<p>-->
                <!--<input type="radio" id="paymentFast" value="支付宝快捷" v-model="alipay.payPicked">-->
                <!--<label for="paymentFast">支付宝快捷</label>-->
              <!--</p>-->
              <!--<p>-->
                <!--<input type="radio" id="paymentCard" value="支付宝银行卡" v-model="alipay.payPicked">-->
                <!--<label for="paymentCard">支付宝银行卡</label>-->
              <!--</p>-->
              <!--<dl v-if="alipay.payPicked=='支付宝银行卡'">-->
                <!--<dt>选择银行卡：</dt>-->
                <!--<dd>-->
                  <!--<ul>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card1" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card1"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card2" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card2"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card3" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card3"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card4" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card4"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card5" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card5"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card6" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card6"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card7" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card7"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card8" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card8"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card9" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card9"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card10" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card10"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card11" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card11"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card12" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card12"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card13" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card13"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<input type="radio" id="card14" value="支付宝银行卡" v-model="alipay.picked">-->
                      <!--<label for="card14"><img src="../../static/img/pay/bank_BOB.jpg" alt=""></label>-->
                    <!--</li>-->
                  <!--</ul>-->
                <!--</dd>-->
              <!--</dl>-->
            <!--</div>-->
            <!--<dl>-->
              <!--<dt> </dt>-->
              <!--<dd>-->
                <!--<button>立即支付</button>-->
              <!--</dd>-->
            <!--</dl>-->
          <!--</div>-->
          <!--<div v-if="listCheck=='微信支付'">-->
            <!--<dl>-->
              <!--<dt>充值到：</dt>-->
              <!--<dd>-->
                <!--<div class="checkbox" v-bind:class="{current:weChat.currency ==1}" @click="checkBox(1,'weChat','currency')">R2币</div>-->
                <!--<div class="checkbox" v-bind:class="{current:weChat.currency ==2}" @click="checkBox(2,'weChat','currency')">游戏</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>充入账号：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="账号">-->
                <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>选择游戏：</dt>-->
              <!--<dd>-->
                <!--<div class="choose" @click="checkBox(true,'weChat','GameShow')">选择充值游戏</div>-->
                <!--<span class="icon-gt"></span>-->
                <!--<div class="choose" @click="checkBox(true,'weChat','GameShow')">选择充值服务器</div>-->
                <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="weChat.GameShow">-->
                  <!--<span class="jt " style="left:40px">♦</span>-->
                  <!--<span class="jt gr" style="left:150px">♦</span>-->
                  <!--<ul class="pay_layer_t" id="game_select">-->
                    <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                    <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                    <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'weChat','GameShow')">close</a></li>-->
                  <!--</ul>-->
                  <!--<div class="pay_layer_cont">-->
                    <!--<div id="game_1" class="pay_layer_sel">-->
                      <!--<ul class="layer_list" id="player_game_list">-->

                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div id="game_2" class="pay_layer_sel hide">-->
                      <!--<ul class="layer_list">-->
                        <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>角色名：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt><span>*</span>手机号码：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>-->
                <!--选择充值金额：-->
              <!--</dt>-->
              <!--<dd>-->
                <!--<ul>-->
                  <!--<li class="money" v-for="i in weChat.money"><a v-bind:class="{current:weChat.moneyCheck==i}" @click="checkBox(i,'weChat','moneyCheck')">{{i}}元</a></li>-->
                <!--</ul>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>将获得游戏币：</dt>-->
              <!--<dd>-->
                <!--<div class="getNum">-->
                  <!--<span class="getnum-gt">♦</span>-->
                  <!--<span class="getnum-box">{{weChat.moneyCheck*10}}</span>-->
                  <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt> </dt>-->
              <!--<dd>-->
                <!--<button>立即支付</button>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<div class="pay-tips">-->
              <!--<div>-->
                <!--<strong>微信支付充值说明：</strong>-->
                <!--<br>-->
                <!--您可以通过以下两种方式进行微信支付，方便快捷，安全可靠：-->
                <!--<br>-->
                <!--1、微信零钱余额支付：只要您的微信零钱中存有余额，就可以直接为游戏进行充值。-->
                <!--<br>-->
                <!--2、银行卡支付：只要您的微信账号成功绑定了任意一张银行卡，并开通“网上银行”服务，即可完成充值。-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div v-if="listCheck=='手机固话充值'" class="recharge-content-r-pho">-->
            <!--<ul class="site">-->
              <!--<li v-bind:class="{current:pho.site==1}" @click="checkBox(1,'pho','site')">神州行</li>-->
              <!--<li v-bind:class="{current:pho.site==2}" @click="checkBox(2,'pho','site')">联通卡</li>-->
              <!--<li v-bind:class="{current:pho.site==3}" @click="checkBox(3,'pho','site')">电信卡</li>-->
            <!--</ul>-->
            <!--<div v-if="pho.site==1">-->
              <!--<dl>-->
                <!--<dt>充值卡类型:</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.Easyown.genre==1}" @click="checkBox(1,'pho','Easyown','genre')">盛付通神州行</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.Easyown.genre==2}" @click="checkBox(2,'pho','Easyown','genre')">神州付神州行</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.Easyown.genre==3}" @click="checkBox(3,'pho','Easyown','genre')">易宝神州行</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充值到：</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.Easyown.currency ==1}" @click="checkBox(1,'pho','Easyown','currency')">R2币</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.Easyown.currency ==2}" @click="checkBox(2,'pho','Easyown','currency')">游戏</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充入账号：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="账号">-->
                  <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>选择游戏：</dt>-->
                <!--<dd>-->
                  <!--<div class="choose" @click="checkBox(true,'pho','Easyown','GameShow')">选择充值游戏</div>-->
                  <!--<span class="icon-gt"></span>-->
                  <!--<div class="choose" @click="checkBox(true,'pho','Easyown','GameShow')">选择充值服务器</div>-->
                  <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="pho.Easyown.GameShow">-->
                    <!--<span class="jt " style="left:40px">♦</span>-->
                    <!--<span class="jt gr" style="left:150px">♦</span>-->
                    <!--<ul class="pay_layer_t" id="game_select">-->
                      <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                      <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                      <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'pho','Easyown','GameShow')">close</a></li>-->
                    <!--</ul>-->
                    <!--<div class="pay_layer_cont">-->
                      <!--<div id="game_1" class="pay_layer_sel">-->
                        <!--<ul class="layer_list" id="player_game_list">-->

                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div id="game_2" class="pay_layer_sel hide">-->
                        <!--<ul class="layer_list">-->
                          <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>角色名：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt><span>*</span>手机号码：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>-->
                  <!--选择充值金额：-->
                <!--</dt>-->
                <!--<dd>-->
                  <!--<ul>-->
                    <!--<li class="money" v-for="i in pho.Easyown.money"><a v-bind:class="{current:pho.Easyown.moneyCheck==i}" @click="checkBox(i,'pho','Easyown','moneyCheck')">{{i}}元</a></li>-->
                  <!--</ul>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>将获得游戏币：</dt>-->
                <!--<dd>-->
                  <!--<div class="getNum">-->
                    <!--<span class="getnum-gt">♦</span>-->
                    <!--<span class="getnum-box">{{pho.Easyown.moneyCheck*10}}</span>-->
                    <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt> </dt>-->
                <!--<dd>-->
                  <!--<button>立即支付</button>-->
                <!--</dd>-->
              <!--</dl>-->
            <!--</div>-->
            <!--<div v-if="pho.site==2">-->
              <!--<dl>-->
                <!--<dt>充值卡类型:</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.unicom.genre==1}" @click="checkBox(1,'pho','unicom','genre')">盛付通联通卡</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.unicom.genre==2}" @click="checkBox(2,'pho','unicom','genre')">神州付联通卡</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充值到：</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.unicom.currency ==1}" @click="checkBox(1,'pho','unicom','currency')">R2币</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.unicom.currency ==2}" @click="checkBox(2,'pho','unicom','currency')">游戏</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充入账号：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="账号">-->
                  <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>选择游戏：</dt>-->
                <!--<dd>-->
                  <!--<div class="choose" @click="checkBox(true,'pho','unicom','GameShow')">选择充值游戏</div>-->
                  <!--<span class="icon-gt"></span>-->
                  <!--<div class="choose" @click="checkBox(true,'pho','unicom','GameShow')">选择充值服务器</div>-->
                  <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="pho.unicom.GameShow">-->
                    <!--<span class="jt " style="left:40px">♦</span>-->
                    <!--<span class="jt gr" style="left:150px">♦</span>-->
                    <!--<ul class="pay_layer_t" id="game_select">-->
                      <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                      <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                      <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'pho','unicom','GameShow')">close</a></li>-->
                    <!--</ul>-->
                    <!--<div class="pay_layer_cont">-->
                      <!--<div id="game_1" class="pay_layer_sel">-->
                        <!--<ul class="layer_list" id="player_game_list">-->

                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div id="game_2" class="pay_layer_sel hide">-->
                        <!--<ul class="layer_list">-->
                          <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>角色名：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt><span>*</span>手机号码：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>-->
                  <!--选择充值金额：-->
                <!--</dt>-->
                <!--<dd>-->
                  <!--<ul>-->
                    <!--<li class="money" v-for="i in pho.unicom.money"><a v-bind:class="{current:pho.unicom.moneyCheck==i}" @click="checkBox(i,'pho','unicom','moneyCheck')">{{i}}元</a></li>-->
                  <!--</ul>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>将获得游戏币：</dt>-->
                <!--<dd>-->
                  <!--<div class="getNum">-->
                    <!--<span class="getnum-gt">♦</span>-->
                    <!--<span class="getnum-box">{{pho.unicom.moneyCheck*10}}</span>-->
                    <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt> </dt>-->
                <!--<dd>-->
                  <!--<button>立即支付</button>-->
                <!--</dd>-->
              <!--</dl>-->
            <!--</div>-->
            <!--<div v-if="pho.site==3">-->
              <!--<dl>-->
                <!--<dt>充值卡类型:</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.telecom.genre==1}" @click="checkBox(1,'pho','telecom','genre')">盛付通电信卡</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.telecom.genre==2}" @click="checkBox(2,'pho','telecom','genre')">电话手机R2币</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充值到：</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.telecom.currency ==1}" @click="checkBox(1,'pho','telecom','currency')">R2币</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:pho.telecom.currency ==2}" @click="checkBox(2,'pho','telecom','currency')">游戏</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充入账号：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="账号">-->
                  <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>选择游戏：</dt>-->
                <!--<dd>-->
                  <!--<div class="choose" @click="checkBox(true,'pho','telecom','GameShow')">选择充值游戏</div>-->
                  <!--<span class="icon-gt"></span>-->
                  <!--<div class="choose" @click="checkBox(true,'pho','telecom','GameShow')">选择充值服务器</div>-->
                  <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="pho.telecom.GameShow">-->
                    <!--<span class="jt " style="left:40px">♦</span>-->
                    <!--<span class="jt gr" style="left:150px">♦</span>-->
                    <!--<ul class="pay_layer_t" id="game_select">-->
                      <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                      <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                      <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'pho','telecom','GameShow')">close</a></li>-->
                    <!--</ul>-->
                    <!--<div class="pay_layer_cont">-->
                      <!--<div id="game_1" class="pay_layer_sel">-->
                        <!--<ul class="layer_list" id="player_game_list">-->

                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div id="game_2" class="pay_layer_sel hide">-->
                        <!--<ul class="layer_list">-->
                          <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>角色名：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt><span>*</span>手机号码：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>-->
                  <!--选择充值金额：-->
                <!--</dt>-->
                <!--<dd>-->
                  <!--<ul>-->
                    <!--<li class="money" v-for="i in pho.telecom.money"><a v-bind:class="{current:pho.telecom.moneyCheck==i}" @click="checkBox(i,'pho','telecom','moneyCheck')">{{i}}元</a></li>-->
                  <!--</ul>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>将获得游戏币：</dt>-->
                <!--<dd>-->
                  <!--<div class="getNum">-->
                    <!--<span class="getnum-gt">♦</span>-->
                    <!--<span class="getnum-box">{{pho.telecom.moneyCheck*10}}</span>-->
                    <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt> </dt>-->
                <!--<dd>-->
                  <!--<button>立即支付</button>-->
                <!--</dd>-->
              <!--</dl>-->
            <!--</div>-->
            <!--<div class="pay-tips">-->
              <!--<span>重要提示:</span>-->
              <!--请务必使用与此面额相同的充值卡，否则会导致支付不成功，或支付金额丢失。 （如使用面额100元的移动充值卡但选择50元，高于50元部分不返还；使用50元卡但选择100元，支付失败，50元不返还。）-->
            <!--</div>-->
          <!--</div>-->
          <!--<div v-if="listCheck=='游戏点卡充值'">-->
            <!--<ul class="site">-->
              <!--<li v-bind:class="{current:gameCard.site==1}" @click="checkBox(1,'gameCard','site')">盛大卡</li>-->
              <!--<li v-bind:class="{current:gameCard.site==2}" @click="checkBox(2,'gameCard','site')">骏网一卡通</li>-->
            <!--</ul>-->
            <!--<div v-if="gameCard.site==1">-->
              <!--<dl>-->
                <!--<dt>充值到：</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:gameCard.grand.currency ==1}" @click="checkBox(1,'gameCard','grand','currency')">R2币</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:gameCard.grand.currency ==2}" @click="checkBox(2,'gameCard','grand','currency')">游戏</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充入账号：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="账号">-->
                  <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>选择游戏：</dt>-->
                <!--<dd>-->
                  <!--<div class="choose" @click="checkBox(true,'gameCard','grand','GameShow')">选择充值游戏</div>-->
                  <!--<span class="icon-gt"></span>-->
                  <!--<div class="choose" @click="checkBox(true,'gameCard','grand','GameShow')">选择充值服务器</div>-->
                  <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="gameCard.grand.GameShow">-->
                    <!--<span class="jt " style="left:40px">♦</span>-->
                    <!--<span class="jt gr" style="left:150px">♦</span>-->
                    <!--<ul class="pay_layer_t" id="game_select">-->
                      <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                      <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                      <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'gameCard','grand','GameShow')">close</a></li>-->
                    <!--</ul>-->
                    <!--<div class="pay_layer_cont">-->
                      <!--<div id="game_1" class="pay_layer_sel">-->
                        <!--<ul class="layer_list" id="player_game_list">-->

                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div id="game_2" class="pay_layer_sel hide">-->
                        <!--<ul class="layer_list">-->
                          <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>角色名：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt><span>*</span>手机号码：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>-->
                  <!--选择充值金额：-->
                <!--</dt>-->
                <!--<dd>-->
                  <!--<ul>-->
                    <!--<li class="money" v-for="i in gameCard.grand.money"><a v-bind:class="{current:gameCard.grand.moneyCheck==i}" @click="checkBox(i,'gameCard','grand','moneyCheck')">{{i}}元</a></li>-->
                  <!--</ul>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>将获得游戏币：</dt>-->
                <!--<dd>-->
                  <!--<div class="getNum">-->
                    <!--<span class="getnum-gt">♦</span>-->
                    <!--<span class="getnum-box">{{gameCard.grand.moneyCheck*10}}</span>-->
                    <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt> </dt>-->
                <!--<dd>-->
                  <!--<button>立即支付</button>-->
                <!--</dd>-->
              <!--</dl>-->
            <!--</div>-->
            <!--<div v-if="gameCard.site==2">-->
              <!--<dl>-->
                <!--<dt>充值到：</dt>-->
                <!--<dd>-->
                  <!--<div class="checkbox" v-bind:class="{current:gameCard.Jcard.currency ==1}" @click="checkBox(1,'gameCard','Jcard','currency')">R2币</div>-->
                  <!--<div class="checkbox" v-bind:class="{current:gameCard.Jcard.currency ==2}" @click="checkBox(2,'gameCard','Jcard','currency')">游戏</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>充入账号：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="账号">-->
                  <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>选择游戏：</dt>-->
                <!--<dd>-->
                  <!--<div class="choose" @click="checkBox(true,'gameCard','Jcard','GameShow')">选择充值游戏</div>-->
                  <!--<span class="icon-gt"></span>-->
                  <!--<div class="choose" @click="checkBox(true,'gameCard','Jcard','GameShow')">选择充值服务器</div>-->
                  <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="gameCard.Jcard.GameShow">-->
                    <!--<span class="jt " style="left:40px">♦</span>-->
                    <!--<span class="jt gr" style="left:150px">♦</span>-->
                    <!--<ul class="pay_layer_t" id="game_select">-->
                      <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                      <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                      <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'gameCard','Jcard','GameShow')">close</a></li>-->
                    <!--</ul>-->
                    <!--<div class="pay_layer_cont">-->
                      <!--<div id="game_1" class="pay_layer_sel">-->
                        <!--<ul class="layer_list" id="player_game_list">-->

                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div id="game_2" class="pay_layer_sel hide">-->
                        <!--<ul class="layer_list">-->
                          <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                        <!--</ul>-->
                        <!--<div class="scroll_bar" style="height: 120px;">-->
                          <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                            <!--<b class="ct"></b><b class="cb"></b>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>角色名：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt><span>*</span>手机号码：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>骏卡卡号：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="请输入骏卡卡号"> 请输入骏卡卡号-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>骏卡密码：</dt>-->
                <!--<dd>-->
                  <!--<input type="text" placeholder="请输入骏卡密码"> 请输入骏卡密码-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>-->
                  <!--选择充值金额：-->
                <!--</dt>-->
                <!--<dd>-->
                  <!--<ul>-->
                    <!--<li class="money" v-for="i in gameCard.Jcard.money"><a v-bind:class="{current:gameCard.Jcard.moneyCheck==i}" @click="checkBox(i,'gameCard','Jcard','moneyCheck')">{{i}}元</a></li>-->
                  <!--</ul>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt>将获得游戏币：</dt>-->
                <!--<dd>-->
                  <!--<div class="getNum">-->
                    <!--<span class="getnum-gt">♦</span>-->
                    <!--<span class="getnum-box">{{gameCard.Jcard.moneyCheck*10}}</span>-->
                    <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                  <!--</div>-->
                <!--</dd>-->
              <!--</dl>-->
              <!--<dl>-->
                <!--<dt> </dt>-->
                <!--<dd>-->
                  <!--<button>立即支付</button>-->
                <!--</dd>-->
              <!--</dl>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div v-if="listCheck=='国际信用卡'" class="recharge-content-r-creditCard">-->
            <!--<ul class="site">-->
              <!--<li v-bind:class="{current:creditCard.site==1}" @click="checkBox(1,'creditCard','site')">Paypli</li>-->
            <!--</ul>-->
            <!--<div class="paypal-new clearfix" id="paypal-new">-->
              <!--<p class="pay_cue">如您第一次使用Paypal支付，请先设置您的Paypal账户</p>-->
              <!--<p class="paypal-btn">-->
                <!--<a href="javascript:void(0);" class="btn1">Paypal账户设置</a>-->
                <!--<a href="javascript:void(0);" class="btn2">PayPal交易流程及相关说明</a>-->
              <!--</p>-->
            <!--</div>-->
            <!--<dl>-->
            <!--<dt>充值到：</dt>-->
            <!--<dd>-->
              <!--<div class="checkbox" v-bind:class="{current:creditCard.currency ==1}" @click="checkBox(1,'creditCard','currency')">R2币</div>-->
              <!--<div class="checkbox" v-bind:class="{current:creditCard.currency ==2}" @click="checkBox(2,'creditCard','currency')">游戏</div>-->
            <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>充入账号：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="账号">-->
                <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>选择游戏：</dt>-->
              <!--<dd>-->
                <!--<div class="choose" @click="checkBox(true,'creditCard','GameShow')">选择充值游戏</div>-->
                <!--<span class="icon-gt"></span>-->
                <!--<div class="choose" @click="checkBox(true,'creditCard','GameShow')">选择充值服务器</div>-->
                <!--<div class="pay_layer" style="left:85px;"  v-if="creditCard.GameShow">-->
                  <!--<span class="jt " style="left:40px">♦</span>-->
                  <!--<span class="jt gr" style="left:150px">♦</span>-->
                  <!--<ul class="pay_layer_t">-->
                    <!--<li class="i1 cur"><a href="javascript:void(0);">最近玩过</a></li>-->
                    <!--<li class="i2"><a href="javascript:void(0);">其他游戏</a></li>-->
                    <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'creditCard','GameShow')">close</a></li>-->
                  <!--</ul>-->
                  <!--<div class="pay_layer_cont">-->
                    <!--<div class="pay_layer_sel">-->
                      <!--<ul class="layer_list" >-->

                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div class="pay_layer_sel hide">-->
                      <!--<ul class="layer_list">-->
                        <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>角色名：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt><span>*</span>手机号码：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>-->
                <!--选择充值金额：-->
              <!--</dt>-->
              <!--<dd>-->
                <!--<ul>-->
                  <!--<li v-for="i in creditCard.money" class="money"><a v-bind:class="{current:creditCard.moneyCheck== i}" @click="checkBox(i,'creditCard','moneyCheck')">{{i}}美元</a></li>-->
                <!--</ul>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>将获得游戏币：</dt>-->
              <!--<dd>-->
                <!--<div class="getNum">-->
                  <!--<span class="getnum-gt">♦</span>-->
                  <!--<span class="getnum-box">{{creditCard.moneyCheck*10}}</span>-->
                  <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt> </dt>-->
              <!--<dd>-->
                <!--<button>立即支付</button>-->
              <!--</dd>-->
            <!--</dl>-->
          <!--</div>-->
          <!--<div v-if="listCheck=='短信充值'" class="recharge-content-r-massage">-->
            <!--<dl>-->
              <!--<dt>充值到：</dt>-->
              <!--<dd>-->
                <!--<div class="checkbox" v-bind:class="{current:message.messageCurrency ==1}" @click="checkBox(1,'message','messageCurrency')">R2币</div>-->
                <!--<div class="checkbox" v-bind:class="{current:message.messageCurrency ==2}" @click="checkBox(2,'message','messageCurrency')">游戏</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>充入账号：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="账号">-->
                <!--<span class="ortherLogo">联合登录：<a class="sina"></a><a class="weix"></a><a class="qq"></a><a class="txwb"></a></span>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>选择游戏：</dt>-->
              <!--<dd>-->
                <!--<div class="choose" @click="checkBox(true,'message','messageGameShow')">选择充值游戏</div>-->
                <!--<span class="icon-gt"></span>-->
                <!--<div class="choose" @click="checkBox(true,'message','messageGameShow')">选择充值服务器</div>-->
                <!--<div class="pay_layer" style="left:85px;" id="all_game_content" v-if="message.messageGameShow">-->
                  <!--<span class="jt " style="left:40px">♦</span>-->
                  <!--<span class="jt gr" style="left:150px">♦</span>-->
                  <!--<ul class="pay_layer_t" id="game_select">-->
                    <!--<li class="i1 cur"><a href="javascript:void(0);" onclick="selectgame(1)">最近玩过</a></li>-->
                    <!--<li class="i2"><a href="javascript:void(0);" onclick="selectgame(2)">其他游戏</a></li>-->
                    <!--<li class="close"><a href="javascript:void(0);" title="close" @click="checkBox(false,'message','messageGameShow')">close</a></li>-->
                  <!--</ul>-->
                  <!--<div class="pay_layer_cont">-->
                    <!--<div id="game_1" class="pay_layer_sel">-->
                      <!--<ul class="layer_list" id="player_game_list">-->

                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div id="game_2" class="pay_layer_sel hide">-->
                      <!--<ul class="layer_list">-->
                        <!--&lt;!&ndash;<li><a href="javascript:void(0);" onclick="choosegameid(2,'36计')" title="36计" game_id="2" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_2.png" alt="36计" /></span>36计</a></li><li><a href="javascript:void(0);" onclick="choosegameid(7,'大将军')" title="大将军" game_id="7" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_7.png" alt="大将军" /></span>大将军</a></li><li><a href="javascript:void(0);" onclick="choosegameid(8,'大侠传')" title="大侠传" game_id="8" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_8.png" alt="大侠传" /></span>大侠传</a></li><li><a href="javascript:void(0);" onclick="choosegameid(31,'女神联盟')" title="女神联盟" game_id="31" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_31.png" alt="女神联盟" /></span>女神联盟</a></li><li><a href="javascript:void(0);" onclick="choosegameid(97,'大皇帝')" title="大皇帝" game_id="97" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_97.png" alt="大皇帝" /></span>大皇帝</a></li><li><a href="javascript:void(0);" onclick="choosegameid(135,'女神联盟II')" title="女神联盟II" game_id="135" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_135.png" alt="女神联盟II" /></span>女神联盟II</a></li><li><a href="javascript:void(0);" onclick="choosegameid(146,'盗墓笔记')" title="盗墓笔记" game_id="146" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_146.png" alt="盗墓笔记" /></span>盗墓笔记</a></li><li><a href="javascript:void(0);" onclick="choosegameid(171,'刀剑乱舞')" title="刀剑乱舞" game_id="171" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_171.png" alt="刀剑乱舞" /></span>刀剑乱舞</a></li><li><a href="javascript:void(0);" onclick="choosegameid(237,'神仙道2')" title="神仙道2" game_id="237" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_237.png" alt="神仙道2" /></span>神仙道2</a></li><li><a href="javascript:void(0);" onclick="choosegameid(281,'大青云')" title="大青云" game_id="281" ><span class="pic" ><img src="http://pic.youzu.com/youzu/images/pay/gameIcon_281.png" alt="大青云" /></span>大青云</a></li>&ndash;&gt;-->
                      <!--</ul>-->
                      <!--<div class="scroll_bar" style="height: 120px;">-->
                        <!--<div class="cur_bar thumb" style="height: 36.9231px;">-->
                          <!--<b class="ct"></b><b class="cb"></b>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>角色名：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="你的名字"> 确认您要充值的角色是否正确-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt><span>*</span>手机号码：</dt>-->
              <!--<dd>-->
                <!--<input type="text" placeholder="请输入手机号码"> 若遇到充值异常，方便客服第一时间与您取得联系-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>-->
                <!--选择充值金额：-->
              <!--</dt>-->
              <!--<dd>-->
                <!--<ul>-->
                  <!--<li class="money" v-for="i in message.money"><a v-bind:class="{current:message.moneyCheck==i}" @click="checkBox(i,'message','moneyCheck')">{{i}}元</a></li>-->
                <!--</ul>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>将获得游戏币：</dt>-->
              <!--<dd>-->
                <!--<div class="getNum">-->
                  <!--<span class="getnum-gt">♦</span>-->
                  <!--<span class="getnum-box">{{message.moneyCheck*10}}</span>-->
                  <!--&nbsp<em>*</em>兑换比例：1 : 10-->
                <!--</div>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<dl>-->
              <!--<dt> </dt>-->
              <!--<dd>-->
                <!--<button>立即支付</button>-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<div class="pay-tips">-->
              <!--<p><span>提示:</span>无论您在哪个省份，在哪个时间，只要任意拨打固定电话、小灵通、电信、网通等多个声讯热线号码，就能为您的游戏充值。只需扣除相应的花费，充值最安全最便捷。</p>-->
              <!--<p><span>提示:</span>尊敬的用户，此渠道目前只接受移动手机充值，电信、联通暂不能充值，每个面值每月只能充值一次，每天只能充值一个面值，给您带来的不便深感歉意。</p>-->
              <!--<p><span>充值步骤:</span>填写游戏账号 -&gt; 充值金额 -&gt; 下一步 -&gt; 输入手机号 -&gt; 验证码 -&gt; 下一步 -&gt; 页面显示短信代码 -&gt; 用户编辑短信发送到指定号码 -&gt; 收到带3位数字的确认短信 -&gt; 正确回复3位数字 -&gt; 扣费充值成功。</p>-->
              <!--<p><span>提示:</span></p>-->
              <!--<p><span>电信固话充值开通地区:</span></p>-->
              <!--<p class="pad">　　上海、重庆、浙江、广东、广西、江西、江苏、福建、安徽、湖南、湖北、海南、贵州、云南、甘肃、宁夏、青海、西藏、天津、河北、辽宁、山西、吉林、内蒙古</p>-->
              <!--<p><span>电信手机充值开通地区:</span></p>-->
              <!--<p class="pad">　　辽宁、湖南、湖北、江西、浙江、广东、云南、甘肃、西藏、内蒙古、吉林、广西、海南、四川、山西</p>-->
              <!--<p><span>注:</span>1、手机充值用户，充值手机号所在地与所使用电脑所在地必须为同一省份</p>-->
              <!--<p>　2、仅支持电信用户，每个号码30分钟内只可进行一次充值</p>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'recharge',
  data () {
    return {
//      list:['R2币兑换游戏币','网上银行','支付宝','微信支付','手机固话充值','游戏点卡充值','国际信用卡','短信充值','转款汇款'],
      list:['网上银行'],
      listCheck:'魔力币兑换游戏币',
      zy:{
        money:['月卡','至尊卡','6000钻石','3000钻石','2000钻石','600砖石','300砖石','60砖石'],
        moneyCheck:'月卡'

      },
//      alipay:{
//        currency:1,
//        GameShow:false,
//        money:[10,20,30,50,100,200,300,500],
//        moneyCheck:10,
//        picked:'',
//        payPicked:''
//      },
//      weChat:{                    //微信充值
//        currency:1,
//        GameShow:false,
//        money:[10,20,30,50,100,200,300,500],
//        moneyCheck:10
//      },
//      pho:{                       //手机充值
//        site:1,
//        Easyown:{
//          genre:1,
//          currency:1,
//          GameShow:false,
//          money:[10,20,30,50,100,200,300,500],
//          moneyCheck:10
//        },
//        unicom:{
//          genre:1,
//          currency:1,
//          GameShow:false,
//          money:[10,20,30,50,100,200,300,500],
//          moneyCheck:10
//        },
//        telecom:{
//          genre:1,
//          currency:1,
//          GameShow:false,
//          money:[10,20,30,50,100,200,300,500],
//          moneyCheck:10
//        }
//
//      },
//      gameCard:{                 //游戏点卡充值
//        site:1,
//        grand:{
//          currency:1,
//          GameShow:false,
//          money:[10,20,30,50,100,200,300,500],
//          moneyCheck:10
//        },
//        Jcard:{
//          currency:1,
//          GameShow:false,
//          money:[10,20,30,50,100,200,300,500],
//          moneyCheck:10
//        }
//      },
//      creditCard:{                //国际信用卡充值
//        site:1,
//        currency:1,
//        GameShow:false,
//        money:[2,5,10,20,50,100,150,200],
//        moneyCheck:2
//      },
//      message:{                   //短信充值
//        messageCurrency: 1,
//        messageGameShow: false,
//        messageNum:10,
//        money:[10,50,100,500,1000],
//        moneyCheck: 10
//      }
    }
  },
  methods:{
    checkBox: function () {
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          data[arguments[n]]=arguments[0]
        }
      }

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .recharge
    padding-bottom 72px
    background #fbfbfb
    .web-crumbs
      margin-bottom 21px
      background #f8f8f8
      padding-top 12px
      height 24px
      font-size 12px
      border-bottom 1px solid #dbdbdb
      border-top 2px solid #dbdbdb
      color #949494
      a
        color #949494
        &:hover
          color #de4205
    .web-recharge-content
      .recharge-content
        overflow hidden
        .recharge-content-l
          float left
          .recharge-list
            width 261px
            margin-bottom 30px
            dt
              text-align center
              height 36px
              line-height 36px
              background #f8f8f8
              border 1px solid #dbdbdb
            dd
              height 33px
              padding 8px 0
              border 1px solid #dbdbdb
              border-top none
              background #fff
              .current
                background #de3f05
                color #fff
                i
                  background url("../../static/img/pay_icon1.png") no-repeat
              p
                height 33px
                line-height 33px
                cursor pointer
                i
                  margin-left 41px
                  margin-top 6px
                  margin-right 13px
                  float left
                  height 22px
                  width 22px
                  background url("../../static/img/pay_icon.png") no-repeat
            .recharge-list-2
              p
                i
                  background-position-y -29px
            .recharge-list-3
              p
                i
                  background-position-y -58px
            .recharge-list-4
              p
                i
                  background-position-y -87px
            .recharge-list-5
              p
                i
                  background-position-y -116px
            .recharge-list-6
              p
                i
                  background-position-y -146px
            .recharge-list-7
              i
                background-position-y -175px
            .recharge-list-8
              p
                i
                  background-position-y -204px
            .recharge-list-9
              p
                i
                  background-position-y -235px
          .recharge-service
            text-align center
            margin-bottom 30px
            dt
              background #f8f8f8
              border 1px solid #dbdbdb
              border-bottom none
              height 36px
              line-height 36px
            dd
              background #fff
              border 1px solid #dbdbdb
            .recharge-service-pho
              height 49px
              line-height 49px
              color #de3f05
              border-bottom none
              font-size 18px
            .recharge-service-em
              padding-top 21px
              padding-bottom 12px
              color #7d7d7d
              .recharge-service-em-e
                padding-top 11px
                padding-bottom 13px
              a
                color #424242
                &:hover
                  color #de4205
          .recharge-custody
            display block
            height 49px
            line-height 49px
            border 1px solid #dbdbdb
            background #f8f8f8
            color #7d7d7d
            margin-bottom 30px
            i
              float left
              width 22px
              height 26px
              margin-left 41px
              margin-top 12px
              margin-right 16px
              background url("../../static/img/sprite_pay.png")
            span
              color #de4205
          .recharge-autonym
            display block
            height 49px
            line-height 49px
            border 1px solid #dbdbdb
            background #f8f8f8
            color #7d7d7d
            i
              float left
              width 26px
              height 22px
              margin-left 39px
              margin-top 14px
              margin-right 12px
              background url("../../static/img/sprite_pay.png")
              background-position 0 -43px
            span
              color #de4205
        .recharge-content-r
          width 905px
          box-sizing border-box
          height 1012px
          padding 42px 71px 0
          border 1px solid #dbdbdb
          float right
          background #fff
          .recharge-content-r-c
            dl
              overflow hidden
              padding-bottom 18px
              dt
                line-height 32px
                width 97px
                color #424242
                text-align right
                padding-right 11px
                box-sizing border-box
                float left
                height 32px
              dd
                float left
                select
                  box-sizing border-box
                  width 222px
                  height 32px
                  border-color #dbdbdb
                input
                  display block
                  box-sizing border-box
                  width 222px
                  height 32px
                  border 1px solid #dbdbdb
                >div
                  width 458px
                  height 101px
                  box-sizing border-box
                  border 1px solid #dbdbdb
                  padding 7px 18px
                  color #424242
                  font-size 12px
                  line-height 22px
                span
                  font-size 24px
                  color #de4205
                button
                  background #de3f05
                  border 1px solid #ea8762
                  cursor: pointer;
                  display: block;
                  margin: 0;
                  padding: 0;
                  width: 168px;
                  height: 35px;
                  text-align: center;
                  color: #fff;
                  font: 400 14px/32px Microsoft Yahei;
                  &:hover
                    background #FF4400
                ul
                  width 399px
                  .money
                    cursor pointer
                    float: left;
                    padding: 0 10px 10px 0;
                    a
                      width 88px
                      height 51px
                      box-sizing border-box
                      font-size 12px
                      color: #666;
                      display: inline-block;
                      background: #f9f9f9;
                      border: 1px solid #d7d7d7;
                      line-height: 51px;
                      text-align: center;
                      overflow: hidden;
                    .current
                      color: #de4205;
                      width 88px
                      height 51px
                      line-height: 51px;
                      background url("../../static/img/sprite_pay.png") no-repeat -87px 30px
                      border: 2px solid #de4205;
                p
                  color #7d7d7d
                  padding-top 10px
                  font-size 12px
                  div
                    dl
                      position relative
                      padding-bottom 19px
                      height 35px
                      dt
                        text-align right
                        font-size 12px
                        color #535353
                        width 86px
                        float left
                        height 30px
                        line-height 30px
                        padding-right 11px
                        span
                          color #ff7429
                      dd
                        color #949494
                        float left
                        .checkbox
                          display: inline-block;
                          width: 90px;
                          text-align: center;
                          line-height: 28px;
                          color: #858585;
                          font-size: 14px;
                          margin-right: 10px;
                          background: #f9f9f9;
                          border: 1px solid #d7d7d7;
                          cursor pointer
                          &:hover
                            background url("../../static/img/sprite_pay.png") no-repeat -28px -163px;
                            border: 1px solid #de4205
                        .current
                          background url("../../static/img/sprite_pay.png") no-repeat -28px -163px;
                          border: 1px solid #de4205
                        input
                          width 152px
                          padding-left 11px
                          height 26px
                          line-height 26px
                          border 1px solid #d7d7d7
                          color #949494
                        .choose
                          background-position 0 0
                          color #fff
                          font-size 14px
                          text-indent 25px
                          float: left
                          background: url(../../static/img/sprite_pay1.png) no-repeat
                          width: 165px
                          display: block
                          height: 35px
                          overflow: hidden
                          line-height: 35px
                          cursor pointer
                        .icon-gt
                          width 11px
                          height 18px
                          overflow hidden
                          margin 8px 15px 0
                          float left
                          background url(../../static/img/sprite_pay.png) no-repeat
                          line-height 35px
                          background-position -137px -176px
                        .ortherLogo
                          padding-left 100px
                          font-size 12px
                          color #535353
                          a
                            display inline-block
                            height 25px
                            width 21px
                            background url("../../static/img/icon.png") no-repeat 0 -90px
                            margin-bottom -5px
                            margin-left 3px
                          .weix
                            background-position-x -21px
                          .qq
                            background-position-x -42px
                          .txwb
                            background-position-x -63px
                        .pay_layer
                          z-index 999
                          position absolute
                          top 45px
                          width 460px
                          background #f2f2f2
                          border-bottom 1px solid #d1d1d1
                          height 13px
                          .jt
                            overflow: hidden;
                            position: absolute;
                            z-index: 9;
                            top: -13px;
                            left: 40px;
                            font-family: Arial,Helvetica,sans-serif;
                            font-size: 25px;
                            color: #ff7429;
                          .gr
                            height: 13px;
                            overflow: hidden;
                            position: absolute;
                            z-index: 9;
                            top: -13px;
                            color: #a3a3a3;
                            font-family: Arial,Helvetica,sans-serif;
                            font-size: 25px;
                          .pay_layer_t
                            background: #a3a3a3;
                            height: 23px;
                            position relative
                            z-index 10
                            li
                              float: left;
                              text-align: center;
                              font: 14px/23px Microsoft YaHei;
                              cursor: pointer;
                              width 102px
                              a
                                color: #fff;
                                display: block;
                            .cur
                              a
                                background #de4205
                            .i2
                              width: 326px;
                            .close
                              width 23px
                              float right
                              a
                                background: url(../../static/img/pay_icon_close.png) no-repeat 0 0;
                                display: block;
                                width: 23px;
                                height: 32px;
                                line-height: 100px;
                                overflow: hidden;
                          .pay_layer_cont
                            padding: 10px 0 5px 5px;
                            clear: both;
                        ul
                          .money
                            cursor pointer
                            float: left;
                            padding: 0 10px 10px 0;
                            a
                              width 58.08px
                              box-sizing border-box
                              text-align center
                              font-size 12px
                              color: #666;
                              display: inline-block;
                              background: #f9f9f9;
                              height: 38px;
                              border: 1px solid #d7d7d7;
                              line-height: 36px;
                              text-align: center;
                              overflow: hidden;
                            .current
                                color: #de4205;
                                height: 36px;
                                line-height: 34px;
                                background url("../../static/img/sprite_pay.png") no-repeat -63px -159px
                                border: 2px solid #de4205;
                        .getNum
                          font-size: 100%;
                          line-height: 30px;
                          span
                            float left
                            line-height 28px
                          .getnum-box
                            height 28px
                            width 100px
                            background #de4205
                            float left
                            margin-left -6px
                            color #fff
                            text-align center
                          .getnum-gt
                            color #de4205
                            font-size 18px
                            margin-left -6px
                        em
                          font-style normal
                          color #de4205
                        button
                          background #de3f05
                          border 1px solid #ea8762
                          cursor: pointer;
                          display: block;
                          margin: 0;
                          padding: 0;
                          width: 168px;
                          height: 35px;
                          text-align: center;
                          color: #fff;
                          font: 400 14px/32px Microsoft Yahei;
                          &:hover
                            background #FF4400
                    .site
                      border-bottom 2px solid #de4205
                      height 30px
                      margin-bottom 25px
                      li
                        cursor pointer
                        float left
                        width 162px
                        height 30px
                        line-height 30px
                        background: #de4205;
                        color #fff
                        text-align center
                      .current
                        border 2px solid #de4205
                        border-bottom 0
                        margin-bottom -2px
                        background #fff
                        color #de4205
                    #paypal-new
                      font-size 12px
                      padding-bottom: 25px;
                      margin-bottom 20px
                      border-bottom: 1px dashed #e1e1e1;
                      .pay_cue
                        color: #de4205;
                        line-height: 25px;
                        margin-bottom 10px
                      .paypal-btn
                        overflow hidden
                        a
                          display: block;
                          float: left;
                          margin-right: 10px;
                          text-align: center;
                          height: 28px;
                          line-height 28px
                        .btn1
                          width: 118px;
                          border: 1px solid #de4205;
                          background: #de4205;
                          color: #fff;
                        .btn2
                          color: #444444;
                          padding-left: 15px;
                          width: 173px;
                          border: 1px solid #e6e6e6;
                    #pay-bor
                      border-top: 1px dashed #e1e1e1;
                      padding-top: 20px;
                      padding-bottom 20px
                      p
                        >input
                          outline 0!important
                          margin 3px 3px 0px 5px
                          height 25px
                          line-height 25px
                        >label
                          font-size 12px
                      dl
                        padding-top 20px
                        overflow hidden
                        height 290px
                        padding-bottom 0
                        >dt
                          color #000
                          float left
                        >dd
                          width 654px
                          float right
                          ul
                            overflow hidden
                            li
                              padding: 0 17px 20px 0;
                              width: 170px;
                              float: left;
                              display: block;
                              input
                                outline 0!important
                                vertical-align: middle;
                                height: 35px;
                                float: left;
                                width 13px
                              label
                                border: 1px solid #ccc;
                                display block
                                width 140px
                                padding-right 5px
                                float: left;
                                line-height 0
                                text-align center
                              .current
                                border: 1px solid #FF7429;
                    .pay-tips
                      line-height 24px
                      font-size 12px
                      border: 1px solid #f3f3f3;
                      background: #fbfbfb;
                      margin: 30px 0 20px;
                      padding: 17px 20px;
                      color: #958d8d;
                      p
                        padding: 5px 0;
                        line-height 25px
                        font-size 12px
</style>
